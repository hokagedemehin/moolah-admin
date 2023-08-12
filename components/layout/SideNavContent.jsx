import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import { Tooltip } from "@mui/material";
import { BsGrid } from "react-icons/bs";
import { TbArrowsDownUp } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { usePathname } from "next/navigation";

const SideNavContentComp = () => {
  // const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <div className="min-h-[75vh] space-y-5">
        {/* home */}
        <div className="">
          <Link
            href="/dashboard"
            className={`${
              pathname == "/dashboard"
                ? "m-4 rounded-lg bg-mainNavAciveBg text-mainNavTextActive hover:bg-green-200"
                : "m-4 text-gray-500 hover:text-mainNavTextActive"
            } flex items-center space-x-4 px-4 py-2  transition-all duration-300 ease-in  `}
          >
            <Tooltip title="Dashboard" placement="right">
              <div className="flex items-center space-x-2">
                <BsGrid className="text-xl" />
                <span className={`font-fam1 text-lg tracking-wider`}>
                  Dashboard
                </span>
              </div>
            </Tooltip>
          </Link>
        </div>

        {/* loans */}
        <div className="">
          <Link
            href="/loans"
            className={`${
              pathname == "/loans" || pathname == "/loans/[id]"
                ? "m-4 rounded-lg bg-mainNavAciveBg text-mainNavTextActive hover:bg-green-200"
                : "m-4 text-gray-500 hover:text-mainNavTextActive"
            } flex items-center space-x-4 px-4 py-2  transition-all duration-300 ease-in  `}
          >
            <Tooltip title="Loans" placement="right">
              <div className="flex items-center space-x-2">
                <TbArrowsDownUp className="text-xl" />
                <span className={`font-fam1 text-lg tracking-wider`}>
                  Loans
                </span>
              </div>
            </Tooltip>
          </Link>
        </div>

        {/* users */}
        <div className="">
          <Link
            href="/users"
            className={`${
              pathname == "/users"
                ? "m-4 rounded-lg bg-mainNavAciveBg text-mainNavTextActive hover:bg-green-200"
                : "m-4 text-gray-500 hover:text-mainNavTextActive"
            } flex items-center space-x-4 px-4 py-2  transition-all duration-300 ease-in  `}
          >
            <Tooltip title="Networks" placement="right">
              <div className="flex items-center space-x-2">
                <HiOutlineUserGroup className="text-xl" />
                <span className={`font-fam1 text-lg tracking-wider`}>
                  Users
                </span>
              </div>
            </Tooltip>
          </Link>
        </div>

        {/* accounts */}
        {/* <div className=''>
          <Link href='/accounts' passHref>
            <Tooltip title='Accounts' placement='right'>
              <a
                className={`${
                  router.asPath == '/accounts'
                    ? 'm-4 rounded-lg bg-green-100 text-emerald-500 hover:bg-green-200'
                    : 'm-4 text-gray-500 hover:text-emerald-500 '
                } flex items-center space-x-4 py-2 px-4  transition-all duration-300 ease-in `}
              >
                <CreditCardIcon />
                <span
                  className={`font-fam1 text-lg font-semibold tracking-wider`}
                >
                  Accounts
                </span>
              </a>
            </Tooltip>
          </Link>
        </div> */}

        {/* settings */}
        {/* <div className=''>
          <Link href='/settings' passHref>
            <Tooltip title='Settings' placement='right'>
              <a
                className={`${
                  router.asPath == '/settings'
                    ? 'm-4 rounded-lg bg-green-100 text-emerald-500 hover:bg-green-200'
                    : 'm-4 text-gray-500 hover:text-emerald-500'
                } flex items-center space-x-4 py-2 px-4  transition-all duration-300 ease-in `}
              >
                <SettingsIcon className='' />
                <span
                  className={`font-fam1 text-lg font-semibold tracking-wider`}
                >
                  Settings
                </span>
              </a>
            </Tooltip>
          </Link>
        </div> */}

        {/* Reporting */}
        {/* <div className="">
          <Link href="/reporting" passHref>
            <Tooltip title="Reporting" placement="right">
              <a
                className={`${
                  router.asPath == "/reporting"
                    ? "m-4 rounded-lg bg-green-100 text-emerald-500 hover:bg-green-200"
                    : "m-4 text-gray-500 hover:text-emerald-500"
                } flex items-center space-x-4 px-4 py-2  transition-all duration-300 ease-in `}
              >
                <BiChalkboard className="text-xl" />
                <span className={`font-fam1 text-lg tracking-wider`}>
                  Reporting
                </span>
              </a>
            </Tooltip>
          </Link>
        </div> */}
      </div>
      {/* <div className='relative h-[4rem] w-full'>
        <Image
          layout='fill'
          objectFit='contain'
          src={logoNameVertical}
          alt='Sidebar Logo'
        />
      </div> */}
    </div>
  );
};

export default SideNavContentComp;
