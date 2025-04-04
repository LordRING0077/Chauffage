"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
  overflow?: boolean
}

export function ParallaxSection({
  children,
  className,
  speed = 0.2,
  direction = "up",
  overflow = false,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Adjust the transform based on direction
  const factor = direction === "up" ? -speed : speed
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${factor * 100}%`])

  return (
    <div ref={ref} className={cn("relative", overflow ? "overflow-visible" : "overflow-hidden", className)}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}

