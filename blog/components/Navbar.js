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
          <a className="navbar-item hidden md:block">Smartphone</a>
          <a className="navbar-item hidden md:block">Laptop</a>
          <a className="navbar-item hidden md:block">PC</a>
          <label htmlFor="sidebar-mobile-fixed" className="md:hidden">
            <IconMenuRight />
          </label>
        </div>
      </div>
      <Sidebar />
    </>
  );
}
