export const MembershipHeader = () => {
  return (
    <div className="box-border caret-transparent col-end-[main] col-start-[main] min-h-[auto] min-w-[auto] outline-[3px] py-16 md:col-end-[20] md:col-start-6 md:py-32">
      <div className="items-center box-border caret-transparent flex flex-col outline-[3px]">
        <div className="box-border caret-transparent blur-0 min-h-[auto] min-w-[auto] outline-[3px]">
          <p className="text-stone-700 text-[40px] font-light box-border caret-transparent tracking-[-1px] leading-[50px] outline-[3px] text-center md:text-[80px] md:tracking-[-2px] md:leading-[100px]">
            Die Oura-Mitgliedschaft verleiht deinem Körper eine Stimme
          </p>
        </div>
        <a
          href="/why-oura"
          className="relative text-orange-50 bg-stone-700 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-center mt-8 px-6 py-3 rounded-[3.35544e+07px] md:mt-12"
        >
          <span className="content-center items-center box-border caret-transparent gap-x-2 inline-flex justify-center outline-[3px] gap-y-2">
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
              Die Vorteile von Oura
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};
