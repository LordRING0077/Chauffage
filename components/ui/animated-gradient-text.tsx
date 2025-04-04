"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  text: string
  className?: string
  from?: string
  via?: string
  to?: string
}

export function AnimatedGradientText({
  text,
  className,
  from = "from-orange-600",
  via = "via-red-500",
  to = "to-amber-500",
}: AnimatedGradientTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return

      const { left, top, width, height } = textRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      textRef.current.style.setProperty("--mouse-x", `${x}`)
      textRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.span
      ref={textRef}
      className={cn("bg-gradient-to-br bg-clip-text text-transparent", from, via, to, className)}
      style={{
        backgroundPosition: "calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%)",
        backgroundSize: "200% 200%",
        display: "block",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.span>
  )
}

