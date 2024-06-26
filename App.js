import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from './src/components/Error'
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

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
  const [userName, setUserName] = useState()

  // authentication
  useEffect(() => {
    const data = {
      name: 'Akshay saini'
    }
    setUserName(data.name)
  }, [])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
