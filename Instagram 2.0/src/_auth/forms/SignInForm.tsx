import { Button } from '@/components/ui/button'
import { z } from "zod"
 

function SignInForm() {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  })
  
  return (
    <div>
      <Button>Sign in</Button>
    </div>
  )
}

export default SignInForm