import React from "react";
import { Container, Logo } from "../index";
import LinksComp from "./LinksComp";
import searchIcon from "../../assets/search-icon.svg"
import cartIcon from "../../assets/cart-icon.svg"

function Header() {
  return (
    <header className="bg-white">
      <Container>
        <div className="flex w-full h-16">
          {/* row one */}
          <div className="h-full flex-1 ">
            <ul className=" h-full flex  flex-row items-start justify-start gap-6">
              <LinksComp to="/store">buy t-shirts</LinksComp>
              <LinksComp to="/women">women</LinksComp>
              <LinksComp to="/men">men</LinksComp>
              <LinksComp to="/about">About</LinksComp>
              <LinksComp to="/contact">contact</LinksComp>
            </ul>
          </div>
          {/* row two */}
          <div className=" ">
            <Logo />
          </div>
          {/* ROw three */}
          <div className="flex-1 h-full ">
            <ul className="h-full flex  flex-row items-center justify-end gap-16">
              <li className="w6 h-6 p-[1px] cursor-pointer">
                <img
                  src={searchIcon}
                  alt="search"
                  className="object-center w-full h-full"
                />
              </li>
              <li className=" cursor-pointer gap-2  h-6 text-sm flex justify-between items-center flex-row">
                <div className="h-full">
                  <span className="font-semibold">&#x24;</span>
                  <span className="font-semibold">100</span>
                </div>
                <div className="w-5 h-full  relative">
                  <img
                    src={cartIcon}
                    alt="search"
                    className="object-center w-full h-full"
                  />
                  <div className="w-4 text-white flex items-center justify-center p-2 text-xs h-4 rounded-full bg-black absolute -top-2 -right-2">
                    0
                  </div>
                </div>
              </li>
              <LinksComp to="/login">Login</LinksComp>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
