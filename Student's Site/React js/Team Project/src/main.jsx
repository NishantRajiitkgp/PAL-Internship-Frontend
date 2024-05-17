import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Logins.jsx"
import Signup from "./Pages/Signup.jsx"
import Detail from "./Pages/Detail.jsx";
import ForgotPassword from './Pages/ForgotPassword.jsx';
import OTPComponent from './Pages/OTP.jsx';
import SignupTwo from './Pages/SignupTwo.jsx';
import NewPassword from './Pages/NewPassword.jsx';
import UpateProfiePhoto from './Pages/UpateProfiePhoto.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Detail />,
  },
  {
    path: "/login/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/login/otp",
    element: <OTPComponent />,
  },
  {
    path: "/signuptwo",
    element: <SignupTwo />,
  },
  {
    path: "/login/newpassword",
    element: <NewPassword />,
  },
 
  {
    path: "/home/profile/updateprofilephoto",
    element: <UpateProfiePhoto />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
