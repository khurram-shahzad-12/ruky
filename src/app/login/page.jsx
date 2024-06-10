"use client";
import React, { useState,Fragment } from 'react';

const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    console.log("helloe")
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
       
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={togglePopup}
        >
          Toggle
        </button>
  
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 ${isOpen ? 'block' : 'hidden'}`}
        onClick={togglePopup}
      ></div>

      {/* Popup */}
      <div
        className={`bg-white rounded-lg p-8 shadow-lg z-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <h2 className="text-2xl font-semibold mb-4">Popup Content</h2>
        <p className="text-gray-700">This is some sample content for the popup.</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={togglePopup}
        >
          Close
        </button>
      </div>

    
    </div></Fragment>
    
    
  );
};

export default page;

{/* <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div> */}