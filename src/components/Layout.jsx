'use client';
import React from 'react';
import { HiLockClosed, HiLockOpen, HiChartPie } from 'react-icons/hi';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Toggle Button */}
      <button
        data-drawer-target="sidebar"
        data-drawer-toggle="sidebar"
        aria-controls="sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        {/* Hamburger Icon */}
        {/* ... */}
      </button>

      {/* Sidebar */}
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-gradient-to-b from-gray-800 to-black">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                <HiChartPie className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-200" />
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/embed"
                className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                <HiLockClosed className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-200" />
                <span className="ml-3">Embed</span>
              </a>
            </li>
            <li>
              <a
                href="/extract"
                className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                <HiLockOpen className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-200" />
                <span className="ml-3">Extract</span>
              </a>
            </li>
            {/* <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg group hover:bg-gray-700 hover:text-white"
                aria-controls="dropdown-embedding"
                data-collapse-toggle="dropdown-embedding"
              >
                <HiLockClosed className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-200" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Embed</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul id="dropdown-embedding" className="hidden py-2 space-y-2">
                <li>
                  <a
                    href="/embed"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    embed
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/rle"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    RLE
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/huffman"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    Huffman
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/arithmetic"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    Arithmetic
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/lzw"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    LZW
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/j-bit"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    JBE
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/deflate"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    Deflate
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg group hover:bg-gray-700 hover:text-white"
                aria-controls="dropdown-extracting"
                data-collapse-toggle="dropdown-extracting"
              >
                <HiLockOpen className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-200" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Extract</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul id="dropdown-extracting" className="hidden py-2 space-y-2">
              <li>
                  <a
                    href="/extract"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    extract
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/rle"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    RLE
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/huffman"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    Huffman
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/arithmetic"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    Arithmetic
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/lzw"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    LZW
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/j-bit"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    JBE
                  </a>
                </li>
                <li>
                  <a
                    href="/embed/deflate"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-300 transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-white"
                  >
                    Deflate
                  </a>
                </li>
              </ul>
            </li> */}
            {/* Add similar structure for Extracting */}
          </ul>
          
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-700">
            <li>
              <a
                href="/help"
                className="flex items-center p-2 text-base font-normal text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                <HiChartPie className="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-200" />
                <span className="ml-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center items-center w-full sm:ml-64">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;