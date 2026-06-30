import { ProductCard } from "@/sections/ProductsSection/components/ProductCard";

export const ProductCards = () => {
  return (
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
            <ProductCard
              href="/product/trt"
              productImageUrl="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f6e7bb15c53e64083f69_testo-3d.png"
              productImageAlt=""
              logoImageUrl="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f077a7a8eff055809872_trt.svg"
              logoImageAlt=""
              description="Pricing is personalized based on your lab results and treatment plan."
              price="$149"
              title="Testosterone"
              ctaText="Learn MORE"
            />
          </div>
          <div
            role="listitem"
            className="self-stretch box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:self-auto"
          >
            <ProductCard
              href="/product/sermorelin"
              productImageUrl="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f6a45d0a3b201cf9381a_sermo-3d.png"
              productImageAlt=""
              logoImageUrl="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f0646bdb90ddd0f42cdf_ser.svg"
              logoImageAlt=""
              description="Pricing is personalized based on your lab results and treatment plan."
              price="$199"
              title="Sermorelin"
              ctaText="Learn MORE"
            />
          </div>
          <div
            role="listitem"
            className="self-stretch box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:self-auto"
          >
            <ProductCard
              href="/product/nad"
              productImageUrl="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f699dc1b4f46fdbd8451_nad-3d.png"
              productImageAlt=""
              logoImageUrl="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f05989742a0c35ec3f46_nad.svg"
              logoImageAlt=""
              description="Pricing is personalized based on your lab results and treatment plan."
              price="$199"
              title="NAD+"
              ctaText="Learn MORE"
            />
          </div>
          <div
            role="listitem"
            className="self-stretch box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] md:self-auto"
          >
            <ProductCard
              href="/product/enclomiphene"
              productImageUrl="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f72afc36b5bc5f7ace18_enclo-3d.png"
              productImageAlt=""
              logoImageUrl="https://c.animaapp.com/mr0zuk2jBqSo3G/assets/67c9f04ef9a6490e0a8503f4_enclo.svg"
              logoImageAlt=""
              description="Pricing is personalized based on your lab results and treatment plan."
              price="$99"
              title="Enclomiphene"
              ctaText="Learn MORE"
            />
          </div>
        </div>
      </div>
      <div className="text-yellow-50 box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] outline-[3px] text-center">
        Harley Meds partners with 3,000+ labs nationwide for fast, reliable
        care.
      </div>
    </div>
  );
};
