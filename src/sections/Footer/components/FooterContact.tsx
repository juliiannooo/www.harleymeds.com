export const FooterContact = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-8 md:items-end md:gap-x-[74px] md:flex-row md:gap-y-[74px]">
      <div className="box-border caret-transparent gap-x-2.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5">
        <a
          href="/terms-of-service"
          className="text-yellow-50 font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] hover:text-stone-300 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-300 hover:rounded-none hover:border-0 hover:border-none"
        >
          Terms of Service
        </a>
        <a
          href="/refund-return-policy"
          className="text-yellow-50 font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] hover:text-stone-300 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-300 hover:rounded-none hover:border-0 hover:border-none"
        >
          Refund &amp; Return Policy
        </a>
        <a
          href="/privacy-and-cookie-policy"
          className="text-yellow-50 font-bold box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] hover:text-stone-300 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-300 hover:rounded-none hover:border-0 hover:border-none"
        >
          Privacy and Cookie Policy
        </a>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <a
          href="#"
          className="text-yellow-50 text-sm font-bold box-border caret-transparent leading-[16.8px] outline-[3px] hover:text-stone-300 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-300 hover:rounded-none hover:border-0 hover:border-none"
        >
          331 Newman Springs Road
          <br className="box-border caret-transparent outline-[3px] hover:text-yellow-50 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-yellow-50 hover:rounded-none hover:border-0 hover:border-none" />
          Red Bank, NJ 07701
        </a>
      </div>
      <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px]">
        <a
          href="tel://848-371-0744"
          className="text-yellow-50 text-sm font-bold box-border caret-transparent block leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] hover:text-stone-300 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-300 hover:rounded-none hover:border-0 hover:border-none"
        >
          848-371-0744
        </a>
        <a
          href="mailto://info@harleymeds.com"
          className="text-yellow-50 text-sm font-bold box-border caret-transparent block leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] hover:text-stone-300 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-300 hover:rounded-none hover:border-0 hover:border-none"
        >
          TRT@harleymeds.com
        </a>
      </div>
    </div>
  );
};
