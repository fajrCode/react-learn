import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages";
import { About } from "../pages/about";
import RootLayout from "../layouts/RouterLayout";
import Blog from "../pages/blog/Index";
import SingelPost from "../pages/blog/_id";
import { post, postById } from "../apis/loaders";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: post,
      },
      {
        path: "/blog/:id",
        element: <SingelPost />,
        loader: postById,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
