"use client";

import { cn } from "@/lib/utils";

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = ["#00d4aa", "#7c3aed", "#00d4aa"],
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
        "--border-width": `${borderWidth}px`,
        "--shine-pulse-duration": `${duration}s`,
        "--shine-color": Array.isArray(color) ? color.join(", ") : color,
      } as React.CSSProperties}
      className={cn(
        "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] bg-white/5 p-3 backdrop-blur-sm",
        "before:absolute before:inset-0 before:rounded-[--border-radius] before:p-[--border-width]",
        "before:bg-[linear-gradient(90deg,var(--shine-color))] before:bg-[length:200%_100%]",
        "before:animate-shine before:content-[''] before:![mask-composite:subtract]",
        "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        className
      )}
    >
      {children}
    </div>
  );
}
