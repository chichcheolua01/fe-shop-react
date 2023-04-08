import React from 'react';
import { Outlet } from 'react-router-dom';

const Header: React.FC = () => {

  const getUsername = () => {
    const user = JSON.parse(localStorage.getItem("user")!) ? JSON.parse(localStorage.getItem('user')!) : {"user": {"name": ""}};
    const username = user.user.name;
    return username
  }
  const getGmail = () => {
    const user = JSON.parse(localStorage.getItem("user")!) ? JSON.parse(localStorage.getItem('user')!) : {"user": {"email": "Unknown"}};
    const gmail = user.user.email;
    console.log(user);
    
    return gmail
  }
  return (
    <header aria-label="Page Header" className="" >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-thin text-teal-500 sm:text-3xl">
            My Store
          </h1>
        </div>
        <div className="flex items-center sm:justify-center sm:gap-4">
          <div className="relative hidden sm:block">
            <input
              className="h-10 w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search website..."
            />

            <button
              type="button"
              className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
            <div className="flex gap-4">
              <button
                type="button"
                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
              >
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <a
                href=""
                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </a>

              <a
                href="/signin"
                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </a>
            </div>

            <button
              type="button"
              className="group flex shrink-0 items-center rounded-lg transition hidden"
            >
              <span className="sr-only">Menu</span>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
