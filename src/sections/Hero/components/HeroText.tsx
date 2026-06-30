export const HeroText = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-12 flex basis-[0%] flex-col grow justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-12 p-4 md:max-w-none md:p-6">
      <div className="items-center box-border caret-transparent gap-x-2.5 flex flex-col justify-center max-w-[470px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 text-center md:max-w-none">
        <h1 className="text-green-400 text-[42px] font-semibold box-border caret-transparent tracking-[-0.84px] leading-[46.2px] min-h-[auto] min-w-[auto] outline-[3px] mb-2.5 md:text-[84px] md:tracking-[-1.68px] md:leading-[92.4px]">
          Live without limits.
        </h1>
        <p className="text-yellow-50 box-border caret-transparent tracking-[-0.16px] max-w-[650px] min-h-[auto] min-w-[auto] outline-[3px]">
          Break barriers, take control of your health, and reach your full
          potential. Powered by cutting-edge science, our solutions help you
          perform at your peak and live without limits.
        </p>
      </div>
      <a
        href="https://calendly.com/d/cnzq-d94-m8q/harley-meds-trt-consultation?ip=44.231.114.191"
        className="items-center bg-yellow-50 box-border caret-transparent flex h-12 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-6 rounded-[1000px] hover:text-stone-600 hover:bg-emerald-200 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-[1000px] hover:border-0 hover:border-none"
      >
        <div className="text-neutral-800 font-semibold box-border caret-transparent tracking-[0.16px] leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] uppercase hover:text-neutral-900 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-neutral-800 hover:rounded-none hover:border-0 hover:border-none">
          start your journey
        </div>
      </a>
    </div>
  );
};
