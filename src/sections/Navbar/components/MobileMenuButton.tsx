export const MobileMenuButton = () => {
  return (
    <button
      type="button"
      className="relative text-white bg-transparent caret-transparent block h-10 leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-center w-10 border bg-[position:0px_0px] p-0 rounded-[3.35544e+07px] border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.25)] md:hidden md:h-12 md:min-h-0 md:min-w-0 md:w-12"
    >
      <span className="content-center items-center box-border caret-transparent gap-x-2 inline-flex h-full justify-center outline-[3px] gap-y-2 w-full">
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
          <span className="box-border caret-transparent outline-[3px]">
            <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
              Menü
            </span>
            <div className="items-center box-border caret-transparent gap-x-1.5 flex flex-col h-full justify-center outline-[3px] gap-y-1.5 w-full">
              <span className="bg-white box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] w-[18px] md:min-h-0 md:min-w-0"></span>
              <span className="bg-white box-border caret-transparent block h-0.5 min-h-[auto] min-w-[auto] outline-[3px] w-[18px] md:min-h-0 md:min-w-0"></span>
            </div>
          </span>
        </span>
      </span>
    </button>
  );
};
