import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../layouts/Home";
import AllReview from "../layouts/AllReview";
import NotFound from "../pages/NotFound";
import AuthLayout from "../Auth/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddReview from "../layouts/AddReview";
import MyReview from "../layouts/MyReview";
import GameWatchList from "../layouts/GameWatchList";
import PrivateRouter from "./PrivateRouter";
import ReviewDetails from "../components/ReviewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://chill-gamer-server-mauve.vercel.app/reviews/limit")
        
      },
      {
        path: "addReview",
        element: (
          <PrivateRouter>
            <AddReview />
          </PrivateRouter>
        ),
      },
      {
        path: "allReview",
        element: <AllReview />,

        loader: () => fetch("https://chill-gamer-server-mauve.vercel.app/addReview"),
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRouter>
            <ReviewDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://chill-gamer-server-mauve.vercel.app/review/${params.id}`),
      },
      {
        path: "myReview",
        element: (
          <PrivateRouter>
            <MyReview />
          </PrivateRouter>
        ),
        loader: () => fetch("https://chill-gamer-server-mauve.vercel.app/addReview"),
      },
      {
        path: "watchList",
        element: (
          <PrivateRouter>
            <GameWatchList />
          </PrivateRouter>
        ),
        loader: () => fetch("https://chill-gamer-server-mauve.vercel.app/watchlist"),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
