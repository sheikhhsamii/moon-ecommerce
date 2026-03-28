
import { ContactForm } from "@/components/common/form/ContactForm";
import CommonHeader from "@/components/common/header/Header";
import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="mt-20">
      <CommonHeader
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <div className="mt-12 lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gray rounded-[45px] p-8 sm:p-12 lg:px-20 lg:py-16 relative overflow-hidden">
          <ContactForm />
          <div className="hidden lg:block lg:absolute lg:-right-40 xl:-right-20">
            <Image
              src={IMAGE_CONSTANTS.CONTACT}
              alt="Contact Form"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
