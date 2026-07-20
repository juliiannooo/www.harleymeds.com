export type MembershipCardProps = {
  ariaLabel: string;
  imageAlt: string;
  imageSrc: string;
  iconSrc: string;
  iconClassName: string;
  category: string;
  title: string;
};

export const MembershipCard = (props: MembershipCardProps) => {
  const buttonAriaLabel = `${props.category}-Karte vollständig einblenden`;

  return (
    <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] snap-start">
      <div
        aria-label={props.ariaLabel}
        className="box-border caret-transparent h-[388px] max-w-[1440px] outline-[3px] w-[300px] pb-8 md:h-[658px] md:w-[493px]"
      >
        <div className="box-border caret-transparent h-full outline-[3px] w-full overflow-hidden rounded-xl">
          <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(4,minmax(0px,1fr))] grid-rows-[repeat(4,minmax(0px,1fr))] h-full outline-[3px] gap-y-4">
            <div className="relative box-border caret-transparent col-end-5 col-start-1 row-end-5 row-start-1 min-h-[auto] min-w-[auto] outline-[3px]">
              <div className="relative box-border caret-transparent h-[110%] outline-[3px] translate-y-[-20.0%]">
                <img
                  alt={props.imageAlt}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 25vw, 35vw"
                  src={props.imageSrc}
                  className="absolute text-transparent box-border h-full max-w-full object-cover outline-[3px] w-full inset-0"
                />
              </div>
            </div>
            <div className="box-border caret-transparent col-end-4 col-start-1 row-end-2 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] pl-6 pt-6">
              <div className="relative items-center box-border caret-transparent gap-x-2.5 inline-flex outline-[3px] overflow-hidden px-4 py-3 md:px-6 md:py-4">
                <div className="absolute backdrop-blur-xl bg-blend-multiply bg-[oklab(0.259904_-0.000768863_-0.00799377_/_0.4)] box-border caret-transparent h-full min-h-px outline-[3px] w-full rounded-3xl left-0 top-0"></div>
                <img
                  src={props.iconSrc}
                  alt="Icon"
                  className={`relative text-orange-50 box-border caret-transparent outline-[3px] w-6 ${props.iconClassName}`}
                />
                <span className="relative text-orange-50 text-xs box-border caret-transparent block leading-[18px] min-h-[auto] min-w-[auto] outline-[3px] text-left">
                  {props.category}
                </span>
              </div>
            </div>
            <div className="relative items-end box-border caret-transparent flex flex-col col-end-5 col-start-4 row-end-2 row-start-1 min-h-[auto] min-w-[auto] outline-[3px] z-10 pr-6 pt-6">
              <button
                aria-label={buttonAriaLabel}
                type="button"
                className="text-stone-700 bg-orange-50 caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-center bg-[position:0px_0px] p-4 rounded-[3.35544e+07px] md:hidden md:min-h-0 md:min-w-0 md:p-5"
              >
                <span className="box-border caret-transparent outline-[3px]">
                  <img
                    src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-10.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-[13px] outline-[3px] w-[13px]"
                  />
                </span>
              </button>
              <button
                aria-label={buttonAriaLabel}
                type="button"
                className="text-stone-700 bg-orange-50 caret-transparent hidden min-h-0 min-w-0 outline-[3px] text-center bg-[position:0px_0px] p-5 rounded-[3.35544e+07px] md:block md:min-h-[auto] md:min-w-[auto]"
              >
                <span className="box-border caret-transparent outline-[3px]">
                  <img
                    src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-11.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-[13px] outline-[3px] w-[13px]"
                  />
                </span>
              </button>
            </div>
            <div className="relative self-end box-border caret-transparent col-end-5 col-start-1 row-end-5 row-start-4 max-w-[400px] min-h-[auto] min-w-[auto] outline-[3px] pb-6 px-6 md:col-end-4 md:pr-0">
              <h3 className="text-orange-50 text-[28px] font-light box-border caret-transparent leading-7 outline-[3px] text-left md:text-[40px] md:leading-10">
                {props.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
