export type ProductCardProps = {
  href: string;
  productImageUrl: string;
  productImageAlt: string;
  logoImageUrl: string;
  logoImageAlt: string;
  description: string;
  price: string;
  title: string;
  ctaText: string;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="items-stretch backdrop-blur-[30px] bg-white/30 box-border caret-transparent gap-x-6 flex flex-col justify-between outline-[3px] gap-y-6 translate-y-[320.195px] z-[1] overflow-hidden p-4 rounded-3xl border-2 border-solid border-white/10 scale-90 top-2/4 md:gap-x-10 md:flex-row md:gap-y-10 md:translate-y-[213px] md:pr-10 md:scale-90 md:top-auto">
      <a
        href={props.href}
        className="items-center aspect-square bg-emerald-200 box-border caret-transparent flex basis-auto grow-0 h-[230px] justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline w-full overflow-hidden rounded-2xl md:aspect-auto md:basis-[0%] md:grow md:h-[390px] md:max-w-xs md:w-auto hover:text-stone-600 hover:bg-emerald-300 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-2xl hover:border-0 hover:border-none"
      >
        <img
          src={props.productImageUrl}
          alt={props.productImageAlt}
          sizes="(max-width: 991px) 100vw, 2000px"
          className="self-stretch box-border caret-transparent basis-[0%] grow max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full rounded-2xl hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-2xl hover:border-0 hover:border-none"
        />
      </a>
      <div className="items-start box-border caret-transparent flex basis-[0%] flex-col grow justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full md:items-stretch md:justify-between md:w-auto">
        <div className="items-center box-border caret-transparent hidden justify-end min-h-0 min-w-0 outline-[3px] w-full pt-0 md:flex md:min-h-[auto] md:min-w-[auto] md:pt-4">
          <img
            src={props.logoImageUrl}
            alt={props.logoImageAlt}
            className="box-border caret-transparent inline-block max-w-full min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]"
          />
        </div>
        <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 w-full md:gap-x-5 md:gap-y-5">
          <p className="text-green-400 text-2xl box-border caret-transparent hidden leading-9 outline-[3px]">
            {props.description}
          </p>
          <div className="items-end box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="text-yellow-50 text-sm box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] md:text-xl md:tracking-[2px] md:leading-6">
              <div className="text-base box-content caret-black tracking-[normal] leading-[normal] outline-0 w-auto md:text-xl md:aspect-auto md:box-border md:caret-transparent md:tracking-[2px] md:leading-6 md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  Starting
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  at
                </div>
              </div>
            </div>
          </div>
          <div className="items-end box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="text-emerald-200 text-[42px] font-semibold box-border caret-transparent leading-[42px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[64px] md:leading-[64px]">
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-[64px] md:aspect-auto md:box-border md:caret-transparent md:leading-[64px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  {props.price}
                </div>
              </div>
            </div>
            <div className="text-emerald-200 text-2xl font-semibold box-border caret-transparent leading-[26.4px] min-h-[auto] min-w-[auto] outline-[3px]">
              <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  Per
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  Month
                </div>
              </div>
            </div>
          </div>
          <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 md:items-center md:flex-row">
            <h2 className="text-yellow-50 text-[32px] font-semibold items-center box-border caret-transparent justify-center leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[42px] md:leading-[46.2px]">
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-[42px] md:aspect-auto md:box-border md:caret-transparent md:leading-[46.2px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  {props.title}
                </div>
              </div>
            </h2>
            <a
              href={props.href}
              className="items-center bg-yellow-50 box-border caret-transparent flex h-12 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-6 rounded-[1000px] hover:text-stone-600 hover:bg-emerald-200 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-[1000px] hover:border-0 hover:border-none"
            >
              <div className="text-neutral-800 font-semibold box-border caret-transparent tracking-[0.16px] leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] uppercase hover:text-neutral-900 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-neutral-800 hover:rounded-none hover:border-0 hover:border-none">
                {props.ctaText}
              </div>
            </a>
          </div>
          <div className="items-start border-b-stone-600 border-l-stone-600 border-r-stone-600 box-border caret-transparent gap-x-5 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-5 pt-5 pb-0 border-t-white/30 border-t-2 md:items-center md:flex-row md:pb-8">
            <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
              <div className="bg-yellow-50 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
              <div className="text-yellow-50 text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    No
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    Insurance
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
              <div className="bg-yellow-50 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
              <div className="text-yellow-50 text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    upfront
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    Prices
                  </div>
                </div>
              </div>
            </div>
            <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
              <div className="bg-yellow-50 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
              <div className="text-yellow-50 text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    No
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    Hidden
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    Fees
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
