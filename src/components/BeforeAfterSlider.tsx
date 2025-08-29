"use client";
import { useEffect, useRef, useState, KeyboardEvent, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = { before: string; after: string };

export default function BeforeAfterSlider({ before, after }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  // % position as a motion value for buttery-smooth updates
  const x = useMotionValue(50);
  const smoothX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.3 });
  const clipWidth = useTransform(smoothX, (v) => `${v}%`);
  const handleLeft = clipWidth;

  const clampToContainer = useCallback(
    (clientX: number) => {
      const el = ref.current;
      if (!el) return;
      const { left, width } = el.getBoundingClientRect();
      const pct = ((clientX - left) / width) * 100;
      x.set(Math.max(0, Math.min(100, pct)));
    },
    [x]
  );

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      clampToContainer(e.clientX);
    };
    const onUp = () => setDragging(false);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, clampToContainer]);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    clampToContainer(e.clientX);
    (e.currentTarget as HTMLElement).focus();
  };

  const onClick = (e: React.MouseEvent) => {
    clampToContainer(e.clientX);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = 2;
    if (e.key === "ArrowLeft") x.set(Math.max(0, x.get() - step));
    if (e.key === "ArrowRight") x.set(Math.min(100, x.get() + step));
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-lg cursor-col-resize select-none touch-none"
      onPointerDown={onPointerDown}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Before after slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(smoothX.get())}
    >
      {/* After (base) */}
      <Image
        src={after}
        alt="After"
        fill
        className="object-cover pointer-events-none"
        priority
      />

      {/* Before (clipped by width) */}
      <motion.div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: clipWidth }}
      >
        <Image
          src={before}
          alt="Before"
          fill
          className="object-cover pointer-events-none"
          priority
        />
      </motion.div>

      {/* Divider / Handle */}
      <motion.div
        className="absolute top-0 h-full w-1 bg-white"
        style={{ left: handleLeft }}
      >
        {/* big hit target (visual handle) */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-white/90 text-black text-[10px] font-medium flex items-center justify-center shadow-md pointer-events-none">
          ↔
        </div>
        {/* soft scrims to reduce hard edge */}
        <div className="absolute -left-16 top-0 h-full w-16 bg-gradient-to-l from-transparent to-black/10 pointer-events-none" />
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-transparent to-black/10 pointer-events-none" />
      </motion.div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded pointer-events-none">
        After
      </span>
    </div>
  );
}
