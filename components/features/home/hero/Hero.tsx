"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import { createHeroAnimations } from "./hero.animations";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageShellRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const copy = copyRef.current;
    const button = buttonRef.current;
    const imageShell = imageShellRef.current;
    const glow = glowRef.current;
    const image = imageRef.current;

    if (!section || !title || !copy || !button || !imageShell || !glow || !image) {
      return;
    }

    return createHeroAnimations({
      section,
      title,
      copy,
      button,
      imageShell,
      glow,
      image,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 text-black py-8 lg:py-12"
    >
      {/* SECTION LEFT - CONTENT  */}
      <div className="flex flex-col gap-6 w-full lg:w-[45%] text-left">
        <div className="overflow-hidden">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-medium leading-tight"
          >
            Navigating the digital landscape for success
          </h1>
        </div>
        <div className="overflow-hidden">
          <p
            ref={copyRef}
            className="text-base sm:text-lg lg:w-5/6 xl:w-4/6 leading-relaxed"
          >
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
        </div>
        <div className="overflow-hidden">
          <div ref={buttonRef}>
            <Button className="w-full sm:w-auto px-8 py-7 text-lg cursor-pointer">
              Book a consultation
            </Button>
          </div>
        </div>
      </div>
      {/* SECTION RIGHT - IMAGE   */}
      <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
        <div ref={imageShellRef} className="hero-illustrator-shell">
          <div
            ref={glowRef}
            className="hero-illustrator-glow"
            aria-hidden="true"
          />
          <Image
            ref={imageRef}
            src={IMAGE_CONSTANTS.HERO_ILLUSTRATOR}
            alt="Hero Image"
            width={600}
            height={600}
            priority
            className="hero-illustrator-image w-full max-w-125 lg:max-w-none aspect-square object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
