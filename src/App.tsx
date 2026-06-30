import { ModalVideo } from "@/components/ModalVideo";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";

export const App = () => {
  return (
    <body className="text-stone-600 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[20.8px] list-outside list-disc min-h-full outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-manrope">
      <ModalVideo />
      <Navbar />
      <Hero />
    </body>
  );
};
