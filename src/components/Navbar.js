import React from 'react';
import { logo } from "../assets";
import { navLinks } from "../constants";
import styles from '../style';

const Navbar = () => {
  return (
    <nav className={`w-full flex pt-6 justify-end items-center navbar absolute ${styles.paddingX}`}>
          {/* <img src={logo} alt="myTunes" className={` sm:flex hidden w-[124px] h-[35px]`} /> */}
          <button className={`text-gray-900 bg-blue-gradient rounded p-1 font-poppins`}>{navLinks.title}</button>
    </nav>
  )
}

export default Navbar