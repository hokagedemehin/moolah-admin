import React from "react";
import Link from "next/link";
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import { Typography } from '@mui/material';
import Image from "next/image";
import logoNameVertical from "../../public/landingPage/logoNameVertical.png";
// import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
// import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { BsGrid } from "react-icons/bs";
import { TbArrowsDownUp } from "react-icons/tb";
// import { BsFileText } from 'react-icons/bs';
import { HiOutlineUserGroup } from "react-icons/hi";
// import { FiFileText } from 'react-icons/fi';
import { usePathname } from "next/navigation";

const MobileNavContent = ({ handleMobileClose }) => {
  const pathname = usePathname();
  return (
    <div className=" dash_sidebar w-[15rem]">
      <div className="relative mb-6 h-[4rem] w-full">
        <Image
          layout="fill"
          objectFit="contain"
          src={logoNameVertical}
          alt="Sidebar Logo"
        />
      </div>
      <div className="min-h-[82vh] space-y-5 ">
        {/* home */}
        <div className="">
          <Link
            onClick={handleMobileClose}
            href="/dashboard"
            className={`${
              pathname == "/dashboard"
                ? "m-4 rounded-lg bg-mainNavAciveBg text-mainNavTextActive hover:bg-green-200"
                : "m-4 text-gray-500 hover:text-mainNavTextActive"
            } flex items-center space-x-4 px-4 py-2  transition-all duration-300 ease-in  `}
          >
            <div className="flex items-center space-x-2">
              <BsGrid className="text-xl" />
              <span className={`font-fam1 text-lg tracking-wider`}>
                Dashboard
              </span>
            </div>
          </Link>
        </div>

        {/* loans */}
        <div className="">
          <Link
            href="/loans"
            onClick={handleMobileClose}
            className={`${
              pathname == "/loans" || pathname == "/loans/[id]"
                ? "m-4 rounded-lg bg-mainNavAciveBg text-mainNavTextActive hover:bg-green-200"
                : "m-4 text-gray-500 hover:text-mainNavTextActive"
            } flex items-center space-x-4 px-4 py-2  transition-all duration-300 ease-in  `}
          >
            <div className="flex items-center space-x-2">
              <TbArrowsDownUp className="text-xl" />

              <span className={`font-fam1 text-lg tracking-wider`}>Loans</span>
            </div>
          </Link>
        </div>

        {/* users */}
        <div className="">
          <Link
            href="/users"
            onClick={handleMobileClose}
            className={`${
              pathname == "/users"
                ? "m-4 rounded-lg bg-mainNavAciveBg text-mainNavTextActive hover:bg-green-200"
                : "m-4 text-gray-500 hover:text-mainNavTextActive"
            } flex items-center space-x-4 px-4 py-2  transition-all duration-300 ease-in  `}
          >
            <div className="flex items-center space-x-2">
              <HiOutlineUserGroup className="text-xl" />

              <span className={`font-fam1 text-lg tracking-wider`}>Users</span>
            </div>
          </Link>
        </div>

        {/* Reporting */}
        {/* <div className="">
          <Link href="/reporting" passHref>
            <a
              className={`${
                pathname == "/reporting"
                  ? "bg-green-100 text-emerald-500 hover:bg-green-200"
                  : "text-gray-500 hover:text-emerald-500"
              } flex items-center space-x-4 px-4 py-2  transition-all duration-300 ease-in `}
            >
              <BiChalkboard className="text-xl" />
              <span className={`font-fam1 text-lg tracking-wider`}>
                Reporting
              </span>
            </a>
          </Link>
        </div> */}

        {/* settings */}
        {/* <div className="">
          <Link href="/settings" passHref>
            <a
              className={`${
                pathname == "/settings"
                  ? "bg-green-100 text-emerald-500 hover:bg-green-200"
                  : "text-gray-500 hover:text-emerald-500 "
              } flex items-center space-x-4 px-4 py-2  transition-all duration-300 ease-in `}
            >
              <SettingsOutlinedIcon />
              <span className={`font-fam1 text-lg tracking-wider`}>
                Settings
              </span>
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default MobileNavContent;
