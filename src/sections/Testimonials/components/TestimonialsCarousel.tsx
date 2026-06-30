import { TestimonialCard } from "@/sections/Testimonials/components/TestimonialCard";

export const TestimonialsCarousel = () => {
  return (
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
          <TestimonialCard
            titleLines={[["Best", "company", "by"], ["far!"]]}
            testimonialLines={[
              ["Absolutely", "great", "customer", "service!"],
              ["They", "answered", "any", "question", "I", "had"],
              ["and", "made", "sure", "I", "understood"],
              ["everything.", "Very", "easy", "process", "of"],
              ["getting", "phone", "calls", "scheduled", "and"],
              ["plan", "set", "up!", "Can’t", "wait", "to", "get", "my"],
              ["first", "shipment", "and", "get", "started!"],
            ]}
            authorLines={[["Austin", "Haman"]]}
          />
        </div>
        <div
          role="group"
          aria-label="8 / 10"
          className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
        >
          <TestimonialCard
            titleLines={[
              ["Best", "thing", "I’ve"],
              ["done", "for", "myself"],
              ["after", "50!"],
            ]}
            testimonialLines={[
              ["After", "doing", "research", "for", "TRT", "and"],
              ["talking", "to", "a", "bunch", "of", "specialists", "I"],
              ["was", "referred", "to", "Harley", "Labs."],
              ["Speaking", "to", "Cody", "was", "easy", "and"],
              ["informative!", "He", "made", "the", "process"],
              ["super", "easy", "and", "I’m", "looking", "forward"],
              ["to", "being", "a", "long", "time", "customer."],
            ]}
            authorLines={[["Jack", "Koczka"]]}
            textLineClassName="box-border caret-transparent outline-[3px] w-full overflow-hidden"
            textWordClassName="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]"
          />
        </div>
        <div
          role="group"
          aria-label="9 / 10"
          className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
        >
          <TestimonialCard
            titleLines={[
              ["After", "6", "weeks", "I’m"],
              ["down", "12", "lbs!"],
            ]}
            testimonialLines={[
              ["I", "started", "6", "weeks", "ago", "and", "have", "lost"],
              ["12", "lbs!", "Bryan", "made", "the", "whole"],
              ["process", "easy", "and", "understandable."],
              ["They", "are", "committed", "to", "following", "up"],
              ["to", "see", "how", "everything", "is", "working"],
              ["and", "whether", "I", "had", "any", "questions", "or"],
              ["issues.", "I’m", "learning", "to", "eat"],
              ["responsibly", "and", "think", "about"],
              ["healthy", "alternative", "foods.", "I", "highly"],
              ["recommend", "HarleyMeds!"],
            ]}
            authorLines={[["Greg", "Sullivan"]]}
            textLineClassName="box-border caret-transparent outline-[3px] w-full overflow-hidden"
            textWordClassName="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]"
          />
        </div>
        <div
          role="group"
          aria-label="10 / 10"
          className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
        >
          <TestimonialCard
            titleLines={[
              ["Top", "Tier", "company!"],
              ["Veteran", "friendly"],
            ]}
            testimonialLines={[
              ["The", "company", "was", "completely"],
              ["professional,", "quick", "responses", "and"],
              ["are", "military", "and", "veteran", "friendly.", "I"],
              ["would", "personally", "recommend", "this"],
              ["company", "to", "anyone", "looking", "for", "TRT,"],
              ["HRT", "and", "other", "health", "and", "skin", "care"],
              ["treatments.", "As", "a", "veteran", "myself"],
              ["they", "understand", "the", "struggle"],
              ["getting", "TRT", "with", "the", "VA", "and", "made"],
              ["my", "process", "easy", "with", "their"],
              ["company."],
            ]}
            authorLines={[["Jeremy"]]}
            textLineClassName="box-border caret-transparent outline-[3px] w-full overflow-hidden"
            textWordClassName="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]"
          />
        </div>
        <div
          role="group"
          aria-label="1 / 10"
          className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
        >
          <TestimonialCard
            titleLines={[
              ["Amazing", "TRT", "and"],
              ["GLP1", "services"],
            ]}
            testimonialLines={[
              ["I", "have", "lost", "over", "50", "pounds", "since"],
              ["combining", "TRT", "and", "GLP-1.", "Top"],
              ["notch", "customer", "service", "and", "always"],
              ["on", "time", "shipments.", "If", "you", "are"],
              ["looking", "for", "telemedicine", "company"],
              ["chose", "Harley!"],
            ]}
            authorLines={[["Jordan", "s"]]}
            textLineClassName="box-border caret-transparent outline-[3px] w-full overflow-hidden"
            textWordClassName="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]"
          />
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
          <TestimonialCard
            titleLines={[["A-1", "service"]]}
            testimonialLines={[
              ["What", "makes", "this", "company", "great", "is"],
              ["their", "customer", "service", "and", "speedy"],
              ["response", "time.", "I", "am", "completely"],
              ["satisfied", "with", "Harley", "Meds", "and"],
              ["would", "recommend", "them", "to", "anyone"],
              ["needing", "this", "type", "of", "help.", "A-1"],
              ["company", "for", "sure!"],
            ]}
            authorLines={[["Brandon", "Bryant"]]}
            textLineClassName="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            textWordClassName="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          />
        </div>
        <div
          role="group"
          aria-label="4 / 10"
          className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
        >
          <TestimonialCard
            titleLines={[["Great", "customer"], ["service"]]}
            testimonialLines={[
              ["I", "was", "introduced", "to", "Harley", "Meds"],
              ["from", "Kmartfit.", "Very", "informative,"],
              ["easy", "going,", "and", "a", "truly", "seamless"],
              ["process.", "They", "were", "able", "to", "order"],
              ["my", "lab", "work", "right", "away,", "and", "I", "was"],
              ["contacted", "by", "one", "of", "the", "nurse"],
              ["practitioners", "the", "next", "day.", "You’re"],
              ["getting", "great", "value", "by", "joining"],
              ["Harley", "Meds", "as", "your", "preferred", "TRT"],
              ["clinic."],
            ]}
            authorLines={[["Dillon", "Floyd"]]}
            textLineClassName="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            textWordClassName="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          />
        </div>
        <div
          role="group"
          aria-label="5 / 10"
          className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
        >
          <TestimonialCard
            titleLines={[
              ["Harley", "Meds", "has"],
              ["been", "incredible!"],
            ]}
            testimonialLines={[
              ["Cody", "has", "provided", "exceptional"],
              ["support", "from", "the", "start,", "answering"],
              ["all", "my", "questions", "with"],
              ["professionalism", "and", "care!", "The"],
              ["convenience", "of", "the", "service", "has"],
              ["made", "the", "entire", "process", "seamless."],
              ["Quick", "responses,", "quick", "answers,"],
              ["it's", "been", "amazing!", "The", "price", "point"],
              ["and", "included", "ongoing", "care", "is", "an"],
              ["unbelievable", "value."],
            ]}
            authorLines={[["Dustin", "Nikolich"]]}
            textLineClassName="box-content caret-black outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            textWordClassName="box-content caret-black block outline-0 md:aspect-auto md:box-border md:caret-transparent md:inline-block md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          />
        </div>
        <div
          role="group"
          aria-label="6 / 10"
          className="relative box-border caret-transparent shrink-0 h-full min-h-[auto] min-w-[auto] outline-[3px] px-2 md:px-4"
        >
          <TestimonialCard
            titleLines={[
              ["Fantastic", "service", "-"],
              ["wish", "I", "had", "have"],
              ["known", "about", "it"],
              ["earlier!"],
            ]}
            testimonialLines={[
              ["It", "was", "great", "working", "with", "Cody!", "He"],
              ["is", "very", "friendly", "and", "easy", "to", "speak"],
              ["with.", "They", "have", "fantastic", "service", "-"],
              ["wish", "I", "had", "have", "known", "about", "it"],
              ['earlier!"', "I", "highly", "recommend", "Harley"],
              ["Meds!"],
            ]}
            authorLines={[["Christopher", "W"]]}
            textLineClassName="box-border caret-transparent outline-[3px] w-full overflow-hidden"
            textWordClassName="box-border caret-transparent inline-block outline-[3px] translate-y-[110.0%]"
          />
        </div>
      </div>
    </div>
  );
};
