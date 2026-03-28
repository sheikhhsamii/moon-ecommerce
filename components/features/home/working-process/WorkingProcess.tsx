import { AccordionDemo } from "@/components/common/accordian/WorkingAccordian";
import CommonHeader from "@/components/common/header/Header";

const WorkingProcess = () => {
  return (
    <section className="mt-20">
      <CommonHeader
        title="Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />
      <div className="mt-20">
        <AccordionDemo />
      </div>
    </section>
  );
};

export default WorkingProcess;
