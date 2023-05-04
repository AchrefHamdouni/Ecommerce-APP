import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Cart from "./Cart";
import logo from "../image/Ecommerce_Shopping_Logo-removebg-preview.png";
import {  signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserProvider";
const Navbar: React.FC = () => {
  const { cartItems, cartQuantity, isOpen, handleClickCart } =
    useShoppingCart();
    const {removeFromCart}=useShoppingCart()
 const navigate = useNavigate();

 const cart=localStorage.getItem("cart")
    const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/login");
          localStorage.removeItem("storedEmail")
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  }

  return (
    <nav className="shadow-sm px-3 sticky top-0 bg-gray-900">
      <div className="flex justify-between items-center h-20">
        <div className="flex-1 flex items-center">
          <NavLink to={"/home"}>
            <img src={logo} alt="RBK STORE" className="w-72 h-20 mt-2 ml-0" />
          </NavLink>
          <ul className="pl-3 flex items-center italic">
            <li>
              <NavLink
                className=" text-gray-800 text-xl px-3 py-3  hover:text-red-300 duration-50"
                to={"/Dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className=" text-xl px-3 py-3 hover:text-red-300 duration-300"
                to={"/store"}
              >
                Store
              </NavLink>
            </li> */}
            <li>
              <NavLink
                className=" text-slate-500 text-xl px-3 py-3 hover:text-red-300 duration-300"
                to={"/about"}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="pl-3 flex items-center text-slate-500 italic">
            {/* <li>
              <NavLink
                className=" text-xl px-3 py-3 hover:text-red-300 duration-300"
                to={"/signup"}
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-xl px-3 py-3 hover:text-red-300 duration-300"
                to={"/login"}
              >
                Login
              </NavLink>
            </li> */}
          
 <li>
              <button
                className=" text-xl px-3 py-3 hover:text-red-300 duration-300"
                onClick={handleLogout}>
              
                Logout
              </button>
            </li>
          </ul>
          <button
            onClick={() => handleClickCart()}
            className="flex items-center text-orange-300 hover:text-red-500 duration-300"
          >
            <RiShoppingCartLine />
            <span className="ml-1 text-l italic">
              "{cartQuantity}" items in cart
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <Cart handleClickCart={handleClickCart} cartItems={cartItems} />
      )}
    </nav>
  );
};

export default Navbar;
