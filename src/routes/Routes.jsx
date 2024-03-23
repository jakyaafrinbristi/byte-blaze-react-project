import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../components/Blog";
import Bookmarks from "../pages/Bookmarks";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayouts></MainLayouts>,
      children:[
        {
          // index:true,
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>,
          loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path:'/blog/:id',
          element:<Blog></Blog>,
          loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
              index: true,
              element:<Content></Content>  
            },
            {
             path:'author',
             element:<Author></Author>   

            }
          ]
        },
        {
          path:'/bookmarks',
          element:<Bookmarks></Bookmarks>
        }
      ]
      
    }
   
  ])