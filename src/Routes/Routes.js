import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import News from "../Pages/News/News/News";
import Profile from "../Pages/Other/Profile/Profile";
import TermsAndCondition from "../Pages/Other/TermsAndConditons/TermsAndCondition";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element:<Category/>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`) 
            },
            {
                path: '/news/:id',
                element:<PrivateRoute><News/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`) 

            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element: <Register/>
            },
            {
                path: '/terms',
                element: <TermsAndCondition/>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile/></PrivateRoute>
            }
            ]
    }

])