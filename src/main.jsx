import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import "./base.css";
import router from "./Router";
import MainContext from "./Context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContext>
      <RouterProvider router={router} />
    </MainContext>
  </StrictMode>
);
