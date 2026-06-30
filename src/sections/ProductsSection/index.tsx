import { ProductsBackground } from "@/sections/ProductsSection/components/ProductsBackground";
import { ProductCards } from "@/sections/ProductsSection/components/ProductCards";

export const ProductsSection = () => {
  return (
    <section className="relative items-stretch box-border caret-transparent flex flex-col justify-center outline-[3px] w-full z-[2] overflow-clip">
      <ProductsBackground />
      <ProductCards />
    </section>
  );
};
