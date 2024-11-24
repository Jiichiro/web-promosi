import { Link } from "@inertiajs/react";
import React from "react";

const Navbar = ({login, user}) => {
    
    
    return (
        <header className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-black dark:text-white">Quics<span className="text-yellow-600">X</span></div>
            <nav className="space-x-8">
                <Link href="/" className="text-white">
                    Home
                </Link>
                <Link href="/about" className="text-white">
                    About us
                </Link>
                <Link href="/features" className="text-white">
                    Featured
                </Link>
                <Link href="/cart" className="text-white">
                    Keranjang
                </Link>
            </nav>
            <div className="space-x-4">
                {login ? 
                <>
                    <Link href="#" className="cursor-default">Hello {user.name}</Link>
                    <Link href="/logout" className="text-white bg-yellow-600 px-4 py-2 rounded">logout</Link>
                </>
                :
                <>
                    <Link href="/login" className="bg-yellow-600 text-white px-4 py-2 rounded">
                        Sign In
                    </Link>
                    <Link href="/register" className="text-white border border-yellow-600 rounded px-4 py-2">Sign Up</Link>
                </>
                }
            </div>
        </header>
    );
};

export default Navbar;
