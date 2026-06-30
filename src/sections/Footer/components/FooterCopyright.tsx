export const FooterCopyright = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-6 flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 md:[align-items:normal] md:justify-normal">
      <div className="items-center box-border caret-transparent gap-x-3.5 flex justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5 md:items-start md:justify-end">
        <div className="items-center box-border caret-transparent flex h-[100px] justify-start min-h-[auto] min-w-[auto] outline-[3px] w-[140px] md:justify-end">
          <img
            src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67b65f4a26e1abba8858a660_30668909.svg"
            alt=""
            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
          />
        </div>
      </div>
      <div className="items-start box-border caret-transparent gap-x-3 flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 md:items-end md:gap-x-2 md:justify-end md:gap-y-2">
        <div className="text-green-400 text-sm box-border caret-transparent leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px]">
          © 2025 Harley Meds
        </div>
        <div className="text-green-400 text-sm box-border caret-transparent leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px]">
          Designed by
          <a
            href="https://www.lotipa.com/en"
            className="box-border caret-transparent outline-[3px] hover:text-green-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-green-400 hover:rounded-none hover:border-0 hover:border-none"
          >
            {" "}
            Lotipa™
          </a>
        </div>
      </div>
    </div>
  );
};
