import { useLayoutEffect, useRef, useCallback } from "react";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

const ScrollStack = ({
  children,
  className = "",
  baseScale = 0.9,       // how small cards are at far edges
  maxExtraScale = 0.1,   // how much larger center card gets
  maxTranslateY = 40,    // how much cards move up/down
  rotationAmount = 4,    // degrees max tilt
}) => {
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);
  const rafRef = useRef(null);

  const updateTransforms = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;

      // -1 at top, 0 in center, +1 at bottom
      const norm = clamp(
        (cardCenter - viewportCenter) / (viewportHeight / 2),
        -1,
        1
      );

      // closeness to center (1 in center, 0 at far edges)
      const focus = 1 - Math.abs(norm);

      const scale = baseScale + focus * maxExtraScale;
      const translateY = -norm * maxTranslateY;
      const rotation = -norm * rotationAmount;

      card.style.transform = `
        translate3d(0, ${translateY}px, 0)
        scale(${scale})
        rotate(${rotation}deg)
      `;
      card.style.opacity = 0.4 + focus * 0.6; // fade a bit when far
      card.style.zIndex = String(100 + Math.round(focus * 10));
    });
  }, [baseScale, maxExtraScale, maxTranslateY, rotationAmount]);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateTransforms();
    });
  }, [updateTransforms]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cards = Array.from(
      wrapper.querySelectorAll(".scroll-stack-card")
    );
    cardsRef.current = cards;

    // base styling per card
    cards.forEach((card) => {
      card.style.willChange = "transform, opacity";
      card.style.transformOrigin = "center top";
      card.style.backfaceVisibility = "hidden";
      card.style.transition =
  "transform 0.45s cubic-bezier(0.22, 0.8, 0.25, 1), opacity 0.45s ease-out";
    });

    // initial layout
    updateTransforms();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      cardsRef.current = [];
    };
  }, [scheduleUpdate, updateTransforms]);

  return (
    <div
      ref={wrapperRef}
      className={`scroll-stack-wrapper ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default ScrollStack;
