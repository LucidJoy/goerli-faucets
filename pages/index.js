import Link from "next/link";
import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";

import Button from "../components/Button";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";

const Home = ({ faucets }) => {
  return (
    <div>
      <div className='flexCenter w-full p-4'>
        {/* calc height - navbar height (not working) */}
        <div className='mt-16'>
          {faucets?.map((faucet, i) => (
            <div key={i} className='mt-5'>
              <Tilt>
                <div className='white-glassmorphism p-4 rounded-lg min-w-[400px] flex flex-col items-center'>
                  <div className='h-11 w-11'>
                    <Link href={faucet.link} target='_blank' rel='noreferrer'>
                      <img
                        src={urlFor(faucet.image)}
                        alt=''
                        className='rounded-md'
                      />
                    </Link>
                  </div>
                  <p className='font-poppins mt-2 font-bold text-lg'>
                    {faucet.name}
                  </p>
                  {/* <Link href={faucet.link} target='_blank' rel='noreferrer'>
                  Visit site
                </Link> */}

                  <div className='flex flex-col mt-4 mb-2'>
                    <p className='font-poppins text-sm'>
                      <span
                        className='font-semibold
                    '
                      >
                        {" "}
                        Amount:{" "}
                      </span>
                      {faucet.amount}
                    </p>
                    <p className='font-poppins text-sm'>
                      <span
                        className='font-semibold
                    '
                      >
                        {" "}
                        Balance:{" "}
                      </span>
                      {faucet.balance}
                    </p>
                    <p className='font-poppins text-sm'>
                      <span
                        className='font-semibold
                    '
                      >
                        {" "}
                        Wallet address:{" "}
                      </span>{" "}
                      <Link
                        href={`https://goerli.etherscan.io/address/${faucet.walletAddress}`}
                      >
                        {faucet.walletAddress.slice(0, 6)} . . .{" "}
                        {faucet.walletAddress.slice(
                          faucet.walletAddress.length - 6,
                          faucet.walletAddress
                        )}
                      </Link>
                    </p>
                  </div>

                  <Link href={faucet.link} target='_blank' rel='noreferrer'>
                    <Button btnName='Visit' />
                  </Link>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>

      {/* <div className='flex-1'>joy</div> */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "faucet"]';
  const faucets = await client.fetch(query);

  return {
    props: { faucets },
  };
};

export default Home;
