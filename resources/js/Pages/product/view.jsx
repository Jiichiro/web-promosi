import { Link } from "@inertiajs/react";
import React from "react";

const ProductPage = () => {
  const categories = [
    {
      title: "Konversi Mata Uang",
      products: [
        {
          title: "MYR to IDR",
          description: "Ringgit ke Rupiah",
          image: '/images/myridr.png',
		  link: './myridr'
        },
        {
          title: "IDR to MYR",
          description: "Rupiah ke Ringgit",
          image: "/images/idrmyr.png",
		  link: './idrmyr'
        },
        {
          title: "PAYPAL to IDR",
          description: "PayPal ke Rupiah",
          image: "/images/paypalidr.png",
		  link: './paypalidr'
        },
      ],
    },
    {
      title: "Top Up E Wallet",
      products: [
        {
          title: "GoPay",
          description: "Fast top-up for popular games with great deals.",
          image: "/images/game-topup.png",
        },
      ],
    },
    {
      title: "Document Services",
      products: [
        {
          title: "Document Editing",
          description: "Professional Word and PDF file editing services.",
          image: "/images/document-editing.png",
        },
      ],
    },
    {
      title: "Creative Services",
      products: [
        {
          title: "Photo & Video Editing",
          description: "Professional photo and video editing services.",
          image: "/images/photo-video-editing.png",
        },
      ],
    },
  ];

  return (
    <div className="product-page bg-blue-950 py-10">
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

                  key={idx}
                  className="product-card bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
				  	src={product.image}
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
  );
};

export default ProductPage;
