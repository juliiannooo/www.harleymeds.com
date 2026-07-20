export type AccuracyTimelineItemProps = {
  title: string;
  titleBadgeVariantClass: string;
  heroWrapperVariantClass: string;
  heroImageAlt: string;
  heroImageSrc: string;
  portraitWrapperClass: string;
  portraitContent: React.ReactNode;
  appShowcaseWrapperClass: string;
  appShowcaseContent: React.ReactNode;
  quoteWrapperClass?: string;
  quoteTextClass?: string;
  quoteText?: React.ReactNode;
  quoteAuthor?: string;
};

export const AccuracyTimelineItem = (props: AccuracyTimelineItemProps) => {
  return (
    <div className="relative box-border caret-transparent gap-x-6 flex flex-col justify-center opacity-0 outline-[3px] pt-12 pb-32 md:flex-row md:py-0">
      <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 pb-6 md:hidden md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]] md:min-h-0 md:min-w-0">
        <div className="box-border caret-transparent col-end-[main] col-start-[main] min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
          <div
            className={`box-border caret-transparent outline-[3px] ${props.titleBadgeVariantClass}`}
          >
            <h4 className="text-stone-700 text-[28px] font-light box-border caret-transparent leading-[42px] outline-[3px] text-left md:text-[40px] md:leading-[60px]">
              {props.title}
            </h4>
          </div>
        </div>
      </div>
      <div
        className={`relative box-border caret-transparent block h-[500px] min-h-[auto] min-w-[auto] outline-[3px] md:hidden md:min-h-0 md:min-w-0 ${props.heroWrapperVariantClass}`}
      >
        <img
          alt={props.heroImageAlt}
          sizes="100vw"
          src={props.heroImageSrc}
          className="absolute text-transparent box-border h-full max-w-full object-cover outline-[3px] w-full inset-0"
        />
      </div>
      <div className={props.portraitWrapperClass}>{props.portraitContent}</div>
      <div className={props.appShowcaseWrapperClass}>
        {props.appShowcaseContent}
      </div>
      {props.quoteWrapperClass &&
      props.quoteTextClass &&
      props.quoteText &&
      props.quoteAuthor ? (
        <div className={props.quoteWrapperClass}>
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-17.svg"
            alt="Icon"
            className="text-stone-600 box-border caret-transparent h-[9px] outline-[3px] w-[13px]"
          />
          <p className={props.quoteTextClass}>{props.quoteText}</p>
          <p className="text-stone-600 text-sm box-border caret-transparent leading-[21px] outline-[3px] text-left mt-4">
            {props.quoteAuthor}
          </p>
        </div>
      ) : null}
    </div>
  );
};
