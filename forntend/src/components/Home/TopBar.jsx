import React from 'react';
import { Outlet } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
const TopBar = () => {
    return (
        <div className='flex flex-col w-screen'>
            <div className='flex flex-row justify-between m-4'>
                <div className=''>
                <label className="relative block w-80">
                    <span className="text-white sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-white">
                        <AiOutlineSearch className='text-2xl text-white' />
                    </span>
                    <input className="block w-full py-2 pr-3 bg-gray-300 border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label>
                </div>
                <div className='flex flex-row'>
                    <button className='flex justify-center mx-5 bg-gray-200 rounded-full w-9 h-9'>
                        <CgProfile className="self-center text-2xl"/>
                    </button>
                    <button className='flex justify-center bg-gray-200 rounded-full w-9 h-9'>
                        <AiFillMessage className="self-center text-2xl"/>
                    </button>
                </div>



            </div>
            <Outlet />
        </div>
    );
}

export default TopBar;
