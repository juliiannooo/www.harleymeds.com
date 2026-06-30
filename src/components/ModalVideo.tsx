export const ModalVideo = () => {
  return (
    <section className="fixed items-center backdrop-blur-xl bg-neutral-800/20 box-border caret-transparent gap-x-4 hidden flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-[1000px] justify-center outline-[3px] gap-y-4 w-screen z-[9999] p-4 md:p-16">
      <div className="items-stretch box-border caret-transparent flex justify-around max-w-[1300px] min-h-[200px] outline-[3px] w-full overflow-hidden rounded-3xl">
        <div className="self-stretch box-border caret-transparent basis-[0%] grow outline-[3px] before:accent-auto before:caret-transparent before:text-stone-600 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-stone-600 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
          <div className="relative box-border caret-transparent h-[700px] min-w-80 outline-[3px]">
            <div className="box-border caret-transparent outline-[3px]">
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
              <div className="box-border caret-transparent outline-[3px]"></div>
            </div>
            <iframe
              src="https://calendly.com/d/cnzq-d94-m8q/harley-meds-trt-consultation?embed_domain=www.harleymeds.com&embed_type=Inline"
              title="Select a Date & Time - Calendly"
              className="box-border caret-transparent inline h-full outline-[3px] align-baseline w-full"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="absolute text-neutral-800 items-center bg-green-400 box-border caret-transparent flex h-12 justify-center outline-[3px] w-12 rounded-[50%] right-6 top-8 md:right-[78px] md:top-[60px] hover:text-neutral-900 hover:bg-green-500 hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-neutral-800 hover:rounded-[50%] hover:border-0 hover:border-none">
        <img
          src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/icon-1.svg"
          alt="Icon"
          className="box-border caret-transparent h-[15px] outline-[3px] align-baseline w-[15px]"
        />
      </div>
    </section>
  );
};
