import { TestimonialsHeader } from "@/sections/Testimonials/components/TestimonialsHeader";
import { TestimonialsCarousel } from "@/sections/Testimonials/components/TestimonialsCarousel";

export const Testimonials = () => {
  return (
    <section className="bg-stone-600 box-border caret-transparent outline-[3px] w-full overflow-hidden py-8 md:py-[94px]">
      <div className="box-border caret-transparent gap-x-[52px] flex flex-col outline-[3px] gap-y-[52px] w-full px-6 md:gap-x-[94px] md:gap-y-[94px] md:px-16">
        <TestimonialsHeader />
        <TestimonialsCarousel />
      </div>
    </section>
  );
};
