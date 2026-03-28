import CommonHeader from "@/components/common/header/Header";
import ServiceCard from "../../../common/cards/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { isValidArray } from "@/lib/global-helpers";

const Service = () => {
  return (
    <section className="mt-20">
      <CommonHeader
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
          {isValidArray(SERVICES) &&
            SERVICES.map((service) => (
              <ServiceCard
                key={`${service.title}-${service.subtitle}`}
                learnMoreTextWhite={service.learnMoreTextWhite}
                bgColor={service.bgColor}
                title={service.title}
                subtitle={service.subtitle}
                href={service.href}
                icon={service.image.src}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
