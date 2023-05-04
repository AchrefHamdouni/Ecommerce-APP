import React from 'react';
import Logo from "../image/Ecommerce_Shopping_Logo-removebg-preview.png"
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import paiments from '../image/paiments.png'
import { FaChevronUp } from 'react-icons/fa';
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div className='bg-gray-800 border-t-4 border-orange-500  text-[#949494] mt-4 py-10 px-7 font-titleFont flex flex-row justify-between'>
      <div className=' flex flex-col gap-7'>
      <button
            className="bg-gray-500 hover:bg-gray-600 rounded-full p-2 w-8 transition-colors duration-200 focus:outline-none"
            onClick={() => {
              scrollToTop();
            }}
          >
            <FaChevronUp className="text-white" />
          </button>
        <div className='flex flex-col gap-7'>
          <img className='rounded-full float-left h-10 w-40' src={Logo} alt="" />
          <img src={paiments} className='w-80' alt="" />
        </div>
        
        <div className='flex flex-row gap-3'>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <GitHubIcon/>
          <YouTubeIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
        </div>
      </div>
      <div className="">
        <h2 className='text-xl text-white 300 mb-3'>Locate Us</h2>
        <p>RBK.STORE, TEAM2</p>
        <p>Mobile: +216 22 111 333</p>
        <p>Phone: +216 71 111 333</p>
        <p>Email: rbk-store@gmail.com</p>
      </div>
      <div>
        <h2 className='text-xl text-white 300 mb-3'>Profile</h2>
        <p>My Account</p>
        <p>Checkout</p>
        <p>Order tracking</p>
        <p>help & support</p>

      </div>
    </div>
  )
}
export default Footer;