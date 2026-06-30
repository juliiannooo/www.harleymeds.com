import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <div className="items-center box-border caret-transparent justify-between outline-[3px] overflow-clip">
      <div className="relative box-border caret-transparent flex h-[1000px] outline-[3px] w-screen">
        <HeroContent />
      </div>
      <section className="relative items-stretch box-border caret-transparent flex flex-col justify-center outline-[3px] w-full z-[2] overflow-clip">
        <div className="sticky text-white box-border caret-transparent h-[1000px] min-h-[auto] min-w-[auto] outline-[3px] w-screen z-[-1] overflow-hidden top-0">
          <video
            autoplay=""
            loop=""
            muted=""
            playsInline=""
            className="absolute bg-[url('https://cdn.prod.website-files.com/678e7b4c65f5a9cc36298bd8%2F67b4dcb690b2a79182e2c3cb_Home_product_bg-poster-00001.jpg')] bg-cover box-border caret-transparent h-full object-cover outline-[3px] align-baseline w-full z-[-100] bg-center m-auto -inset-full"
          >
            <source
              src="https://cdn.prod.website-files.com/678e7b4c65f5a9cc36298bd8/67b4dcb690b2a79182e2c3cb_Home_product_bg-transcode.mp4"
              className="text-black box-border caret-transparent leading-[normal] outline-[3px] font-times_new_roman"
            />
            <source
              src="https://cdn.prod.website-files.com/678e7b4c65f5a9cc36298bd8/67b4dcb690b2a79182e2c3cb_Home_product_bg-transcode.webm"
              className="text-black box-border caret-transparent leading-[normal] outline-[3px] font-times_new_roman"
            />
          </video>
        </div>
        <div className="items-center box-border caret-transparent gap-x-11 flex flex-col justify-center mt-[-1000px] max-w-[1000px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-11 w-full overflow-hidden mx-auto pt-[200px] pb-[1000px] px-4 md:pt-[400px]">
          <div className="self-stretch box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <div
              role="list"
              className="items-center box-border caret-transparent gap-x-16 flex flex-col shrink-0 justify-center outline-[3px] gap-y-16 md:[align-items:normal] md:gap-x-[220px] md:justify-normal md:gap-y-[220px]"
            >
              <div
                role="listitem"
                className="self-stretch box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:self-auto"
              >
                <div className="items-stretch backdrop-blur-[30px] bg-white/30 box-border caret-transparent gap-x-6 flex flex-col justify-between outline-[3px] gap-y-6 translate-y-[320.195px] z-[1] overflow-hidden p-4 rounded-3xl border-2 border-solid border-white/10 scale-90 top-2/4 md:gap-x-10 md:flex-row md:gap-y-10 md:translate-y-[213px] md:pr-10 md:scale-90 md:top-auto">
                  <a
                    href="/product/trt"
                    className="items-center aspect-square bg-emerald-200 box-border caret-transparent flex basis-auto grow-0 h-[230px] justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline w-full overflow-hidden rounded-2xl md:aspect-auto md:basis-[0%] md:grow md:h-[390px] md:max-w-xs md:w-auto hover:text-stone-600 hover:bg-emerald-300 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-2xl hover:border-0 hover:border-none"
                  >
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f6e7bb15c53e64083f69_testo-3d.png"
                      alt=""
                      sizes="(max-width: 991px) 100vw, 2000px"
                      className="self-stretch box-border caret-transparent basis-[0%] grow max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full rounded-2xl hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-2xl hover:border-0 hover:border-none"
                    />
                  </a>
                  <div className="items-start box-border caret-transparent flex basis-[0%] flex-col grow justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full md:items-stretch md:justify-between md:w-auto">
                    <div className="items-center box-border caret-transparent hidden justify-end min-h-0 min-w-0 outline-[3px] w-full pt-0 md:flex md:min-h-[auto] md:min-w-[auto] md:pt-4">
                      <img
                        src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f077a7a8eff055809872_trt.svg"
                        alt=""
                        className="box-border caret-transparent inline-block max-w-full min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]"
                      />
                    </div>
                    <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 w-full md:gap-x-5 md:gap-y-5">
                      <p className="text-green-400 text-2xl box-border caret-transparent hidden leading-9 outline-[3px]">
                        Pricing is personalized based on your lab results and
                        treatment plan.
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
                              $149
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
                              Testosterone
                            </div>
                          </div>
                        </h2>
                        <a
                          href="/product/trt"
                          className="items-center bg-yellow-50 box-border caret-transparent flex h-12 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-6 rounded-[1000px] hover:text-stone-600 hover:bg-emerald-200 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-[1000px] hover:border-0 hover:border-none"
                        >
                          <div className="text-neutral-800 font-semibold box-border caret-transparent tracking-[0.16px] leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] uppercase hover:text-neutral-900 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-neutral-800 hover:rounded-none hover:border-0 hover:border-none">
                            Learn MORE
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
              </div>
              <div
                role="listitem"
                className="self-stretch box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:self-auto"
              >
                <div className="items-stretch backdrop-blur-[30px] bg-white/30 box-border caret-transparent gap-x-6 flex flex-col justify-between outline-[3px] gap-y-6 translate-y-[320.195px] z-[1] overflow-hidden p-4 rounded-3xl border-2 border-solid border-white/10 scale-90 top-2/4 md:gap-x-10 md:flex-row md:gap-y-10 md:translate-y-[213px] md:pr-10 md:scale-90 md:top-auto">
                  <a
                    href="/product/sermorelin"
                    className="items-center aspect-square bg-emerald-200 box-border caret-transparent flex basis-auto grow-0 h-[230px] justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline w-full overflow-hidden rounded-2xl md:aspect-auto md:basis-[0%] md:grow md:h-[390px] md:max-w-xs md:w-auto hover:text-stone-600 hover:bg-emerald-300 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-2xl hover:border-0 hover:border-none"
                  >
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f6a45d0a3b201cf9381a_sermo-3d.png"
                      alt=""
                      sizes="(max-width: 991px) 100vw, 2000px"
                      className="self-stretch box-border caret-transparent basis-[0%] grow max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full rounded-2xl hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-2xl hover:border-0 hover:border-none"
                    />
                  </a>
                  <div className="items-start box-border caret-transparent flex basis-[0%] flex-col grow justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full md:items-stretch md:justify-between md:w-auto">
                    <div className="items-center box-border caret-transparent hidden justify-end min-h-0 min-w-0 outline-[3px] w-full pt-0 md:flex md:min-h-[auto] md:min-w-[auto] md:pt-4">
                      <img
                        src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f0646bdb90ddd0f42cdf_ser.svg"
                        alt=""
                        className="box-border caret-transparent inline-block max-w-full min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]"
                      />
                    </div>
                    <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 w-full md:gap-x-5 md:gap-y-5">
                      <p className="text-green-400 text-2xl box-border caret-transparent hidden leading-9 outline-[3px]">
                        Pricing is personalized based on your lab results and
                        treatment plan.
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
                              $199
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
                              Sermorelin
                            </div>
                          </div>
                        </h2>
                        <a
                          href="/product/sermorelin"
                          className="items-center bg-yellow-50 box-border caret-transparent flex h-12 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-6 rounded-[1000px] hover:text-stone-600 hover:bg-emerald-200 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-[1000px] hover:border-0 hover:border-none"
                        >
                          <div className="text-neutral-800 font-semibold box-border caret-transparent tracking-[0.16px] leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] uppercase hover:text-neutral-900 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-neutral-800 hover:rounded-none hover:border-0 hover:border-none">
                            Learn MORE
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
              </div>
              <div
                role="listitem"
                className="self-stretch box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:self-auto"
              >
                <div className="items-stretch backdrop-blur-[30px] bg-white/30 box-border caret-transparent gap-x-6 flex flex-col justify-between outline-[3px] gap-y-6 translate-y-[320.195px] z-[1] overflow-hidden p-4 rounded-3xl border-2 border-solid border-white/10 scale-90 top-2/4 md:gap-x-10 md:flex-row md:gap-y-10 md:translate-y-[213px] md:pr-10 md:scale-90 md:top-auto">
                  <a
                    href="/product/nad"
                    className="items-center aspect-square bg-emerald-200 box-border caret-transparent flex basis-auto grow-0 h-[230px] justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline w-full overflow-hidden rounded-2xl md:aspect-auto md:basis-[0%] md:grow md:h-[390px] md:max-w-xs md:w-auto hover:text-stone-600 hover:bg-emerald-300 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-2xl hover:border-0 hover:border-none"
                  >
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f699dc1b4f46fdbd8451_nad-3d.png"
                      alt=""
                      sizes="(max-width: 991px) 100vw, 2000px"
                      className="self-stretch box-border caret-transparent basis-[0%] grow max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full rounded-2xl hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-2xl hover:border-0 hover:border-none"
                    />
                  </a>
                  <div className="items-start box-border caret-transparent flex basis-[0%] flex-col grow justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full md:items-stretch md:justify-between md:w-auto">
                    <div className="items-center box-border caret-transparent hidden justify-end min-h-0 min-w-0 outline-[3px] w-full pt-0 md:flex md:min-h-[auto] md:min-w-[auto] md:pt-4">
                      <img
                        src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f05989742a0c35ec3f46_nad.svg"
                        alt=""
                        className="box-border caret-transparent inline-block max-w-full min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]"
                      />
                    </div>
                    <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 w-full md:gap-x-5 md:gap-y-5">
                      <p className="text-green-400 text-2xl box-border caret-transparent hidden leading-9 outline-[3px]">
                        Pricing is personalized based on your lab results and
                        treatment plan.
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
                              $199
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
                              NAD+
                            </div>
                          </div>
                        </h2>
                        <a
                          href="/product/nad"
                          className="items-center bg-yellow-50 box-border caret-transparent flex h-12 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-6 rounded-[1000px] hover:text-stone-600 hover:bg-emerald-200 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-[1000px] hover:border-0 hover:border-none"
                        >
                          <div className="text-neutral-800 font-semibold box-border caret-transparent tracking-[0.16px] leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] uppercase hover:text-neutral-900 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-neutral-800 hover:rounded-none hover:border-0 hover:border-none">
                            Learn MORE
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
              </div>
              <div
                role="listitem"
                className="self-stretch box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:self-auto"
              >
                <div className="items-stretch backdrop-blur-[30px] bg-white/30 box-border caret-transparent gap-x-6 flex flex-col justify-between outline-[3px] gap-y-6 translate-y-[320.195px] z-[1] overflow-hidden p-4 rounded-3xl border-2 border-solid border-white/10 scale-90 top-2/4 md:gap-x-10 md:flex-row md:gap-y-10 md:translate-y-[213px] md:pr-10 md:scale-90 md:top-auto">
                  <a
                    href="/product/enclomiphene"
                    className="items-center aspect-square bg-emerald-200 box-border caret-transparent flex basis-auto grow-0 h-[230px] justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] underline w-full overflow-hidden rounded-2xl md:aspect-auto md:basis-[0%] md:grow md:h-[390px] md:max-w-xs md:w-auto hover:text-stone-600 hover:bg-emerald-300 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-2xl hover:border-0 hover:border-none"
                  >
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f72afc36b5bc5f7ace18_enclo-3d.png"
                      alt=""
                      sizes="(max-width: 991px) 100vw, 2000px"
                      className="self-stretch box-border caret-transparent basis-[0%] grow max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full rounded-2xl hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-2xl hover:border-0 hover:border-none"
                    />
                  </a>
                  <div className="items-start box-border caret-transparent flex basis-[0%] flex-col grow justify-start min-h-[auto] min-w-[auto] outline-[3px] w-full md:items-stretch md:justify-between md:w-auto">
                    <div className="items-center box-border caret-transparent hidden justify-end min-h-0 min-w-0 outline-[3px] w-full pt-0 md:flex md:min-h-[auto] md:min-w-[auto] md:pt-4">
                      <img
                        src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f04ef9a6490e0a8503f4_enclo.svg"
                        alt=""
                        className="box-border caret-transparent inline-block max-w-full min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]"
                      />
                    </div>
                    <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-6 w-full md:gap-x-5 md:gap-y-5">
                      <p className="text-green-400 text-2xl box-border caret-transparent hidden leading-9 outline-[3px]">
                        Pricing is personalized based on your lab results and
                        treatment plan.
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
                              $99
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
                              Enclomiphene
                            </div>
                          </div>
                        </h2>
                        <a
                          href="/product/enclomiphene"
                          className="items-center bg-yellow-50 box-border caret-transparent flex h-12 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] px-6 rounded-[1000px] hover:text-stone-600 hover:bg-emerald-200 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-[1000px] hover:border-0 hover:border-none"
                        >
                          <div className="text-neutral-800 font-semibold box-border caret-transparent tracking-[0.16px] leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] uppercase hover:text-neutral-900 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-neutral-800 hover:rounded-none hover:border-0 hover:border-none">
                            Learn MORE
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
              </div>
            </div>
          </div>
          <div className="text-yellow-50 box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px] text-center">
            Harley Meds partners with 3,000+ labs nationwide for fast, reliable
            care.
          </div>
        </div>
      </section>
      <section className="relative bg-yellow-50 box-border caret-transparent outline-[3px] w-full z-[3] overflow-hidden py-10 md:py-[90px]">
        <div className="box-border caret-transparent max-w-[1400px] outline-[3px] mx-auto before:accent-auto before:caret-transparent before:text-stone-600 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-stone-600 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
          <div className="relative items-center box-border caret-transparent gap-x-10 flex flex-col justify-center outline-[3px] gap-y-10 z-[1]">
            <h3 className="text-[26px] font-semibold box-border caret-transparent tracking-[-0.52px] leading-[28.6px] max-w-[520px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[42px] md:tracking-[-0.84px] md:leading-[46.2px] md:max-w-[700px]">
              <div className="text-base box-content caret-black tracking-[normal] leading-[normal] outline-0 w-auto md:text-[42px] md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.84px] md:leading-[46.2px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  Get
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  stronger,
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  think
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  sharper,
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  feel
                </div>
              </div>
              <div className="text-base box-content caret-black tracking-[normal] leading-[normal] outline-0 w-auto md:text-[42px] md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.84px] md:leading-[46.2px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  healthier.
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  Your
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  future
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  starts
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  now.
                </div>
              </div>
            </h3>
            <div className="box-border caret-transparent h-11 min-h-[auto] min-w-[auto] outline-[3px] w-[110px] md:w-auto">
              <img
                src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/image-1.png"
                className="aspect-[auto_110_/_44] box-border caret-transparent inline-block h-full max-w-full outline-[3px] w-full"
              />
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex justify-center outline-[3px] mt-0 md:-mt-20">
            <div className="aspect-square box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none w-full md:pointer-events-auto">
              <img
                src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/image-2.png"
                className="aspect-[auto_800_/_800] box-border caret-transparent inline-block h-full max-w-full outline-[3px] pointer-events-none w-full md:pointer-events-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative items-center bg-yellow-50 box-border caret-transparent gap-x-8 flex flex-col justify-start outline-[3px] gap-y-8 w-full z-[3] overflow-hidden px-4 py-5 md:gap-x-20 md:gap-y-20 md:px-[65px] md:py-[70px]">
        <div className="items-center box-border caret-transparent gap-x-3 flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
          <div className="text-green-400 font-semibold box-border caret-transparent tracking-[1.5px] leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] text-center uppercase">
            <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                How
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                it
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                works
              </div>
            </div>
          </div>
          <h2 className="text-[34px] font-semibold box-border caret-transparent tracking-[-0.68px] leading-[37.4px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[64px] md:tracking-[-1.28px] md:leading-[70.4px]">
            <div className="text-base box-content caret-black tracking-[normal] leading-[normal] outline-0 w-auto md:text-[64px] md:aspect-auto md:box-border md:caret-transparent md:tracking-[-1.28px] md:leading-[70.4px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                Getting
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                started
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                is
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                easy
              </div>
            </div>
          </h2>
          <p className="text-base box-border caret-transparent tracking-[-0.16px] leading-[17.6px] max-w-[490px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-lg md:tracking-[-0.18px] md:leading-[21.6px] md:max-w-[690px]">
            <div className="text-base box-content caret-black tracking-[normal] leading-[normal] outline-0 w-auto md:text-lg md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.18px] md:leading-[21.6px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                Your
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                wellness
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                journey
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                is
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                handled
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                in-house
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                by
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                our
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                dedicated
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                team.
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                From
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                fast
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                shipping
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                to
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                personal
              </div>
            </div>
            <div className="text-base box-content caret-black tracking-[normal] leading-[normal] outline-0 w-auto md:text-lg md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.18px] md:leading-[21.6px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                support,
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                we
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                make
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                it
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                easy—just
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                follow
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                these
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                3
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                simple
              </div>
              <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                steps.
              </div>
            </div>
          </p>
        </div>
        <div className="items-center self-stretch box-border caret-transparent gap-x-5 flex flex-col h-full justify-between min-h-[420px] min-w-[auto] outline-[3px] gap-y-5 md:gap-x-[34px] md:flex-row md:h-auto md:gap-y-[34px]">
          <div className="items-start self-stretch bg-emerald-200 box-border caret-transparent gap-x-[50px] flex basis-[0%] flex-col grow justify-between min-h-[280px] min-w-[auto] outline-[3px] gap-y-[50px] w-full p-5 rounded-3xl md:gap-x-[normal] md:min-h-[auto] md:gap-y-[normal] md:w-auto md:p-10">
            <div className="items-center bg-neutral-800 box-border caret-transparent flex h-16 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-16 border-green-400 rounded-[1000px] border-[3px] border-solid">
              <div className="text-green-400 text-[32px] font-semibold box-border caret-transparent leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px]">
                1
              </div>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <div className="text-neutral-800 text-2xl font-semibold box-border caret-transparent tracking-[-0.48px] leading-[26.4px] outline-[3px] md:text-[32px] md:tracking-[-0.64px] md:leading-[35.2px]">
                <div className="text-base box-content caret-black tracking-[normal] leading-[normal] outline-0 w-auto md:text-[32px] md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.64px] md:leading-[35.2px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    Schedule
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    a
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    consult
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    with
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    one
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    of
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    our
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    expert
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    medical
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    providers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start self-stretch bg-emerald-200 box-border caret-transparent gap-x-[50px] flex basis-[0%] flex-col grow justify-between min-h-[280px] min-w-[auto] outline-[3px] gap-y-[50px] w-full p-5 rounded-3xl md:gap-x-[normal] md:min-h-[auto] md:gap-y-[normal] md:w-auto md:p-10">
            <div className="items-center bg-neutral-800 box-border caret-transparent flex h-16 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-16 border-green-400 rounded-[1000px] border-[3px] border-solid">
              <div className="text-green-400 text-[32px] font-semibold box-border caret-transparent leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px]">
                2
              </div>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <div className="text-neutral-800 text-2xl font-semibold box-border caret-transparent tracking-[-0.48px] leading-[26.4px] outline-[3px] md:text-[32px] md:tracking-[-0.64px] md:leading-[35.2px]">
                <div className="text-base box-content caret-black tracking-[normal] leading-[normal] outline-0 w-auto md:text-[32px] md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.64px] md:leading-[35.2px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    Complete
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    a
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    quick
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    and
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    easy
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    online
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    health
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    assessment
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start self-stretch bg-emerald-200 box-border caret-transparent gap-x-[50px] flex basis-[0%] flex-col grow justify-between min-h-[280px] min-w-[auto] outline-[3px] gap-y-[50px] w-full p-5 rounded-3xl md:gap-x-[normal] md:min-h-[auto] md:gap-y-[normal] md:w-auto md:p-10">
            <div className="items-center bg-neutral-800 box-border caret-transparent flex h-16 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-16 border-green-400 rounded-[1000px] border-[3px] border-solid">
              <div className="text-green-400 text-[32px] font-semibold box-border caret-transparent leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px]">
                3
              </div>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <div className="text-neutral-800 text-2xl font-semibold box-border caret-transparent tracking-[-0.48px] leading-[26.4px] outline-[3px] md:text-[32px] md:tracking-[-0.64px] md:leading-[35.2px]">
                <div className="text-base box-content caret-black tracking-[normal] leading-[normal] outline-0 w-auto md:text-[32px] md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.64px] md:leading-[35.2px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    Get
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    your
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    prescribed
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    medication
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    delivered
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    straight
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    to
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    your
                  </div>
                  <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    door
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center self-stretch box-border caret-transparent gap-x-2.5 flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-2.5 py-5 md:gap-x-[normal] md:gap-y-[normal] md:py-0">
          <div className="items-center bg-stone-600 box-border caret-transparent basis-[0%] grow h-[1.5px] justify-center min-h-[auto] min-w-[auto] outline-[3px] w-[85%]"></div>
          <a
            href="https://calendly.com/d/cnzq-d94-m8q/harley-meds-trt-consultation?ip=44.231.114.191"
            className="font-semibold items-center box-border caret-transparent gap-x-0 flex basis-[0%] grow justify-between tracking-[1px] leading-[19.2px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] gap-y-0 uppercase w-full md:gap-x-[normal] md:basis-auto md:grow-0 md:justify-start md:gap-y-[normal] md:w-auto hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-none hover:border-0 hover:border-none"
          >
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-nowrap w-full pl-[18px] pr-6 py-3.5 md:text-wrap md:w-auto hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-none hover:border-0 hover:border-none">
              start today
            </div>
            <div className="box-border caret-transparent h-8 min-h-[auto] min-w-[auto] outline-[3px] w-12 md:w-8 hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-none hover:border-0 hover:border-none">
              <img
                src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/image-3.png"
                className="aspect-[auto_64_/_32] box-border caret-transparent inline-block h-full max-w-full outline-[3px] w-full hover:text-stone-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-stone-600 hover:rounded-none hover:border-0 hover:border-none"
              />
            </div>
          </a>
        </div>
      </section>
      <section className="bg-stone-600 box-border caret-transparent outline-[3px] w-full overflow-hidden py-8 md:py-[94px]">
        <div className="box-border caret-transparent gap-x-[52px] flex flex-col outline-[3px] gap-y-[52px] w-full px-6 md:gap-x-[94px] md:gap-y-[94px] md:px-16">
          <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-8 md:gap-x-[normal] md:flex-row md:gap-y-[normal]">
            <h3 className="text-yellow-50 text-[32px] font-semibold box-border caret-transparent leading-[35.2px] max-w-[340px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[42px] md:leading-[46.2px] md:max-w-[750px]">
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-[42px] md:aspect-auto md:box-border md:caret-transparent md:leading-[46.2px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  Join
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  thousands
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  of
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  people
                </div>
              </div>
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-[42px] md:aspect-auto md:box-border md:caret-transparent md:leading-[46.2px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  living
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  their
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  healthier,
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  more
                </div>
              </div>
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-[42px] md:aspect-auto md:box-border md:caret-transparent md:leading-[46.2px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  confident
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  lives
                </div>
              </div>
            </h3>
            <img
              src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9e4ffcecfd4a2148463f_trust-p-logo.svg"
              alt="Trustpilot Logo\n"
              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-6/12 md:w-auto"
            />
          </div>
          <div className="relative box-border caret-transparent list-none min-h-[auto] min-w-[auto] outline-[3px] z-[1] -mx-2 md:-mx-4">
            <div
              role="list"
              className="relative items-center caret-transparent flex h-full justify-between outline-[3px] translate-x-[-1596px] w-full z-[1] md:translate-x-[-1657.66px]"
            >
              <div
                role="group"
                aria-label="7 / 10"
                className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
              >
                <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
                  <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
                      alt="Verified Patient Testimonial Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                    <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Best
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          company
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          by
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          far!
                        </div>
                      </div>
                    </h4>
                    <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Absolutely
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          great
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          customer
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          service!
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          They
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          answered
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          any
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          question
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          had
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          made
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          sure
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          understood
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          everything.
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Very
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          easy
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          process
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          of
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          getting
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          phone
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          calls
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          scheduled
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          plan
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          set
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          up!
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Can’t
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          wait
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          to
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          get
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          my
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          first
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          shipment
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          get
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          started!
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                      <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
                      <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                        <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            Austin
                          </div>
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            Haman
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
                      alt="5-Star Customer Review Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-label="8 / 10"
                className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
              >
                <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
                  <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
                      alt="Verified Patient Testimonial Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                    <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Best
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          thing
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I’ve
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          done
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          for
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          myself
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          after
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          50!
                        </div>
                      </div>
                    </h4>
                    <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          After
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          doing
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          research
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          for
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          TRT
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          talking
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          to
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          a
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          bunch
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          of
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          specialists
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          was
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          referred
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          to
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Harley
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Labs.
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Speaking
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          to
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Cody
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          was
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          easy
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          informative!
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          He
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          made
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          the
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          process
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          super
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          easy
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I’m
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          looking
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          forward
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          to
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          being
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          a
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          long
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          time
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          customer.
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                      <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
                      <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                        <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            Jack
                          </div>
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            Koczka
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
                      alt="5-Star Customer Review Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-label="9 / 10"
                className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
              >
                <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
                  <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
                      alt="Verified Patient Testimonial Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                    <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          After
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          6
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          weeks
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I’m
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          down
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          12
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          lbs!
                        </div>
                      </div>
                    </h4>
                    <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          started
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          6
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          weeks
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          ago
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          have
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          lost
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          12
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          lbs!
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Bryan
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          made
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          the
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          whole
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          process
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          easy
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          understandable.
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          They
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          are
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          committed
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          to
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          following
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          up
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          to
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          see
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          how
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          everything
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          is
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          working
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          whether
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          had
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          any
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          questions
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          or
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          issues.
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I’m
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          learning
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          to
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          eat
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          responsibly
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          think
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          about
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          healthy
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          alternative
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          foods.
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          highly
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          recommend
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          HarleyMeds!
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                      <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
                      <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                        <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            Greg
                          </div>
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            Sullivan
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
                      alt="5-Star Customer Review Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-label="10 / 10"
                className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
              >
                <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
                  <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
                      alt="Verified Patient Testimonial Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                    <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Top
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Tier
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          company!
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Veteran
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          friendly
                        </div>
                      </div>
                    </h4>
                    <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          The
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          company
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          was
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          completely
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          professional,
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          quick
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          responses
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          are
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          military
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          veteran
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          friendly.
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          would
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          personally
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          recommend
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          this
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          company
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          to
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          anyone
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          looking
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          for
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          TRT,
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          HRT
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          other
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          health
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          skin
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          care
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          treatments.
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          As
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          a
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          veteran
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          myself
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          they
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          understand
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          the
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          struggle
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          getting
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          TRT
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          with
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          the
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          VA
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          made
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          my
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          process
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          easy
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          with
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          their
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          company.
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                      <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
                      <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                        <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            Jeremy
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
                      alt="5-Star Customer Review Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-label="1 / 10"
                className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
              >
                <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
                  <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
                      alt="Verified Patient Testimonial Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                    <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Amazing
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          TRT
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          GLP1
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          services
                        </div>
                      </div>
                    </h4>
                    <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          have
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          lost
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          over
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          50
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          pounds
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          since
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          combining
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          TRT
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          GLP-1.
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Top
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          notch
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          customer
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          service
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          always
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          on
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          time
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          shipments.
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          If
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          you
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          are
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          looking
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          for
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          telemedicine
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          company
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          chose
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Harley!
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                      <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
                      <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                        <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            Jordan
                          </div>
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            s
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
                      alt="5-Star Customer Review Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-label="2 / 10"
                className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
              >
                <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
                  <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
                      alt="Verified Patient Testimonial Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                    <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Customer
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          service
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          is
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          amazing
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          explained
                        </div>
                      </div>
                    </h4>
                    <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Everything
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          very
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          well
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          and
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          easy
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          to
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          understand.
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Will
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          continue
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          to
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          do
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          business
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          with
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          them
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          as
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          they
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          have
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          helped
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          me
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          and
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          treated
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          me
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          like
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          family
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          throughout
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          this
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          process
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                      <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
                      <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                        <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Martin
                          </div>
                          <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Murillo
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
                      alt="5-Star Customer Review Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-label="3 / 10"
                className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
              >
                <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
                  <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
                      alt="Verified Patient Testimonial Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                    <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          A-1
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          service
                        </div>
                      </div>
                    </h4>
                    <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          What
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          makes
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          this
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          company
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          great
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          is
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          their
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          customer
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          service
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          and
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          speedy
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          response
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          time.
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          I
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          am
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          completely
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          satisfied
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          with
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Harley
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Meds
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          and
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          would
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          recommend
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          them
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          to
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          anyone
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          needing
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          this
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          type
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          of
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          help.
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          A-1
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          company
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          for
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          sure!
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                      <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
                      <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                        <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Brandon
                          </div>
                          <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Bryant
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
                      alt="5-Star Customer Review Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-label="4 / 10"
                className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
              >
                <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
                  <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
                      alt="Verified Patient Testimonial Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                    <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Great
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          customer
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          service
                        </div>
                      </div>
                    </h4>
                    <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          I
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          was
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          introduced
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          to
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Harley
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Meds
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          from
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Kmartfit.
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Very
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          informative,
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          easy
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          going,
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          and
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          a
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          truly
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          seamless
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          process.
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          They
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          were
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          able
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          to
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          order
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          my
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          lab
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          work
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          right
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          away,
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          and
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          I
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          was
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          contacted
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          by
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          one
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          of
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          the
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          nurse
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          practitioners
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          the
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          next
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          day.
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          You’re
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          getting
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          great
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          value
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          by
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          joining
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Harley
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Meds
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          as
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          your
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          preferred
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          TRT
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          clinic.
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                      <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
                      <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                        <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Dillon
                          </div>
                          <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Floyd
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
                      alt="5-Star Customer Review Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-label="5 / 10"
                className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
              >
                <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
                  <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
                      alt="Verified Patient Testimonial Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                    <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Harley
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Meds
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          has
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          been
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          incredible!
                        </div>
                      </div>
                    </h4>
                    <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Cody
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          has
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          provided
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          exceptional
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          support
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          from
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          the
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          start,
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          answering
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          all
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          my
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          questions
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          with
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          professionalism
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          and
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          care!
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          The
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          convenience
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          of
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          the
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          service
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          has
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          made
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          the
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          entire
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          process
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          seamless.
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          Quick
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          responses,
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          quick
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          answers,
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          it&#39;s
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          been
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          amazing!
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          The
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          price
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          point
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          and
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          included
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          ongoing
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          care
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          is
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          an
                        </div>
                      </div>
                      <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          unbelievable
                        </div>
                        <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          value.
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                      <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
                      <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                        <div className="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Dustin
                          </div>
                          <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Nikolich
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
                      alt="5-Star Customer Review Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                  </div>
                </div>
              </div>
              <div
                role="group"
                aria-label="6 / 10"
                className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
              >
                <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
                  <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
                      alt="Verified Patient Testimonial Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                    <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Fantastic
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          service
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          -
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          wish
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          had
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          have
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          known
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          about
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          it
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          earlier!
                        </div>
                      </div>
                    </h4>
                    <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          It
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          was
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          great
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          working
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          with
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Cody!
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          He
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          is
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          very
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          friendly
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          and
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          easy
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          to
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          speak
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          with.
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          They
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          have
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          fantastic
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          service
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          -
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          wish
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          had
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          have
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          known
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          about
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          it
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          earlier!&quot;
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          I
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          highly
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          recommend
                        </div>
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Harley
                        </div>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                        <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                          Meds!
                        </div>
                      </div>
                    </p>
                  </div>
                  <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                      <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
                      <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
                        <div className="box-border caret-transparent outline-[3px] w-full overflow-hidden">
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            Christopher
                          </div>
                          <div className="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]">
                            W
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
                      alt="5-Star Customer Review Badge\n"
                      className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="items-stretch bg-stone-600 box-border caret-transparent gap-x-[45px] flex flex-col-reverse justify-between outline-[3px] gap-y-[45px] w-full overflow-hidden px-4 py-10 md:items-center md:flex-row md:p-16">
        <div className="items-start box-border caret-transparent gap-x-[45px] flex basis-[0%] flex-col grow auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] justify-center max-w-[684px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[45px]">
          <div className="items-start box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
            <h2 className="text-yellow-50 text-[32px] font-semibold box-border caret-transparent leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[64px] md:leading-[70.4px]">
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-[64px] md:aspect-auto md:box-border md:caret-transparent md:leading-[70.4px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  Take
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  control
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  of
                </div>
              </div>
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-[64px] md:aspect-auto md:box-border md:caret-transparent md:leading-[70.4px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  your
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  health
                </div>
              </div>
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-[64px] md:aspect-auto md:box-border md:caret-transparent md:leading-[70.4px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  today
                </div>
              </div>
            </h2>
            <p className="text-stone-300 text-base box-border caret-transparent leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] md:text-lg md:leading-[21.6px]">
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[21.6px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  No
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  insurance,
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  no
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  hidden
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  fees--just
                </div>
              </div>
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[21.6px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  proven
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  treatments
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  designed
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  for
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  real
                </div>
              </div>
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[21.6px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  results.
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  Take
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  control
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  of
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  your
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  health
                </div>
              </div>
              <div className="text-base box-content caret-black leading-[normal] outline-0 w-auto md:text-lg md:aspect-auto md:box-border md:caret-transparent md:leading-[21.6px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  with
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  a
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  plan
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  that
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  works
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  for
                </div>
                <div className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  you.
                </div>
              </div>
            </p>
          </div>
          <a
            href="https://calendly.com/d/cnzq-d94-m8q/harley-meds-trt-consultation?ip=44.231.114.191"
            className="text-emerald-200 items-center box-border caret-transparent flex h-12 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[290px] border-emerald-200 rounded-[1000px] border-2 border-solid hover:text-neutral-800 hover:bg-emerald-200 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-emerald-300 hover:rounded-[1000px] hover:border-2 hover:border-solid"
          >
            <div className="font-semibold box-border caret-transparent tracking-[1px] leading-[19.2px] min-h-[auto] min-w-[auto] outline-[3px] uppercase hover:text-emerald-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-emerald-200 hover:rounded-none hover:border-0 hover:border-none">
              begin your journey today
            </div>
          </a>
        </div>
        <div className="items-center box-border caret-transparent flex basis-[0%] grow justify-center min-h-[auto] min-w-[auto] -order-1 outline-[3px] w-full md:order-none md:w-auto">
          <div className="aspect-square box-border caret-transparent h-full min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none w-[10045%] md:h-[440px] md:w-auto">
            <img
              src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/image-4.png"
              className="aspect-[auto_313_/_313] box-border caret-transparent inline-block h-full max-w-full outline-[3px] w-full"
            />
          </div>
        </div>
      </section>
      <section className="bg-neutral-800 box-border caret-transparent min-h-[1000px] outline-[3px] w-full overflow-clip">
        <div className="items-center box-border caret-transparent flex flex-col justify-center outline-[3px] w-full">
          <div className="items-start box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] outline-[3px] translate-x-[18.75px] origin-[0px_0px] w-full pt-16 px-[18.75px] scale-[0.3] md:translate-x-16 md:px-16 md:scale-[0.3]">
            <img
              src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67a273601b3a28bfde2d354e_logo-footer.svg"
              alt="HarleyMeds Horizontal Logo\n"
              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-screen"
            />
          </div>
          <div className="items-start box-border caret-transparent gap-x-[42px] flex flex-col auto-cols-[1fr] grid-cols-[1fr_2.5fr_1fr] grid-rows-[auto] justify-between justify-items-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-[42px] w-full pl-[18.75px] pr-0 pt-[42px] pb-16 md:items-end md:gap-x-4 md:flex-row md:gap-y-4 md:pt-0 md:px-16">
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
          </div>
        </div>
      </section>
    </div>
  );
};
