"use client";

import { useState } from "react";
import { FaCartShopping, FaHeart, FaRegHeart } from "react-icons/fa6";

export default function NewArrivals() {
  const arrivals = [
    {
      name: "Nike SB Dunk Low Pro",
      image: "/assets/product/nike-dunk.jpg",
      price: "Rp 1.909.000",
    },
    {
      name: "Adidas Samba OG",
      image: "/assets/product/adidas.jpg",
      price: "Rp 2.000.000",
    },
    {
      name: "Onitsuka Tiger Tokuten",
      image: "/assets/product/onitsuka.jpg",
      price: "Rp 2.500.000",
    },
    {
      name: "Converse One Star",
      image: "/assets/product/converse.jpg",
      price: "Rp 1.499.000",
    },
  ];

  function Card({ item }) {
    const [isList, setIsList] = useState(false);
    const [isHover, setIsHover] = useState(false);

    return (
      <div className="relative rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300">
        <button
          className="absolute right-5 top-5 group"
          onClick={() => setIsList(!isList)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isList || isHover ? (
            <FaHeart size={20} className="text-orange-400 cursor-pointer" />
          ) : (
            <FaRegHeart size={20} className="text-orange-400 cursor-pointer" />
          )}
        </button>

        <img
          src={item.image}
          alt={item.name}
          className="w-full aspect-[1/1] object-cover rounded-xl"
        />

        <div className="p-6 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-gray-500 transition">
            {item.name}
          </h3>
          <p className="text-gold font-bold">{item.price}</p>
          <div className="flex w-full gap-2">
            <button className="border border-orange-400 bg-orange-400 text-white rounded-lg p-2 cursor-pointer hover:bg-transparent hover:text-orange-400 transition duration-300">
              <FaCartShopping size={20} />
            </button>
            <button className="w-full border border-orange-400 rounded-lg text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300 cursor-pointer">
              Buy now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full px-8 md:px-20 py-24 bg-light-grey">
      <div className="flex flex-col gap-2 mb-14">
        <h2 className="text-4xl md:text-2xl font-montserrat uppercase tracking-wider">
          New Arrivals
        </h2>
        <div className="w-20 h-0.5 bg-orange-400 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {arrivals.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
