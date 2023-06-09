/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../../../components/Layout";
import data from "../../../utils/data";
import { Store } from "../../../utils/Store";

const ProductScreen = () => {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (quantity > product.contentInStock) {
      alert("Sorry. Product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };
  return (
    <>
      <Layout title={product?.name}>
        <div className="py-2">
          <Link href={"/"}>Back to products</Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:col-span-2">
            <img
              className="h-full w-full object-cover"
              src={product?.image}
              alt={product?.name}
            />
          </div>
          <div>
            <ul>
              <li>
                <h1 className="text-2xl">{product?.name}</h1>
              </li>
              <li>{product?.category}</li>
              <li>{product?.brand}</li>
              <li>
                {product?.rating} of {product?.numReviews} reviews
              </li>
              <li>{product?.price}</li>
              <li>{product?.description}</li>
            </ul>
          </div>
          <div>
            <div className="card p-5">
              <div className="mb-2 flex justify-between items-center">
                <p>Price</p>
                <p>{product?.price}</p>
              </div>
              <div className="mb-2 flex justify-between items-center">
                <p>Status</p>
                <p>
                  {product?.contentInStock > 0 ? "In Stock" : "Out Of Stock"}
                </p>
              </div>
              <button
                className="primary-button w-full "
                onClick={addToCartHandler}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductScreen;
