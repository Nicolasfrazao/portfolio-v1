import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import {ThemeProvider} from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicolas Frazao portfolio",
  description: "Based on jsm mastery tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link  rel="icon" sizes="any" href="/public/jsm-logo.png"/>
      </head>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
