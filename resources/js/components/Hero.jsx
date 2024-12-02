import React, { useState } from "react";
import Navbar from "./Navbar";
import {
    FileText,
    Film,
    Gamepad2,
    Landmark,
    Wallet2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const Hero = ({ isLogin, user }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    function MoneyChanger() {
        return (
            <>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Melkukan Konversi ke/dari mata uang asing. kami mendukung
                    mata uang berikut:
                </motion.p>
                <motion.ul
                    className="relative list-disc left-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <li>USD</li>
                    <li>IDR</li>
                    <li>MYR</li>
                </motion.ul>
            </>
        );
    }
    function Ewallet() {
        return (
            <>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Kami melayani topup Ewallet berupa:
                </motion.p>
                <motion.ul
                    className="relative list-disc left-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <li>GoPay</li>
                    <li>Dana</li>
                    <li>LinkAja</li>
                    <li>OVO</li>
                </motion.ul>
            </>
        );
    }
    function Games() {
        return (
            <>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Selain E-Wallet, kami juga melayani topup game melalui mata
                    uang store tersebut. seperti:
                </motion.p>
                <motion.ul
                    className="relative list-disc left-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <li>Voucher Google Play</li>
                    <li>Steam Wallet</li>
                </motion.ul>
            </>
        );
    }
    function Documents() {
        return (
            <>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Bagi anda yang kesulitan dalam membuat atau merapihkan
                    dokumen, kami dapat membantu anda! hanya dengan memberitahu
                    seperti apa keinginan anda, maka anda cukup menunggu dan
                    akmi akan mengerjakan sesuai deadline yang diberikan. kami
                    menerima format dokumen sebagai berikut:
                </motion.p>
                <motion.ul
                    className="relative list-disc left-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <li>docx</li>
                    <li>pdf</li>
                </motion.ul>
            </>
        );
    }
    function FotosVideos() {
        return (
            <>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Bagi anda yang kurang bisa melakukan editing atau hanya
                    sekadar ingin memperbagus dan meperbaiki foto dan video
                    anda. kami menerima format foto dan video sebagai berikut:
                </motion.p>
                <div className="flex flex-row gap-10">
                    <motion.ul
                        className="relative list-disc left-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <li>Foto | jpg</li>
                        <li>Foto | png</li>
                    </motion.ul>
                    <motion.ul
                        className="relative list-disc left-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <li>Video | m4v</li>
                        <li>Video | mp4</li>
                    </motion.ul>
                </div>
            </>
        );
    }

    const content = [
        {
            icon: <Landmark className="w-8 h-8" />,
            title: "Convert Mata Uang",
            description: <MoneyChanger />,
            detailLink: '/product/moneychanger'
        },
        {
            icon: <Wallet2 className="w-8 h-8" />,
            title: "Top up E-Wallet",
            description: <Ewallet />,
            detailLink: '/product/ewallet'
        },
        {
            icon: <Gamepad2 className="w-8 h-8" />,
            title: "Top up Games",
            description: <Games />,
            detailLink: '/product/games'
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Edit/Buat Dokumen",
            description: <Documents />,
            detailLink: '/product/document'
        },
        {
            icon: <Film className="w-8 h-8" />,
            title: "Edit/Buat Video & foto",
            description: <FotosVideos />,
            detailLink: '/product/photovideo'
        },
    ];

    return (
        <div className=" relativew-full bg-gray-300 dark:bg-gray-900 text-black dark:text-white">
            <Navbar login={isLogin} user={user} />
            <main className="text-center mt-16 mb-[8rem]">
                <h1 className="text-5xl font-bold">
                    Penuhi Kebutuhan{" "}
                    <span className="text-blue-800">Digital</span> Anda
                </h1>
                <p className="text-gray-900 dark:text-gray-400 mt-4">
                    Kami akan membantu anda untuk memenuhi kebutuhkan anda
                    didunia digital
                </p>
                <button
                    onClick={() =>
                        (document.location.href = "https://t.me/QuicsX")
                    }
                    className="mt-8 bg-transparent border border-yellow-600 text-yellow-600 px-6 py-2 rounded"
                >
                    Lihat di telegram kami
                </button>
            </main>
            <div className="relative -mt-20 z-20 w-full max-w-[1500px] mx-auto px-4">
                <div className="flex justify-between items-stretch gap-4 shadow-xl">
                    {content.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex-1 flex flex-col items-center p-6 rounded-lg transition-all duration-300
                            ${
                                index === activeIndex
                                    ? "bg-blue-600 text-white transform scale-105 shadow-lg"
                                    : "bg-white hover:bg-gray-50 text-black"
                            }`}
                        >
                            <div
                                className={`mb-3 transition-transform duration-300 
                            ${
                                index === activeIndex
                                    ? "transform scale-110"
                                    : ""
                            }`}
                            >
                                {item.icon}
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm font-semibold mb-1">
                                    {item.title}
                                </h3>
                                {/* <p className="text-xs opacity-75">{item.subtitle}</p> */}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content Section for Active Menu */}
                <div className="bg-white mt-4 p-6 rounded-lg shadow-lg h-80 relative">
                    <motion.h3
                        className="text-xl font-bold text-blue-900 mb-3"
                        key={content[activeIndex].title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {content[activeIndex].title}
                    </motion.h3>
                    <div className="text-gray-600">
                        {content[activeIndex].description}
                    </div>
                    <Link
                        // href={content[activeIndex].detailLink}
                        href="/product"
                        className="absolute bottom-4 left-4 bg-blue-700 rounded py-2 px-4 text-blue-100 hover:text-blue-700"
                    >
                        Lihat Semua Produk
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
