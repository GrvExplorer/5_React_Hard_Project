import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const Authenticated = false;
  return (
    <div>
      {Authenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex h-screen justify-between">
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

            <img
              className="hidden xl:block object-cover bg-no-repeat w-1/2"
              src="/assets/images/side-img.svg"
              alt="side img"
            />

        </div>
      )}
    </div>
  );
}

export default AuthLayout;
