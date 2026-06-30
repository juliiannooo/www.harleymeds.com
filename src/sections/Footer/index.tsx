import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <section className="bg-neutral-800 box-border caret-transparent min-h-[1000px] outline-[3px] w-full overflow-clip">
      <div className="items-center box-border caret-transparent flex flex-col justify-center outline-[3px] w-full">
        <FooterBrand />
        <FooterContent />
      </div>
    </section>
  );
};
