import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants'

const Header = () => {

  const [btnName, setBtnName] = useState("Login")

  // if no dependancy array => useEffect is called on every render
  // if dependancy array is empty = [] => useEffect is called on initial render(just once)
  // if dependancy array is [btnName]  => useEffect called everytime btnName is updated
  useEffect(() => {
    console.log('useEffect called')
  }, [btnName])

  console.log('header render')
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header