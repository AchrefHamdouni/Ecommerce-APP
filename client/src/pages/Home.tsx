import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import Banner from '../components/Banner';

const Home:React.FC = () => {
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
 
    const navigate = useNavigate();
 
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
      <div>
        <Banner />
        <div className="h-screen bg-gray-100">
          <nav className="p-6 bg-white flex justify-between">
            <div className="flex items-center space-x-4">
              <p className='text-red-700 text-lg font-bold'>
                Welcome to RBK Store
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogout}>
                Logout
              </button>
            </div>
          </nav>
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-4xl mb-4">Discover Our Products!</h1>
              <p className="text-gray-600 text-lg mb-8">
                Please log in to explore our wide range of products. If you are not registered, please sign up first.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate('/login')}>
                Login
              </button>
              <button className="border border-red-500 hover:bg-red-500 text-red-500 hover:text-white font-bold py-2 px-4 rounded ml-4"
                onClick={() => navigate('/signup')}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Home;
