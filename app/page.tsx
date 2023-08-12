"use client";

import { StyledEngineProvider } from "@mui/material/styles";
import TopBarProgress from "react-topbar-progress-indicator";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Router } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CssBaseline } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HomePage from "@/screens/HomePage";

export default function Home() {
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

  const [progress, setProgress] = useState(false);

  Router.events.on("routeChangeStart", () => {
    console.log("routeChangeStart");
    setProgress(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setProgress(false);
  });

  const queryClient = new QueryClient();

  TopBarProgress.config({
    barColors: {
      "0": "#29d",
      "0.5": "#29d",
      "1.0": "#29d",
    },
    shadowBlur: 5,
  });

  return (
    <>
      {progress && <TopBarProgress />}
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <QueryClientProvider client={queryClient}>
              <HomePage />
            </QueryClientProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
