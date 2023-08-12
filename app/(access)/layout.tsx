"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Menu,
  Tooltip,
  Typography,
} from "@/components/index";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import logoNameVertical from "@/public/logo/logoNameVertical.png";
import logoBig from "@/public/landingPage/logoBig.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import SideNavContentComp from "@/components/layout/SideNavContent";
import MobileNavContent from "@/components/layout/MobileNavContent";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const { profile } = useProfile();
  // const router = useRouter();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <Box className="flex flex-col">
      <div className="">
        {/* large screens */}
        <div className=" hidden w-full max-w-screen-2xl px-5 md:flex md:items-center md:justify-between">
          <div className="flex flex-grow-0 justify-between md:justify-start">
            {/*Large Logo*/}
            <div className="relative  h-[4rem] w-[10rem]">
              {/* <Image
                      layout="fill"
                      objectFit="contain"
                      src={logoNameVertical}
                      alt="Sidebar Logo"
                      placeholder="blur"
                      priority={true}
                    /> */}
              <Image
                src={logoNameVertical}
                style={{
                  width: "160px",
                  height: "64px",
                  objectFit: "contain",
                }}
                alt="Sidebar Logo"
                placeholder="blur"
                priority={true}
              />
            </div>
          </div>
          <Box sx={{ flexGrow: 0 }} className="flex items-center space-x-4">
            <Tooltip title="Open Notifications">
              <Link
                href="/notifications"
                className={`flex items-center justify-center space-x-2 py-1.5 text-lg font-medium text-gray-500
                        transition-all duration-300 ease-in hover:text-emerald-500 `}
              >
                <NotificationsOutlinedIcon className="text-2xl" />
              </Link>
            </Tooltip>
            <Tooltip title="Open Settings">
              <Link
                href="/settings"
                className={`flex items-center justify-center space-x-2 py-1.5 text-lg font-medium text-gray-500
                        transition-all duration-300 ease-in hover:text-emerald-500 `}
              >
                <SettingsOutlinedIcon className="text-2xl" />
              </Link>
            </Tooltip>
            <Tooltip title="Open user">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  // src={profile2?.profile_image}
                  // alt={profile2?.firstname}
                  className="bg-avatarBG h-[1.8rem] w-[1.8rem]"
                >
                  <Typography className="text-avatarIcon">MD</Typography>
                </Avatar>
              </IconButton>
            </Tooltip>
            <>
              {/* <Tooltip title='Open user'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      src={profile2?.profile_image}
                      alt={profile2?.firstname}
                      className='h-[1.8rem] w-[1.8rem] bg-avatarBG'
                    >
                      <Typography className='text-avatarIcon'>
                        {profile2?.firstname[0]}
                      </Typography>
                    </Avatar>
                  </IconButton>
                </Tooltip> */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <Link
                      href="/profile"
                      onClick={handleCloseUserMenu}
                      className={`flex w-full items-center justify-center space-x-2 px-4 py-1.5 text-lg font-medium text-gray-500
                        transition-all duration-300 ease-in hover:text-emerald-500 `}
                    >
                      <PersonIcon />
                      <span>Profile</span>
                    </Link>
                  </div>

                  {/* log out */}
                  <div className="flex justify-center">
                    <Button
                      className={` flex w-full items-center space-x-2 px-4 py-1.5 text-lg normal-case
                      text-gray-500  transition-all duration-300 ease-in hover:text-emerald-500`}
                      startIcon={<ExitToAppIcon />}
                      onClick={handleCloseUserMenu}
                      // onClick={() => handleLogout()}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </Menu>
            </>
          </Box>
        </div>
        {/* small screens */}
        <div className=" flex w-full items-center justify-between px-3 md:hidden">
          <div className="flex flex-grow-0 justify-between md:justify-start">
            {/* small screens */}
            <IconButton
              aria-label="open small screen drawer"
              onClick={handleMobileOpen}
              edge="end"
              size="small"
              className="mr-4 flex  "
            >
              <MenuOpenIcon />
            </IconButton>
          </div>
          {/*Small Logo*/}
          <div className="relative flex h-[4rem] w-[10rem] ">
            <Image
              style={{
                width: "160px",
                height: "64px",
                objectFit: "contain",
              }}
              src={logoBig}
              alt="Sidebar Logo"
            />
          </div>
          <Box sx={{ flexGrow: 0 }} className="flex items-center space-x-3">
            <Tooltip title="Open Notifications">
              <Link
                href="/notifications"
                className={`flex items-center justify-center space-x-2 py-1.5 text-lg font-medium text-gray-500
                        transition-all duration-300 ease-in hover:text-emerald-500 `}
              >
                <NotificationsOutlinedIcon className="text-2xl" />
              </Link>
            </Tooltip>
            <Tooltip title="Open Settings">
              <Link
                href="/settings"
                className={`flex items-center justify-center space-x-2 py-1.5 text-lg font-medium text-gray-500
                        transition-all duration-300 ease-in hover:text-emerald-500 `}
              >
                <SettingsOutlinedIcon className="text-2xl" />
              </Link>
            </Tooltip>

            <Tooltip title="Open user">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  // src={profile2?.profile_image}
                  // alt={profile2?.firstname}
                  className="bg-avatarBG h-[1.8rem] w-[1.8rem]"
                >
                  <Typography className="text-avatarIcon">MD</Typography>
                </Avatar>
              </IconButton>
            </Tooltip>
            <>
              {/* <Tooltip title='Open user'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      src={profile2?.profile_image}
                      alt={profile2?.firstname}
                      className='h-[1.6rem] w-[1.6rem] bg-avatarBG'
                    >
                      <Typography className='text-avatarIcon'>
                        {profile2?.firstname[0]}
                      </Typography>
                    </Avatar>
                  </IconButton>
                </Tooltip> */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <div className="space-y-2">
                  {/* profile */}
                  <div className="flex justify-center">
                    <Link
                      href="/profile"
                      onClick={handleCloseUserMenu}
                      className={`flex w-full items-center justify-center space-x-2 px-4 py-1.5 text-lg font-medium text-gray-500
                        transition-all   duration-300 ease-in hover:text-emerald-500 `}
                    >
                      <PersonIcon />
                      <span>Profile</span>
                    </Link>
                  </div>
                  {/* log out */}
                  <div className="flex justify-center">
                    <Button
                      className={` flex w-full items-center space-x-2 px-4 py-1.5 text-lg normal-case
                      text-gray-500  transition-all duration-300 ease-in hover:text-emerald-500`}
                      startIcon={<ExitToAppIcon />}
                      onClick={handleCloseUserMenu}
                      // onClick={() => handleLogout()}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </Menu>
            </>
          </Box>
        </div>
      </div>
      <div className="flex">
        <div className=" hidden md:flex">
          <SideNavContentComp />
        </div>
        <div className="page_content ">{children}</div>
      </div>
      <Drawer anchor="left" open={mobileOpen} onClose={handleMobileClose}>
        <MobileNavContent handleMobileClose={handleMobileClose} />
      </Drawer>
    </Box>
  );
}
