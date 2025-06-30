"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function Sphere3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const size = 500
    canvas.width = size
    canvas.height = size

    // Sphere parameters
    const centerX = size / 2
    const centerY = size / 2
    const radius = 140
    let rotation = 0
    let time = 0

    // Enhanced particle system
    const particles: Array<{
      x: number
      y: number
      z: number
      size: number
      opacity: number
      speed: number
      color: { r: number; g: number; b: number }
      trail: Array<{ x: number; y: number; opacity: number }>
      pulsePhase: number
    }> = []

    // Create enhanced particles
    for (let i = 0; i < 150; i++) {
      const colorOptions = [
        { r: 6, g: 182, b: 212 }, // cyan
        { r: 147, g: 51, b: 234 }, // purple
        { r: 59, g: 130, b: 246 }, // blue
        { r: 236, g: 72, b: 153 }, // pink
      ]

      particles.push({
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
        z: (Math.random() - 0.5) * 400,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.02 + 0.01,
        color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
        trail: [],
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    // Enhanced grid data points
    const gridPoints: Array<{
      x: number
      y: number
      z: number
      screenX: number
      screenY: number
      visible: boolean
      intensity: number
    }> = []

    // Create enhanced grid points
    for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += Math.PI / 12) {
      for (let lon = 0; lon < 2 * Math.PI; lon += Math.PI / 12) {
        const x = radius * Math.cos(lat) * Math.cos(lon)
        const y = radius * Math.cos(lat) * Math.sin(lon)
        const z = radius * Math.sin(lat)

        gridPoints.push({
          x,
          y,
          z,
          screenX: 0,
          screenY: 0,
          visible: false,
          intensity: Math.random(),
        })
      }
    }

    // Data visualization nodes
    const dataNodes: Array<{
      lat: number
      lon: number
      size: number
      color: { r: number; g: number; b: number }
      pulsePhase: number
      energy: number
    }> = []

    for (let i = 0; i < 12; i++) {
      const colorOptions = [
        { r: 6, g: 182, b: 212 }, // cyan
        { r: 147, g: 51, b: 234 }, // purple
        { r: 59, g: 130, b: 246 }, // blue
        { r: 236, g: 72, b: 153 }, // pink
      ]

      dataNodes.push({
        lat: (Math.random() - 0.5) * Math.PI,
        lon: Math.random() * Math.PI * 2,
        size: Math.random() * 8 + 6,
        color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        energy: Math.random(),
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, size, size)
      rotation += 0.008
      time += 0.02

      // Enhanced outer glow with pulsing effect
      const glowIntensity = 0.3 + Math.sin(time * 2) * 0.1
      const outerRadius = Math.max(radius + 80, 10) // Ensure positive radius
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, outerRadius)
      gradient.addColorStop(0, `rgba(6, 182, 212, ${glowIntensity * 0.4})`)
      gradient.addColorStop(0.3, `rgba(147, 51, 234, ${glowIntensity * 0.3})`)
      gradient.addColorStop(0.6, `rgba(59, 130, 246, ${glowIntensity * 0.2})`)
      gradient.addColorStop(1, "rgba(6, 182, 212, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, size, size)

      // Update and draw enhanced particles with trails
      particles.forEach((particle, index) => {
        // Complex orbital motion
        const orbitSpeed = particle.speed * (1 + Math.sin(time * 0.5 + index) * 0.5)

        particle.x += Math.cos(time * orbitSpeed + index) * 0.5
        particle.y += Math.sin(time * orbitSpeed + index * 0.7) * 0.5
        particle.z += Math.sin(time * orbitSpeed * 0.8 + index * 0.3) * 0.3

        // Keep particles in bounds with wrapping
        if (Math.abs(particle.x) > 250) particle.x *= -0.8
        if (Math.abs(particle.y) > 250) particle.y *= -0.8
        if (Math.abs(particle.z) > 250) particle.z *= -0.8

        // Rotate particle
        const rotatedX = particle.x * Math.cos(rotation) - particle.z * Math.sin(rotation)
        const rotatedZ = particle.x * Math.sin(rotation) + particle.z * Math.cos(rotation)

        // Project to 2D with enhanced perspective
        const perspective = 300
        const scale = Math.max(perspective / (perspective + rotatedZ), 0.1) // Ensure positive scale
        const screenX = centerX + rotatedX * scale
        const screenY = centerY + particle.y * scale

        // Add to trail
        if (particle.trail.length > 8) {
          particle.trail.shift()
        }
        particle.trail.push({ x: screenX, y: screenY, opacity: particle.opacity * scale })

        // Draw particle trail
        particle.trail.forEach((trailPoint, trailIndex) => {
          const trailOpacity = Math.max((trailIndex / particle.trail.length) * trailPoint.opacity * 0.5, 0)
          const trailSize = Math.max(particle.size * (trailIndex / particle.trail.length) * scale, 0.5)

          if (trailSize > 0 && trailOpacity > 0) {
            ctx.beginPath()
            ctx.arc(trailPoint.x, trailPoint.y, trailSize, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${Math.min(trailOpacity, 1)})`
            ctx.fill()
          }
        })

        // Draw main particle with pulsing effect
        if (rotatedZ > -200) {
          const pulseSize = Math.max(particle.size * (1 + Math.sin(time * 3 + particle.pulsePhase) * 0.3), 0.5)
          const glowSize = Math.max(pulseSize * 2, 1)

          // Outer glow - ensure positive radius
          if (glowSize * scale > 0) {
            const particleGlow = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, glowSize * scale)
            particleGlow.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.5)`)
            particleGlow.addColorStop(0.5, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.25)`)
            particleGlow.addColorStop(1, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0)`)

            ctx.beginPath()
            ctx.arc(screenX, screenY, glowSize * scale, 0, Math.PI * 2)
            ctx.fillStyle = particleGlow
            ctx.fill()
          }

          // Main particle
          if (pulseSize * scale > 0) {
            ctx.beginPath()
            ctx.arc(screenX, screenY, pulseSize * scale, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${Math.min(particle.opacity * scale, 1)})`
            ctx.fill()
          }
        }
      })

      // Enhanced sphere wireframe with dynamic intensity
      ctx.lineWidth = 1.5

      // Update grid points with enhanced effects
      gridPoints.forEach((point) => {
        const rotatedX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation)
        const rotatedZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation)

        const scale = Math.max(300 / (300 + rotatedZ), 0.1)
        point.screenX = centerX + rotatedX * scale
        point.screenY = centerY + point.y * scale
        point.visible = rotatedZ > -radius
        point.intensity = Math.max(0, (rotatedZ + radius) / (radius * 2))
      })

      // Draw enhanced grid lines with varying opacity
      for (let i = 0; i < gridPoints.length; i++) {
        const point = gridPoints[i]
        if (!point.visible) continue

        const baseOpacity = Math.max(0.1, 0.4 + Math.sin(time + i * 0.1) * 0.2)
        const intensity = Math.min(point.intensity * baseOpacity, 1)

        // Horizontal connections
        const nextHorizontal = gridPoints[i + 1]
        if (nextHorizontal && nextHorizontal.visible && (i + 1) % 24 !== 0) {
          const avgIntensity = Math.min((intensity + nextHorizontal.intensity * baseOpacity) / 2, 1)
          ctx.strokeStyle = `rgba(6, 182, 212, ${avgIntensity})`
          ctx.beginPath()
          ctx.moveTo(point.screenX, point.screenY)
          ctx.lineTo(nextHorizontal.screenX, nextHorizontal.screenY)
          ctx.stroke()
        }

        // Vertical connections
        const nextVertical = gridPoints[i + 24]
        if (nextVertical && nextVertical.visible) {
          const avgIntensity = Math.min((intensity + nextVertical.intensity * baseOpacity) / 2, 1)
          ctx.strokeStyle = `rgba(6, 182, 212, ${avgIntensity})`
          ctx.beginPath()
          ctx.moveTo(point.screenX, point.screenY)
          ctx.lineTo(nextVertical.screenX, nextVertical.screenY)
          ctx.stroke()
        }
      }

      // Draw enhanced data nodes with complex animations
      dataNodes.forEach((node, index) => {
        const nodeRotation = rotation + node.pulsePhase
        const x = radius * 0.9 * Math.cos(node.lat) * Math.cos(node.lon + nodeRotation)
        const y = radius * 0.9 * Math.cos(node.lat) * Math.sin(node.lon + nodeRotation)
        const z = radius * 0.9 * Math.sin(node.lat)

        if (z > -radius * 0.6) {
          const scale = Math.max(300 / (300 + z), 0.1)
          const screenX = centerX + x * scale
          const screenY = centerY + y * scale

          // Pulsing size based on energy and time
          const pulseSize = Math.max(node.size * (1 + Math.sin(time * 4 + node.pulsePhase) * 0.4) * scale, 1)
          const energyPulse = Math.max(1 + node.energy * Math.sin(time * 2 + index) * 0.3, 0.5)

          // Multi-layer glow effect
          for (let layer = 3; layer >= 0; layer--) {
            const layerSize = Math.max(pulseSize * (1 + layer * 0.5) * energyPulse, 1)
            const layerOpacity = Math.min((0.8 - layer * 0.2) * scale, 1)

            if (layerSize > 0 && layerOpacity > 0) {
              const nodeGradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, layerSize)
              nodeGradient.addColorStop(0, `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${layerOpacity})`)
              nodeGradient.addColorStop(
                0.7,
                `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${layerOpacity * 0.5})`,
              )
              nodeGradient.addColorStop(1, `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, 0)`)

              ctx.beginPath()
              ctx.arc(screenX, screenY, layerSize, 0, Math.PI * 2)
              ctx.fillStyle = nodeGradient
              ctx.fill()
            }
          }

          // Core node
          if (pulseSize * 0.6 > 0) {
            ctx.beginPath()
            ctx.arc(screenX, screenY, pulseSize * 0.6, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, 1)`
            ctx.fill()
          }

          // Energy rings
          if (node.energy > 0.7) {
            for (let ring = 0; ring < 3; ring++) {
              const ringRadius = Math.max(pulseSize * (2 + ring) + Math.sin(time * 6 + ring + index) * 10, 1)
              const ringOpacity = Math.min(Math.abs((0.3 - ring * 0.1) * Math.sin(time * 3 + ring) * scale), 1)

              if (ringRadius > 0 && ringOpacity > 0) {
                ctx.beginPath()
                ctx.arc(screenX, screenY, ringRadius, 0, Math.PI * 2)
                ctx.strokeStyle = `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, ${ringOpacity})`
                ctx.lineWidth = 2
                ctx.stroke()
              }
            }
          }
        }
      })

      // Enhanced inner core with multiple layers
      const coreRadius = radius * 0.7
      const corePulse = Math.max(1 + Math.sin(time * 1.5) * 0.1, 0.5)

      // Multiple core layers
      for (let layer = 0; layer < 4; layer++) {
        const layerRadius = Math.max(coreRadius * (0.3 + layer * 0.2) * corePulse, 1)
        const layerOpacity = Math.max(0.4 - layer * 0.08, 0.05)

        if (layerRadius > 0) {
          const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, layerRadius)

          if (layer === 0) {
            coreGradient.addColorStop(0, `rgba(147, 51, 234, ${layerOpacity})`)
            coreGradient.addColorStop(0.5, `rgba(79, 70, 229, ${layerOpacity * 0.7})`)
            coreGradient.addColorStop(1, `rgba(6, 182, 212, ${layerOpacity * 0.3})`)
          } else {
            const colors = [
              { r: 147, g: 51, b: 234 },
              { r: 79, g: 70, b: 229 },
              { r: 6, g: 182, b: 212 },
              { r: 236, g: 72, b: 153 },
            ]
            const color = colors[layer % colors.length]
            coreGradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${layerOpacity})`)
            coreGradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)
          }

          ctx.beginPath()
          ctx.arc(centerX, centerY, layerRadius, 0, Math.PI * 2)
          ctx.fillStyle = coreGradient
          ctx.fill()
        }
      }

      // Data flow streams
      const streamCount = 6
      for (let i = 0; i < streamCount; i++) {
        const angle = (i / streamCount) * Math.PI * 2 + time * 0.5
        const streamRadius = radius * 1.2
        const startX = centerX + Math.cos(angle) * streamRadius
        const startY = centerY + Math.sin(angle) * streamRadius
        const endX = centerX + Math.cos(angle + Math.PI) * streamRadius
        const endY = centerY + Math.sin(angle + Math.PI) * streamRadius

        const streamGradient = ctx.createLinearGradient(startX, startY, endX, endY)
        streamGradient.addColorStop(0, "rgba(6, 182, 212, 0)")
        streamGradient.addColorStop(0.3, "rgba(6, 182, 212, 0.6)")
        streamGradient.addColorStop(0.7, "rgba(147, 51, 234, 0.6)")
        streamGradient.addColorStop(1, "rgba(147, 51, 234, 0)")

        ctx.strokeStyle = streamGradient
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
      }

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
    <div className="relative">
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
          rotateY: [0, 5, 0],
          filter: [
            "drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))",
            "drop-shadow(0 0 50px rgba(147, 51, 234, 0.8))",
            "drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto rounded-2xl"
          style={{
            filter: "drop-shadow(0 0 40px rgba(6, 182, 212, 0.8))",
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Enhanced floating particles around the sphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: ["#06b6d4", "#9333ea", "#3b82f6", "#ec4899"][Math.floor(Math.random() * 4)],
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Energy pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-400/30 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}
