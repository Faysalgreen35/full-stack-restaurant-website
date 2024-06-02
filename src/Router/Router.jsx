import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'menu',
        element:<Menu></Menu>
      },
      {
        path:'order/:category',
        element:<Order></Order>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'secret',
        element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
      },
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[

        {

          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'cart',
          element:<Cart></Cart>
          
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },

        //admin only routes
        {

          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader:({params}) => fetch(`https://bistro-boss-restaurant-server-olive-alpha.vercel.app/menu/${params.id}`)
        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);