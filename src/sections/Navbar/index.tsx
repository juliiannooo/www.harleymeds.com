import { NavbarContent } from "@/sections/Navbar/components/NavbarContent";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";

export const Navbar = () => {
  return (
    <div className="fixed items-center box-border caret-transparent gap-x-0 flex justify-between outline-[3px] pointer-events-auto gap-y-0 w-screen z-[100] p-2 top-0 inset-x-0 md:pointer-events-none md:p-6">
      <NavbarContent />
      <MobileMenu />
    </div>
  );
};
