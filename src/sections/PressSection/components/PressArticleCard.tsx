export type PressArticleCardProps = {
  title: string;
  href: string;
  articleClassName: string;
  contentClassName: string;
};

export const PressArticleCard = (props: PressArticleCardProps) => {
  return (
    <article
      className={`bg-orange-50 box-border caret-transparent flex flex-col h-full justify-between outline-[3px] w-[281.25px] overflow-hidden p-6 rounded-lg md:w-full ${props.articleClassName}`}
    >
      <h2
        className={`text-2xl box-border caret-transparent leading-[30px] outline-[3px] text-left mb-36 md:mb-12 ${props.contentClassName}`}
      >
        {props.title}
      </h2>
      <div
        className={`items-end box-border caret-transparent flex justify-end outline-[3px] ${props.contentClassName}`}
      >
        <a
          href={props.href}
          aria-label="Hier gehts zum Artikel"
          className={`text-orange-50 bg-stone-700 box-border caret-transparent block outline-[3px] text-center p-4 rounded-[3.35544e+07px] ${props.contentClassName}`}
        >
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-19.svg"
            alt="Icon"
            className="box-border caret-transparent h-[13px] outline-[3px] w-[13px]"
          />
        </a>
      </div>
    </article>
  );
};
