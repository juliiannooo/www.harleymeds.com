import { MembershipHeader } from "@/sections/MembershipSection/components/MembershipHeader";
import { MembershipCarousel } from "@/sections/MembershipSection/components/MembershipCarousel";

export const MembershipSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] overflow-hidden pb-16">
      <div className="box-border caret-transparent grid grid-cols-[[full-start]_24px_[main-start]_repeat(8,minmax(0px,1fr))_[main-end]_24px_[full-end]] outline-[3px] gap-y-2 md:grid-cols-[[full-start]_64px_[main-start]_repeat(22,minmax(0px,1fr))_[main-end]_64px_[full-end]]">
        <MembershipHeader />
        <MembershipCarousel />
      </div>
    </section>
  );
};
