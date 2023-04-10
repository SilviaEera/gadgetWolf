/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Layout = ({ title, children }) => {
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
              <Link href={"./cart"}>
                <span className="p-2">Cart</span>
              </Link>
              <Link href={"./login"}>
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
