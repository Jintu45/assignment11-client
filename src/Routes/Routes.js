import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Allservices from "../Pages/Services/Allservices";
import SingleItem from "../Pages/Services/SingleItem";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ReviewForm from "../Reviews/ReviewForm/ReviewForm";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/allservices',
                element: <Allservices></Allservices>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/singleitem/:id',
                element : <SingleItem></SingleItem>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/review/:id',
                element : <PrivateRoute><ReviewForm></ReviewForm></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router;