import React from "react";

const Button = ({ btnName }) => {
  return (
    <button
      className={`nft-gradient text-sm minlg:text-lg px-6 py-2 minlg:px-8 font-poppins font-semibold text-nft-black-1 transition ease-in-out duration-300 hover:scale-105 rounded-lg mt-5`}
    >
      {btnName}
    </button>
  );
};

export default Button;
