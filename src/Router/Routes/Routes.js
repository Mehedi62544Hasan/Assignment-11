import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceAll from "../../Pages/ServiceAll/ServiceAll";
import AddService from "../../Pages/Shared/AddService/AddService";
import PrivateRout from "../../Pages/Shared/PrivateRout/PrivateRout";
import SignUp from "../../Pages/SignUp/SignUp";
import Update from "../../Pages/Update/Update";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <ServiceAll></ServiceAll>,
                loader: () => fetch('https://online-seller-server.vercel.app/services')
            },
            {
                path: '/myReviews',
                element: <PrivateRout><MyReviews></MyReviews></PrivateRout>,
                loader: () => fetch('https://online-seller-server.vercel.app/review')
            },
            {
                path: '/addservice',
                element: <PrivateRout><AddService></AddService></PrivateRout>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://online-seller-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://online-seller-server.vercel.app/review/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;