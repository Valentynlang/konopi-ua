import styles from "/styles/Hero-baner.module.css";

export function Hero() {
  return (
    <>
      <div
        className={`hero bg-fixed min-h-screen flex w-full  ${styles.heroBannerContainer}`}
      >
        <div className="w-1/2"></div>
        <div className="w-1/2 h-screen bg-[#3E5646] bg-opacity-80 ">
          <div className="flex flex-col ">
            <div className="h-96"></div>
            <div className="  grid  grid-cols-1 gap-4 place-content-evenly space-y-6 ml-6 ">
              <h1 className="text-7xl text-white">Look around</h1>
              <p className="pb-5 text-3xl text-white w-3/5">
                Save someone else's life, help us raise money for volunteering
              </p>
              <button className="rounded-2xl btn border-2 h-24 w-3/5 btn-outline  btn-secondary text-4xl">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
