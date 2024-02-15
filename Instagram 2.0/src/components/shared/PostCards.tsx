import React from 'react'
import PostCard from './PostCard'
import { Models } from 'appwrite';



type PostCardProps = {
  posts: Models.DocumentList<Models.Document>;
};


function PostCards({posts}: PostCardProps) {
  
  return (
    <>
{posts?.documents.map((post: Models.Document) => (
  <PostCard post={post} />
))}
    </>
  )
}

export default PostCards