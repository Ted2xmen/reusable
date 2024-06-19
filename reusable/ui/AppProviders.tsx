"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

//  <AppProviders
//    attribute="class"
//    defaultTheme="dark"
//    enableSystem
//    openDevTools={false}
//    disableTransitionOnChange>
//   {children}
//  </AppProviders>;

export function AppProviders({
  children,
  openDevTools,
  ...props
}: ThemeProviderProps & any) {
  return (
    <NextThemesProvider {...props}>
      <CacheProvider openDevTools={openDevTools}>{children}</CacheProvider>
    </NextThemesProvider>
  );
}

const CacheProvider = ({ children, openDevTools }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={openDevTools} />
    </QueryClientProvider>
  );
};
