import { PressArticleCard } from "@/sections/PressSection/components/PressArticleCard";
import { FeaturedPressArticle } from "@/sections/PressSection/components/FeaturedPressArticle";
import { PressArticleList } from "@/sections/PressSection/components/PressArticleList";

type PressArticle = {
  title: string;
  href: string;
};

const pressArticles: PressArticle[] = [
  {
    title:
      "CNN: CEOs and celebrities love Oura’s sleep-tracking ring. Its CEO has a plan to stay ahead of Apple and Google",
    href: "https://www.cnn.com/2025/12/17/tech/oura-ring-ceo-interview-apple-samsung-google",
  },
  {
    title:
      "CNBC: Oura reaches $11 billion valuation with new $900 million fundraise",
    href: "https://www.cnbc.com/2025/10/14/oura-ringmaker-valuation-fundraise.html",
  },
  {
    title:
      "Cosmopolitan: I Tested the Oura Ring 4 for an Entire Year and Here's My Honest Review",
    href: "https://www.cosmopolitan.com/health-fitness/a65439561/oura-ring-4-review/",
  },
];

export type PressArticleCardProps = {
  article: PressArticle;
  isMobile?: boolean;
};

export const PressArticleCard = ({
  article,
  isMobile = false,
}: PressArticleCardProps) => {
  return (
    <article
      className={
        isMobile
          ? "bg-orange-50 box-border caret-transparent flex flex-col h-full justify-between outline-[3px] w-[281.25px] overflow-hidden p-6 rounded-lg md:w-full"
          : "bg-orange-50 box-border caret-transparent flex flex-col h-full justify-between min-h-0 min-w-0 outline-[3px] w-[281.25px] overflow-hidden p-6 rounded-lg md:min-h-[auto] md:min-w-[auto] md:w-full"
      }
    >
      <h2
        className={
          isMobile
            ? "text-2xl box-border caret-transparent leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] text-left mb-36 md:min-h-0 md:min-w-0 md:mb-12"
            : "text-2xl box-border caret-transparent leading-[30px] min-h-0 min-w-0 outline-[3px] text-left mb-36 md:min-h-[auto] md:min-w-[auto] md:mb-12"
        }
      >
        {article.title}
      </h2>
      <div
        className={
          isMobile
            ? "items-end box-border caret-transparent flex justify-end min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0"
            : "items-end box-border caret-transparent flex justify-end min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]"
        }
      >
        <a
          href={article.href}
          aria-label="Hier gehts zum Artikel"
          className={
            isMobile
              ? "text-orange-50 bg-stone-700 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-center p-4 rounded-[3.35544e+07px] md:min-h-0 md:min-w-0"
              : "text-orange-50 bg-stone-700 box-border caret-transparent block min-h-0 min-w-0 outline-[3px] text-center p-4 rounded-[3.35544e+07px] md:min-h-[auto] md:min-w-[auto]"
          }
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

const FeaturedPressArticle = () => {
  return null;
};

export const PressArticleList = () => {
  return (
    <>
      <div className="box-border caret-transparent hidden flex-col outline-[3px] gap-y-6 md:flex">
        {pressArticles.map((article) => (
          <PressArticleCard key={article.href} article={article} />
        ))}
      </div>
      <div className="box-border caret-transparent outline-[3px] overflow-hidden">
        <div className="box-border caret-transparent flex flex-col-reverse outline-[3px] md:hidden">
          <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] mr-6 my-4 md:min-h-0 md:min-w-0">
            <p className="text-orange-50 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left md:min-h-0 md:min-w-0">
              1 / 3
            </p>
            <ul className="box-border caret-transparent gap-x-2 flex justify-center list-none min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 pl-0 md:min-h-0 md:min-w-0">
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                <button
                  aria-label="Zur CNN-Folie"
                  type="button"
                  className="bg-transparent caret-transparent outline-[3px] text-center bg-[position:0px_0px] p-2"
                >
                  <div className="bg-orange-50 box-border caret-transparent h-2 outline-[3px] w-2 rounded-[3.35544e+07px]"></div>
                </button>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                <button
                  aria-label="Zur Folie von CNBC"
                  type="button"
                  className="bg-transparent caret-transparent outline-[3px] text-center bg-[position:0px_0px] p-2"
                >
                  <div className="bg-stone-700 box-border caret-transparent h-2 outline-[3px] w-2 rounded-[3.35544e+07px]"></div>
                </button>
              </li>
              <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
                <button
                  aria-label="Zur Cosmopolitan-Folie"
                  type="button"
                  className="bg-transparent caret-transparent outline-[3px] text-center bg-[position:0px_0px] p-2"
                >
                  <div className="bg-stone-700 box-border caret-transparent h-2 outline-[3px] w-2 rounded-[3.35544e+07px]"></div>
                </button>
              </li>
            </ul>
          </div>
          <ul className="items-stretch box-border caret-transparent gap-x-6 flex list-none min-h-[auto] min-w-[auto] outline-[3px] snap-always overflow-auto pl-0 pr-6 md:min-h-0 md:min-w-0">
            {pressArticles.map((article) => (
              <li
                key={article.href}
                className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] snap-start md:min-h-0 md:min-w-0"
              >
                <PressArticleCard article={article} isMobile />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export const PressSection = () => {
  return (
    <section className="bg-stone-900 box-border caret-transparent outline-[3px] py-8 md:py-16">
      <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
        <div className="box-border caret-transparent col-end-[main] col-start-[main] min-h-[auto] min-w-[auto] outline-[3px]">
          <h2 className="text-orange-50 text-lg font-bold box-border caret-transparent tracking-[0.9px] leading-[27px] outline-[3px] text-left uppercase mb-8">
            PRESSESTIMMEN
          </h2>
        </div>
        <div className="relative box-border caret-transparent col-end-[main] col-start-[main] row-start-2 h-[600px] min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden rounded-lg md:col-end-[15] md:h-auto md:w-auto">
          <div className="absolute box-border caret-transparent h-[115%] outline-[3px] translate-y-[-20.0%] inset-0">
            <picture className="box-border caret-transparent outline-[3px]">
              <img
                alt="Eine Frau im Liegen, die auf ihr Handy schaut und einen Oura Ring 5 trägt."
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/180.png"
                className="absolute text-transparent box-border h-full max-w-full object-cover outline-[3px] w-full inset-0"
              />
            </picture>
          </div>
          <div className="absolute bg-[linear-gradient(in_oklab,rgba(0,0,0,0)_0px,rgb(0,0,0)_100%)] box-border caret-transparent opacity-40 outline-[3px] top-[33.3333%] bottom-0 inset-x-0"></div>
        </div>
        <FeaturedPressArticle />
        <div className="box-border caret-transparent col-end-[full] col-start-[main] row-start-3 min-h-[auto] min-w-[auto] outline-[3px] pt-4 md:col-end-[main] md:col-start-[16] md:row-start-2 md:pt-0">
          <PressArticleList />
        </div>
      </div>
    </section>
  );
};
