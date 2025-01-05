import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Components/HomePage";
import ProjectDetails from "../Components/ProjectDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
           element:<HomePage></HomePage>,
        },
        {
            path: "/projectDetails/:id",
            element: <ProjectDetails />,
        },
      ]
    },
  ]);
  

export default router;