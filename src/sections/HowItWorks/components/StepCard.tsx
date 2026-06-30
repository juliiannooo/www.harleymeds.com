export type StepCardProps = {
  stepNumber: string;
  words: string[];
};

export const StepCard = (props: StepCardProps) => {
  return (
    <div className="items-start self-stretch bg-emerald-200 box-border caret-transparent gap-x-[50px] flex basis-[0%] flex-col grow justify-between min-h-[280px] min-w-[auto] outline-[3px] gap-y-[50px] w-full p-5 rounded-3xl md:gap-x-[normal] md:min-h-[auto] md:gap-y-[normal] md:w-auto md:p-10">
      <div className="items-center bg-neutral-800 box-border caret-transparent flex h-16 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-16 border-green-400 rounded-[1000px] border-[3px] border-solid">
        <div className="text-green-400 text-[32px] font-semibold box-border caret-transparent leading-[35.2px] min-h-[auto] min-w-[auto] outline-[3px]">
          {props.stepNumber}
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <div className="text-neutral-800 text-2xl font-semibold box-border caret-transparent tracking-[-0.48px] leading-[26.4px] outline-[3px] md:text-[32px] md:tracking-[-0.64px] md:leading-[35.2px]">
          <div className="text-base box-content caret-black tracking-[normal] leading-[normal] outline-0 w-auto md:text-[32px] md:aspect-auto md:box-border md:caret-transparent md:tracking-[-0.64px] md:leading-[35.2px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            {props.words.map((word, index) => (
              <div
                className="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                key={`${word}-${index}`}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
