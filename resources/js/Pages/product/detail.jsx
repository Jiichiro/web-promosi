import { FormatRupiah } from "@arismun/format-rupiah";
import { Head } from "@inertiajs/react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/slices/cartSlice";
import Navbar from "@/components/Navbar";
import { router } from "@inertiajs/react";

const Detail = ({ url, name, login, user }) => {
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectingProduct, setSelectingProduct] = useState(0);
    const [notedPoduct, setNotedProduct] = useState();
    
    // const dispatch = useDispatch();

    function noted(e) {
        e.preventDefault();
        router.post('/product', notedPoduct, {
            onSuccess: () => {
                // Redirect to WhatsApp after successful product posting
                window.location.href = `https://api.whatsapp.com/send?phone=6282335502468&text=${selectedProduct}`;
            }
        });
    }

    return (
        <>
            <Head title={url} />
            <div className="bg-gray-900 text-white min-h-screen">
                <Navbar login={login} user={user} />
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    {/* <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold">Our Products</h1>
                        <p className="text-gray-400 mt-2">Find the perfect solution for your needs.</p>
                    </div> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left section: Product description with image */}
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6 h-[700px] overflow-y-auto scrollbar-hide">
                            <img src={`/images/${url}.png`} alt="Product Image" className="rounded-lg mb-4" />
                            <h2 className="text-xl font-bold mb-2">Featured Product</h2>
                            <p className="text-gray-400">
                                Untuk membeli anda hanya perlu:
                            </p>
                                <ol className="list-disc pl-5 space-y-2">
                                    <li>memilih varian yang anda inginkan</li>
                                    <li>klik "Lanjut ke whatsapp"</li>
                                    <li>kirim pesan anda ke admin</li>
                                    <li>tunggu waktu untuk admin memproses, dengan begitu anda selesai melakukan pembelian</li>
                                </ol>
                        </div>
                        {/* Right section: Scrollable product list */}
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6 h-[700px] overflow-y-auto scrollbar-hide">
                            <div className="space-y-4">
                                {name.map((product, index) => (
                                    <div
                                        className={`${selectingProduct === index
                                            ? 'bg-purple-600'
                                            : 'bg-gray-700 hover:bg-gray-600'
                                            } p-4 rounded-lg flex justify-between items-center transition-all`}
                                        key={index}
                                        onClick={() => {
                                            setSelectingProduct(index);
                                            setSelectedProduct(`hai, saya ingin ingin membeli ${product.name} dengan varian ${product.variant} seharga ${product.price}`);
                                            setNotedProduct(product)
                                        }}
                                    >
                                        <div>
                                            <h2 className="text-lg font-semibold">{product.variant}</h2>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold">
                                                <FormatRupiah value={product.price} />
                                            </p>
                                            <p className="text-gray-400 italic text-sm">{(url === 'photo' || url === 'video' || url === 'word' || url === 'pdf') ? 'Mulai Dari*' : '/ Transaksi'}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end">
                        <div
                            onClick={noted}
                            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg"
                        >
                            Lanjut ke Whatsapp
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
