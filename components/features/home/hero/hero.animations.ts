import { gsap } from "gsap";
import { isBrowser } from "@/lib/global-helpers";

type HeroAnimationRefs = {
  section: HTMLElement;
  title: HTMLElement;
  copy: HTMLElement;
  button: HTMLElement;
  imageShell: HTMLElement;
  glow: HTMLElement;
  image: HTMLElement;
};

export const createHeroAnimations = ({
  section,
  title,
  copy,
  button,
  imageShell,
  glow,
  image,
}: HeroAnimationRefs) => {
  const prefersReducedMotion = isBrowser() && window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    gsap.set([title, copy, button, imageShell, glow, image], {
      clearProps: "all",
    });

    return () => undefined;
  }

  const ctx = gsap.context(() => {
    gsap.set([title, copy, button], {
      yPercent: 110,
      opacity: 0,
      willChange: "transform, opacity",
    });

    gsap.set([imageShell, glow, image], {
      willChange: "transform, opacity",
    });

    const introTimeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    introTimeline
      .to(title, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
      })
      .to(
        copy,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.45"
      )
      .to(
        button,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.75,
        },
        "-=0.4"
      )
      .fromTo(
        imageShell,
        {
          x: 36,
          y: 24,
          opacity: 0,
          scale: 0.96,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
        },
        "-=0.9"
      );

    gsap.to(imageShell, {
      y: -18,
      x: 10,
      duration: 3.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(image, {
      rotation: -2,
      scale: 1.03,
      duration: 3.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "center center",
    });

    gsap.to(glow, {
      scale: 1.12,
      opacity: 0.85,
      duration: 2.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "center center",
    });
  }, section);

  return () => ctx.revert();
};
