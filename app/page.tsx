import Image from "next/image";
import AccordionComponent from "./components/Accordion";
import { StarIcon } from "./components/StarIcon";

export default function Home() {
  return (
    <>
      <div className="bg-white rounded-lg mx-6 px-6 md:max-w-[540px]">
        <header className="flex gap-6 py-7 px-6 text-dark-purple">
          <StarIcon />
          <h1 className="text-3xl font-bold text-dark-purple md:text-6xl">
            FAQs
          </h1>
        </header>
        <AccordionComponent></AccordionComponent>
      </div>
    </>
  );
}
