import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/authentication/login/Login";
import Register from "../pages/authentication/register/Register";
import Coverage from "../pages/covarage/Coverage";
import PrivateRoute from "../routes/PrivateRoute";
import SendParcelInfo from "../pages/sendParcelInfo/SendParcelInfo";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        { index: true, Component: Home},
        { path:'/coverage', Component:Coverage, loader: () => fetch('../../data/warehouses.json')},
        { path: '/sendParcel', element:<PrivateRoute><SendParcelInfo></SendParcelInfo></PrivateRoute>}
    ]
  },
  {
    path:'/',
    Component: AuthLayout,
    children:[
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      }
    ]
  }
]);