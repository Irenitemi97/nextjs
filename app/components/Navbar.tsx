"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbarr = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('#000000');
            setTextColor('#ffffff');
          } else {
            setColor('transparent');
            setTextColor('#ffffff');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-black'>
                <Link href='/'>
                    <h1 style={{ color: `${textColor}` }} className='font-bold text-3xl'>
                        1802 Schools
                    </h1>
                </Link>
                <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                    <li onClick={() => setMenuOpen(false)} className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="relative group px-3 py-4">
                        <Link href='' className="hover:opacity-50 cursor-default">Course Data</Link>
                        <div
                            className="absolute top-0 -left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                <div
                                    className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
                                </div>

                                <div className="relative z-10">
                                    <div className="grid gap-6">
                                        <div>
                                            <ul className="mt-0 text-[15px]">
                                                <li onClick={toggleMenu}>
                                                    <Link href="/frontend"
                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                        Frontend Development
                                                    </Link>
                                                </li>
                                                <li onClick={toggleMenu}>
                                                    <Link href="/backend"
                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                        Backend Development
                                                    </Link>
                                                </li>
                                                <li onClick={() => setMenuOpen(false)}>
                                                    <Link href="/python"
                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                        Python
                                                    </Link>
                                                </li>
                                                <li onClick={() => setMenuOpen(false)}>
                                                    <Link href="/security"
                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                        Security+
                                                    </Link>
                                                </li>
                                                <li onClick={() => setMenuOpen(false)}>
                                                    <Link href="/ccna"
                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                        CCNA
                                                    </Link>
                                                </li>
                                                <li onClick={() => setMenuOpen(false)}>
                                                    <Link href="/data-science"
                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                        Data Science
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li onClick={() => setMenuOpen(false)} className='p-4'>
                        <Link href='/Course-page'>Course Page</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={toggleMenu} className='block sm:hidden z-10'>
                    {menuOpen ? (
                        <AiOutlineClose size={30} className='text-[#FF4040]' />
                    ) : (
                        <AiOutlineMenu size={30} className='text-[#FF4040]' />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        menuOpen
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#ecf0f3] text-center ease-in duration-300'
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
                    }
                >
                    <ul>
                        <li onClick={() => setMenuOpen(false)} className='p-4 text-3xl hover:text-blue-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className="relative group text-3xl hover:text-blue-500 px-3 py-4">
                            <Link href='' className="hover:opacity-50 cursor-default">Course Data</Link>
                            <div
                                className="absolute top-0 -left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                    <div
                                        className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">
                                    </div>

                                    <div className="relative z-10">
                                        <div className="grid gap-6">
                                            <div>
                                                <ul className="mt-0 text-[15px]">
                                                    <li onClick={() => setMenuOpen(false)}>
                                                        <Link href="/frontend"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                            Frontend Development
                                                        </Link>
                                                    </li>
                                                    <li onClick={() => setMenuOpen(false)}>
                                                        <Link href="/backend"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                            Backend Development
                                                        </Link>
                                                    </li>
                                                    <li onClick={() => setMenuOpen(false)}>
                                                        <Link href="/python"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                            Python
                                                        </Link>
                                                    </li>
                                                    <li onClick={() => setMenuOpen(false)}>
                                                        <Link href="/security"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                            Security+
                                                        </Link>
                                                    </li>
                                                    <li onClick={() => setMenuOpen(false)}>
                                                        <Link href="/ccna"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                            CCNA
                                                        </Link>
                                                    </li>
                                                    <li onClick={() => setMenuOpen(false)}>
                                                        <Link href="/data-science"
                                                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                            Data Science
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li onClick={() => setMenuOpen(false)} className='p-4 text-3xl hover:text-blue-500'>
                            <Link href='/Course-page'>Course Page</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbarr