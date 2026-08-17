"use client";

import Experience from "@/components/Experience";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />

      <Experience />

      <main className="relative z-10 pointer-events-none">

        {/* HERO */}

        <section className="h-screen flex items-center justify-center text-center">
          <div>
            <p className="mb-5 text-xs tracking-[0.7em] text-[#d6c39b]">
              38° 00′ N — 23° 43′ E
            </p>

            <h1 className="font-display text-[15vw] leading-none tracking-[-0.07em] text-[#f1e5ca]">
              ATHENS
            </h1>

            <p className="mt-8 text-xs tracking-[0.5em] text-[#e3d5b9]">
              THE AGE OF BLOOD
            </p>
          </div>
        </section>


        {/* GOLDEN AGE */}

        <section className="h-screen flex items-center px-[10vw]">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.5em] text-[#c7a96c]">
              I — THE GOLDEN AGE
            </p>

            <h2 className="mt-8 font-display text-7xl leading-[0.8] text-[#f0e2c4]">
              A CITY
              <br />
              OF
              <br />
              <span className="text-[#c5a96d]">
                GODS.
              </span>
            </h2>

            <p className="mt-10 text-sm leading-8 text-[#e2d8c5]/80">
              Marble temples rise beneath an endless
              Mediterranean sky. The city believes
              itself eternal.
            </p>
          </div>
        </section>


        {/* ZEUS */}

        <section className="h-screen flex items-center justify-end px-[10vw]">
          <div className="max-w-xl text-right">
            <p className="text-xs tracking-[0.5em] text-[#bba67c]">
              II — THE GODS
            </p>

            <h2 className="mt-8 font-display text-7xl leading-[0.8] text-[#eee2ca]">
              THE SKY
              <br />
              <span className="text-[#d8eaff]">
                ANSWERS.
              </span>
            </h2>

            <p className="mt-10 text-sm leading-8 text-[#ddd3c0]/80">
              When thunder speaks, mortals remember
              that the gods are watching.
            </p>
          </div>
        </section>


        {/* WAR */}

        <section className="h-screen flex items-center px-[10vw]">
          <div>
            <p className="text-xs tracking-[0.6em] text-[#b38a69]">
              III — THE INVASION
            </p>

            <h2 className="mt-8 font-display text-[11vw] leading-[0.72] text-[#e7d7bd]">
              THE NORTH
              <br />
              <span className="text-[#8d1111]">
                CAME.
              </span>
            </h2>

            <p className="mt-12 max-w-md text-sm leading-8 text-[#d0c2ae]/80">
              Longships crossed the Aegean.
              Iron met bronze.
              Marble met fire.
            </p>
          </div>
        </section>


        {/* AFTERMATH */}

        <section className="h-screen flex items-center justify-center text-center">
          <div>
            <p className="text-xs tracking-[0.7em] text-[#9f8066]">
              IV — AFTERMATH
            </p>

            <h2 className="mt-8 font-display text-[11vw] leading-[0.75] text-[#e5d8c2]">
              STONE
              <br />
              <span className="text-[#791010]">
                REMEMBERS.
              </span>
            </h2>
          </div>
        </section>

      </main>
    </>
  );
}
