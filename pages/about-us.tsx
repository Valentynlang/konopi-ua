import Delimetr from "@/components/common/delimetr";
import { Menu } from "@/components/common/menu";
import { ToAction } from "@/components/to-action";
import { Footer } from "@/components/common/footer";
import {AboutUsHero} from "@/components/about-us-components/about-us-hero";
import {OurMission} from "@/components/about-us-components/our-mission";
import Faqs from "@/components/common/faqs-row";

export default function AboutUs() {
    return (
        <>
            <Menu />
            <AboutUsHero/>
            <Delimetr />
            <OurMission/>
            <ToAction />
            <Faqs/>
            <Footer />
        </>
    );
}