import { Inter } from "next/font/google";
import Nav from "@/compenents/nav";
import "./globals.css";
import Righter from "@/compenents/righter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SamCodes",
  description: "This is my portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
        <div className="vertical-maker">
          <Righter />
          <div className={`first-block ${inter.className}`}>{children}</div>
          <Nav />
        </div>
      </body>
  </html>
  );
}
