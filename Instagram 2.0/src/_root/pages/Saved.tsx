import PostCard from "@/components/shared/PostCards/PostCard/PostCard";
import { useUserContext } from "@/context/AuthContext"
import { useGetUserSaves } from "@/lib/react-query/queriesAndMutations"
import { Models } from "appwrite";

function Saved() {

  const {user} = useUserContext()
  const {data} = useGetUserSaves(user.id)

  console.log(data);
  console.log(user);
  
  const addedDetails = data?.save?.map(({ post }) => {
    return {
      ...post,
      creator: {
        $id: '',
        name: '',
        username: '',
        email: '',
        bio: '',
        imageUrl: '',
      },
      like: [],
      save: [],
    }
  })


  console.log(addedDetails);
  
  return (
    <>
        <div className="flex flex-col gap-10">
      {addedDetails?.map((post: Models.Document) => (
        <div key={post.$id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
    
    </>
  )
}

export default Saved