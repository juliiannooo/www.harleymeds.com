export type AccuracyIntroProps = {
  containerVariant: string;
  contentVariant: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  linkHref?: string;
  linkText?: string;
};

export const AccuracyIntro = (props: AccuracyIntroProps) => {
  return (
    <div
      className={`box-border caret-transparent col-end-[main] col-start-[main] min-h-[auto] min-w-[auto] outline-[3px] ${props.containerVariant}`}
    >
      {props.eyebrow ? (
        <h2 className="text-stone-700 text-lg font-bold box-border caret-transparent leading-[27px] outline-[3px] text-left mb-6">
          {props.eyebrow}
        </h2>
      ) : null}
      <div
        className={`box-border caret-transparent outline-[3px] ${props.contentVariant}`}
      >
        {props.title ? (
          <h3 className="text-stone-700 text-[40px] font-light box-border caret-transparent flex flex-col tracking-[-1px] leading-10 outline-[3px] text-left md:text-[80px] md:tracking-[-2px] md:leading-[80px]">
            {props.title}
          </h3>
        ) : null}
        {props.description ? (
          <p className="text-stone-700 box-border caret-transparent outline-[3px] text-left">
            {props.description}
          </p>
        ) : null}
        {props.linkHref && props.linkText ? (
          <a
            href={props.linkHref}
            className="text-orange-50 bg-stone-700 box-border caret-transparent inline-block outline-[3px] text-center mt-6 px-6 py-3 rounded-[3.35544e+07px]"
          >
            <span className="content-center items-center box-border caret-transparent gap-x-2 inline-flex justify-center outline-[3px] gap-y-2">
              <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                {props.linkText}
              </span>
            </span>
          </a>
        ) : null}
      </div>
    </div>
  );
};
