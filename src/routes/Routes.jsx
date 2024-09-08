import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Secret from "../pages/shared/secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import AllUsers from "../pages/dashboard/allusers/AllUsers";
import AddItems from "../pages/dashboard/addItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboard/manageItems/ManageItems";
import UpdateItem from "../pages/dashboard/updateItem/UpdateItem";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/paymenHistory/PaymentHistory";
import UserHome from "../pages/dashboard/userHome/UserHome";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      //normal user routes
      { path: "userhome", element: <UserHome></UserHome> },
      { path: "cart", element: <Cart></Cart> },
      { path: "payment", element: <Payment></Payment> },
      { path: "paymenthistory", element: <PaymentHistory></PaymentHistory>},
      //admin only routes
      { path: "adminhome", element: <AdminRoute><AdminHome></AdminHome></AdminRoute> },
      { path: "additems", element: <AdminRoute><AddItems></AddItems></AdminRoute> },
      { path: "manageitems", element: <AdminRoute><ManageItems></ManageItems></AdminRoute> },
      { 
        path: "updateitem", 
        // path: "updateitem/:id", 
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        // loader:({params})=>fetch(`https://bistro-boss-server-bice-two.vercel.app/menu/${params.id}`) 
      },
      { path: "users", element:<AdminRoute><AllUsers></AllUsers></AdminRoute> },
    ],
  },
]);
