import { useContext, useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux'

const Header = () => {

  const [btnName, setBtnName] = useState("Login")

  // if no dependancy array => useEffect is called on every render
  // if dependancy array is empty = [] => useEffect is called on initial render(just once)
  // if dependancy array is [btnName]  => useEffect called everytime btnName is updated
  useEffect(() => {
    // console.log('useEffect called')
  }, [btnName])

  const navigate = useNavigate();

  const isOnline = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log('header render')

  // subscribing to store using selector
  const cartItems = useSelector(state => state.cart.items)

  return (
    <div className="flex justify-between align-center bg-pink-200 shadow-lg mb-2">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="w-24"
          src={LOGO_URL}
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status {isOnline ? '✅' : '❌'}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button className="login" onClick={() => {
            btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button>
          <li className='px-4'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header