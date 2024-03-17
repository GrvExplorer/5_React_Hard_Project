import { useUserContext } from "@/context/AuthContext"
import { useGetUserSaves } from "@/lib/react-query/queriesAndMutations"

function Saved() {

  const {user} = useUserContext()
  const {data:save} = useGetUserSaves(user.id)

  console.log(save);
  
  return (
    <div>Saved</div>
  )
}

export default Saved