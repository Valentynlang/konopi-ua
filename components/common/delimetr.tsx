import styles from "/styles/Home.module.css";

export default function Delimetr() {
  return (
    <>
      <div className="flex flex-col h-48 bg-[#3C4554]">
        <div className="grid space-y-6 mt-12 place-items-center">
          <h1 className="text-5xl text-white">If not we? Then who?</h1>
          <div className={styles.strip}></div>
        </div>
      </div>
    </>
  );
}
