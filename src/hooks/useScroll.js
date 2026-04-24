import { useEffect, useRef, useState } from 'react';

export default function useScroll() {
  const triggerRef = useRef(null);

  const [isIntersecting, setIsInterSection] =
    useState(true);
  useEffect(function () {
    const currentTarget = triggerRef.current;

    const observer = new IntersectionObserver(
      ([inter]) => {
        setIsInterSection(inter.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
      },
    );

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);

  return { triggerRef, isScrolled: !isIntersecting };
}
