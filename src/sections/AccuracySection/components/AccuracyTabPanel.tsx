export type AccuracyTabPanelProps = {
  panelVariantClassName: string;
  title: string;
  heroImageAlt: string;
  heroImageSrc: string;
  mobileMedia: React.ReactNode;
  contentClassName: string;
  featureOne: React.ReactNode;
  featureTwo: React.ReactNode;
  featureThree?: React.ReactNode;
  quote?: React.ReactNode;
};

export const AccuracyTabPanel = (props: AccuracyTabPanelProps) => {
  return (
    <div
      role="tabpanel"
      className={`box-border caret-transparent outline-[3px] ${props.panelVariantClassName}`}
    >
      <div className="relative box-border caret-transparent gap-x-6 flex flex-col justify-center opacity-0 outline-[3px] pt-12 pb-32 md:flex-row md:py-0">
        <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 pb-6 md:hidden md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
          <div className="box-border caret-transparent col-end-[main] col-start-[main] outline-[3px]">
            <div className="box-border caret-transparent blur-[5px] opacity-0 outline-[3px]">
              <h4 className="text-stone-700 text-[28px] font-light box-border caret-transparent leading-[42px] outline-[3px] text-left md:text-[40px] md:leading-[60px]">
                {props.title}
              </h4>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent block h-[500px] opacity-0 outline-[3px] md:hidden">
          <img
            alt={props.heroImageAlt}
            sizes="100vw"
            src={props.heroImageSrc}
            className="absolute text-transparent box-border h-full max-w-full object-cover outline-[3px] w-full inset-0"
          />
        </div>
        {props.mobileMedia}
        <div className={props.contentClassName}>
          {props.featureOne}
          {props.featureTwo}
          {props.featureThree}
        </div>
        {props.quote}
      </div>
    </div>
  );
};
