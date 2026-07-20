import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopNavMenu } from "@/sections/Navbar/components/DesktopNavMenu";
import { NavbarActions } from "@/sections/Navbar/components/NavbarActions";

export const Navbar = () => {
  return (
    <header className="sticky box-border caret-transparent min-h-[90px] outline-[3px] pointer-events-auto w-full z-50 py-2 top-0">
      <div className="fixed box-border caret-transparent outline-[3px] pointer-events-none top-40 bottom-0 inset-x-0"></div>
      <span className="box-border caret-transparent hidden outline-[3px]"></span>
      <nav className="relative box-border caret-transparent outline-[3px] w-full z-50 mt-2 py-2">
        <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
          <div className="box-border caret-transparent col-end-[main] col-start-[main] min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="relative items-center box-border caret-transparent flex justify-between min-h-12 outline-[3px] w-full z-10">
              <NavbarLogo />
              <DesktopNavMenu />
              <NavbarActions />
            </div>
          </div>
        </div>
      </nav>
      <div className="absolute bg-orange-50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border caret-transparent h-0 outline-[3px] w-full z-0 overflow-hidden rounded-b-none left-0 top-0 md:rounded-b-[48px]">
        <div className="absolute bg-[linear-gradient(in_oklab,rgb(247,241,232)_0px,rgba(0,0,0,0)_100%)] box-border caret-transparent block h-24 outline-[3px] w-full z-20 top-0 md:hidden"></div>
        <div className="box-border caret-transparent h-[1000px] outline-[3px] overflow-x-auto overflow-y-auto mb-0 md:h-fit md:overflow-y-hidden md:mb-6">
          <div className="box-border caret-transparent gap-x-[normal] flex flex-col h-full justify-start min-h-0 outline-[3px] gap-y-[normal] mt-28 mb-8 px-6 md:gap-x-16 md:flex-row md:h-fit md:justify-center md:min-h-48 md:gap-y-16 md:px-4"></div>
        </div>
      </div>
      <span className="box-border caret-transparent hidden outline-[3px]"></span>
    </header>
  );
};
