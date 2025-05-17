import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import Home from "../App/Home";
import AboutUs from "../App/AboutUs";
import Events from "../App/Events";
import Specific from "../App/Specific";
import Info from "../App/Info";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "info",
        Component: Info,
      },
      {
        path: "event",
        Component: Events,
      },
      {
        path: "event/:name",
        Component: Specific,
      },
    ],
  },
]);

export default router;
