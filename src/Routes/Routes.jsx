import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import OurTeam from "../Pages/OurTeam";
import TeammembersDetails from "../Pages/TeammembersDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children: [
        {
            path: "/",
            element: <Home/>,  
        },
        {
            path: "/login",
            element: <Login />,  
        },
        {
            path: "/signup",
            element: <SignUp />,  
        },
        {
            path: "/ourTeam",
            element: <OurTeam />,  
        },
        {
            path: "/member/:id",
            element: <TeammembersDetails/>,
            loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),  
        },
      ]
    },
  ]);