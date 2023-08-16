import Sidebar from "@/components/Sidebar";
import IconMenuRight from "@/components/icon/MenuIcon";

export default function Navbar() {
  return (
    <>
      <div className="navbar navbar-glass sticky top-0">
        <div className="navbar-start">
          <a className="navbar-item">Tech Blog</a>
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
