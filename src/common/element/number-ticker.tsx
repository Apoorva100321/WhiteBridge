"use client"

import { ComponentPropsWithoutRef, useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : Math.max(0, startValue))
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 150,
    restDelta: 0.001,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [motionValue, isInView, delay, value, direction, startValue])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          // Clamp the value to ensure it never goes below 0 or startValue, whichever is higher
          const minValue = Math.max(0, Math.min(startValue, value))
          const maxValue = Math.max(startValue, value)
          const clampedValue = Math.max(minValue, Math.min(maxValue, Math.max(0, latest)))
          const finalValue = clampedValue < 0 ? 0 : clampedValue
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(finalValue.toFixed(decimalPlaces)))
        }
      }),
    [springValue, decimalPlaces, startValue, value]
  )

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tracking-wider text-black tabular-nums dark:text-white",
        className
      )}
      {...(props as any)}
    >
      {startValue}
    </span>
  )
}

