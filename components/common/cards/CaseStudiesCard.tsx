import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import Image from "next/image";
import Link from "next/link";

interface CaseStudiesCardProps {
  description: string;
  href: string;
  isLast?: boolean;
}

const CaseStudiesCard = (props: CaseStudiesCardProps) => {
  return (
    <div className={`flex flex-col justify-between p-6 lg:p-12 w-[280px] sm:w-[350px] lg:w-1/3 shrink-0 ${!props.isLast ? 'lg:border-r lg:border-white/30' : ''}`}>
      <p className="text-white text-base sm:text-lg font-normal leading-relaxed mb-6">
        {props.description}
      </p>
      <div className="flex flex-row items-center gap-2 group mt-auto">
        <Link 
          href={props.href} 
          className="text-lg text-green font-medium transition-colors hover:text-white"
        >
          Learn More
        </Link>
        <Image
          src={IMAGE_CONSTANTS.LEARN_MORE}
          alt="Learn More"
          className="size-5 transition-transform group-hover:translate-x-1"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default CaseStudiesCard;
