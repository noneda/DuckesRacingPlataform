import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import "./base.css";
import router from "./Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
