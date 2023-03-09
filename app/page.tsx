import Separator from "@/components/Separator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden rounded-xl bg-light text-dark">
      <section className="m-4">
        <p className="text-lg font-bold sm:text-xl md:text-2xl">
          Hey there. I'm André Koga and
        </p>
        <div className="flex items-center gap-3">
          <p className="text-6xl font-bold uppercase sm:text-8xl md:text-9xl">
            Asking
          </p>
          <div className="h-4 flex-grow bg-dark"></div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-6xl font-bold uppercase sm:text-8xl md:text-9xl">
            Questions
          </p>
          <div className="h-4 flex-grow bg-dark"></div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-6xl font-bold uppercase sm:text-8xl md:text-9xl">
            Is my
          </p>
          <div className="h-4 flex-grow bg-dark"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-4 flex-grow bg-prim"></div>
          <p className="text-6xl font-bold uppercase text-prim sm:text-8xl md:text-9xl">
            Passion.
          </p>
        </div>
      </section>
      <Separator />
      <section className="m-5 grid place-items-start bg-prim text-lg font-bold sm:text-xl md:text-2xl">
        <p className="-m-0.5 bg-light py-1 pr-2">
          What if we never settled for a single answer?
        </p>
        <p className="-m-0.5 bg-light py-1 pr-2">
          What if we were more open to change?
        </p>
        <p className="-m-0.5 bg-light py-1 pr-2">
          What if we dared to break the rules?
        </p>
        <p className="-m-0.5 bg-light py-1 pr-2">What if...?</p>
        <p className="place-self-end px-2 pt-20 text-light">
          <i>"Show, don't tell."</i> - Right, right.
        </p>
      </section>
      <Separator />
      <section className="m-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        <ul className="grid items-start gap-12 lg:grid-cols-2">
          <li className="grid gap-3 px-1">
            <p className="text-right text-lg italic">
              "How does the world work?"
            </p>
            <div className="flex items-center gap-3">
              <p>1</p>
              <div className="h-1 flex-grow bg-dark"></div>
              <p>Problem-Solver</p>
            </div>
            <div className="text-sm font-normal md:text-base">
              <p>
                2nd place at MIT Hackmed. 3 international medals. Over 40 in
                multiple STEM subjects.
              </p>
            </div>
            <hr />
            <div className="grid gap-y-2 text-base font-normal md:grid-cols-2 md:gap-x-8">
              <div className="flex items-center gap-2">
                <p>2nd place at a hackathon</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>MIT Hackmed</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Gold & bronze at a South-American</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>OMR</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Silver at an European</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>OMCPLP</p>
              </div>
              <div className="flex items-center gap-2">
                <p>12th spot for the IMO team</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>IMO</p>
              </div>
            </div>
            <Link
              className="ml-auto inline-block rounded border-2 border-prim px-3 py-0.5 text-xl text-prim"
              href={"/awards"}
            >
              More awards
            </Link>
          </li>
          <li className="grid gap-3 px-1">
            <p className="text-right text-lg italic">
              "How can I express myself?"
            </p>
            <div className="flex items-center gap-3">
              <p>2</p>
              <div className="h-1 flex-grow bg-dark"></div>
              <p>Artist</p>
            </div>
            <div className="text-sm font-normal md:text-base">
              <p>
                Completed traditional art course. Participated in an art
                exhibition in Brazil. Writes daily.
              </p>
            </div>
            <hr />
            <div className="grid gap-y-2 text-base font-normal md:grid-cols-2 md:gap-x-8">
              <div className="flex items-center gap-2">
                <p>Traditional art course</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Atelier Straube</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Digital art</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Procreate</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Poems, short stories</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Self-taught</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Anatomy study</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>GT Drawing Club</p>
              </div>
            </div>
            <Link
              className="ml-auto inline-block rounded border-2 border-prim px-3 py-0.5 text-xl text-prim"
              href={"/art"}
            >
              My art account
            </Link>
          </li>
          <li className="grid gap-3 px-1">
            <p className="text-right text-lg italic">
              "How do we engage people?"
            </p>
            <div className="flex items-center gap-3">
              <p>3</p>
              <div className="h-1 flex-grow bg-dark"></div>
              <p>Game Engineer</p>
            </div>
            <div className="text-sm font-normal md:text-base">
              <p>
                Published games on Google Play and Itchio. Over 5k downloads.
                Competed in game jams with team GLC.
              </p>
            </div>
            <hr />
            <div className="grid gap-y-2 text-base font-normal md:grid-cols-2 md:gap-x-8">
              <div className="flex items-center gap-2">
                <p>Dozens of projects finished</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Unity</p>
              </div>
              <div className="flex items-center gap-2">
                <p>3 game jams</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Team GLC</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Game art</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Aseprite</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Marketing</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Resolve Studio, Figma</p>
              </div>
            </div>
            <Link
              className="ml-auto inline-block rounded border-2 border-prim px-3 py-0.5 text-xl text-prim"
              href={"/art"}
            >
              Finished games
            </Link>
          </li>
          <li className="grid gap-3 px-1">
            <p className="text-right text-lg italic">
              "How can we improve the internet?"
            </p>
            <div className="flex items-center gap-3">
              <p>4</p>
              <div className="h-1 flex-grow bg-dark"></div>
              <p>Web Developer</p>
            </div>
            <div className="text-sm font-normal md:text-base">
              <p>
                Published games on Google Play and Itchio. Over 5k downloads.
                Competed in game jams with team GLC.
              </p>
            </div>
            <hr />
            <div className="grid gap-y-2 text-base font-normal md:grid-cols-2 md:gap-x-8">
              <div className="flex items-center gap-2">
                <p>Dozens of projects finished</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Unity</p>
              </div>
              <div className="flex items-center gap-2">
                <p>3 game jams</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Team GLC</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Game art</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Aseprite</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Marketing</p>
                <div className="h-[2px] flex-grow bg-dark"></div>
                <p>Resolve Studio, Figma</p>
              </div>
            </div>
            <Link
              className="ml-auto inline-block rounded border-2 border-prim px-3 py-0.5 text-xl text-prim"
              href={"/art"}
            >
              Finished games
            </Link>
          </li>
          <li className="px-1">
            <p className="text-right text-lg italic">
              "How do I make an impact?"
            </p>
            <div className="flex items-center gap-3">
              <p>5</p>
              <div className="h-1 flex-grow bg-dark"></div>
              <p>Entrepreneur</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
