export const FooterNavigation = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-6 flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-center justify-self-stretch min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 md:justify-start">
      <div className="items-center box-border caret-transparent gap-x-3.5 flex justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-3.5 md:items-start md:justify-end">
        <a
          href="https://www.instagram.com/harley.meds"
          className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-none hover:border-0 hover:border-none"
        >
          <img
            src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67a5271b095bbba6a1a5e53d_insta.svg"
            alt="Instagram Icon\n"
            className="box-border caret-transparent inline-block max-w-full outline-[3px] hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-none hover:border-0 hover:border-none"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61560511595372"
          className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-none hover:border-0 hover:border-none"
        >
          <img
            src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67a5271becff67f8d09460bd_facebook.svg"
            alt="Facebook Icon\n"
            className="box-border caret-transparent inline-block max-w-full outline-[3px] hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-none hover:border-0 hover:border-none"
          />
        </a>
      </div>
      <a
        href="/"
        className="text-yellow-50 text-[32px] font-semibold items-center box-border caret-transparent flex justify-start leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px] hover:text-stone-300 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-300 hover:rounded-none hover:border-0 hover:border-none"
      >
        Home
      </a>
      <a
        href="/about"
        className="text-yellow-50 text-[32px] font-semibold box-border caret-transparent block leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px] hover:text-stone-300 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-300 hover:rounded-none hover:border-0 hover:border-none"
      >
        About us
      </a>
      <a
        href="/wellness"
        className="text-yellow-50 text-[32px] font-semibold box-border caret-transparent block leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px] hover:text-stone-300 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-300 hover:rounded-none hover:border-0 hover:border-none"
      >
        Wellness
      </a>
    </div>
  );
};
