import AppLayout from "@/layouts/AppLayout";
import LoginPage from "@/pages/auth/Auth";
import LandingPage from "@/pages/landingPage/LandingPage";
import NotFoundPage from "@/pages/notfound/NotFoundPage";
import EditProfile from "@/pages/profile/editProfile";
import Profile from "@/pages/profile/Profile";
import { createBrowserRouter } from "react-router-dom";
import AddBlog from "@/components/user/blogpost/CreateBlog";
import OtpForm from "@/pages/auth/OtpForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { env } from "@/config/env";
import Feed from "@/pages/feed/Feed";
import Community from "@/pages/community/Community";
import EditBlog from "@/components/user/blogpost/EditBlog";
import ViewBlog from "@/components/user/blogpost/ViewBlog";
import { ProfileProvider } from "@/contexts/ProfileContext";
export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "home", element: <Feed /> },
      { path: "explore", element: <div> Explore </div> },
      { path: "activity", element: <div> Activity </div> },
      { path: "profile", element: <Profile /> },
      { path: "account/profile", element: <ProfileProvider><EditProfile /></ProfileProvider>},
      { path: "blog/create", element: <AddBlog /> },
      { path: "blog/edit/:blogId", element: <EditBlog /> },
      { path: "blog/:blogId", element: <ViewBlog /> },
      { path: "community", element: <Community /> },
      { path: "*", element: <NotFoundPage />},
    ],
  },
  {
    path: "auth",
    element: (
      <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
        <LoginPage />
      </GoogleOAuthProvider>
    ),
  },
  { path: "otp-verification", element: <OtpForm /> },
]);
