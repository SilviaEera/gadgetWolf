/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.name}`}>
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "200px", height: "200px" }}
            className=" rounded"
          />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center">
        <Link href={`/product/${product.name}`}>
          <div className="text-center">
            <h2 className="text-2xl font-bold">{product.name}</h2>
          </div>
        </Link>
        <p className="brand mb-2">{product.brand}</p>
        <p className="price mb-3">{product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
