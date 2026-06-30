import { FooterNavigation } from "@/sections/Footer/components/FooterNavigation";
import { FooterContact } from "@/sections/Footer/components/FooterContact";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const FooterContent = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-[42px] flex flex-col auto-cols-[1fr] grid-cols-[1fr_2.5fr_1fr] grid-rows-[auto] justify-between justify-items-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-[42px] w-full pl-[18.75px] pr-0 pt-[42px] pb-16 md:items-end md:gap-x-4 md:flex-row md:gap-y-4 md:pt-0 md:px-16">
      <FooterNavigation />
      <FooterContact />
      <FooterCopyright />
    </div>
  );
};
