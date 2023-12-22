import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import CreateTask from "../pages/Dashboard/CreateTask/CreateTask";
import Task from "../pages/Dashboard/Task/Task";
import Contact from "../pages/Contact/Contact";
import Testimonial from "../pages/Home/Testimonial/Testimonial";
import Update from "../pages/Dashboard/Update/Update";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<SignUp></SignUp>
            },
            {
                path:'testimonial',
                element:<Testimonial></Testimonial>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'addTask',
                element:<CreateTask></CreateTask>
            },
            {
                path:'task',
                element:<Task></Task>
            },
            {
                path:"update/:id",
                element:<Update></Update>,
                loader:({params}) => fetch(`https://task-management-server-roan-psi.vercel.app/task/${params.id}`)
            }
        ]
    }

])

export default router;