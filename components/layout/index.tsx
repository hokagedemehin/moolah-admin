import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Menu,
  MuiAppBar,
  MuiDrawer,
  Toolbar,
  Tooltip,
  Typography,
} from "@/components/index";
import Image from "next/image";
import logoNameVertical from "@/public/logo/logoNameVertical.png";
import logoBig from "@/public/landingPage/logoBig.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import MobileNavContent from "@/components/layout/MobileNavContent";
// import { useRouter } from "next/navigation";
import SideNavContentComp from "@/components/layout/SideNavContent";

const drawerWidth = 220;

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  // })(({ theme, open }) => ({
})(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    zIndex: theme.zIndex.drawer + 1,
  },
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // ...(open && {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}));

const CustomDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
  boxSizing: "border-box",
}));

const HomeLayout = () => {
  // const [open] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // const { profile } = useProfile();
  // const router = useRouter();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

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
    <div>
      <Box
        sx={{ display: "flex" }}
        className="transition-all duration-300 ease-in"
      >
        {/* large screen */}
        <CustomAppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          className=" hidden bg-white text-emerald-500 shadow-none backdrop-blur-lg backdrop-filter md:flex "
        >
          <Toolbar className="">
            <div className=" flex w-full max-w-screen-2xl items-center justify-between">
              <div className="flex flex-grow-0 justify-between md:justify-start">
                {/* small screens */}
                <IconButton
                  aria-label="open small screen drawer"
                  onClick={handleMobileOpen}
                  edge="end"
                  size="small"
                  className="mr-4 flex  md:hidden"
                >
                  <MenuOpenIcon />
                </IconButton>

                {/*Large Logo*/}
                <div className="relative hidden h-[4rem] w-[10rem] md:flex">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={logoNameVertical}
                    alt="Sidebar Logo"
                    placeholder="blur"
                    priority={true}
                  />
                </div>
              </div>
              {/*Small Logo*/}
              <div className="relative flex h-[4rem] w-[10rem] md:hidden">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={logoBig}
                  alt="Sidebar Logo"
                />
              </div>
              <Box sx={{ flexGrow: 0 }} className="flex items-center space-x-4">
                <Tooltip title="Open Notifications">
                  <IconButton
                    // onClick={handleNotifications}
                    sx={{ p: 0 }}
                    // className='mr-3'
                  >
                    {/* {notificationListData?.length > 0 && (
                  <Badge color='error' variant='dot'>
                    <NotificationsOutlinedIcon />
                  </Badge>
                )}
                {notificationListData?.length == 0 && (
                  <NotificationsOutlinedIcon className='text-2xl' />
                )} */}
                    <NotificationsOutlinedIcon className="text-2xl" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open Settings">
                  <IconButton
                    // onClick={handleSettings}
                    sx={{ p: 0 }}
                    // className='mr-3'
                  >
                    <SettingsOutlinedIcon className="text-2xl" />
                  </IconButton>
                </Tooltip>
                <Avatar
                  // src={profile2?.profile_image}
                  // alt={profile2?.firstname}
                  className="bg-avatarBG h-[1.8rem] w-[1.8rem]"
                >
                  <Typography className="text-avatarIcon">MD</Typography>
                </Avatar>
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
          </Toolbar>
        </CustomAppBar>

        <CustomDrawer
          variant="permanent"
          anchor="left"
          // open={open}
          className="tw-hidden tw-h-screen tw-max-w-screen-2xl !tw-border-none md:tw-flex"
        >
          <Toolbar />

          <div className="dash_sidebar tw-pt-0.5">
            <SideNavContentComp />
          </div>
        </CustomDrawer>

        {/* small screen */}
        <CustomAppBar
          position="fixed"
          className=" flex border  border-solid border-gray-300 bg-white bg-opacity-60 text-emerald-500 shadow-none backdrop-blur-lg backdrop-filter md:hidden "
        >
          <Toolbar className="">
            <div className=" flex w-full max-w-screen-2xl items-center justify-between">
              <div className="flex flex-grow-0 justify-between md:justify-start">
                {/* small screens */}
                <IconButton
                  aria-label="open small screen drawer"
                  onClick={handleMobileOpen}
                  edge="end"
                  size="small"
                  className="mr-4 flex  md:hidden"
                >
                  <MenuOpenIcon />
                </IconButton>

                {/*Large Logo*/}
                <div className="relative hidden h-[4rem] w-[10rem] md:flex">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={logoNameVertical}
                    alt="Sidebar Logo"
                    placeholder="blur"
                    priority={true}
                  />
                </div>
              </div>
              {/*Small Logo*/}
              <div className="relative flex h-[4rem] w-[10rem] md:hidden">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={logoBig}
                  alt="Sidebar Logo"
                />
              </div>
              <Box sx={{ flexGrow: 0 }} className="flex items-center space-x-3">
                <Tooltip title="Open Notifications">
                  <IconButton
                    // onClick={handleNotifications}
                    sx={{ p: 0 }}
                    // className='mr-3'
                  >
                    {/* {notificationListData?.length > 0 && (
                  <Badge color='error' variant='dot'>
                    <NotificationsOutlinedIcon />
                  </Badge>
                )}
                {notificationListData?.length == 0 && (
                  <NotificationsOutlinedIcon className='text-2xl' />
                )} */}
                    <NotificationsOutlinedIcon className="text-2xl" />
                  </IconButton>
                </Tooltip>
                <Avatar
                  // src={profile2?.profile_image}
                  // alt={profile2?.firstname}
                  className="bg-avatarBG h-[1.8rem] w-[1.8rem]"
                >
                  <Typography className="text-avatarIcon">MD</Typography>
                </Avatar>

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
          </Toolbar>
        </CustomAppBar>

        <Drawer anchor="left" open={mobileOpen} onClose={handleMobileClose}>
          <MobileNavContent handleMobileClose={handleMobileClose} />
        </Drawer>
        {/* <Box
      component='main'
      sx={{ flexGrow: 1 }}
      className='max-w-screen-2xl bg-background py-[0.8rem]'
    >
      <DrawerHeader />
      {children}
    </Box> */}
      </Box>
    </div>
  );
};

export default HomeLayout;
