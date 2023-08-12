"use client";
import React from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { FormControl, MenuItem, Select, Typography } from "@/components/index";
import {
  DesktopSVGComponent,
  LoanDisbursedSVGComponent,
  LoanPendingSVGComponent,
  LoanRejectedSVGComponent,
  LoanSVGComponent,
  MobileSVGComponent,
  MobileWebSVGCompponent,
} from "@/public";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setActive } from "@/store/slices/sideNavSlice";

const MobileSideNavPage = () => {
  const { active } = useAppSelector((state) => state.sideNav);

  const dispatch = useAppDispatch();

  const handleSetActive = (event: SelectChangeEvent) => {
    dispatch(setActive(event.target.value));
  };

  return (
    <div className="p-4">
      <FormControl
        sx={{
          minWidth: 120,
        }}
        size="small"
      >
        <Select value={active} onChange={handleSetActive}>
          {/* users */}
          <MenuItem
            value="users"
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#00A651",
              },
            }}
          >
            <div className={`flex items-center space-x-3`}>
              <MobileWebSVGCompponent active={false} />
              <div className="">
                <Typography
                  variant="body2"
                  className={`font-outfit text-lg font-semibold text-black`}
                >
                  {new Intl.NumberFormat("en-US").format(38743)}
                </Typography>
                <Typography
                  variant="body2"
                  className={`font-outfit text-xs text-black`}
                >
                  Total number of users
                </Typography>
              </div>
            </div>
          </MenuItem>

          {/* mobile users */}
          <MenuItem value="mobile">
            <div className={`flex items-center space-x-3`}>
              <MobileSVGComponent active={false} />
              <div className="">
                <Typography
                  variant="body2"
                  className={`font-outfit text-lg font-semibold text-black`}
                >
                  {new Intl.NumberFormat("en-US").format(23738)}
                </Typography>
                <Typography
                  variant="body2"
                  className={`font-outfit text-xs text-black`}
                >
                  Total mobile users
                </Typography>
              </div>
            </div>
          </MenuItem>

          {/* web users */}
          <MenuItem value="web">
            <div className={`flex items-center space-x-3`}>
              <DesktopSVGComponent active={false} />
              <div className="">
                <Typography
                  variant="body2"
                  className={`font-outfit text-lg font-semibold text-black`}
                >
                  {new Intl.NumberFormat("en-US").format(15005)}
                </Typography>
                <Typography
                  variant="body2"
                  className={`font-outfit text-xs text-black`}
                >
                  Total web users
                </Typography>
              </div>
            </div>
          </MenuItem>

          {/* loan requests */}
          <MenuItem value="loan-requests">
            <div className={`flex items-center space-x-3`}>
              <LoanSVGComponent active={false} />
              <div className="">
                <Typography
                  variant="body2"
                  className={`font-outfit text-lg font-semibold text-black`}
                >
                  {new Intl.NumberFormat("en-US").format(958322)}
                </Typography>
                <Typography
                  variant="body2"
                  className={`font-outfit text-xs text-black`}
                >
                  Total loans requests
                </Typography>
              </div>
            </div>
          </MenuItem>

          {/* loan pending */}
          <MenuItem value="loan-pending">
            <div className={`flex items-center space-x-3`}>
              <LoanPendingSVGComponent active={false} />
              <div className="">
                <Typography
                  variant="body2"
                  className={`font-outfit text-lg font-semibold text-black`}
                >
                  {new Intl.NumberFormat("en-US").format(204382)}
                </Typography>
                <Typography
                  variant="body2"
                  className={`font-outfit text-xs text-black`}
                >
                  Total loans pending
                </Typography>
              </div>
            </div>
          </MenuItem>

          {/* loan rejected */}
          <MenuItem value="loan-rejected">
            <div className={`flex items-center space-x-3`}>
              <LoanRejectedSVGComponent active={false} />
              <div className="">
                <Typography
                  variant="body2"
                  className={`font-outfit text-lg font-semibold text-black`}
                >
                  {new Intl.NumberFormat("en-US").format(748321)}
                </Typography>
                <Typography
                  variant="body2"
                  className={`font-outfit text-xs text-black`}
                >
                  Total loans rejected
                </Typography>
              </div>
            </div>
          </MenuItem>

          {/* loan disbursed */}
          <MenuItem value="loan-disbursed">
            <div className={`flex items-center space-x-3`}>
              <LoanDisbursedSVGComponent active={false} />
              <div className="">
                <Typography
                  variant="body2"
                  className={`font-outfit text-lg font-semibold text-black`}
                >
                  {new Intl.NumberFormat("en-US").format(233483)}
                </Typography>
                <Typography
                  variant="body2"
                  className={`font-outfit text-xs text-black`}
                >
                  Total loans rejected
                </Typography>
              </div>
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default MobileSideNavPage;
