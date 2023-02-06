import Link from "next/link";
import Image from "next/image";

export function Menu() {
  return (
    <nav className=" bg-inherit absolute top-0 left-0 right-0 container mx-auto ">
      <div className="flex justify-between items-center text-2xl text-white">
        <Link href={"/about-us"}>About Us</Link>
        <Link href={"/events"}>Events</Link>
        <div className="mr-7">
          <Link href={"/"}>
            <Image
                src={"/img/logo-white-img.png"}
                alt={"logo"}
                width={230}
                height={160}
            />
          </Link>


        </div>
        <div>Contact</div>
        <div>FAQs</div>
      </div>
    </nav>
  );
}
