import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Vod from "./pages/Vod";
import User, { loader as userLoader } from "./layouts/User";
import Links from "./pages/Links";
import Vods from "./pages/Vods";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "admin", element: <Admin /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: ":userId",
    element: <User />,
    loader: userLoader,
    id: "user",
    children: [
      { index: true, element: <Links /> },
      { path: "vods", element: <Vods /> },
      { path: "vods/:vodId", element: <Vod /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
