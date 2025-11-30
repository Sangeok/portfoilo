"use client";

import { useEffect, useRef } from "react";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"];
  const duplicatedSkills = [...skills, ...skills];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;

    const speed = 0.8;

    const animate = () => {
      if (!container) return;
      const maxScroll = container.scrollWidth / 2;
      if (maxScroll === 0) return;

      container.scrollLeft = (container.scrollLeft + speed) % maxScroll;
      animationRef.current = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      container.scrollLeft = 0;
    };

    const handleResize = () => {
      const shouldScroll = container.scrollWidth > container.clientWidth;
      if (shouldScroll) {
        if (animationRef.current === null) {
          animationRef.current = requestAnimationFrame(animate);
        }
      } else {
        stopAnimation();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      stopAnimation();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-10 px-6 border-t border-gray-100 max-w-7xl mx-auto w-full overflow-hidden">
      <div ref={scrollerRef} className="flex items-center gap-8 overflow-hidden no-scrollbar">
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="flex-shrink-0 px-8 py-3 bg-gray-50 rounded-full text-lg font-medium text-gray-600 min-w-[120px] text-center whitespace-nowrap"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
