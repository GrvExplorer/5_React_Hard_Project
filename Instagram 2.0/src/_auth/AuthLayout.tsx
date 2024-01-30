import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const Authenticated = false;
  return (
    <div>
      {Authenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex h-screen justify-between">
          <section className="flex flex-1 flex-col items-center justify-center py-10">
            <Outlet />
          </section>

          <img
            className="hidden w-1/2 bg-no-repeat object-cover xl:block"
            src="/assets/images/side-img.svg"
            alt="side img"
          />
        </div>
      )}
    </div>
  );
}

export default AuthLayout;
