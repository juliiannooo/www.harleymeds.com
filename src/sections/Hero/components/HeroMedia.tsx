export const HeroMedia = () => {
  return (
    <div className="relative box-border caret-transparent h-[1000px] outline-[3px] overflow-hidden rounded-b-none inset-auto md:absolute md:h-auto md:rounded-b-xl md:top-0 md:bottom-6 md:inset-x-6">
      <div className="absolute box-border caret-transparent outline-[3px] overflow-hidden inset-0">
        <picture className="box-border caret-transparent outline-[3px]">
          <img
            alt="Ein Oura Ring 5 Gold ruht vor einem sanften, neutralen Hintergrund auf einem strukturierten dunklen Stein, auf dessen Kante ein Marienkäfer sitzt."
            className="box-border caret-transparent hidden h-full max-w-full object-cover outline-[3px] w-full"
          />
        </picture>
        <div className="relative box-border caret-transparent h-full outline-[3px] w-full">
          <video
            autoplay=""
            muted=""
            playsInline=""
            poster="https://c.animaapp.com/mrtmz843YzbOCE/assets/95.webp"
            preload="auto"
            className="box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full"
          >
            <source
              type="video/mp4"
              src="https://ourahealth.imgix.net/cooper-home-hero-1920.mp4?ixlib=js-3.8.0&fm=mp4&res=high&video-bitrate=4M&s=0cee839844d4cc77a89999a32e083c20"
              className="text-black box-border caret-transparent leading-[normal] outline-[3px] font-times_new_roman"
            />
          </video>
        </div>
      </div>
      <div className="absolute items-center box-border caret-transparent flex flex-col outline-[3px] w-fit pt-[220px] pb-12 left-2/4 inset-y-0 md:pt-[200px]">
        <div className="items-center box-border caret-transparent flex blur-0 flex-col min-h-[auto] min-w-[auto] outline-[3px] text-center">
          <img
            src="https://c.animaapp.com/mrtmz843YzbOCE/assets/icon-6.svg"
            alt="Icon"
            className="box-border caret-transparent h-8 outline-[3px] mb-4 md:h-12 md:mb-7"
          />
          <h1 className="text-5xl font-light box-border caret-transparent tracking-[-2.4px] leading-[52.8px] min-h-[auto] min-w-[auto] outline-[3px] text-center text-nowrap mb-2 font-editorial_new md:text-[110px] md:tracking-[-5.5px] md:leading-[121px] md:text-left md:mb-0">
            Diskret. Leistungsstark.
          </h1>
          <p className="text-xl box-border caret-transparent tracking-[-0.5px] leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[32px] md:tracking-[-0.8px] md:leading-[35.2px]">
            Der kompakteste Smart-Ring der Welt.
          </p>
        </div>
        <div className="items-center box-border caret-transparent flex blur-0 flex-col min-h-[auto] min-w-[auto] outline-[3px] mt-auto">
          <a
            href="/store/rings/oura-ring-5"
            className="text-white font-bold bg-blue-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-center px-6 py-3 rounded-[3.35544e+07px]"
          >
            <span className="content-center items-center box-border caret-transparent gap-x-2 inline-flex justify-center outline-[3px] gap-y-2">
              <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                Mehr erfahren
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
