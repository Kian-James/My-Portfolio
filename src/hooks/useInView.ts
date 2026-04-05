import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseInViewReturn<T extends Element> {
  ref: React.RefObject<T>;
  inView: boolean;
}

/**
 * useInView — triggers when element enters the viewport.
 * Used for scroll-triggered animations across sections.
 */
export function useInView<T extends Element>({
  threshold = 0.12,
  rootMargin = '0px',
  triggerOnce = true,
}: UseInViewOptions = {}): UseInViewReturn<T> {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
}
