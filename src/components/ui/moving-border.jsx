"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Button = ({
  as: Component = "button",
  children,
  containerClassName,
  className,
  borderRadius = "0.5rem",
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      {/* animasi border bergerak */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute inset-[-50%] z-0 bg-[conic-gradient(from_0deg,theme(colors.cyan.400),theme(colors.purple.500),theme(colors.blue.500),theme(colors.cyan.400))]"
      />

      <Component
        {...props}
        style={{ borderRadius }}
        className={cn(
          "relative z-10 bg-black text-white px-4 py-2 font-semibold text-sm transition-all duration-300 hover:scale-[1.03] hover:bg-black/80",
          className
        )}
      >
        {children}
      </Component>
    </div>
  );
};
