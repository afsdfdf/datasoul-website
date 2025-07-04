"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const size = 600
    canvas.width = size
    canvas.height = size

    const centerX = size / 2
    const centerY = size / 2
    let time = 0

    // Enhanced particle system with physics
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: { r: number; g: number; b: number }
      energy: number
      trail: Array<{ x: number; y: number; opacity: number }>
      connections: number[]
    }> = []

    // Create intelligent particles
    for (let i = 0; i < 80; i++) {
      const angle = (i / 80) * Math.PI * 2
      const radius = 100 + Math.random() * 150
      const colorOptions = [
        { r: 6, g: 182, b: 212 }, // cyan
        { r: 147, g: 51, b: 234 }, // purple
        { r: 59, g: 130, b: 246 }, // blue
        { r: 34, g: 197, b: 94 }, // green
        { r: 236, g: 72, b: 153 }, // pink
      ]

      particles.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.8 + 0.2,
        color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
        energy: Math.random(),
        trail: [],
        connections: [],
      })
    }

    // Data streams
    const dataStreams: Array<{
      points: Array<{ x: number; y: number }>
      progress: number
      speed: number
      color: { r: number; g: number; b: number }
    }> = []

    // Create data streams
    for (let i = 0; i < 5; i++) {
      const points: Array<{ x: number; y: number }> = []
      const streamLength = 8 + Math.random() * 12

      for (let j = 0; j < streamLength; j++) {
        const angle = (i / 5) * Math.PI * 2 + (j / streamLength) * Math.PI * 0.5
        const radius = 50 + j * 25
        points.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
        })
      }

      dataStreams.push({
        points,
        progress: Math.random(),
        speed: 0.02 + Math.random() * 0.03,
        color: particles[i * 16].color,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, size, size)
      time += 0.016

      // Background gradient
      const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, size / 2)
      bgGradient.addColorStop(0, "rgba(6, 182, 212, 0.05)")
      bgGradient.addColorStop(0.5, "rgba(147, 51, 234, 0.03)")
      bgGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, size, size)

      // Update particles with physics
      particles.forEach((particle, index) => {
        // Gravitational attraction to center
        const dx = centerX - particle.x
        const dy = centerY - particle.y
        const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1)
        const force = 0.1 / distance

        particle.vx += (dx / distance) * force
        particle.vy += (dy / distance) * force

        // Add orbital motion
        const orbitalForce = 0.05
        particle.vx += (-dy / distance) * orbitalForce
        particle.vy += (dx / distance) * orbitalForce

        // Apply velocity with damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary wrapping
        if (particle.x < 0) particle.x = size
        if (particle.x > size) particle.x = 0
        if (particle.y < 0) particle.y = size
        if (particle.y > size) particle.y = 0

        // Update trail
        if (particle.trail.length > 10) {
          particle.trail.shift()
        }
        particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity })

        // Find connections to nearby particles
        particle.connections = []
        particles.forEach((other, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - other.x
            const dy = particle.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 120) {
              particle.connections.push(otherIndex)
            }
          }
        })
      })

      // Draw particle connections with energy flow
      particles.forEach((particle, index) => {
        particle.connections.forEach((connectionIndex) => {
          const other = particles[connectionIndex]
          const distance = Math.sqrt((particle.x - other.x) ** 2 + (particle.y - other.y) ** 2)
          const opacity = Math.max(0, (120 - distance) / 120) * 0.3

          if (opacity > 0) {
            // Connection line
            const connectionGradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y)
            connectionGradient.addColorStop(
              0,
              `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`,
            )
            connectionGradient.addColorStop(1, `rgba(${other.color.r}, ${other.color.g}, ${other.color.b}, ${opacity})`)

            ctx.strokeStyle = connectionGradient
            ctx.lineWidth = 1 + opacity * 2
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()

            // Energy pulse along connection
            const pulseProgress = (time * 2 + index * 0.1) % 1
            const pulseX = particle.x + (other.x - particle.x) * pulseProgress
            const pulseY = particle.y + (other.y - particle.y) * pulseProgress

            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 2})`
            ctx.fill()
          }
        })
      })

      // Draw particle trails
      particles.forEach((particle) => {
        particle.trail.forEach((trailPoint, trailIndex) => {
          const trailOpacity = (trailIndex / particle.trail.length) * trailPoint.opacity * 0.5
          const trailSize = particle.size * (trailIndex / particle.trail.length) * 0.5

          if (trailSize > 0 && trailOpacity > 0) {
            ctx.beginPath()
            ctx.arc(trailPoint.x, trailPoint.y, Math.max(trailSize, 0.5), 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${Math.min(trailOpacity, 1)})`
            ctx.fill()
          }
        })
      })

      // Draw main particles with enhanced effects
      particles.forEach((particle) => {
        const pulseSize = Math.max(particle.size * (1 + Math.sin(time * 4 + particle.energy * 10) * 0.3), 0.5)
        const glowSize = Math.max(pulseSize * 3, 1)

        // Outer glow
        if (glowSize > 0) {
          const particleGlow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowSize)
          particleGlow.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.6)`)
          particleGlow.addColorStop(0.5, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.3)`)
          particleGlow.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`)

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2)
          ctx.fillStyle = particleGlow
          ctx.fill()
        }

        // Main particle
        if (pulseSize > 0) {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${Math.min(particle.opacity, 1)})`
          ctx.fill()
        }

        // Energy ring for high-energy particles
        if (particle.energy > 0.8) {
          const ringRadius = Math.max(pulseSize * 2 + Math.sin(time * 6 + particle.energy * 20) * 5, 1)
          const ringOpacity = Math.min(0.4 * Math.sin(time * 3 + particle.energy * 15), 1)

          if (ringRadius > 0 && Math.abs(ringOpacity) > 0) {
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, ringRadius, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${Math.abs(ringOpacity)})`
            ctx.lineWidth = 2
            ctx.stroke()
          }
        }
      })

      // Draw data streams
      dataStreams.forEach((stream) => {
        stream.progress += stream.speed
        if (stream.progress > 1) stream.progress = 0

        // Draw stream path
        ctx.strokeStyle = `rgba(${stream.color.r}, ${stream.color.g}, ${stream.color.b}, 0.3)`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(stream.points[0].x, stream.points[0].y)
        for (let i = 1; i < stream.points.length; i++) {
          ctx.lineTo(stream.points[i].x, stream.points[i].y)
        }
        ctx.stroke()

        // Draw flowing energy
        const currentIndex = Math.floor(stream.progress * (stream.points.length - 1))
        const nextIndex = Math.min(currentIndex + 1, stream.points.length - 1)
        const localProgress = (stream.progress * (stream.points.length - 1)) % 1

        if (currentIndex < stream.points.length && nextIndex < stream.points.length) {
          const currentPoint = stream.points[currentIndex]
          const nextPoint = stream.points[nextIndex]

          const energyX = currentPoint.x + (nextPoint.x - currentPoint.x) * localProgress
          const energyY = currentPoint.y + (nextPoint.y - currentPoint.y) * localProgress

          // Energy pulse
          const energyGlow = ctx.createRadialGradient(energyX, energyY, 0, energyX, energyY, 8)
          energyGlow.addColorStop(0, `rgba(${stream.color.r}, ${stream.color.g}, ${stream.color.b}, 0.8)`)
          energyGlow.addColorStop(0.5, `rgba(${stream.color.r}, ${stream.color.g}, ${stream.color.b}, 0.4)`)
          energyGlow.addColorStop(1, `rgba(${stream.color.r}, ${stream.color.g}, ${stream.color.b}, 0)`)

          ctx.beginPath()
          ctx.arc(energyX, energyY, 8, 0, Math.PI * 2)
          ctx.fillStyle = energyGlow
          ctx.fill()

          ctx.beginPath()
          ctx.arc(energyX, energyY, 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${stream.color.r}, ${stream.color.g}, ${stream.color.b}, 1)`
          ctx.fill()
        }
      })

      // Central energy core with rotating rings
      for (let ring = 0; ring < 3; ring++) {
        const ringRadius = Math.max(30 + ring * 15, 1)
        const ringRotation = time * (1 + ring * 0.5)

        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(ringRotation)

        // Ring segments
        for (let segment = 0; segment < 8; segment++) {
          const segmentAngle = (segment / 8) * Math.PI * 2
          const segmentLength = Math.PI / 6
          const opacity = 0.6 - ring * 0.15

          ctx.beginPath()
          ctx.arc(0, 0, ringRadius, segmentAngle, segmentAngle + segmentLength)
          ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`
          ctx.lineWidth = 3 - ring
          ctx.stroke()
        }

        ctx.restore()
      }

      // Central core background (behind logo)
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 80)
      coreGradient.addColorStop(0, "rgba(147, 51, 234, 0.2)")
      coreGradient.addColorStop(0.5, "rgba(79, 70, 229, 0.1)")
      coreGradient.addColorStop(1, "rgba(6, 182, 212, 0.05)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2)
      ctx.fillStyle = coreGradient
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* Central rotating logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-cyan-400/30"
            style={{
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
            }}
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          
          {/* Inner rotating ring */}
          <motion.div
            className="absolute inset-0 w-56 h-56 md:w-64 md:h-64 rounded-full border border-purple-400/40"
            style={{
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          
          {/* Logo */}
          <motion.div
            className="relative z-10"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.div
              className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(6, 182, 212, 0.8), 0 0 80px rgba(6, 182, 212, 0.4)",
                  "0 0 60px rgba(147, 51, 234, 1), 0 0 120px rgba(147, 51, 234, 0.6)",
                  "0 0 40px rgba(6, 182, 212, 0.8), 0 0 80px rgba(6, 182, 212, 0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/logo.png"
                alt="DataSoul Logo"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Overlay text with enhanced glow - positioned to not overlap logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mt-48 md:mt-56"
            style={{
              filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))",
            }}
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))",
                "drop-shadow(0 0 30px rgba(147, 51, 234, 1))",
                "drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            DataSoul
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mt-4"
            style={{
              filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))",
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Next-Generation Web3 Platform
          </motion.p>
        </div>
      </div>

      {/* Corner decorative elements */}
      {[
        { top: "20px", left: "20px", rotate: 0 },
        { top: "20px", right: "20px", rotate: 90 },
        { bottom: "20px", left: "20px", rotate: 270 },
        { bottom: "20px", right: "20px", rotate: 180 },
      ].map((corner, index) => (
        <motion.div
          key={index}
          className="absolute w-16 h-16 pointer-events-none"
          style={corner}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2 + index * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full border-l-2 border-t-2 border-cyan-400"
            style={{
              transform: `rotate(${corner.rotate}deg)`,
              filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))",
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
