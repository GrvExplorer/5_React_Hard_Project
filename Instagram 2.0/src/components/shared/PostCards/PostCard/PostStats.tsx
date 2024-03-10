import { useSetPostLikes, useSetPostSaves } from "@/lib/react-query/queriesAndMutations";
import { checkLiked } from "@/lib/utils";
import { Models } from "appwrite";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { string } from "zod";

type PostStatsProp = {
  post: Models.Document;
  userId: string;
};

function PostStats({ post, userId }: PostStatsProp) {

  const likesList = post.likes.map((user: Models.Document) => user.$id);
  
  const [likes, setLikes] = useState<string[]>(likesList);
  const [isSaved, setIsSaved] = useState(false)
  
  const { mutateAsync: setPostLike, isLoading: isLikeing } = useSetPostLikes();
  const { mutateAsync: setPostSave } = useSetPostSaves()
  
  // const { data: currentUser } = useGetCurrentUser();
  // const savedPostRecord = currentUser?.save.find()

  function handlePostLike(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    e.stopPropagation();
    let likesArray = [...likes];
    if (likesArray.includes(userId)) {
    likesArray = likesArray.filter(Id => Id !== userId)
    } else {
      likesArray.push(userId);      
    }
    setLikes(likesArray);    
    setPostLike({postId: post.$id, likesArray})
  }

  function handlePostSave(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    e.stopPropagation()

  }

  return (
    <div className={`z-20 flex w-full items-center justify-between`}>
      <div className="mr-5 flex gap-2">
        <img
          src={`${
            checkLiked(likes, userId)
             ? "/assets/icons/liked.svg" : "/assets/icons/like.svg"
          }`}
          alt="like"
          width={20}
          height={20}
          onClick={(e) => handlePostLike(e)}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">
          {isLikeing ? <Loader className="w-4 animate-spin" /> : likes.length}
        </p>
      </div>

      <div className="flex gap-2">
        <img
          src={
            // checkSave(saves, userId)
            false
            ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"}
          alt="share"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={(e) => handlePostSave(e)}
        />
                <p className="small-medium lg:base-medium">
          {false ? <Loader className="w-4 animate-spin" /> : ''}
        </p>
      </div>
    </div>
  );
}

export default PostStats;
