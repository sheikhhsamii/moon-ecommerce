import { BRANDS } from "@/lib/constants";
import { isValidArray } from "@/lib/global-helpers";
import Image from "next/image";

const Brand = () => {
  return (
    <section className="flex flex-wrap justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20">
      {isValidArray(BRANDS) &&
        BRANDS.map((brand) => (
          <Image
            width={500}
            height={500}
            className="w-32 h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            key={brand.name}
            src={brand.image.src}
            alt={brand.name}
          />
        ))}
    </section>
  );
};

export default Brand;
