import { Route, Routes } from "react-router-dom";

import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import RootLayout from "./_root/RootLayout";
import {
  CreatePost,
  Explore,
  Home,
  NotFound,
  People,
  PostDetails,
  Saved,
} from "./_root/pages";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />}></Route>
          <Route path="/sign-up" element={<SignUpForm />}></Route>
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/explore" element={<Explore />} />
          <Route path="/all-users" element={<People />} />
          <Route path="/saved" element={<Saved />} />
          <Route
            path="/create-post"
            element={<CreatePost isUpdate={false} />}
          />
          <Route
            path="/update-post/:postId"
            element={<CreatePost isUpdate={true} />}
          />
          <Route path="/post-details/:postId" element={<PostDetails />} />
          
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
