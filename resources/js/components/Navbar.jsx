import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ login, user }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <header className="bg-gradient-to-b from-blue-950 to-transparent flex justify-between items-center px-4 py-4">
            <div className="text-2xl font-bold text-white">
                Quics<span className="text-[#ff5c00]">X</span>
            </div>
            <nav className="relative space-x-8">
                <Link href="/" className="text-white">
                    Home
                </Link>
                <Link href="/about" className="text-white">
                    About us
                </Link>
                {user?.level === "admin" && (
                    <Link href="/stats" className="text-white">
                        Statistik
                    </Link>
                )}
                {/* Menu Produk */}
                <div
                    className="relative inline-block text-white"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="cursor-pointer">Produk</span>
                    {isDropdownOpen && (
                        <motion.div
                            className="absolute -left-72 right-0 mx-auto w-max mt-0 bg-white text-black rounded shadow-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="flex">
                                <div
                                    className="block px-4 py-2 hover:bg-gray-200 border-r border-gray-300"
                                >
                                    <p className='mx-4'> Convert Mata Uang</p>
                                    <ul className='list-none pr-2 text-sm text-zinc-600'>
                                        <li><Link href='/product/moneychanger/myridr'>MYR to IDR</Link></li>
                                        <li>IDR to MYR</li>
                                        <li>PAYPAL to IDR</li>
                                    </ul>
                                </div>
                                <div
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    <p className='mx-4'> Top Up Ewallet</p>
                                    <ul className='list-none pr-2'>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                        <li>a</li>
                                    </ul>
                                </div>
                                <div className="border-l border-gray-300 h-8 mx-2"></div>
                                <div
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Kategori 3
                                </div>
                                <div className="border-l border-gray-300 h-8 mx-2"></div>
                                <div
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Kategori 4
                                </div>
                                <div className="border-l border-gray-300 h-8 mx-2"></div>
                                <div
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Kategori 5
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
                <Link href="/cart" className="text-white">
                    Keranjang
                </Link>
            </nav>
            <div className="space-x-4">
                {login ? (
                    <>
                        <Link href="#" className="cursor-default text-white">
                            Hello {user.name}
                        </Link>
                        <Link
                            href="/logout"
                            className="text-white bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded"
                        >
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href="/login"
                            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/register"
                            className="text-white border border-purple-600 rounded px-4 py-2"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;
