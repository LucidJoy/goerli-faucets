import React from "react";
import Image from "next/image";

import { logoBig, logoSmall } from "../assets";
// import imgLogo from "../assets/logoBig.png";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-around w-screen fixed z-10 p-4 flex-row bg-nft-dark border-b border-nft-black-1'>
      <Image src={logoBig} alt='' className='w-[130px] h-[58.5px]' />
    </nav>
  );
};

export default Navbar;
