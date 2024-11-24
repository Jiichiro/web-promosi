import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Quics<span className="text-yellow-600">X</span>
                    </h1>
                    <p className="mt-2">
                        banyak pelanggan yang puas dengan layanan kami
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <a href="#" className="text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Resources</h2>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="#" className="text-white">
                                Knowledgebase
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white">
                                Online Doc
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white">
                                Redundant
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-lg">About us</h2>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="#" className="text-white">
                                Knowledgebase
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white">
                                Online Doc
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white">
                                Redundant
                            </a>
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
                    <div className="mt-4 flex">
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="p-2 rounded-l-md text-gray-900"
                        />
                        <button className="bg-orange-500 text-white p-2 rounded-r-md">
                            Subscribe now
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>© Copyright 2024 Andy</p>
            </div>
        </footer>
    );
};

export default Footer;
