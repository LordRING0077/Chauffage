"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps {
  className?: string
  children?: React.ReactNode
  color1?: string
  color2?: string
  color3?: string
  color4?: string
  speed?: number
}

export function AnimatedBackground({
  className,
  children,
  color1 = "#ff7e5f",
  color2 = "#feb47b",
  color3 = "#ffb347",
  color4 = "#ffcc33",
  speed = 15,
}: AnimatedBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    element.style.setProperty("--color-1", color1)
    element.style.setProperty("--color-2", color2)
    element.style.setProperty("--color-3", color3)
    element.style.setProperty("--color-4", color4)
    element.style.setProperty("--animation-duration", `${speed}s`)
  }, [color1, color2, color3, color4, speed])

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{
        background: `linear-gradient(-45deg, var(--color-1), var(--color-2), var(--color-3), var(--color-4))`,
        backgroundSize: "400% 400%",
        animation: `gradient var(--animation-duration) ease infinite`,
      }}
    >
      {children}
    </div>
  )
}

