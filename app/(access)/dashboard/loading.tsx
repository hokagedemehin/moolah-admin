"use client";
import React from "react";
import { Skeleton } from "@/components/index";
const Loading = () => {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-col lg:flex-row">
        <div className="">
          <div className="hidden lg:block">
            <div className="h-screen w-[15rem] bg-sideNavBg p-4">
              <div className="flex flex-col">
                <div className="mb-5">
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: "1.2rem",
                    }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: "1.2rem",
                    }}
                  />
                </div>
                <div className="space-y-3">
                  {/* users */}
                  <div
                    className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out`}
                  >
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "2.2rem",
                      }}
                    />
                  </div>

                  {/* mobile users */}
                  <div
                    className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out`}
                  >
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "2.2rem",
                      }}
                    />
                  </div>

                  {/* web users */}
                  <div
                    className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out`}
                  >
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "2.2rem",
                      }}
                    />
                  </div>

                  {/* loan requests */}
                  <div
                    className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out`}
                  >
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "2.2rem",
                      }}
                    />
                  </div>

                  {/* loan pending */}
                  <div
                    className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out`}
                  >
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "2.2rem",
                      }}
                    />
                  </div>

                  {/* loan rejected */}
                  <div
                    className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out`}
                  >
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "2.2rem",
                      }}
                    />
                  </div>

                  {/* loan disbursed */}
                  <div
                    className={`flex cursor-pointer items-center space-x-3 rounded-lg p-2 transition duration-300 ease-in-out`}
                  >
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "2.2rem",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full px-5 py-4">
          <AllUsersComp />
        </div> */}
      </div>
    </main>
  );
};

export default Loading;
