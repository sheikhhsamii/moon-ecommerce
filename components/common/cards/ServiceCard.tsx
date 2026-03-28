import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  bgColor: string;
  subtitle: string;
  href: string;
  icon: string;
  learnMoreTextWhite?: boolean;
}

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div
      className={`flex flex-col-reverse sm:flex-row justify-between items-center sm:items-stretch gap-8 ${props.bgColor} px-8 sm:px-12 py-8 sm:py-12 rounded-[45px] shadow-md border border-black border-b-6 transition-transform hover:-translate-y-1 duration-300`}
    >
      <div className="flex flex-col justify-between items-center sm:items-start gap-6 sm:gap-0 w-full sm:max-w-xs">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight bg-green p-1 sm:p-2 w-fit rounded-sm">
            {props.title}
          </h2>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight bg-green p-1 sm:p-2 w-fit rounded-sm">
            {props.subtitle}
          </h2>
        </div>
        <div className="flex flex-row items-center gap-4 group">
          <Image
            src={props.learnMoreTextWhite ? IMAGE_CONSTANTS.LEARN_MORE_WHITE : IMAGE_CONSTANTS.LEARN_MORE}
            alt="Learn More"
            className="size-8 sm:size-10 cursor-pointer transition-transform group-hover:rotate-45"
            width={40}
            height={40}
          />
          <Link 
            href={props.href} 
            className={`text-lg font-medium ${props.learnMoreTextWhite ? "text-white" : "text-black"}`}
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center w-full sm:w-1/2 max-w-[150px] sm:max-w-none">
        <Image
          src={props.icon}
          alt={props.title}
          className="w-full h-auto object-contain aspect-square"
          width={210}
          height={210}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
