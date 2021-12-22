import React from 'react';

import background from './img/hero.png';
import CircleLeftBtn from './icons/circle-left.svg';
import CircleRightBtn from './icons/circle-right.svg';
import LogoIcon from './icons/logo.svg';
import Google from './icons/google.svg';
import Facebook from './icons/facebook.svg';
import Email from './icons/email.svg';
import Lock from './icons/lock.svg';
import './index.css';

function App() {
  return (
    <div class="flex justify-between font-sans">
      <div class="hidden relative w-1/2 bg-center bg-cover lg:block"
        style={{ backgroundImage: "url(" + background +")" }}
      >
        <div class="flex absolute bottom-20 justify-center w-full">
          <div class="max-w-md text-center">
            <span class="text-3xl font-bold leading-loose text-gray-900">
              Control Bussiness
            </span>
            <p class="font-light leading-7 text-gray-700">Dotra is the most comprehensive field service  assets management platform with combining flexibility</p>
            <div class="flex justify-center items-center pt-8 space-x-6">
              <button class="rounded-full focus:ring-orange-500 focus">
                <img src={CircleLeftBtn} alt='left' />
              </button>
              <button class="rounded-full focus:ring-orange-500 focus">
                <img src={CircleRightBtn} alt="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mx-auto max-w-2xl">
        <div class="flex flex-col px-8 pt-10 lg:px-14 xl:px-24">
          <img src={LogoIcon} alt="logo" class="self-center w-32 md:self-end" />
          <div class="pt-10 pb-6">
            <h1 class="text-3xl font-bold tracking-wide leading-loose writespace-nowrap">
              Hi, Welcome back!
            </h1>
            <span class="font-light text-gray-500">
              Login now to manage your job made easy
            </span>
            <div class="flex flex-wrap gap-y-4 gap-x-6 justify-between items-center whitespace-nowrap pt-10">
              <button class="flex items-center justify-center flex-1 py-4.5 px-3 rounded-lg bg-white border border-gray-400 whitespace-nowrap hover:bg-gray-50 focus:outline-none focus:ring-gray-100 focus:ring-4">
                <img alt="google" src={Google} class="w-6 h-6" />
                <span class="pl-3 font-medium text-gray-900">Sign in with Google</span>
              </button>
              <button class="flex items-center justify-center flex-1 py-4.5 px-3 rounded-lg bg-blue-500 border border-gray-400 whitespace-nowrap hover:bg-blue-600 focus:outline-none focus:ring-gray-100 focus:ring-4">
                <img alt="google" src={Facebook} class="w-6 h-6" />
                <span class="pl-3 font-medium text-white">Sign in with Facebook</span>
              </button>
            </div>
            <div class="flex justify-between items-center pt-6">
              <hr class="w-full border-gray-400" />
              <span class="px-4 font-light tracking-wide text-gray-500">Or</span>
              <hr class="w-full border-gray-400" />
            </div>
            <form action="">
              <div class="pt-6">
                <label for="email" class="font-light">Email address</label>
                <div class="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-grayy-400 transition-all focus-within:border-orange-500">
                  <div class="flex justify-center items-center pl-6">
                    <img alt="email" src={Email} class="w-6 h-6 pointer-events-none" />
                  </div>
                  <input type="text" name="email" value="phanordroberto@gmail.com"
                    class="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"
                  />
                </div>
              </div>
              <div class="pt-6">
                <label for="email" class="font-light">Password</label>
                <div class="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-grayy-400 transition-all focus-within:border-orange-500">
                  <div class="flex justify-center items-center pl-6">
                    <img alt="email" src={Lock} class="w-6 h-6 pointer-events-none" />
                  </div>
                  <input type="text" name="email" placeholder="Enter your password"
                    class="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"
                  />
                </div>
              </div>
              <div class="flex justify-between items-center pt-4">
                <div class="flex items-center">
                  <input type="checkbox" name="remember" 
                    class="w-5 h-5 text-orange-50 bg-white rounded border border-gray-400 focus:outline-none focus:ring-orange-500 focus:ring-1 focus:bg-orange-500"
                  />
                  <label for="remember" class="pl-4 font-light text-gray-900">
                    Remember me
                  </label>
                </div>
                <span class="text-blue-500 hover:text-teal-600">Forgot password</span>
              </div>
              <div class="pt-8">
                <button class="py-4 w-full text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-red-100 focus:outline-none" 
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div class="pt-4">
              <div class="font-light text-center text-gray-500 space-x-1 flex items-center justify-center">
                <div>Not registered yet?</div>
                <a href="#" class="font-normal text-teal-500 hover:text-teal-600">
                  Create an Account
                </a>
              </div>
              <div class="flex flex-wrap gap-y-2 justify-between items-center pt-14 text-center whitespace-nowrap">
                <span class="flex-1 text-gray-500">© 2021 Dotra. All rights reserved</span>
                <span class="flex flex-1 justify-center items-center space-x-1">
                  <a class="text-gray-500 hover:text-teal-600" href="#">Terms of Services</a>
                  <span class="text-gray-500">&#183;</span>
                  <a class="text-gray-500 hover:text-teal-600" href="#">Privacy Policy</a>
                </span>
              </div>
            </div>
          </div>
        </div> 
      </div> 
    </div>
  );
}

export default App;