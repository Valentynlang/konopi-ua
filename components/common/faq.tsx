import Image from "next/image";
import { useState } from "react";
import styles from "/styles/Home.module.css";

export function Faq({ title, description }: IFaqs) {
  const [isExpanded, setState] = useState(false);

  const onClick = () => {
    setState(!isExpanded);
  };
  return (
    <div className="bg-white text-black grid  mx-auto  ">

      <div
        className={`p-5   space-y-2 flex justify-between ${styles.faqRow}`}
        onClick={onClick}
      >
        <p>{title}</p>
        <button type="button" onClick={onClick} className={` `}>
          <Image
            src={"/img/faq-expand.png"}
            width={30}
            height={30}
            layout={"fixed"}
            alt={"expand"}
          />
        </button>

      </div>
      <div className={`${styles.strip}`}></div>

      {isExpanded ? (
        <div className={`pl-6 pt-4 pb-4`}>
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
}

interface IFaqs {
  title: string;
  description: string;
}
