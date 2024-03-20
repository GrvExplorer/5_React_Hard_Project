import PostStats from "@/components/shared/PostCards/PostCard/PostStats";
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import {
  useDeletePost,
  useGetPostById,
} from "@/lib/react-query/queriesAndMutations";
import { multiFormatDateString } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function PostDetails() {
  const { postId } = useParams();
  const cache = useQueryClient();

  const { toast } = useToast();

  const { user } = useUserContext();
  const { data: post, isLoading: postDetailsLoading } = useGetPostById(
    postId || "",
  );

  const { mutateAsync: deletePost } = useDeletePost();

  return (
    <>
      {postDetailsLoading ? (
        <div className="flex-center gap-2">
          <Loader className="mr-2 h-4 w-4 animate-spin" /> Loading...
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 md:flex-row pr-8 ">
            <div className="">
              <img
                src={post?.imageUrl || "/assets/icons/profile-placeholder.svg"}
                alt="post image"
                className="post-card_img"
              />
            </div>
            <div className="flex flex-col md:w-420 justify-between px-6 py-2 border rounded-2xl border-gray-700 ">
              <div className="">
                {/* creator  */}
                <div className="flex-between">
                  <div className="flex items-center gap-3">
                    <Link to="">
                      <img
                        src={
                          post?.creator?.imageUrl ||
                          "/assets/icons/profile-placeholder.svg"
                        }
                        alt="creator"
                        className="w-12 rounded-full lg:h-12"
                      />
                    </Link>

                    <div className="flex flex-col">
                      <p className="base-medium lg:body-bold text-light-1">
                        {post?.creator.name}
                      </p>
                      <div className="flex-center gap-2 text-light-3">
                        <p className="subtle-semibold lg:small-regular ">
                          {multiFormatDateString(post?.$createdAt)}
                        </p>
                        •
                        <p className="subtle-semibold lg:small-regular">
                          {post?.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-2">
                    <Link
                      to={`/update-post/${post?.$id}`}
                      className={`${user.id !== post?.creator.$id && "hidden"}`}
                      onClick={() => {
                        cache.invalidateQueries({
                          queryKey: ["getPostById", post?.$id],
                        });
                      }}
                    >
                      <img
                        src={"/assets/icons/edit.svg"}
                        alt="edit"
                        width={20}
                        height={20}
                      />
                    </Link>
                    <Link
                      to={`/`}
                      className={`${user.id !== post?.creator.$id && "hidden"}`}
                      onClick={() => {
                        deletePost(post?.$id, post?.imageId);
                        cache.invalidateQueries({
                          queryKey: ["getRecentPosts"],
                        });
                        toast({
                          title: "Deleted Post",
                          description: "Post deleted Successfully.",
                        });
                      }}
                    >
                      <img
                        src={"/assets/icons/delete.svg"}
                        alt="delete"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>

                <Link to={`/post-details/${post?.$id}`}>
                  <div className="small-medium lg:base-medium py-5">
                    {/* Caption and tags */}
                    <p className="">{post?.caption}</p>
                    <ul className="my-2 flex gap-1">
                      {post?.tags?.map((tag: string, i: string) => (
                        <li
                          key={`${tag}${i}`}
                          className="small-regular text-light-3"
                        >
                          #{tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
              <PostStats post={post} userId={user.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PostDetails;
