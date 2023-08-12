"use client";
import React, { useEffect, useState } from "react";
import {
  Typography,
  faker,
  FormControl,
  MenuItem,
  Select,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  DataGrid,
  Avatar,
  Tooltip,
  Box,
  ChartTooltip,
} from "@/components/index";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import dayjs from "dayjs";

interface LineData {
  month: string;
  "Mobile Users": number;
}

interface TableData {
  // id: number;
  firstname: string;
  lastname: string;
  created_at: string;
  usertype: string;
  profile_image: string;
}

const NameAvatar = (props: GridRenderCellParams<any, string>) => {
  return (
    <div className="flex items-center space-x-2">
      <Avatar
        src={props.row.profile_image}
        alt={props.row.firstname}
        sx={{
          width: 30,
          height: 30,
        }}
      >
        {props.row.firstname[0]}
        {props.row.lastname[0]}
      </Avatar>
      <Tooltip title={`${props.row.firstname} ${props.row.lastname}`}>
        <Typography variant="body2" className="font-outfit text-black">
          {props.row.firstname} {props.row.lastname}
        </Typography>
      </Tooltip>
    </div>
  );
};

const DateJoined = (props: GridRenderCellParams<any, string>) => {
  return (
    <Typography variant="body2" className="font-outfit text-sm text-gray-700">
      {props.row.created_at}
    </Typography>
  );
};

const UserCategory = (props: GridRenderCellParams<any, string>) => {
  return (
    <Typography variant="body2" className="font-outfit text-sm text-gray-700">
      {props.row.usertype}
    </Typography>
  );
};

let columns: GridColDef[] = [
  {
    field: "firstname",
    headerName: "Full Name",
    width: 220,
    renderCell: NameAvatar,
    headerClassName: "font-outfit text-black",
  },
  {
    field: "created_at",
    headerName: "Date Joined",
    width: 150,
    headerClassName: "font-outfit text-black",
    renderCell: DateJoined,
  },
  {
    field: "usertype",
    headerName: "Category",
    width: 150,
    headerClassName: "font-outfit text-black",
    renderCell: UserCategory,
  },
];

const MobileUsersComp = () => {
  const [lineInfo, setLineInfo] = useState<LineData[]>([]);
  const [dataTable, setDataTable] = useState<TableData[]>([]);
  useEffect(() => {
    // ***** LINE CHART DATA *****
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

    const lineData = [];

    for (let step = 0; step < months.length; step++) {
      const mobileUsers = faker.helpers.rangeToNumber({
        min: 10000,
        max: 20000,
      });
      lineData.push({
        month: months[step],
        "Mobile Users": mobileUsers,
      });
    }

    setLineInfo(lineData);

    // ***** DATA TABLE DATA *****
    const data = [];

    for (let step = 0; step < 40; step++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const profileImage = faker.image.urlLoremFlickr({
        category: "people",
      });
      const dateJoined = faker.date.past();
      const userType = "Mobile";

      data.push({
        id: step,
        firstname: firstName,
        lastname: lastName,
        created_at: dayjs(dateJoined).format("DD MMM YYYY"),
        usertype: userType,
        profile_image: profileImage,
      });
    }

    setDataTable(data);

    return () => {
      setLineInfo([]);
      setDataTable([]);
    };
  }, []);

  return (
    <div>
      <div className="relative flex w-full flex-col rounded-lg bg-white px-4 py-5 md:w-[80%]">
        <div className="flex items-center justify-between">
          <Typography
            variant="body2"
            className="font-outfit text-xl font-semibold text-black"
          >
            Mobile Users
          </Typography>
          <FormControl variant="outlined" size="small">
            <Select
              value="month"
              onChange={() => {}}
              className="rounded-full bg-selectBg font-outfit text-navActive"
              size="small"
            >
              <MenuItem value="month">Month</MenuItem>
              <MenuItem value="year" disabled>
                Year
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="relative mt-5 ">
          <ResponsiveContainer width="90%" height={250}>
            <LineChart data={lineInfo}>
              <XAxis dataKey="month" />
              <YAxis
                tickFormatter={(value: number) => {
                  return new Intl.NumberFormat("en-US", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(value);
                }}
              />
              <Legend
                iconType="circle"
                iconSize={10}
                formatter={(value: string) => {
                  return (
                    <span
                      className="font-outfit text-black"
                      style={{ fontSize: "12px" }}
                    >
                      {value}
                    </span>
                  );
                }}
              />
              <ChartTooltip
                formatter={(value: number) => {
                  return new Intl.NumberFormat("en-US", {}).format(value);
                }}
              />
              <Line
                type="monotone"
                dataKey="Mobile Users"
                stroke="#00A651"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-8">
        <Typography
          variant="body2"
          className="font-outfit text-lg font-bold text-black"
        >
          Mobile Users
        </Typography>
        <Box
          sx={{
            height: 400,
            display: "table",
            tableLayout: "fixed",
          }}
          className="mt-5 w-full md:w-[80%]"
        >
          <div className="h-[23.2rem] bg-white">
            <DataGrid
              rows={dataTable}
              columns={columns}
              disableRowSelectionOnClick
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5, 10, 20]}
              sx={
                {
                  // "& .MuiDataGrid-columnHeader": {
                  //   backgroundColor: "#E3FAE6",
                  // },
                  // "& .MuiDataGrid-cell": {
                  //   backgroundColor: "#E3FAE6",
                  // },
                }
              }
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default MobileUsersComp;
