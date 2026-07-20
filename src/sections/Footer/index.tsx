import { FooterPayments } from "@/sections/Footer/components/FooterPayments";
import { FooterNewsletter } from "@/sections/Footer/components/FooterNewsletter";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent outline-[3px] w-full -mt-12 pt-12">
      <img
        src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-20.svg"
        alt="Icon"
        className="absolute box-border caret-transparent h-full outline-[3px] w-full z-0 inset-0"
      />
      <div className="relative box-border caret-transparent outline-[3px] z-10 py-16">
        <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
          <div className="box-border caret-transparent col-end-[main] col-start-[main] min-h-[auto] min-w-[auto] outline-[3px]">
            <FooterPayments />
            <div className="box-border caret-transparent gap-x-12 flex flex-col-reverse outline-[3px] gap-y-12 md:flex-row">
              <FooterNewsletter />
              <FooterLinks />
            </div>
            <div className="bg-stone-700 box-border caret-transparent h-px outline-[3px] w-full mt-10 mb-6"></div>
            <FooterBottom />
          </div>
        </div>
      </div>
    </footer>
  );
};
