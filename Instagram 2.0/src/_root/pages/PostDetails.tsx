import { useGetPostById } from "@/lib/react-query/queriesAndMutations"
import { useParams } from "react-router-dom"

function PostDetails() {
  const {postId} = useParams()

  const { data } = useGetPostById(postId || '')
  console.log(data);

  return (
    <div>PostDetails</div>
  )
}

export default PostDetails