import { Hero } from "@/components/hero-baner";
import Delimetr from "@/components/common/delimetr";
import { Menu } from "@/components/common/menu";
import { ToAction } from "@/components/to-action";
import { Footer } from "@/components/common/footer";
import { OurMissionSection } from "@/components/our-mission-section";
import { ONasSection } from "@/components/o-nas-section";
import DelimetrGrean from "@/components/common/delimetr-grean";
import Faqs from "@/components/common/faqs-row";

export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <Delimetr />
      <ONasSection />
      <OurMissionSection />
      <DelimetrGrean />
      <ToAction />
      <Faqs/>
      <Footer />
    </>
  );
}
