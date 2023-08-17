import "@/app/globals.css";
import localFont from "next/font/local";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mainFont = localFont({
  src: [
    {
      path: "./font/SamsungSharpSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/SamsungOne-400.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={mainFont.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
