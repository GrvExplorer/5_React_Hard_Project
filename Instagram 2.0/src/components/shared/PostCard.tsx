import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import PostStats from "./PostStats";

type PostCardProps = {
  post: Models.Document;
};

function PostCard({ post }: PostCardProps) {
const { user } = useUserContext();
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to="">
            <img
              src={
                post.creator?.imageUrl ||
                "/assets/icons/profile-placeholder.svg"
              }
              alt="creator"
              className="w-12 rounded-full lg:h-12"
            />
          </Link>

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular ">
                {/* {multiFormatDateString(post.$createdAt)} */ post.$createdAt}
              </p>
              •
              <p className="subtle-semibold lg:small-regular">
                {post.location}
              </p>
            </div>
          </div>
        </div>

        <Link to="" className={`${user.id !== post.creator.$id && "hidden"}`}>
          <img
            src={"/assets/icons/edit.svg"}
            alt="edit"
            width={20}
            height={20}
          />
        </Link>
      </div>

      <Link to=''>
        <div className="small-medium lg:base-medium py-5">
          <p className="">{post.caption}</p>
          <ul className="flex gap-1 my-2">
            {post?.tags?.map((tag: string, i: string) => (
              <li key={`${tag}${i}`} className="text-light-3 small-regular">
                #{tag}
              </li>
            ))}
          </ul>
          
        <img
          src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt="post image"
          className="post-card_img"
        />
        </div>
      </Link>

<PostStats post={post} userId={user.id} />
    </div>
  );

}

export default PostCard;
