import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './HomeComponent/Home.jsx';
import NewListing from './HomeComponent/NewListing.jsx';
import Search from './HomeComponent/Search.jsx';
import About from './HomeComponent/About.jsx';
import Favourite from './HomeComponent/Favourite.jsx';
import Help from './HomeComponent/Help.jsx';
import Settings from './HomeComponent/Settings.jsx';
import Login from './HomeComponent/Login.jsx';
import SignUp from './HomeComponent/SignUp.jsx';
import AuthProvider from './HomeComponent/AuthProvider.jsx';
import ErrorElement from './HomeComponent/ErrorElement.jsx';
import Details from './HomeComponent/Details.jsx';
import PrivateRoute from './HomeComponent/PrivateRoute.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('https://server-eosin-chi.vercel.app/new')
      },
      {
        path:"new",
        element:<PrivateRoute><NewListing></NewListing></PrivateRoute>
      },
      {
        path:"search",
        element:<PrivateRoute><Search></Search></PrivateRoute>,
        loader:()=>fetch('https://server-eosin-chi.vercel.app/new')
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"favoutite",
        element:<Favourite></Favourite>
      },
      {
        path:"help",
        element:<Help></Help>
      },
      {
        path:"setting",
        element:<PrivateRoute><Settings></Settings></PrivateRoute>
      },
      {
        path:"/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>
      }
    ]
  },
  {path:"/login", element:<Login></Login>},
  {path:"/signup", element:<SignUp></SignUp>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   </HelmetProvider>
  </React.StrictMode>,
)
