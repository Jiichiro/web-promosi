import { FormatRupiah } from "@arismun/format-rupiah";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/slices/cartSlice";
import Navbar from "@/components/Navbar";

const Detail = ({ url, name, login, user }) => {
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectingProduct, setSelectingProduct] = useState(0);
    
    // const dispatch = useDispatch();

    return (
        <>
            <Head>
                <title>{url}</title>
            </Head>
            <div className="bg-blue-950 px-8 w-full min-h-screen">
                <Navbar login={login} user={user} />
                <h1 className="text-2xl font-semibold text-center text-gray-100">
                    Our Products
                </h1>
                <p className="text-center text-gray-500 mt-2">
                    Find the perfect solution for your needs.
                </p>
                <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
                    {/* Left section: Product description with image */}
                    <div className="bg-gray-50 p-6 rounded-lg w-full md:w-1/2">
                        <h2 className="text-xl font-semibold mb-4 text-gray-100">
                            Featured Product
                        </h2>
                        <img
                            src={`/images/${url}.png`}
                            alt="Product Image"
                            className="rounded-lg w-96 mb-4"
                        />
                        <p className="text-gray-600">
                            This is our featured product that provides excellent
                            value for your needs. With state-of-the-art design
                            and cutting-edge technology, it is perfect for those
                            who demand the best.
                        </p>
                    </div>
                    {/* Right section: Scrollable product list */}
                    <div className="w-full md:w-1/2 max-h-[500px] overflow-y-auto border border-gray-200 rounded-lg p-4">
                        <div className="space-y-4">
                            {name.map((product, index) => (
                                <div
                                    className={`${selectingProduct === index
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-white border border-purple-600'
                                        } p-6 rounded-lg flex justify-between items-center transition-all`}
                                    key={index}
                                    onClick={() => {
                                        setSelectingProduct(index);
                                        setSelectedProduct(`hai, saya ingin ingin membeli ${product.name} sebanyak ${product.quantity}`);
                                    }}
                                >
                                    <div>
                                        <h2 className="text-lg font-semibold">
                                            {product.quantity}
                                        </h2>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold">
                                            <FormatRupiah value={product.price} />
                                        </p>
                                        <p className=" italic bold text-sm text-gray-600">{(url == 'photo' || url == 'video' || url == 'word' || url == 'pdf') ? 'Mulai Dari*' : '/ Transaksi'}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-end items-center">
                    <a
                        href={`https://api.whatsapp.com/send?phone=6282335502468&text=${selectedProduct}`}
                        className="bg-purple-600 text-white py-2 px-6 rounded-lg"
                    >
                        Lanjut ke Wangsaff
                    </a>
                </div>
            </div>
        </>
    );
};

export default Detail;
