import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IMAGE_CONSTANTS } from "@/lib/img-constants";

const Proposal = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-8 sm:px-12 lg:px-16 py-10 sm:py-16 bg-gray rounded-[45px] text-black overflow-hidden relative">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-left z-10">
        <h3 className="text-2xl sm:text-3xl font-bold">Let’s make things happen</h3>
        <p className="text-base sm:text-lg">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button className="w-full sm:w-auto px-8 py-7 text-lg cursor-pointer">
          Get your free proposal
        </Button>
      </div>
      <div className="hidden sm:block lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
        <Image
          src={IMAGE_CONSTANTS.PROPOSAL_ILLUSTRATOR}
          alt="proposal"
          className="w-full max-w-[300px] lg:max-w-[450px] object-contain"
          width={500}
          height={400}
        />
      </div>
    </section>
  );
};

export default Proposal;
