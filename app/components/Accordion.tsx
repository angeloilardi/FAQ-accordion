"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { MinusIcon } from "./MinusIcon";
import { PlusIcon } from "./PlusIcon";
import { faqContent } from "./../../utils/faq-content";

export default function AccordionComponent() {

    const itemClasses = {
      title:
        "text-dark-purple font-semibold text-base hover:text-[#AD28EB]",
      content: "text-grayish-purple text-sm py-7",
    };
  return (
    <div>
      <Accordion
        itemClasses={itemClasses}
        motionProps={{
          variants: {
            endingY: {
              y: 0,
            },
          },
        }}
      >
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
  );
}
