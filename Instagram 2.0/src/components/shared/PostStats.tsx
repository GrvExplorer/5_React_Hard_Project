import { useSetPostLikes } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { Loader } from "lucide-react";

type PostStatsProp = {
  post: Models.Document;
  userId: string;
};

function PostStats({ post, userId }: PostStatsProp) {
  const { mutateAsync: setPostLike, isLoading: isLikeing } = useSetPostLikes();

  return (
    <div className={`z-20 flex w-full items-center justify-between`}>
      <div className="mr-5 flex gap-2">
        <img
          src={`${
            // checkIsLiked(likes, userId)
            false ? "/assets/icons/liked.svg" : "/assets/icons/like.svg"
          }`}
          alt="like"
          width={20}
          height={20}
          onClick={() => setPostLike(post, userId)}
          className="cursor-pointer"
        />
                <p className="small-medium lg:base-medium">{
                isLikeing ? <Loader />: ''
                }</p>
      </div>
      <div className="flex gap-2">
        <img
          src={false ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"}
          alt="share"
          width={20}
          height={20}
          className="cursor-pointer"
          // onClick={(e) => handleSavePost(e)}
        />
      </div>
    </div>
  );
}

export default PostStats;
