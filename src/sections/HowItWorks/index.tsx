import { HowItWorksHeader } from "@/sections/HowItWorks/components/HowItWorksHeader";
import { StepCard } from "@/sections/HowItWorks/components/StepCard";
import { HowItWorksCta } from "@/sections/HowItWorks/components/HowItWorksCta";

export const HowItWorks = () => {
  return (
    <section className="relative items-center bg-yellow-50 box-border caret-transparent gap-x-8 flex flex-col justify-start outline-[3px] gap-y-8 w-full z-[3] overflow-hidden px-4 py-5 md:gap-x-20 md:gap-y-20 md:px-[65px] md:py-[70px]">
      <HowItWorksHeader />
      <div className="items-center self-stretch box-border caret-transparent gap-x-5 flex flex-col h-full justify-between min-h-[420px] min-w-[auto] outline-[3px] gap-y-5 md:gap-x-[34px] md:flex-row md:h-auto md:gap-y-[34px]">
        <StepCard
          stepNumber="1"
          words={[
            "Schedule",
            "a",
            "consult",
            "with",
            "one",
            "of",
            "our",
            "expert",
            "medical",
            "providers",
          ]}
        />
        <StepCard
          stepNumber="2"
          words={[
            "Complete",
            "a",
            "quick",
            "and",
            "easy",
            "online",
            "health",
            "assessment",
          ]}
        />
        <StepCard
          stepNumber="3"
          words={[
            "Get",
            "your",
            "prescribed",
            "medication",
            "delivered",
            "straight",
            "to",
            "your",
            "door",
          ]}
        />
      </div>
      <HowItWorksCta />
    </section>
  );
};
