import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { Home, About, ContactUs, Help, Membership, NotFound } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />, // ✅ This is correct
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contactus", element: <ContactUs /> },
      { path: "help", element: <Help /> },
      { path: "membership", element: <Membership /> },
    ],
  },
]);

export default router;
