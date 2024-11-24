import React, { useState } from "react";
import Navbar from "./Navbar";
import { Gamepad2, Landmark, ReceiptText, Wallet2 } from 'lucide-react';

const Hero = ({isLogin, user}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    function MoneyChanger() {
        return  (
            <>
                <p>Melkukan Konversi ke/dari mata uang asing. kami mendukung mata uang berikut:</p>
                <ul className="relative list-disc left-4">
                    <li>USD</li>
                    <li>IDR</li>
                    <li>MYR</li>
                </ul>
            </>
        )
    }
    function Ewallet() {
        return  (
            <>
                <p>Kami melayani topup Ewallet berupa:</p>
                <ul className="relative list-disc left-4">
                    <li>GoPay</li>
                    <li>Dana</li>
                    <li>ShoopePay</li>
                    <li>LinkAja</li>
                    <li>OVO</li>
                </ul>
            </>
        )
    }
    function Games() {
        return  (
            <>
                <p>Selain E-Wallet, kami juga melayani topup game melalui mata uang store tersebut. seperti:</p>
                <ul className="relative list-disc left-4">
                    <li>Voucher Google Play</li>
                    <li>Steam Wallet</li>
                </ul>
            </>
        )
    }

    const content = [
        {
            icon: <Landmark className="w-8 h-8" />,
            title: "Convert Mata Uang",
            description: <MoneyChanger/>
        },
        {
            icon: <Wallet2 className="w-8 h-8" />,
            title: "Top up E-Wallet",
            description: <Ewallet/>
        },
        {
            icon: <Gamepad2 className="w-8 h-8" />,
            title: "Top up Games",
            description: "Air freight services providing fast and reliable global air cargo solutions."
        },
        {
            icon: <ReceiptText className="w-8 h-8" />,
            title: "Bayar Tagihan",
            description: "Air freight services providing fast and reliable global air cargo solutions."
        },
    ];

    return (
        <div className=" relativew-full px-4 pb-8 bg-gray-900 text-white">
            <Navbar login={isLogin} user={user}/>
            <main className="text-center mt-16 mb-[8rem]">
                <h1 className="text-5xl font-bold">
                    Penuhi Kebutuhan <span className='text-blue-800'>Digital</span> Anda
                </h1>
                <p className="text-gray-400 mt-4">
                    Kami akan membantu anda untuk memenuhi kebutuhkan anda didunia digital
                </p>
                <button onClick={() => document.location.href='https://t.me/QuicsX'} className="mt-8 bg-transparent border border-yellow-600 text-yellow-600 px-6 py-2 rounded">
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
                            ${index === activeIndex
                                    ? 'bg-blue-600 text-white transform scale-105 shadow-lg'
                                    : 'bg-white hover:bg-gray-50 text-black'
                                }`}
                        >
                            <div className={`mb-3 transition-transform duration-300 
                            ${index === activeIndex ? 'transform scale-110' : ''}`}>
                                {item.icon}
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                                {/* <p className="text-xs opacity-75">{item.subtitle}</p> */}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content Section for Active Menu */}
                <div className="bg-white mt-4 p-6 rounded-lg shadow-lg h-80">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {content[activeIndex].title}
                    </h3>
                    <div className="text-gray-600">
                        {content[activeIndex].description}
                    </div>
                </div>
            </div>
            {/* <section className="bg-gray-50 pt-32 pb-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
                        Why Choose Us?
                    </h2>
                    <div className="flex justify-center items-center gap-8">
                        <div className="text-center">
                            <div className={`w-3 h-3 rounded-full mx-auto transition-colors duration-300
                ${activeIndex === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                            <p className="mt-2 text-sm text-gray-600">In-Topic<br />Expertise</p>
                        </div>
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <div className="text-center">
                            <div className={`w-3 h-3 rounded-full mx-auto transition-colors duration-300
                ${activeIndex === 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                            <p className="mt-2 text-sm text-gray-600">Trustworthy &<br />Leadership</p>
                        </div>
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <div className="text-center">
                            <div className={`w-3 h-3 rounded-full mx-auto transition-colors duration-300
                ${activeIndex === 4 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                            <p className="mt-2 text-sm text-gray-600">Commitment &<br />Timing</p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Hero;
