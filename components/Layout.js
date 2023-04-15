/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../utils/Store";

const Layout = ({ title, children }) => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Head>
        <title>{title ? title + "-Gadget Wolf" : "Gadget Wolf"}</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-24 items-center px-4 justify-between shadow-md">
            <Link href={"/"}>
              <img
                src="https://gadgetsbysadi.com/wp-content/uploads/2023/03/photo_2023-03-09_22-24-44-removebg-preview.png"
                alt=""
                style={{
                  width: "100px",
                }}
                className="logo"
              />
            </Link>
            <div className="navLinks">
              <Link href={"/cart"}>
                <span className="p-2">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-yellow-300 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </span>
              </Link>
              <Link href={"/login"}>
                <span className="p-2">Login</span>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner text-sm">
          Copyright &copy; ParrotSoft 2023
        </footer>
      </div>
    </>
  );
};

export default Layout;
