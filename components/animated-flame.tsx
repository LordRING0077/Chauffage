"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Flame } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnimatedFlameProps {
  className?: string
  size?: number
  color?: string
  glowColor?: string
  animated?: boolean
}

export function AnimatedFlame({
  className,
  size = 24,
  color = "#ff4500",
  glowColor = "rgba(255, 69, 0, 0.6)",
  animated = true,
}: AnimatedFlameProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn("flame-container relative inline-block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={
          animated
            ? {
                scale: isHovered ? [1, 1.2, 1] : [1, 1.05, 1],
              }
            : {}
        }
        transition={{
          duration: isHovered ? 0.5 : 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          filter: `drop-shadow(0 0 ${isHovered ? 8 : 4}px ${glowColor})`,
        }}
      >
        <Flame size={size} className="flame" color={color} />
      </motion.div>
    </div>
  )
}

