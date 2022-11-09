import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceAll from "../../Pages/ServiceAll/ServiceAll";
 import AddService from "../../Pages/Shared/AddService/AddService";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <ServiceAll></ServiceAll>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>,
                loader: () => fetch('http://localhost:5000/review')
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
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