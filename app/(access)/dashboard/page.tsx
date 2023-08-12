"use client";
import AllUsersComp from "@/components/dashboard/AllUsers";
import DesktopSideNavComp from "@/components/dashboard/DesktopSideNav";
import LoanRejected from "@/components/dashboard/LoanRejected";
import LoansDisbursed from "@/components/dashboard/LoansDisbursed";
import LoansPending from "@/components/dashboard/LoansPending";
import MobileSideNavPage from "@/components/dashboard/MobileSideNav";
import MobileUsersComp from "@/components/dashboard/MobileUsers";
import TotalLoansComp from "@/components/dashboard/TotalLoans";
import WebUsersComp from "@/components/dashboard/WebUsers";
import { useAppSelector } from "@/store/store";
import React from "react";

const DahsboardScreen = () => {
  const { active } = useAppSelector((state) => state.sideNav);

  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      <div className="flex flex-col lg:flex-row">
        <div className="">
          <div className="hidden lg:block">
            <DesktopSideNavComp />
          </div>
          <div className="block lg:hidden">
            <MobileSideNavPage />
          </div>
        </div>
        <div className="relative w-full px-5 py-4">
          {active === "users" && <AllUsersComp />}
          {active === "mobile" && <MobileUsersComp />}
          {active === "web" && <WebUsersComp />}
          {active === "loan-requests" && <TotalLoansComp />}
          {active === "loan-pending" && <LoansPending />}
          {active === "loan-rejected" && <LoanRejected />}
          {active === "loan-disbursed" && <LoansDisbursed />}
        </div>
      </div>
    </main>
  );
};

export default DahsboardScreen;
