"use client";

// import TopBarProgress from "react-topbar-progress-indicator";
// import { useState } from "react";
import HomePage from "@/screens/HomePage";
// import { useRouter } from "next/router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  // const [progress, setProgress] = useState(false);

  // const router = useRouter();

  // router.events.on("routeChangeError", () => {
  //   console.log("routeChangeError");
  //   setProgress(false);
  // });

  // router.events.on("routeChangeStart", () => {
  //   console.log("routeChangeStart");
  //   setProgress(true);
  // });

  // router.events.on("routeChangeComplete", () => {
  //   console.log("routeChangeComplete");
  //   setProgress(false);
  // });

  const theme = createTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl", "2xl"],
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
    palette: {
      mode: "light",
    },
  });

  // TopBarProgress.config({
  //   barColors: {
  //     "0": "#29d",
  //     "0.5": "#29d",
  //     "1.0": "#29d",
  //   },
  //   shadowBlur: 5,
  // });
  const queryClient = new QueryClient();

  return (
    <>
      {/* {progress && <TopBarProgress />} */}
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <QueryClientProvider client={queryClient}>
            <HomePage />
          </QueryClientProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}
