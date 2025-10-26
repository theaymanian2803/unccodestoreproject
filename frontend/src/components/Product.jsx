import React from "react";

function Product({ product }) {
  return (
    <li className=" overflow-hidden">
      <a href="/id" className="group overflow-hidden ">
        <img
          src={product.image}
          alt="image"
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
        />

        <div className="relative flex justify-between  p-3">
          <h3 className="text-sm md:text-2xl text-gray-600 underline ">
            {product.name}
          </h3>
          <h3 className="text-sm md:text-2xl text-gray-600 underline ">
            {product.price}
          </h3>
        </div>
      </a>
    </li>
  );
}

export default Product;
