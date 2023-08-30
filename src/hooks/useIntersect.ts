import { useCallback, useEffect, useRef } from 'react';

export function useIntersect(onIntersectCallback: () => void) {
  const target = useRef<HTMLDivElement>(null);

  const onIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        onIntersectCallback();
        setTimeout(() => {
          observer.observe(entry.target);
        }, 5000);
      }
    },
    [onIntersectCallback]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.9 });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, onIntersect]);

  return target;
}
