import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroLogoMarquee } from "@/sections/Hero/components/HeroLogoMarquee";

export const HeroContent = () => {
  return (
    <div className="fixed items-center bg-neutral-800 box-border caret-transparent gap-x-6 flex flex-col h-[1000px] justify-between max-h-[1000px] max-w-[375px] min-h-[1000px] outline-[3px] gap-y-6 w-screen overflow-hidden bg-[position:0px_0px] py-[90px] left-0 top-[0.001px] md:max-w-screen-xl">
      <HeroText />
      <HeroLogoMarquee />
    </div>
  );
};
