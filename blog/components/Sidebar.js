import MobileIcon from "@/components/icon/MobileIcon";
import LaptopIcon from "@/components/icon/LaptopIcon";
import IconPc from "@/components/icon/IconPc";

export default function Sidebar() {
  return (
    <div className="flex flex-row sm:gap-10 md:hidden">
      <div className="sm:w-full sm:max-w-[18rem]">
        <input
          type="checkbox"
          id="sidebar-mobile-fixed"
          className="sidebar-state"
        />
        <label
          htmlFor="sidebar-mobile-fixed"
          className="sidebar-overlay"
        ></label>
        <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full">
          <section className="sidebar-title items-center p-4">
            <svg
              fill="none"
              height="42"
              viewBox="0 0 32 32"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="100%" rx="16" width="100%"></rect>
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <div className="flex flex-col">
              <span>Tech Blog</span>
              <span className="text-xs font-normal text-content2">
                Discovery
              </span>
            </div>
          </section>
          <section className="sidebar-content">
            <nav className="menu rounded-md">
              <div className="divider my-0"></div>
              <section className="menu-section px-4">
                <span className="menu-title">Category</span>
                <ul className="menu-items">
                  <li className="menu-item">
                    <MobileIcon />
                    Smartphone
                  </li>
                  <li className="menu-item">
                    <LaptopIcon />
                    Laptop
                  </li>
                  <li className="menu-item">
                    <IconPc />
                    PC
                  </li>
                </ul>
              </section>
            </nav>
          </section>
        </aside>
      </div>
    </div>
  );
}
