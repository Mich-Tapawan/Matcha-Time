import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { easeOut, fadeUp, slideLeft, slideRight } from "./variants";

type RevealDirection = "up" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
  amount?: number;
  as?: "div" | "section";
};

function getVariants(direction: RevealDirection, delay: number): Variants {
  const base =
    direction === "left"
      ? slideLeft
      : direction === "right"
        ? slideRight
        : fadeUp;

  return {
    hidden: base.hidden,
    visible: {
      ...(typeof base.visible === "object" ? base.visible : {}),
      transition: { duration: 0.65, ease: easeOut, delay },
    },
  };
}

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.2,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getVariants(direction, delay)}
    >
      {children}
    </Component>
  );
}
