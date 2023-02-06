import styles from "/styles/Home.module.css";

export function ONasSection() {
  return (
    <div className="flex flex-col pt-12 container mx-auto">
      <div className="grid space-y-12 place-items-center ">
        <h1 className="text-4xl ">O nas</h1>
        <p className="text-center w-2/3 pb-2">
          Fundacja została stworzona przez grupę inicjatywnych osób, którzy
          realizują kilka głównych celów. Pierwszym i najważniejszym celem w
          dzisiejszych realiach jest pomoc narodu ukraińskiemu w zbliżaniu się
          do zwycięstwa nad krwiożerczym wrogiem na polu walki o własną
          niepodległość. Drugim głównym celem jest konsekwentna zmiana ogólnego
          postrzegania marihuany w społeczeństwach Polski oraz Ukrainy m. in:
          lobbowanie na rzecz interesów osób, których prawa są naruszane z
          powodu przestarzałej i nieskutecznej polityki narkotykowej,
          zjednoczenie grup podobnie myślących osób i uruchomienie skutecznych
          mechanizmów, które doprowadzą oba zaprzyjaźnione kraje do legalizacji
          tej rośliny.
        </p>
        <div className={styles.strip}></div>
      </div>

    </div>

  );
}
