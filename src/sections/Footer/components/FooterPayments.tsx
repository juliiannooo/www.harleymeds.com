export const FooterPayments = () => {
  return (
    <div className="text-zinc-500 [align-items:normal] box-border caret-transparent gap-x-10 flex flex-col justify-between outline-[3px] gap-y-10 mb-10 md:items-center md:gap-x-2 md:flex-row md:gap-y-2 md:mb-16">
      <img
        src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-21.svg"
        alt="Icon"
        className="box-border caret-transparent outline-[3px] w-[150px]"
      />
      <h2 className="absolute text-stone-700 box-border caret-transparent h-px outline-[3px] text-left text-nowrap w-px overflow-hidden -m-px">
        Zahlungsoptionen
      </h2>
      <div className="text-orange-50 items-center box-border caret-transparent flex h-12 justify-center min-h-[auto] min-w-[auto] outline-[3px] md:hidden md:min-h-0 md:min-w-0">
        <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
          <div className="items-center box-border caret-transparent flex justify-center outline-[3px] text-nowrap">
            <p className="text-white font-bold box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left text-nowrap md:min-h-0 md:min-w-0">
              <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
                FSA- oder HSA
              </span>
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-22.svg"
                alt="Icon"
                className="box-border caret-transparent inline-block h-[19px] outline-[3px] text-nowrap w-[84px]"
              />
              -berechtigt
            </p>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-center outline-[3px] gap-y-2 text-nowrap w-full">
            <p className="box-border caret-transparent min-h-[auto] min-w-[auto] order-last outline-[3px] text-left text-nowrap md:min-h-0 md:min-w-0">
              Verfügbar
            </p>
            <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap w-14 p-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-23.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 outline-[3px] text-nowrap"
              />
              <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
                Affirm
              </span>
            </div>
            <div className="items-center bg-pink-300 box-border caret-transparent flex h-fit justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap w-14 px-2 py-1 rounded-lg md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-24.svg"
                alt="Icon"
                className="text-slate-950 box-border caret-transparent h-4 outline-[3px] text-nowrap w-[37px]"
              />
              <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
                Klarna
              </span>
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-center outline-[3px] gap-y-2 text-nowrap w-full">
            <p className="box-border caret-transparent min-h-[auto] min-w-[auto] order-last outline-[3px] text-left text-nowrap md:min-h-0 md:min-w-0">
              Sofortzahlung
            </p>
            <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap p-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-25.svg"
                alt="Icon"
                className="box-border caret-transparent h-8 outline-[3px] text-nowrap w-[29px]"
              />
              <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
                PayPal
              </span>
            </div>
            <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap p-2 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-26.svg"
                alt="Icon"
                className="box-border caret-transparent h-[18px] outline-[3px] text-nowrap"
              />
              <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
                Apple Pay
              </span>
            </div>
            <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap border-neutral-700 p-2 rounded-[3.35544e+07px] border-2 border-solid md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-27.svg"
                alt="Icon"
                className="box-border caret-transparent h-5 outline-[3px] text-nowrap"
              />
              <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
                Google Pay
              </span>
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-center outline-[3px] gap-y-2 text-nowrap w-full">
            <p className="box-border caret-transparent min-h-[auto] min-w-[auto] order-last outline-[3px] text-left text-nowrap md:min-h-0 md:min-w-0">
              Gängige Karten akzeptiert
            </p>
            <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap p-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-28.svg"
                alt="Icon"
                className="text-blue-900 box-border caret-transparent h-10 outline-[3px] text-nowrap w-10"
              />
              <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
                Visa
              </span>
            </div>
            <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap p-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-29.svg"
                alt="Icon"
                className="box-border caret-transparent h-6 outline-[3px] text-nowrap w-9"
              />
              <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
                Mastercard
              </span>
            </div>
            <div className="items-center bg-blue-600 box-border caret-transparent flex h-[34px] justify-center min-h-[auto] min-w-[auto] outline-[3px] text-nowrap px-1 py-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-30.svg"
                alt="Icon"
                className="text-white box-border caret-transparent h-12 outline-[3px] text-nowrap w-12"
              />
              <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
                American Express
              </span>
            </div>
          </div>
        </span>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:min-h-0 md:min-w-0">
          <div className="box-border caret-transparent opacity-100 outline-[3px] md:opacity-[0.799867]">
            <div className="[align-items:normal] box-content caret-black block justify-normal outline-0 md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-center md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
          </div>
        </div>
      </div>
      <div className="text-black items-center box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0 outline-[3px] gap-y-2 md:flex md:min-h-[auto] md:min-w-[auto]">
        <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-0 min-w-0 outline-[3px] p-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-31.svg"
            alt="Icon"
            className="box-border caret-transparent h-10 outline-[3px] w-[63px]"
          />
          <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
            HSA/FSA-berechtigt
          </span>
        </div>
        <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-0 min-w-0 outline-[3px] p-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-23.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 outline-[3px]"
          />
          <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
            Affirm
          </span>
        </div>
        <div className="items-center bg-pink-300 box-border caret-transparent flex h-[34px] justify-center min-h-0 min-w-0 outline-[3px] p-2 rounded-lg md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-32.svg"
            alt="Icon"
            className="text-slate-950 box-border caret-transparent h-6 outline-[3px] w-14"
          />
          <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
            Klarna
          </span>
        </div>
        <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-0 min-w-0 outline-[3px] p-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-25.svg"
            alt="Icon"
            className="box-border caret-transparent h-8 outline-[3px] w-[29px]"
          />
          <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
            PayPal
          </span>
        </div>
        <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-0 min-w-0 outline-[3px] p-2 rounded-bl rounded-br rounded-tl rounded-tr border-2 border-solid md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-26.svg"
            alt="Icon"
            className="box-border caret-transparent h-[18px] outline-[3px]"
          />
          <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
            Apple Pay
          </span>
        </div>
        <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-0 min-w-0 outline-[3px] border-neutral-700 p-2 rounded-[3.35544e+07px] border-2 border-solid md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-27.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 outline-[3px]"
          />
          <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
            Google Pay
          </span>
        </div>
        <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-0 min-w-0 outline-[3px] p-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-28.svg"
            alt="Icon"
            className="text-blue-900 box-border caret-transparent h-10 outline-[3px] w-10"
          />
          <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
            Visa
          </span>
        </div>
        <div className="items-center bg-white box-border caret-transparent flex h-[34px] justify-center min-h-0 min-w-0 outline-[3px] p-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-29.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[3px] w-9"
          />
          <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
            Mastercard
          </span>
        </div>
        <div className="items-center bg-blue-600 box-border caret-transparent flex h-[34px] justify-center min-h-0 min-w-0 outline-[3px] px-1 py-2 rounded-bl rounded-br rounded-tl rounded-tr md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-30.svg"
            alt="Icon"
            className="text-white box-border caret-transparent h-12 outline-[3px] w-12"
          />
          <span className="absolute box-border caret-transparent block h-px outline-[3px] text-nowrap w-px overflow-hidden -m-px">
            American Express
          </span>
        </div>
      </div>
    </div>
  );
};
