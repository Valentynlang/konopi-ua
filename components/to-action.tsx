import styles from "/styles/Home.module.css";

export function ToAction() {
  return (
    <div className={styles.toActionImg}>
      <div className={` grid gap-y-4 place-items-center container mx-auto`}>
        <h1 className="text-center text-white text-5xl mt-24">Look around</h1>
        <p className="pb-5 text-4xl text-white ">
          Save someone else's life, help us raise  money for volunteering
        </p>
        <button className="rounded-2xl btn border-2 h-24 w-3/5 btn-outline  btn-secondary text-4xl">
          Donate
        </button>
      </div>
    </div>
  );
}
