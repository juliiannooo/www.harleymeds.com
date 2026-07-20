import { MobileAccuracyTimeline } from "@/sections/AccuracySection/components/MobileAccuracyTimeline";
import { DesktopAccuracyTabs } from "@/sections/AccuracySection/components/DesktopAccuracyTabs";

export const AccuracySection = () => {
  return (
    <section className="relative box-border caret-transparent outline-[3px] pb-12 md:pb-24">
      <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
        <div className="box-border caret-transparent col-end-[main] col-start-[main] min-h-[auto] min-w-[auto] outline-[3px] pb-0 md:col-end-[14] md:pb-32">
          <h2 className="text-stone-700 text-lg font-bold box-border caret-transparent leading-[27px] outline-[3px] text-left mb-6">
            STIL UND FUNKTIONALITÄT IM EINKLANG
          </h2>
          <div className="box-border caret-transparent blur-0 opacity-100 outline-[3px] md:blur-[5px] md:opacity-0">
            <h3 className="text-stone-700 text-[40px] font-light box-border caret-transparent flex flex-col tracking-[-1px] leading-10 outline-[3px] text-left md:text-[80px] md:tracking-[-2px] md:leading-[80px]">
              Entwickelt für höchste Genauigkeit in jeder Lebenslage
            </h3>
          </div>
        </div>
        <div className="box-border caret-transparent flex flex-col col-end-[main] col-start-[main] justify-end min-h-[auto] min-w-[auto] outline-[3px] py-8 md:col-start-[16] md:py-32">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <p className="text-stone-700 box-border caret-transparent outline-[3px] text-left">
              Der Oura Ring fügt sich rund um die Uhr nahtlos in deinen Alltag
              ein und bietet dir detaillierte Messparameter und personalisierte
              Rückmeldungen. Dein Finger ermöglicht die genaueste Messung von
              mehr als 50 Gesundheitsmetriken, die dein Wohlbefinden
              beeinflussen.
            </p>
            <a
              href="/how-it-works"
              className="text-orange-50 bg-stone-700 box-border caret-transparent inline-block outline-[3px] text-center mt-6 px-6 py-3 rounded-[3.35544e+07px]"
            >
              <span className="content-center items-center box-border caret-transparent gap-x-2 inline-flex justify-center outline-[3px] gap-y-2">
                <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                  So funktioniert Oura
                </span>
              </span>
            </a>
          </div>
        </div>
        <MobileAccuracyTimeline />
        <DesktopAccuracyTabs />
      </div>
    </section>
  );
};
