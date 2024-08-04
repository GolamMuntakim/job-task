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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"new",
        element:<NewListing></NewListing>
      },
      {
        path:"search",
        element:<Search></Search>
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
        element:<Settings></Settings>
      }
    ]
  },
  {path:"/login", element:<Login></Login>},
  {path:"/signup", element:<SignUp></SignUp>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
