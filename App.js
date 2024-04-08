import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from './src/components/Error'
import RestaurantMenu from "./src/components/RestaurantMenu";

/*

  Components will be creating in food ordering app

  Header
    - Logo
    - Nav Item
  Body
    - Search 
    - Restaurent Container
      - Restaurent Cards
  Footer
    - Copyright
    - Links
    - Contact

*/

// const resData = {
//   data: {
//     name: "KFC",
//     avgRating: "3.8",
//     cuisine: ["Biryani", "North Indian", "Asian"],
//     costForTwo: 40000,
//     imgUrl: "f01666ac73626461d7455d9c24005cd4",
//   },
// };



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
