export const FooterBottom = () => {
  return (
    <div className="box-border caret-transparent grid grid-cols-none grid-rows-none outline-[3px] gap-y-6 md:grid-cols-[1fr_auto] md:grid-rows-[repeat(2,minmax(0px,1fr))] md:gap-y-4">
      <ul className="text-stone-400 text-xs box-border caret-transparent gap-x-4 flex flex-wrap row-start-auto leading-4 list-none min-h-[auto] min-w-[auto] order-1 outline-[3px] gap-y-4 pl-0 md:row-start-1 md:order-none">
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <a
            href="/terms-and-conditions"
            className="box-border caret-transparent outline-[3px]"
          >
            Allgemeine Geschäftsbedingungen
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <a
            href="/privacy-policy"
            className="box-border caret-transparent outline-[3px]"
          >
            Datenschutzerklärung
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <a
            href="/accessibility"
            className="box-border caret-transparent outline-[3px]"
          >
            Barrierefreiheit
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <a
            href="/fcc-compliance-statements"
            className="box-border caret-transparent outline-[3px]"
          >
            FCC-Zertifizierung
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <a
            href="/intellectual-property-notice"
            className="box-border caret-transparent outline-[3px]"
          >
            Hinweis zum Urheberrecht
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <a
            href="/security"
            className="box-border caret-transparent outline-[3px]"
          >
            Sicherheit
          </a>
        </li>
      </ul>
      <div className="box-border caret-transparent row-start-auto min-h-[auto] min-w-[auto] order-3 outline-[3px] md:row-start-2 md:order-none">
        <p className="text-stone-400 text-xs box-border caret-transparent leading-[18px] outline-[3px] text-left">
          © 2026 Oura Health Oy. Alle Rechte vorbehalten. ŌURA, OURA und Ō sind
          Marken von Oura Health Oy und dürfen nicht ohne Genehmigung verwendet
          werden.
        </p>
      </div>
      <div className="items-center box-border caret-transparent flex row-end-auto row-start-auto justify-start min-h-[auto] min-w-[auto] order-2 outline-[3px] md:row-end-[span_2] md:row-start-[span_2] md:justify-center md:order-none">
        <button
          type="button"
          className="text-white items-center bg-transparent caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-center border bg-[position:0px_0px] px-4 py-2 rounded-[3.35544e+07px] border-white"
        >
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-36.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 outline-[3px] w-[19px]"
          />
          Deutsch
        </button>
      </div>
    </div>
  );
};
