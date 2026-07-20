export const FeaturedPressArticle = () => {
  return (
    <div className="relative box-border caret-transparent col-end-[main] col-start-[main] row-start-2 min-h-[auto] min-w-[auto] outline-[3px] md:col-end-[15]">
      <article className="box-border caret-transparent flex flex-col h-full justify-between outline-[3px] p-8">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <div className="text-xs font-bold bg-orange-50 box-border caret-transparent inline-block leading-4 outline-[3px] uppercase px-3 py-2 rounded-md">
            <p className="box-border caret-transparent leading-[18px] outline-[3px] text-left">
              EMPFOHLENER ARTIKEL
            </p>
          </div>
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mt-auto pr-0 pt-64 md:pr-[200px] md:pt-0">
          <h2 className="text-orange-50 text-[28px] box-border caret-transparent tracking-[-1.4px] leading-[35px] outline-[3px] text-left mb-8 md:text-[40px] md:tracking-[-2px] md:leading-[50px]">
            Neue Oura-Funktionen, die dir helfen, deine Gesundheit im Blick zu
            behalten
          </h2>
          <a
            href="https://ouraring.com/blog/de/new-software-features/"
            className="text-stone-700 bg-orange-50 box-border caret-transparent inline-block outline-[3px] text-center px-6 py-3 rounded-[3.35544e+07px]"
          >
            <span className="content-center items-center box-border caret-transparent gap-x-2 inline-flex justify-center outline-[3px] gap-y-2">
              <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                Mehr erfahren
              </span>
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-18.svg"
                alt="Icon"
                className="box-border caret-transparent h-[13px] outline-[3px] w-[13px]"
              />
            </span>
          </a>
        </div>
      </article>
    </div>
  );
};
