import { Head, Link } from "@inertiajs/react";
import React from "react";
import Navbar from "../../components/Navbar";

const ProductPage = () => {
  const categories = [
    {
      title: "Konversi Mata Uang",
      products: [
        {
          title: "MYR to IDR",
          description: "Ringgit ke Rupiah",
          image: 'myridr.png',
          link: 'myridr'
        },
        {
          title: "IDR to MYR",
          description: "Rupiah ke Ringgit",
          image: "idrmyr.png",
          link: 'idrmyr'
        },
        {
          title: "PAYPAL to IDR",
          description: "PayPal ke Rupiah",
          image: "/paypalidr.png",
          link: 'paypalidr'
        },
      ],
    },
    {
      title: "Games",
      products: [
        {
          title: "Voucher Google Play",
          description: "saldo google play",
          image: 'googleplay.png',
          link: 'googleplay'
        },
        {
          title: "Steam Wallet",
          description: "mata uang steam",
          image: "steam.png",
          link: 'steam'
        },
      ],
    },
    {
      title: "Top Up E Wallet",
      products: [
        {
          title: "GoPay",
          description: "Layanan penyimpanan uang oleh GOTO",
          image: "gopay.png",
          link: 'gopay'
        },
        {
          title: "dana",
          description: "Layanan yang banyak digunakan oleh orang karena flesibilitasnya",
          image: "dana.jpg",
          link: 'dana'
        },
      ],
    },
    {
      title: "Document Services",
      products: [
        {
          title: "Document Editing",
          description: "Professional Word and PDF file editing services.",
          image: "document-editing.png",
        },
      ],
    },
    {
      title: "Creative Services",
      products: [
        {
          title: "Photo & Video Editing",
          description: "Professional photo and video editing services.",
          image: "photo-video-editing.png",
        },
      ],
    },
  ];

  return (
    <>
    <Head>
      <title>Produk</title>
    </Head>
    <div className="product-page bg-blue-950 pb-10">
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Layanan Kami
        </h1>
        {categories.map((category, index) => (
          <section key={index} className="category-section mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-400 pb-2">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, idx) => (
                <Link
                  href={`/product/${product.link}`}
                  key={idx}
                  className="product-card bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={`/images/${product.image}`}
                    alt={product.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductPage;
