export const DesktopMenu = () => {
  return (
    <div className="items-center backdrop-blur-[48px] bg-white/10 box-border caret-transparent hidden flex-col h-auto justify-center min-h-0 min-w-0 outline-[3px] z-[203] rounded-[1000px] md:flex md:flex-row md:h-[54px] md:min-h-[auto] md:min-w-[auto]">
      <a
        href="/"
        className="text-yellow-50 font-semibold box-border caret-transparent inline leading-[19.2px] min-h-0 min-w-0 outline-[3px] px-[30px] py-4 md:block md:min-h-[auto] md:min-w-[auto] hover:text-yellow-150 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-yellow-50 hover:rounded-none hover:border-0 hover:border-none"
      >
        Home
      </a>
      <div className="bg-stone-300/30 box-border caret-transparent h-[34px] min-h-0 min-w-0 outline-[3px] w-px md:min-h-[auto] md:min-w-[auto]"></div>
      <a
        href="/about"
        className="text-yellow-50 font-semibold box-border caret-transparent inline leading-[19.2px] min-h-0 min-w-0 outline-[3px] px-[30px] py-4 md:block md:min-h-[auto] md:min-w-[auto] hover:text-yellow-150 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-yellow-50 hover:rounded-none hover:border-0 hover:border-none"
      >
        About Us
      </a>
      <div className="bg-stone-300/30 box-border caret-transparent h-[34px] min-h-0 min-w-0 outline-[3px] w-px md:min-h-[auto] md:min-w-[auto]"></div>
      <a
        href="/wellness"
        className="text-yellow-50 font-semibold box-border caret-transparent inline leading-[19.2px] min-h-0 min-w-0 outline-[3px] px-[30px] py-4 md:block md:min-h-[auto] md:min-w-[auto] hover:text-yellow-150 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-yellow-50 hover:rounded-none hover:border-0 hover:border-none"
      >
        Wellness
      </a>
      <div className="bg-stone-300/30 box-border caret-transparent h-[34px] min-h-0 min-w-0 outline-[3px] w-px md:min-h-[auto] md:min-w-[auto]"></div>
      <div className="relative items-center box-border caret-transparent flex justify-center min-h-0 min-w-0 outline-[3px] z-[100] md:min-h-[auto] md:min-w-[auto]">
        <a
          href="#"
          className="text-green-400 font-semibold items-center box-border caret-transparent gap-x-2.5 flex justify-between leading-[19.2px] max-w-full min-h-0 min-w-0 outline-[3px] gap-y-2.5 px-[30px] py-4 md:min-h-[auto] md:min-w-[auto] hover:text-green-500 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-green-400 hover:rounded-none hover:border-0 hover:border-none"
        >
          <div className="text-yellow-50 box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto] hover:text-yellow-150 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-yellow-50 hover:rounded-none hover:border-0 hover:border-none">
            Our Products
          </div>
          <div className="items-stretch box-border caret-transparent flex h-[18px] justify-between min-h-0 min-w-0 outline-[3px] w-[18px] md:min-h-[auto] md:min-w-[auto] hover:text-green-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-green-400 hover:rounded-none hover:border-0 hover:border-none">
            <div className="self-center bg-green-400 box-border caret-transparent basis-[0%] grow h-[1.5px] min-h-0 min-w-0 outline-[3px] origin-[0%_50%] w-[1.5px] md:min-h-[auto] md:min-w-[auto] hover:text-green-400 hover:bg-green-500 hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-green-400 hover:rounded-none hover:border-0 hover:border-none"></div>
            <div className="self-center bg-green-400 box-border caret-transparent shrink-0 h-full min-h-0 min-w-0 outline-[3px] w-[1.5px] md:min-h-[auto] md:min-w-[auto] hover:text-green-400 hover:bg-green-500 hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-green-400 hover:rounded-none hover:border-0 hover:border-none"></div>
            <div className="self-center bg-green-400 box-border caret-transparent basis-[0%] grow h-[1.5px] min-h-0 min-w-0 outline-[3px] origin-[100%_50%] w-[1.5px] md:min-h-[auto] md:min-w-[auto] hover:text-green-400 hover:bg-green-500 hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-green-400 hover:rounded-none hover:border-0 hover:border-none"></div>
          </div>
        </a>
      </div>
    </div>
  );
};
