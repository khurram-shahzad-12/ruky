"use client";
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BsFillBucketFill } from "react-icons/bs";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileManu, setIsMobileMenu] = useState(false);

  const loginHandler = () => {
    setIsVisible(!isVisible);
  }

  const mobilemenuhandler = () => {
    setIsMobileMenu(!isMobileManu);

  }
  return (
    <Fragment>
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">

              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white size-16 " aria-controls="mobile-menu" aria-expanded="false" onClick={mobilemenuhandler}>
                <RxHamburgerMenu className='text-3xl font-bold  text-medium' />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch md:justify-start">
              <div className="flex flex-shrink-0 items-center sm:pl-10 lg:pr-4">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 md:block">
                <div className="flex space-x-4">


                  <Link href="/" className="rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-gray-700 hover:text-white">Home</Link>
                  <Link href="about" className="rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-gray-700 hover:text-white">About</Link>
                  <Link href="contact" className="rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-gray-700 hover:text-white">Franchise with us</Link>
                  <Link href="profile" className="rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-gray-700 hover:text-white">My Profile</Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



              <div className="relative pr-6">
                <div>
                  <button type="button" className="relative flex rounded-full bg-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={loginHandler}>
                    <FaUser className='text-2xl text-medium' />
                  </button>
                </div>


                <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isVisible ? "" : "hidden"}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >

                  <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">SignUp</Link>
                  <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Login</Link>
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Logout</Link>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">My Profile</Link>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">My Orders</Link>
                </div>

              </div>
              <button type="button" className="relative rounded-full">
                <BsFillBucketFill className='text-2xl text-medium' />
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className={`${isMobileManu ? "" : "hidden"} `} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">


            <Link href="/" className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-gray-700 hover:text-white">Home</Link>
            <Link href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-gray-700 hover:text-white">About Us</Link>
            <Link href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-gray-700 hover:text-white">Franchise with us</Link>
            <Link href="/login" className="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-gray-700 hover:text-white">Profile</Link>
          </div>
        </div>
      </nav>

    </Fragment>
  )
}

export default Navbar