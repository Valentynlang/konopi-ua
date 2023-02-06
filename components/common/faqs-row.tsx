import FaqRow from "./faq-row";
import styles from "../../styles/common/faq.module.scss";
import { Faq } from "@/components/common/faq";

export default function Faqs() {
  return (
    <div className="bg-white p-16 flex-col flex grid ">

        <div className="container mx-auto ">
            <h1 className="text-black text-5xl">FAQs</h1>
            <div>
                <Faq title="Text texttext text dtftsdt dsf?" description="Text texttext text dtftsdt dsf!" />
                <Faq title="Text texttext text dtftsdt dsf?" description="Text texttext text dtftsdt dsf!" />
                <Faq title="Text texttext text dtftsdt dsf?" description="Text texttext text dtftsdt dsf!" />
                <Faq title="Text texttext text dtftsdt dsf?" description="Text texttext text dtftsdt dsf!" />
            </div>
        </div>

    </div>
  );
}
