"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CyberButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  color?: "cyan" | "purple" | "blue" | "pink" | "green" | "orange"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function CyberButton({
  children,
  variant = "primary",
  color = "cyan",
  size = "md",
  className = "",
  onClick,
  disabled = false,
}: CyberButtonProps) {
  const colorClasses = {
    cyan: {
      primary:
        "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-cyan-500/50",
      secondary: "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/50",
      outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-cyan-500/50",
      ghost: "text-cyan-400 hover:bg-cyan-500/10",
    },
    purple: {
      primary:
        "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-purple-500/50",
      secondary: "bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/50",
      outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:shadow-purple-500/50",
      ghost: "text-purple-400 hover:bg-purple-500/10",
    },
    blue: {
      primary:
        "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-blue-500/50",
      secondary: "bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border-blue-500/50",
      outline: "border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:shadow-blue-500/50",
      ghost: "text-blue-400 hover:bg-blue-500/10",
    },
    pink: {
      primary:
        "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-pink-500/50",
      secondary: "bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 border-pink-500/50",
      outline: "border-2 border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:shadow-pink-500/50",
      ghost: "text-pink-400 hover:bg-pink-500/10",
    },
    green: {
      primary:
        "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-green-500/50",
      secondary: "bg-green-500/20 hover:bg-green-500/30 text-green-300 border-green-500/50",
      outline: "border-2 border-green-500 text-green-400 hover:bg-green-500/10 hover:shadow-green-500/50",
      ghost: "text-green-400 hover:bg-green-500/10",
    },
    orange: {
      primary:
        "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-orange-500/50",
      secondary: "bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border-orange-500/50",
      outline: "border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 hover:shadow-orange-500/50",
      ghost: "text-orange-400 hover:bg-orange-500/10",
    },
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  }

  return (
    <motion.button
      className={`
        relative font-mono font-semibold rounded-xl transition-all duration-300
        transform-gpu perspective-1000 hover:scale-105
        ${colorClasses[color][variant]}
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      whileHover={{
        scale: disabled ? 1 : 1.05,
        rotateX: disabled ? 0 : 2,
        rotateY: disabled ? 0 : 2,
        boxShadow: disabled ? undefined : "0 10px 30px rgba(6, 182, 212, 0.3)",
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {/* Scan line effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-white/50"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-current opacity-60" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-current opacity-60" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-current opacity-60" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-current opacity-60" />

      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
