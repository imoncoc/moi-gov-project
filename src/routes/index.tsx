import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Hero from "../pages/shared/Hero";
import MainSection from "../components/layout/MainSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <MainSection />
          </>
        ),
      },
    ],
  },
]);

export default router;
