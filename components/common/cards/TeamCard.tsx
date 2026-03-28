import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const TeamCard = (props: TeamCardProps) => {
  return (
    <div className="flex flex-col border border-black w-full rounded-[45px] px-6 sm:px-8 py-8 sm:py-10 shadow-sm border-b-6 transition-all hover:shadow-md">
      <div className="relative flex flex-row items-start gap-4 mb-6">
        <div className="relative size-20 sm:size-24 shrink-0 overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-300">
          <Image 
            fill
            src={props.image} 
            className="object-cover" 
            alt={props.name} 
          />
        </div>
        <div className="flex flex-col justify-end h-20 sm:h-24 pb-2">
          <h3 className="text-lg sm:text-xl font-bold leading-tight">{props.name}</h3>
          <p className="text-sm sm:text-base text-gray-600">{props.role}</p>
        </div>
        <a 
          href="#" 
          className="absolute right-0 top-0 p-2 hover:scale-110 transition-transform"
        >
          <Image src={IMAGE_CONSTANTS.LINKEDIN} alt="linkedin" width={24} height={24} />
        </a>
      </div>
      <div className="border-t border-black/20 my-6"></div>
      <p className="text-sm sm:text-base leading-relaxed">{props.description}</p>
    </div>
  );
};

export default TeamCard;
