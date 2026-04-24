import { useEffect, useRef, useState } from 'react';

export default function useReveal() {
  const triggerRef = useRef(null);

  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(
    function () {
      const currentTarget = triggerRef.current;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasAppeared(true);
            observer.unobserve(currentTarget);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        },
      );

      if (currentTarget) {
        observer.observe(currentTarget);
      }

      return () => {
        if (currentTarget) {
          observer.unobserve(currentTarget);
        }
      };
    },
    [hasAppeared],
  );

  return { triggerRef, hasAppeared };
}
