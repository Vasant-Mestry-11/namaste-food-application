import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

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
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
