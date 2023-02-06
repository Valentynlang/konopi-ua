import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-black text-white text-xl ">
        <div>
          <Link className="link link-hover" href={"/about-us"}>About Us</Link>
          <Link className="link link-hover" href={"/events"}>Events</Link>
          <Link className="link link-hover" href={"/"}>Contact</Link>
          <Link className="link link-hover" href={"/"}>FAQs</Link>

        </div>
        <div className="grid  gap-2">
          <p>+48732737273</p>
          <a className="link link-hover">Konopua.pl@gmail.com</a>
          <div className="grid-flow-col grid">
            <a>
              <img
                src="/img/facebook-icon.png"
                alt="inst"
                width="30"
                height="30"
                className="mr-4"
              />
            </a>
            <a>
              <img src="/img/inst-icon.png" alt="inst" width="30" height="30" />
            </a>
          </div>
        </div>
        <div>
          <Link href={"/"}>
            <Image
                src={"/img/logo-white-img.png"}
                alt={"logo"}
                width={230}
                height={160}
            />
          </Link>
        </div>
        <div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
      </footer>
    </>
  );
}
