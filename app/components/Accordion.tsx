"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { MinusIcon } from "./MinusIcon";
import { PlusIcon } from "./PlusIcon";
import { faqContent } from "./../../utils/faq-content";

export default function AccordionComponent() {
  return (
    <div>
      <Accordion>
        {faqContent.map((item, i) => {
          return (
            <AccordionItem
              className="text-grayish-purple py-4"
              key={i}
              title={
                <h2 className="text-dark-purple font-semibold text-base">{item.question}</h2>
              }
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
