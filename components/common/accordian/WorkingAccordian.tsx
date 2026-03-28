import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { isValidArray } from "@/lib/global-helpers";
import { WORKING_PROCESS_STEPS } from "@/components/features/home/working-process/working-process.constants";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-01"
      className="w-full"
    >
      {isValidArray(WORKING_PROCESS_STEPS) &&
        WORKING_PROCESS_STEPS.map((step) => (
          <AccordionItem key={step.id} value={`item-${step.id}`}>
            <AccordionTrigger>
              <div className="flex flex-row items-center gap-4 sm:gap-6">
                <span className="text-3xl sm:text-6xl font-medium">{step.id}</span>
                <span className="text-xl sm:text-3xl font-medium">{step.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>{step.content}</AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}
