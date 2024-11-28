import { Link } from "@inertiajs/react";
import { Send } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Quics<span className="text-[#ff5c00]">X</span>
                    </h1>
                    <p className="mt-2">
                        banyak pelanggan yang puas dengan layanan kami
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <Link href="#" className="text-white">
                            <Send />
                        </Link>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Tech Stack</h2>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="https://laravel.com/" target="_blank" className="text-white">
                                Laravel
                            </a>
                        </li>
                        <li>
                            <a href="https://inertiajs.com/" target="_blank" className="text-white">
                                Inertia.js
                            </a>
                        </li>
                        <li>
                            <a href="https://react.dev/" target="_blank" className="text-white">
                                React.js
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-lg">About us</h2>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <Link href="/about#description" className="text-white">
                                Deskripsi
                            </Link>
                        </li>
                        <li>
                            <Link href="/about#team" className="text-white">
                                Tim Kami
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-lg">
                        Subscribe to new Newsletter
                    </h2>
                    <p className="mt-2">
                        What are you waiting for? Subscribe and follow our
                        progress!
                    </p>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>© Copyright 2024 Andy</p>
            </div>
        </footer>
    );
};

export default Footer;
