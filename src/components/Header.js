import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const [btnName, setBtnName] = useState("Login")

  // if no dependancy array => useEffect is called on every render
  // if dependancy array is empty = [] => useEffect is called on initial render(just once)
  // if dependancy array is [btnName]  => useEffect called everytime btnName is updated
  useEffect(() => {
    // console.log('useEffect called')
  }, [btnName])

  const navigate = useNavigate();

  // console.log('header render')
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
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/grocery">Grocery</Link>
          <Link to="/cart">Cart</Link>
          <button className="login" onClick={() => {
            btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header