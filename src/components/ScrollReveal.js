import { useEffect, useRef } from "react";

const ScrollReveal = ({
  children,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("active");
          if (triggerOnce) {
            observer.unobserve(section);
          }
        } else if (!triggerOnce) {
          section.classList.remove("active");
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(section);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return (
    <div ref={sectionRef} className="reveal-on-scroll">
      {children}
    </div>
  );
};

export default ScrollReveal;
