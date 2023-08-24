"use client";
import Sidebar from "@/components/Sidebar";
import IconMenuRight from "@/components/icon/MenuIcon";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar navbar-glass sticky top-0 z-50">
        <div className="navbar-start">
          <Link href="/" className="navbar-item font-bold">
            Tech Blog
          </Link>
        </div>
        <div className="navbar-end">
          <Link href="#" className="navbar-item hidden md:block">
            Smartphone
          </Link>
          <Link href="#" className="navbar-item hidden md:block">
            Laptop
          </Link>
          <Link href="#" className="navbar-item hidden md:block">
            PC
          </Link>
          <label htmlFor="sidebar-mobile-fixed" className="md:hidden">
            <IconMenuRight />
          </label>
        </div>
      </div>
      <Sidebar />
    </>
  );
}
