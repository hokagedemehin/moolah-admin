"use client";
import React from "react";
import { Typography } from "@mui/material";
import {
  DesktopSVGComponent,
  LoanDisbursedSVGComponent,
  LoanPendingSVGComponent,
  LoanRejectedSVGComponent,
  LoanSVGComponent,
  MobileSVGComponent,
  MobileWebSVGCompponent,
} from "@/public";
import CountUp from "react-countup";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setActive } from "@/store/slices/sideNavSlice";

const DesktopSideNavComp = () => {
  // const [isActive, setIsActive] = useState("users");

  const { active } = useAppSelector((state) => state.sideNav);

  const dispatch = useAppDispatch();

  const handleSetActive = (value: string) => {
    dispatch(setActive(value));
  };

  return (
    <div className="h-screen w-[15rem] bg-sideNavBg p-4">
      <div className="flex flex-col">
        <div className="mb-5">
          <Typography variant="body2" className="font-outfit text-black">
            Good Morning, Seun
          </Typography>
          <Typography
            variant="h5"
            className="font-outfit text-xl font-bold text-black"
          >
            Dashboard
          </Typography>
        </div>
        <div className="space-y-3">
          {/* users */}
          <div
            className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out ${
              active === "users" && " bg-navActive"
            }`}
            onClick={() => handleSetActive("users")}
          >
            <MobileWebSVGCompponent active={active === "users"} />
            <div className="">
              <Typography
                variant="body2"
                className={`font-outfit text-lg font-semibold text-black ${
                  active === "users" && "text-white"
                }`}
              >
                <CountUp end={38743} duration={3} />
              </Typography>
              <Typography
                variant="body2"
                className={`font-outfit text-xs text-black ${
                  active === "users" && "text-white"
                }`}
              >
                Total number of users
              </Typography>
            </div>
          </div>

          {/* mobile users */}
          <div
            className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out ${
              active === "mobile" && " bg-navActive"
            }`}
            onClick={() => handleSetActive("mobile")}
          >
            <MobileSVGComponent active={active === "mobile"} />
            <div className="">
              <Typography
                variant="body2"
                className={`font-outfit text-lg font-semibold text-black ${
                  active === "mobile" && "text-white"
                }`}
              >
                <CountUp end={23738} duration={3} />
              </Typography>
              <Typography
                variant="body2"
                className={`font-outfit text-xs text-black ${
                  active === "mobile" && "text-white"
                }`}
              >
                Total mobile users
              </Typography>
            </div>
          </div>

          {/* web users */}
          <div
            className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out ${
              active === "web" && " bg-navActive"
            }`}
            onClick={() => handleSetActive("web")}
          >
            <DesktopSVGComponent active={active === "web"} />
            <div className="">
              <Typography
                variant="body2"
                className={`font-outfit text-lg font-semibold text-black ${
                  active === "web" && "text-white"
                }`}
              >
                <CountUp end={15005} duration={3} />
              </Typography>
              <Typography
                variant="body2"
                className={`font-outfit text-xs text-black ${
                  active === "web" && "text-white"
                }`}
              >
                Total web users
              </Typography>
            </div>
          </div>

          {/* loan requests */}
          <div
            className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out ${
              active === "loan-requests" && " bg-navActive"
            }`}
            onClick={() => handleSetActive("loan-requests")}
          >
            <LoanSVGComponent active={active === "loan-requests"} />
            <div className="">
              <Typography
                variant="body2"
                className={`font-outfit text-lg font-semibold text-black ${
                  active === "loan-requests" && "text-white"
                }`}
              >
                <CountUp end={958322} duration={3} />
              </Typography>
              <Typography
                variant="body2"
                className={`font-outfit text-xs text-black ${
                  active === "loan-requests" && "text-white"
                }`}
              >
                Total loans requests
              </Typography>
            </div>
          </div>

          {/* loan pending */}
          <div
            className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out ${
              active === "loan-pending" && " bg-navActive"
            }`}
            onClick={() => handleSetActive("loan-pending")}
          >
            <LoanPendingSVGComponent active={active === "loan-pending"} />
            <div className="">
              <Typography
                variant="body2"
                className={`font-outfit text-lg font-semibold text-black ${
                  active === "loan-pending" && "text-white"
                }`}
              >
                <CountUp end={204382} duration={3} />
              </Typography>
              <Typography
                variant="body2"
                className={`font-outfit text-xs text-black ${
                  active === "loan-pending" && "text-white"
                }`}
              >
                Total loans pending
              </Typography>
            </div>
          </div>

          {/* loan rejected */}
          <div
            className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out ${
              active === "loan-rejected" && " bg-navActive"
            }`}
            onClick={() => handleSetActive("loan-rejected")}
          >
            <LoanRejectedSVGComponent active={active === "loan-rejected"} />
            <div className="">
              <Typography
                variant="body2"
                className={`font-outfit text-lg font-semibold text-black ${
                  active === "loan-rejected" && "text-white"
                }`}
              >
                <CountUp end={748321} duration={3} />
              </Typography>
              <Typography
                variant="body2"
                className={`font-outfit text-xs text-black ${
                  active === "loan-rejected" && "text-white"
                }`}
              >
                Total loans rejected
              </Typography>
            </div>
          </div>

          {/* loan disbursed */}
          <div
            className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out ${
              active === "loan-disbursed" && " bg-navActive"
            }`}
            onClick={() => handleSetActive("loan-disbursed")}
          >
            <LoanDisbursedSVGComponent active={active === "loan-disbursed"} />
            <div className="">
              <Typography
                variant="body2"
                className={`font-outfit text-lg font-semibold text-black ${
                  active === "loan-disbursed" && "text-white"
                }`}
              >
                <CountUp end={233483} duration={3} />
              </Typography>
              <Typography
                variant="body2"
                className={`font-outfit text-xs text-black ${
                  active === "loan-disbursed" && "text-white"
                }`}
              >
                Total loans disbursed
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSideNavComp;
