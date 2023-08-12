"use client";
import React, { useEffect, useState } from "react";
import {
  Typography,
  faker,
  FormControl,
  MenuItem,
  Select,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  DataGrid,
  Avatar,
  Tooltip,
  Box,
  BarChart,
  Bar,
  Chip,
  ChartTooltip,
} from "@/components/index";
import {
  // GridActionsCellItem,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import dayjs from "dayjs";

interface BarData {
  month: string;
  "Loan's Rejected": number;
}

interface TableData {
  id: number;
  firstname: string;
  lastname: string;
  loanamount: number;
  loanstatus: string;
  repaymenttype: string;
  reason: string;
  interest: number;
  expectedamount: number;
  created_at: string;
  profile_image: string;
  currency: string;
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

const Amount = (props: GridRenderCellParams<any, number>) => {
  return (
    <Typography variant="body2" className="font-outfit text-black">
      {props.row.currency}
      {new Intl.NumberFormat("en-NG", {}).format(
        parseInt(props.row.loanamount),
      )}
    </Typography>
  );
};

const RepaymentType = (props: GridRenderCellParams<any, string>) => {
  return (
    <Typography variant="body2" className="font-outfit text-black">
      {props.row.repaymenttype}
    </Typography>
  );
};

const Reason = (props: GridRenderCellParams<any, string>) => {
  return (
    <Typography variant="body2" className="font-outfit text-black">
      {props.row.reason}
    </Typography>
  );
};

const ExpectedAmount = (props: GridRenderCellParams<any, number>) => {
  return (
    <Typography variant="body2" className="font-outfit text-black">
      {props.row.currency}
      {new Intl.NumberFormat("en-NG", {}).format(
        parseInt(props.row.expectedamount),
      )}
    </Typography>
  );
};

const Interest = (props: GridRenderCellParams<any, string>) => {
  return (
    <Typography variant="body2" className="font-outfit text-black">
      {props.row.interest}%
    </Typography>
  );
};

const StatusChip = (props: GridRenderCellParams<any, string>) => {
  return (
    <Chip
      label={props.value}
      size="small"
      className={`font-fam1 px-2 py-[14px]  ${
        props.value === "Pending" && "bg-orange-100 text-orange-700"
      }
      ${props.value === "Approved" && "bg-blue-100 text-blue-700"}
      ${props.value === "Declined" && "bg-red-100 text-red-700"}
      ${props.value === "Confirmed" && "bg-green-100 text-green-700"}
      ${props.value === "Expired" && "bg-gray-100 text-gray-700"}
      ${props.value === "Cancelled" && "bg-gray-100 text-gray-700"}`}
    />
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
    field: "loanamount",
    headerName: "Amount",
    width: 150,
    renderCell: Amount,
    headerClassName: "font-outfit text-black",
  },
  {
    field: "loanstatus",
    headerName: "Status",
    width: 150,
    renderCell: StatusChip,
    headerClassName: "font-outfit text-black",
  },
  {
    field: "repaymenttype",
    headerName: "Repayment Type",
    width: 150,
    renderCell: RepaymentType,
    headerClassName: "font-outfit text-black",
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 150,
    renderCell: Reason,
    headerClassName: "font-outfit text-black",
  },
  {
    field: "interest",
    headerName: "Interest",
    width: 150,
    renderCell: Interest,
    headerClassName: "font-outfit text-black",
  },
  {
    field: "expectedamount",
    headerName: "Expected Amount",
    width: 150,
    renderCell: ExpectedAmount,
    headerClassName: "font-outfit text-black",
  },
  // {
  //   field: 'actions',
  //   type: 'actions',
  //   headerName: 'View',
  //   headerClassName: ' tw-text-black3 tw-font-fam1',
  //   width: 100,
  //   getActions: (params) => [
  //     <GridActionsCellItem
  //       key={params.id}
  //       icon={<VisibilityOutlinedIcon />}
  //       label='View'
  //       onClick={() => handleView(params)}
  //     />,
  //   ],
  // },
];

const LoanRejected = () => {
  const [barInfo, setBarInfo] = useState<BarData[]>([]);
  const [dataTable, setDataTable] = useState<TableData[]>([]);

  useEffect(() => {
    // ****** BAR CHART DATA ****** //
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

    let barData: BarData[] = [];

    for (let step = 0; step < months.length; step++) {
      const rejectedLoans = faker.helpers.rangeToNumber({
        min: 50,
        max: 200,
      });

      barData.push({
        month: months[step],
        "Loan's Rejected": rejectedLoans,
      });

      setBarInfo(barData);
    }

    // ****** TABLE DATA ****** //
    let tableData: TableData[] = [];

    for (let step = 0; step < 20; step++) {
      const firstname = faker.person.firstName();
      const lastname = faker.person.lastName();
      const loanamount = faker.helpers.rangeToNumber({
        min: 1000,
        max: 10000,
      });
      const repaymenttype = faker.helpers.arrayElement([
        "Onetime",
        "Installment",
      ]);
      const reason = faker.helpers.arrayElement([
        "Bills",
        "Charity",
        "Eating Out",
        "Education",
        "Entertainment",
        "Expenses",
        "Family",
        "Finances",
        "Food",
        "General",
        "Gifts",
        "Groceries",
        "Holidays",
        "Medical",
        "Personal Care",
        "Rent",
        "Shopping",
        "Transport",
        "Other",
      ]);
      const interest = faker.helpers.rangeToNumber({
        min: 10,
        max: 100,
      });
      const interestamount = (interest / 100) * loanamount;
      const expectedamount = loanamount + interestamount;
      const loanstatus = "Declined";
      const currency = faker.helpers.arrayElement(["₦", "$", "£"]);
      const created_at = dayjs(faker.date.past()).format("DD MM YYYY");
      const profile_image = faker.image.urlLoremFlickr({
        category: "people",
      });
      tableData.push({
        id: step + 1,
        firstname,
        lastname,
        loanamount,
        repaymenttype,
        reason,
        interest,
        expectedamount,
        loanstatus,
        currency,
        created_at,
        profile_image,
      });

      setDataTable(tableData);
    }

    return () => {
      setBarInfo([]);
      setDataTable([]);
    };
  }, []);

  return (
    <div>
      <div className="relative flex w-full flex-col rounded-lg bg-white px-4 py-5 ">
        <div className="flex items-center justify-between">
          <Typography
            variant="body2"
            className="font-outfit text-xl font-semibold text-black"
          >
            Loans Rejected
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
        <div className="relative mt-5">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barInfo}>
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
              <Bar dataKey="Loan's Rejected" fill="#FF0000" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-8">
        <Typography
          variant="body2"
          className="font-outfit text-lg font-bold text-black"
        >
          Loan Rejected
        </Typography>
        <Box
          sx={{
            height: 400,
            display: "table",
            tableLayout: "fixed",
          }}
          className="mt-5 w-full"
        >
          <div className="h-[24.2rem] bg-white">
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
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default LoanRejected;
