import { useToast } from "@/components/ui/use-toast";
import { sidebarLinks } from "@/constants";
import { useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function RootLayout() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, setIsAuthenticated } = useUserContext();
  const { mutateAsync: signOut, isLoading: isSigningOut } = useSignOutAccount();

  const handelSignOut = async () => {
    try {
      const response = await signOut();
      if (response) {
        setIsAuthenticated(false);
        console.log("isSigningOut", await signOut());
        navigate("/sign-in");
        return toast({
          title: "Logout Successful",
          description: "You have been logged out successfully.",
        });
      }
      toast({
        title: "Logout Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid">
      <div className="flex h-screen w-80 flex-col justify-between  bg-dark-3 pb-4 pl-8 pt-10 ">
        <div className="mr-8 flex flex-col gap-20">
          <img src="/assets/images/logo.svg" alt="logo" />

          {/* <div className="h-1"></div> */}

          <div className="flex flex-col gap-8">
            {sidebarLinks.map((link) => (
              <Link to={link.route} key={link.label}>
                <div className=" flex w-full cursor-pointer gap-4 rounded-md p-4 py-4 hover:bg-primary-600">
                  <img src={link.imgURL} alt="" />
                  <p>{link.label} </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mr-8">
          <div
            className="flex w-full cursor-pointer gap-4 rounded-md p-4 py-4 hover:bg-primary-600"
            onClick={handelSignOut}
          >
            <img src="/assets/icons/logout.svg" alt="" />
            <p>
              {isSigningOut ? (
                <Loader className="m-auto animate-spin" />
              ) : (
                "Logout"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
