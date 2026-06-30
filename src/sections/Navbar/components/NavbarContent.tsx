import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenuButton } from "@/sections/Navbar/components/MobileMenuButton";

export const NavbarContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex basis-[0%] grow justify-between min-h-[auto] min-w-[auto] outline-[3px] pointer-events-auto z-[1] p-4 md:pointer-events-none md:pl-16 md:pr-14 md:py-8">
      <NavbarLogo />
      <DesktopMenu />
      <a
        href="https://calendly.com/d/cnzq-d94-m8q/harley-meds-trt-consultation?ip=44.231.114.191"
        className="text-neutral-800 font-semibold items-center bg-green-400 box-border caret-transparent hidden h-12 justify-center tracking-[0.16px] leading-[19.2px] min-h-0 min-w-0 outline-[3px] text-center uppercase w-full px-7 py-[9px] rounded-[50px] md:flex md:min-h-[auto] md:min-w-[auto] md:text-start md:w-auto hover:text-neutral-900 hover:bg-emerald-200 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-neutral-800 hover:rounded-[50px] hover:border-0 hover:border-none"
      >
        get started
      </a>
      <MobileMenuButton />
    </div>
  );
};
