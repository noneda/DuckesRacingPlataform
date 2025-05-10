import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout";
import Home from "../App/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    // errorElement: Err,
    children: [
      {
        index: true,
        Component: Home,
      },
      //   {
      //     path: "about-us",
      //     Component: AboutUs,
      //   },
      //   {
      //     path: "general",
      //     Component: General,
      //   },
      //   {
      //     path: "events",
      //     Component: Events,
      //   },
      //   {
      //     path: "products",
      //     Component: Products,
      //   },
      //   {
      //     path: "item/:name",
      //     Component: Item,
      //   },
    ],
  },
]);

export default router;
