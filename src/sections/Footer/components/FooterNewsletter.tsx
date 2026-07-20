export const FooterNewsletter = () => {
  return (
    <div className="box-border caret-transparent gap-x-10 grid shrink-0 auto-rows-min grid-cols-[repeat(1,minmax(0px,1fr))] min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 w-full md:gap-y-8 md:w-96">
      <h2 className="text-stone-400 text-[28px] font-light box-border caret-transparent tracking-[-0.7px] leading-[35px] min-h-[auto] min-w-[auto] outline-[3px] text-left font-editorial_new md:text-[40px] md:tracking-[-1px] md:leading-[50px]">
        Erhalte die neuesten Beiträge, Tipps und Angebote von Oura
      </h2>
      <div className="box-border caret-transparent flex flex-col row-end-auto row-start-auto justify-normal justify-self-auto min-h-[auto] min-w-[auto] outline-[3px] md:row-end-[span_1] md:row-start-[span_1] md:justify-center md:justify-self-start md:min-w-0">
        <form className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-80">
          <input
            aria-label="E-Mail-Adresse"
            placeholder="E-Mail-Adresse"
            type="email"
            name="email"
            value=""
            className="text-white bg-stone-700 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(255,255,255,0.06)_0px_1px_0px_0px_inset] box-border caret-transparent tracking-[0.4px] outline-[3px] w-full pl-5 pr-12 py-2 rounded-xl"
          />
          <button
            aria-label="E-Mail-Adresse für Newsletter senden"
            type="submit"
            name="submit"
            className="absolute text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.6)] items-center bg-transparent caret-transparent flex h-8 justify-center outline-[3px] text-center w-8 bg-[position:0px_0px] p-0 rounded-lg right-2 top-2/4"
          >
            <img
              src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-33.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] w-4"
            />
          </button>
        </form>
      </div>
      <div className="box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
        <p className="text-stone-400 text-xs box-border caret-transparent leading-[18px] outline-[3px] text-left">
          Der Schutz deiner Daten ist uns wichtig.
        </p>
        <div className="text-stone-400 text-xs box-border caret-transparent leading-[18px] outline-[3px] text-left">
          Erfahre mehr in unserer{" "}
          <a
            href="/privacy-policy"
            className="box-border caret-transparent outline-[3px] underline"
          >
            Datenschutzerklärung
          </a>
          .
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-1 block flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:flex">
        <p className="text-stone-400 text-xs box-border caret-transparent block leading-[18px] outline-[3px] text-left md:hidden">
          Der Schutz deiner Daten ist uns wichtig.Erfahre mehr in unserer{" "}
          <a
            href="/privacy-policy"
            className="box-border caret-transparent outline-[3px] underline"
          >
            Datenschutzerklärung
          </a>
          .
        </p>
      </div>
    </div>
  );
};
