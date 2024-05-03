'use client'
import { StarIcon } from "./components/StarIcon";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { faqContent } from "./../utils/faq-content";
import { MinusIcon } from "./components/MinusIcon";
import { PlusIcon } from "./components/PlusIcon";


export default async function Home() {
 
   const itemClasses = {
     title: "text-dark-purple font-semibold text-base hover:text-[#AD28EB]",
     content: "text-grayish-purple text-sm py-7",
   };
  
  return (
    <>
      <div className="bg-white rounded-lg mx-6 px-6 md:max-w-[540px]">
        <header className="flex gap-6 py-7 px-6 text-dark-purple">
          <StarIcon />
          <h1 className="text-3xl font-bold text-dark-purple md:text-6xl">
            FAQs
          </h1>
        </header>
        <Accordion itemClasses={itemClasses}>
          {faqContent.map((item, i) => {
            return (
              <AccordionItem
                classNames={{
                  indicator: "data-[open=true]:rotate-0",
                }}
                key={i}
                title={item.question}
                indicator={({ isOpen }) =>
                  isOpen ? <MinusIcon /> : <PlusIcon />
                }
              >
                {item.answer}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}
