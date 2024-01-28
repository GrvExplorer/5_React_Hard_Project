import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const Authenticated = false;
  return (
    <div>
      {Authenticated ? (
        <Navigate to="/" />
      ) : (
        <section>
          <Outlet />
        </section>
      )}
    </div>
  );
}

export default AuthLayout;
