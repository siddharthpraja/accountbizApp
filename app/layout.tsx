import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import NavbarMenu from "@/components/Navbar/NavbarMenu";
import CompanyNames from "@/components/Navbar/CompanyNames";

const kanit = Kanit({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "AccountBiz",
  description: "Generated by Tranning",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <div className="overflow-hidden">
          <div className="px-4 lg:px-8">
            <CompanyNames/>
            <NavbarMenu />
            {props.children}
          </div>
        </div>
      </body>
    </html>
  );
}
