import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import images from '../assets';
import Button from './Button';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-5">
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Link href="/">

              <Image src={images.logo} objectFit="contain" width={40} height={40} alt="logo" />
            </Link>
            <p className=" dark:text-white text-nft-dark font-semibold text-lg ml-1">CriptoArts</p>
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">Get the latest updates</p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-lg">
            <input type="email" placeholder="Your Email" className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none" />
            <div className="flex-initial">
              <Button
                btnName="Email me"
                btnType="primary"
                classStyles="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7 mb-0">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">Copyright © 2022 CriptoArts </p>
          <div className="flex flex-row sm:mt-4">
            <div className={`${theme === 'light' ? 'filter invert' : ''} space-x-6`}>
              <a target="_blank" href="https://www.instagram.com/criptoartsnft/" alt="youtube" rel="noreferrer">
                <Image src={images.instagram} objectFit="contain" className="cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 transition duration-500" width={24} height={24} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
