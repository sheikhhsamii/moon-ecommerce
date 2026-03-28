import CaseStudiesCard from "@/components/common/cards/CaseStudiesCard";
import CommonHeader from "@/components/common/header/Header";
import { CASE_STUDIES } from "@/lib/constants";
import { isValidArray } from "@/lib/global-helpers";

const CaseStudies = () => {
  return (
    <section className="mt-20">
      <CommonHeader
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <div className="mt-12 lg:mt-20">
        <section className="flex flex-row overflow-x-auto lg:overflow-x-visible gap-6 lg:gap-3 bg-dark rounded-[45px] p-8 lg:p-0 min-h-fit lg:min-h-81.5 hide-scrollbar">
          {isValidArray(CASE_STUDIES) &&
            CASE_STUDIES.map((caseStudy, index) => (
              <CaseStudiesCard
                key={caseStudy.title}
                description={caseStudy.description}
                href={caseStudy.href}
                isLast={index === CASE_STUDIES.length - 1}
              />
            ))}
        </section>
      </div>
    </section>
  );
};

export default CaseStudies;
