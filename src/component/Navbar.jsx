import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const cartLength = useSelector((state) => state.cart.products.length);

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            <span className="ml-3 text-xl">Daraz</span>
          </Link>
          <nav className="md:mx-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Product
            </Link>
            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              About Us
            </Link>
            <Link
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Fourth Link
            </Link>
          </nav>
          <div className="flex md:hidden">
            <Link
              to="/login"
              className="mr-2 hover:text-gray-900 cursor-pointer"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="mr-2 hover:text-gray-900 cursor-pointer"
            >
              Registered
            </Link>
            <Link
              to="/cart"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
            >
              Cart ({cartLength})
              {/* Your SVG code */}
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link
              to="/login"
              className="inline-flex items-center bg-gray-100 w-fit border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mx-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center bg-gray-100 w-fit border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mx-2"
            >
              Registered
            </Link>
            <Link
              to="/cart"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
            >
              Cart ({cartLength})
              {/* Your SVG code */}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
