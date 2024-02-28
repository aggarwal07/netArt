import React from "react";

const SectionI = () => {
  return (
    <div className="px-2">
      <div className="max-md:flex-col max-md:items-center flex items-center mt-4 text-[11px] font-semibold">
        <img src="./asserts/1.png" alt="1.png" className="w-[25vw] max-sm:pb-5 sm:w-[15vw] sm:ml-5"></img>
        <div className="flex flex-col max-md:items-center ml-10">
          <p className="font-bold -ml-2">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul className="list-disc p-1 pb-2 ml-4 pr-2">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
          <img src="./asserts/2.png" alt="2.png" className="w-[70vw] sm:w-[30vw]"></img>
          <p className="p-2 -ml-2">
            Government of India has awarded the{" "}
            <strong>"National Energy Conservation Award 2018"</strong> .Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <p className="text-[11px] p-2 max-md:text-center md:p-4 mt-3 font-semibold">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
    </div>
  );
};

export default SectionI;
