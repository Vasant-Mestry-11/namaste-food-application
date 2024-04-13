import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from './src/components/Error'
import RestaurantMenu from "./src/components/RestaurantMenu";

// this will create/load separate chunk.js file for Grocery 
const Grocery = lazy(() => import('./src/components/Grocery'))

const About = lazy(() => import('./src/components/About'))

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



// Chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading


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
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <About />
        </Suspense>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />
        </Suspense>
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
