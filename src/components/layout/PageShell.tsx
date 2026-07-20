import { AnnouncementBar } from "@/sections/AnnouncementBar";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { MembershipSection } from "@/sections/MembershipSection";
import { AccuracySection } from "@/sections/AccuracySection";
import { PressSection } from "@/sections/PressSection";
import { Footer } from "@/sections/Footer";

export const PageShell = () => {
  return (
    <div className="box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px]">
      <div className="relative box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="absolute box-border caret-transparent h-full outline-[3px] pointer-events-none w-full z-[100] top-0">
          <AnnouncementBar />
          <Navbar />
        </div>
        <main
          aria-label="mainLabel"
          className="box-border caret-transparent outline-[3px]"
        >
          <div className="box-border caret-transparent outline-[3px]">
            <div className="relative bg-orange-50 box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent outline-[3px]">
                <Hero />
              </div>
            </div>
            <div className="relative bg-orange-50 box-border caret-transparent min-h-full outline-[3px]">
              <div className="absolute bg-[radial-gradient(circle_at_20%_20%,rgb(234,220,207)_0px,rgba(0,0,0,0)_20%)] box-border caret-transparent h-full outline-[3px] pointer-events-none w-full left-0 top-0"></div>
              <div className="absolute bg-[radial-gradient(circle_at_0%_40%,rgba(182,207,221,0.5)_0px,rgba(0,0,0,0)_20%)] box-border caret-transparent h-full outline-[3px] pointer-events-none w-full left-0 top-0"></div>
              <div className="absolute bg-[radial-gradient(circle_at_20%_55%,rgb(243,235,225)_0px,rgba(0,0,0,0)_20%)] box-border caret-transparent h-full outline-[3px] pointer-events-none w-full left-0 top-0"></div>
              <div className="absolute bg-[radial-gradient(circle_at_99%_27%,rgba(181,228,254,0.5)_0px,rgba(0,0,0,0)_20%)] box-border caret-transparent h-full outline-[3px] pointer-events-none w-full left-0 top-0"></div>
              <div className="absolute bg-[radial-gradient(at_45%_55%,rgba(213,195,171,0.4)_0px,rgba(0,0,0,0)_60%)] box-border caret-transparent h-full outline-[3px] pointer-events-none w-full left-0 top-0"></div>
              <div className="absolute bg-[radial-gradient(circle_at_50%_85%,rgba(255,182,72,0.3)_0px,rgba(0,0,0,0)_20%)] box-border caret-transparent h-full outline-[3px] pointer-events-none w-full left-0 top-0"></div>
              <div className="box-border caret-transparent outline-[3px]">
                <ProductShowcase />
              </div>
              <MembershipSection />
              <AccuracySection />
            </div>
            <div className="box-border caret-transparent outline-[3px]">
              <PressSection />
            </div>
          </div>
          <div className="box-border caret-transparent outline-[3px]"></div>
        </main>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <Footer />
      </div>
    </div>
  );
};
