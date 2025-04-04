"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface MotionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  damping?: number
  stiffness?: number
  rotationIntensity?: number
  shadowIntensity?: number
}

export function MotionCard({
  children,
  className,
  damping = 30,
  stiffness = 300,
  rotationIntensity = 10,
  shadowIntensity = 0.5,
  ...props
}: MotionCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animations for smoother movement
  const springX = useSpring(mouseX, { damping, stiffness })
  const springY = useSpring(mouseY, { damping, stiffness })

  // Transform mouse position to rotation
  const rotateX = useTransform(springY, [0, 1], [rotationIntensity, -rotationIntensity])
  const rotateY = useTransform(springX, [0, 1], [-rotationIntensity, rotationIntensity])

  // Shadow based on rotation
  const shadowX = useTransform(springX, [0, 1], [-shadowIntensity, shadowIntensity])
  const shadowY = useTransform(springY, [0, 1], [-shadowIntensity, shadowIntensity])

  // Highlight effect values, initialized to avoid conditional hook calls
  const highlightOpacity = useTransform(springX, [0, 0.5, 1], [0.5, 0, 0.5])
  const highlightTop = useTransform(springY, [0, 1], ["-20%", "20%"])
  const highlightLeft = useTransform(springX, [0, 1], ["-20%", "20%"])

  // Handle mouse move
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Calculate mouse position relative to card (0-1)
    const x = (e.clientX - rect.left) / width
    const y = (e.clientY - rect.top) / height

    mouseX.set(x)
    mouseY.set(y)
  }

  // Reset on mouse leave
  function onMouseLeave() {
    mouseX.set(0.5)
    mouseY.set(0.5)
    setIsHovered(false)
  }

  // Center shadow on mount
  useEffect(() => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden rounded-xl transition-all", className)}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        boxShadow: isHovered
          ? `
              ${shadowX.get() * 25}px 
              ${shadowY.get() * 25}px 
              30px rgba(0, 0, 0, 0.1)
            `
          : "0px 0px 0px rgba(0, 0, 0, 0.1)",
      }}
      {...props}
    >
      <div
        className="relative z-10 h-full w-full"
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>

      {/* Highlight effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 z-0 bg-gradient-to-br from-white/10 to-transparent opacity-0"
          style={{
            opacity: highlightOpacity,
            top: highlightTop,
            left: highlightLeft,
            backgroundSize: "200% 200%",
          }}
        />
      )}
    </motion.div>
  )
}

