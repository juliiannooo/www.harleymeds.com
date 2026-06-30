export type TestimonialCardProps = {
  titleLines: string[][];
  testimonialLines: string[][];
  authorLines: string[][];
  textLineClassName: string;
  textWordClassName: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="text-[15px] items-start bg-yellow-50 box-border caret-transparent gap-x-6 flex flex-col shrink-0 h-full justify-between max-w-[250px] min-h-[500px] outline-[3px] gap-y-6 w-full p-6 rounded-3xl md:gap-x-[normal] md:max-w-[304px] md:gap-y-[normal]">
      <div className="items-start box-border caret-transparent gap-x-6 flex flex-col justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-6">
        <img
          src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67ab9ee371e04cf908d24143_commas.svg"
          alt="Verified Patient Testimonial Badge\n"
          className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
        />
        <h4 className="text-3xl font-bold box-border caret-transparent tracking-[-0.6px] leading-9 min-h-[auto] min-w-[auto] outline-[3px]">
          {props.titleLines.map((line, lineIndex) => (
            <div
              className={props.textLineClassName}
              key={`title-line-${lineIndex}`}
            >
              {line.map((word, wordIndex) => (
                <div
                  className={props.textWordClassName}
                  key={`title-word-${lineIndex}-${wordIndex}`}
                >
                  {word}
                </div>
              ))}
            </div>
          ))}
        </h4>
        <p className="text-base box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px]">
          {props.testimonialLines.map((line, lineIndex) => (
            <div
              className={props.textLineClassName}
              key={`testimonial-line-${lineIndex}`}
            >
              {line.map((word, wordIndex) => (
                <div
                  className={props.textWordClassName}
                  key={`testimonial-word-${lineIndex}-${wordIndex}`}
                >
                  {word}
                </div>
              ))}
            </div>
          ))}
        </p>
      </div>
      <div className="items-center self-stretch box-border caret-transparent gap-x-[5px] flex justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px]">
        <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
          <div className="bg-stone-600 box-border caret-transparent h-2 min-h-[auto] min-w-[auto] outline-[3px] w-2 rounded-[10000px]"></div>
          <div className="text-sm font-semibold box-border caret-transparent tracking-[1.4px] leading-[16.8px] min-h-[auto] min-w-[auto] outline-[3px] uppercase">
            {props.authorLines.map((line, lineIndex) => (
              <div
                className={props.textLineClassName}
                key={`author-line-${lineIndex}`}
              >
                {line.map((word, wordIndex) => (
                  <div
                    className={props.textWordClassName}
                    key={`author-word-${lineIndex}-${wordIndex}`}
                  >
                    {word}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <img
          src="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67aba281147fced0ffb15da9_trust-stars.svg"
          alt="5-Star Customer Review Badge\n"
          className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px]"
        />
      </div>
    </div>
  );
};
