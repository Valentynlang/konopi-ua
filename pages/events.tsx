import Delimetr from "@/components/common/delimetr";
import { Menu } from "@/components/common/menu";
import { ToAction } from "@/components/to-action";
import { Footer } from "@/components/common/footer";
import {OurMission} from "@/components/about-us-components/our-mission";
import {EventsHero} from "@/components/events/events-hero";
import Faqs from "@/components/common/faqs-row";

export default function Events() {
    return (
        <>
            <Menu />
            <EventsHero/>
            <Delimetr />
            <ToAction />
            <Faqs/>
            <Footer />
        </>
    );
}