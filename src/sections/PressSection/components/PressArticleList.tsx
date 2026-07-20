export type PressArticleListProps = {
  articles: {
    title: string;
    href: string;
    dotAriaLabel: string;
  }[];
  currentIndex: number;
  onSelectArticle?: (index: number) => void;
  articleAriaLabel: string;
  iconSrc: string;
  iconAlt: string;
  activeDotClassName: string;
  inactiveDotClassName: string;
};

export const PressArticleList = (props: PressArticleListProps) => {
  return (
    <>
      <div className="box-border caret-transparent hidden flex-col outline-[3px] gap-y-6 md:flex">
        {props.articles.map((article) => (
          <article
            key={article.href}
            className="bg-orange-50 box-border caret-transparent flex flex-col h-full justify-between min-h-0 min-w-0 outline-[3px] w-[281.25px] overflow-hidden p-6 rounded-lg md:min-h-[auto] md:min-w-[auto] md:w-full"
          >
            <h2 className="text-2xl box-border caret-transparent leading-[30px] min-h-0 min-w-0 outline-[3px] text-left mb-36 md:min-h-[auto] md:min-w-[auto] md:mb-12">
              {article.title}
            </h2>
            <div className="items-end box-border caret-transparent flex justify-end min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
              <a
                href={article.href}
                aria-label={props.articleAriaLabel}
                className="text-orange-50 bg-stone-700 box-border caret-transparent block min-h-0 min-w-0 outline-[3px] text-center p-4 rounded-[3.35544e+07px] md:min-h-[auto] md:min-w-[auto]"
              >
                <img
                  src={props.iconSrc}
                  alt={props.iconAlt}
                  className="box-border caret-transparent h-[13px] outline-[3px] w-[13px]"
                />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="box-border caret-transparent outline-[3px] overflow-hidden">
        <div className="box-border caret-transparent flex flex-col-reverse outline-[3px] md:hidden">
          <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] mr-6 my-4 md:min-h-0 md:min-w-0">
            <p className="text-orange-50 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left md:min-h-0 md:min-w-0">
              {props.currentIndex + 1} / {props.articles.length}
            </p>
            <ul className="box-border caret-transparent gap-x-2 flex justify-center list-none min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 pl-0 md:min-h-0 md:min-w-0">
              {props.articles.map((article, index) => (
                <li
                  key={article.href}
                  className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0"
                >
                  <button
                    aria-label={article.dotAriaLabel}
                    type="button"
                    onClick={() => props.onSelectArticle?.(index)}
                    className="bg-transparent caret-transparent outline-[3px] text-center bg-[position:0px_0px] p-2"
                  >
                    <div
                      className={`${index === props.currentIndex ? props.activeDotClassName : props.inactiveDotClassName} box-border caret-transparent h-2 outline-[3px] w-2 rounded-[3.35544e+07px]`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <ul className="items-stretch box-border caret-transparent gap-x-6 flex list-none min-h-[auto] min-w-[auto] outline-[3px] snap-always overflow-auto pl-0 pr-6 md:min-h-0 md:min-w-0">
            {props.articles.map((article) => (
              <li
                key={article.href}
                className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] snap-start md:min-h-0 md:min-w-0"
              >
                <article className="bg-orange-50 box-border caret-transparent flex flex-col h-full justify-between outline-[3px] w-[281.25px] overflow-hidden p-6 rounded-lg md:w-full">
                  <h2 className="text-2xl box-border caret-transparent leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left mb-36 md:min-h-0 md:min-w-0 md:mb-12">
                    {article.title}
                  </h2>
                  <div className="items-end box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                    <a
                      href={article.href}
                      aria-label={props.articleAriaLabel}
                      className="text-orange-50 bg-stone-700 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-center p-4 rounded-[3.35544e+07px] md:min-h-0 md:min-w-0"
                    >
                      <img
                        src={props.iconSrc}
                        alt={props.iconAlt}
                        className="box-border caret-transparent h-[13px] outline-[3px] w-[13px]"
                      />
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
