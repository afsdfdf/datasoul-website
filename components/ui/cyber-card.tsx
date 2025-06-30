"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CyberCardProps {
  children: ReactNode
  className?: string
  glowColor?: "cyan" | "purple" | "blue" | "pink" | "green"
  hover3d?: boolean
}

export function CyberCard({ children, className = "", glowColor = "cyan", hover3d = true }: CyberCardProps) {
  // Use a consistent cyan glow color for all cards
  const glowColors = {
    cyan: "shadow-cyan-500/20 border-cyan-500/30 hover:shadow-cyan-500/40 hover:border-cyan-500/50",
    purple: "shadow-cyan-500/20 border-cyan-500/30 hover:shadow-cyan-500/40 hover:border-cyan-500/50",
    blue: "shadow-cyan-500/20 border-cyan-500/30 hover:shadow-cyan-500/40 hover:border-cyan-500/50",
    pink: "shadow-cyan-500/20 border-cyan-500/30 hover:shadow-cyan-500/40 hover:border-cyan-500/50",
    green: "shadow-cyan-500/20 border-cyan-500/30 hover:shadow-cyan-500/40 hover:border-cyan-500/50",
  }

  return (
    <motion.div
      className={`
        relative bg-black/40 backdrop-blur-sm border-2 rounded-xl
        shadow-2xl transition-all duration-300
        ${glowColors[glowColor]}
        ${hover3d ? "hover:scale-105 hover:-translate-y-2" : ""}
        ${className}
      `}
      whileHover={
        hover3d
          ? {
              rotateX: 5,
              rotateY: 5,
              scale: 1.02,
              transition: { duration: 0.2 },
            }
          : {}
      }
      style={{
        transformStyle: "preserve-3d",
        background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(6,182,212,0.05) 50%, rgba(0,0,0,0.8) 100%)",
      }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60 rounded-br-xl" />

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      {children}
    </motion.div>
  )
}
