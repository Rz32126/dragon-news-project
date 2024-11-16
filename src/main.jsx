import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import CategoryNews from './pages/CategoryNews';
import AuthLayout from './components/AuthLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>
      },
       {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
       },
    ]
  },
  {
    path: "/news",
    element: <div>news</div>,
    
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <h2>login</h2>
      },
      {
        path: "/auth/register",
        element: <h2>register</h2>
      }
    ]
  },
  {
    path: "*",
    element: <div>error</div>,
    
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
