export const AnnouncementBar = () => {
  return (
    <div className="relative text-stone-700 bg-orange-50 box-border caret-transparent outline-[3px] pointer-events-auto text-center z-[60] px-1 py-3.5">
      <p className="text-sm font-bold items-center box-border caret-transparent gap-x-1 inline-flex flex-wrap justify-center leading-[21px] outline-[3px]">
        Nutze deine{" "}
        <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
          FSA/HSA
        </span>
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] align-middle">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-1.svg"
            alt="Icon"
            className="box-border caret-transparent h-[19px] outline-[3px] w-[84px]"
          />
        </span>
        -Mittel bei Oura
      </p>
    </div>
  );
};
