export const MobileMenuButton = () => {
  return (
    <div className="text-green-400 items-center box-border caret-transparent flex h-12 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-12 border border-green-400 rounded-[50%] border-solid md:hidden md:h-14 md:min-h-0 md:min-w-0 md:w-14">
      <div className="items-stretch box-border caret-transparent flex h-[18px] justify-between min-h-[auto] min-w-[auto] outline-[3px] w-[18px] md:min-h-0 md:min-w-0">
        <div className="self-center bg-green-400 box-border caret-transparent basis-[0%] grow h-[1.5px] min-h-[auto] min-w-[auto] outline-[3px] origin-[0%_50%] w-[1.5px] md:min-h-0 md:min-w-0"></div>
        <div className="self-center bg-green-400 box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] w-[1.5px] md:min-h-0 md:min-w-0"></div>
        <div className="self-center bg-green-400 box-border caret-transparent basis-[0%] grow h-[1.5px] min-h-[auto] min-w-[auto] outline-[3px] origin-[100%_50%] w-[1.5px] md:min-h-0 md:min-w-0"></div>
      </div>
    </div>
  );
};
