import styles from "/styles/About-us.module.css";

export function AboutUsHero() {
  return (
    <>
      <div
        className={`hero bg-fixed min-h-screen flex w-full  ${styles.aboutUsHero}`}
      >

        <div className="w-1/2 h-screen bg-[#3E5646] bg-opacity-80 ">
          <div className=" grid grid-cols-1 gap-4 place-items-center mt-64">

                  <h1 className="text-7xl text-white w-2/4 mr-32 ">O nas</h1>


              <p className="pb-5 text-3xl text-white w-3/5">
                  Fundacja została stworzona przez grupę inicjatywnych osób, którzy realizują kilka głównych celów. Pierwszym i najważniejszym celem w dzisiejszych realiach jest pomoc narodu ukraińskiemu w zbliżaniu się do zwycięstwa nad krwiożerczym wrogiem na polu walki o własną niepodległość. Drugim głównym celem jest konsekwentna zmiana ogólnego postrzegania marihuany w społeczeństwach Polski oraz Ukrainy m. in: lobbowanie na rzecz interesów osób, których prawa są naruszane z powodu przestarzałej i nieskutecznej polityki narkotykowej, zjednoczenie grup podobnie myślących osób i uruchomienie skutecznych mechanizmów, które doprowadzą oba zaprzyjaźnione kraje do legalizacji tej rośliny.
              </p>

          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </>
  );
}
