"use client";

import { useEffect, useState } from "react";
import { EVENTS } from "@/lib/constants";
import { isBrowser } from "@/lib/global-helpers";

export const useScroll = (offset: number = 10) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (!isBrowser()) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > offset);
    };

    handleScroll(); 

    window.addEventListener(EVENTS.SCROLL, handleScroll, { passive: true });

    return () => {
      window.removeEventListener(EVENTS.SCROLL, handleScroll);
    };
  }, [offset]);

  return scrolled;
};
