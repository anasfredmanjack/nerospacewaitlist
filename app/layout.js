import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Providers} from "./components/Providers";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nerospace Waitlist",
  description: "Nerospace the world's Next Gen Web3 Freelancing Platform",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <Providers>
              <Navbar/>
        {children}
        </Providers>
      </body>
    </html>
   
  );
}
