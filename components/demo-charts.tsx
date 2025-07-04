"use client"

import { useEffect, useRef, useState } from "react"

interface DemoChartsProps {
  type?: "pie" | "line" | "bar" | "network" | "timeline"
  width?: number
  height?: number
  animated?: boolean
}

export function DemoCharts({ type = "pie", width = 400, height = 300, animated = true }: DemoChartsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animationFrame, setAnimationFrame] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = width
    canvas.height = height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Animation loop
    let frameId: number
    const animate = () => {
      if (animated) {
        setAnimationFrame((prev) => prev + 1)
        frameId = requestAnimationFrame(animate)
      }
    }

    if (animated) {
      animate()
    }

    // Draw based on chart type
    switch (type) {
      case "pie":
        drawPieChart(ctx, width, height, animationFrame)
        break
      case "line":
        drawLineChart(ctx, width, height, animationFrame)
        break
      case "bar":
        drawBarChart(ctx, width, height, animationFrame)
        break
      case "network":
        drawNetworkChart(ctx, width, height, animationFrame)
        break
      case "timeline":
        drawTimelineChart(ctx, width, height, animationFrame)
        break
    }

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [type, width, height, animated, animationFrame])

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="rounded-lg border border-cyan-500/20"
        style={{ background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)" }}
      />
    </div>
  )
}

function drawPieChart(ctx: CanvasRenderingContext2D, width: number, height: number, frame: number) {
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) / 3

  const data = [
    { label: "Foundation", value: 30, color: "#06b6d4" },
    { label: "Community", value: 25, color: "#3b82f6" },
    { label: "Team", value: 20, color: "#8b5cf6" },
    { label: "Public", value: 15, color: "#ec4899" },
    { label: "Liquidity", value: 10, color: "#ef4444" },
  ]

  let currentAngle = -Math.PI / 2
  const animationProgress = Math.min(frame / 120, 1) // 2 seconds at 60fps

  data.forEach((segment, index) => {
    const segmentAngle = (segment.value / 100) * 2 * Math.PI * animationProgress

    // Draw segment
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + segmentAngle)
    ctx.closePath()

    // Gradient fill
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)
    gradient.addColorStop(0, segment.color + "80")
    gradient.addColorStop(1, segment.color)
    ctx.fillStyle = gradient
    ctx.fill()

    // Border
    ctx.strokeStyle = segment.color
    ctx.lineWidth = 2
    ctx.stroke()

    // Label
    if (animationProgress > 0.5) {
      const labelAngle = currentAngle + segmentAngle / 2
      const labelX = centerX + Math.cos(labelAngle) * (radius + 30)
      const labelY = centerY + Math.sin(labelAngle) * (radius + 30)

      ctx.fillStyle = "#ffffff"
      ctx.font = "12px monospace"
      ctx.textAlign = "center"
      ctx.fillText(`${segment.label}`, labelX, labelY)
      ctx.fillText(`${segment.value}%`, labelX, labelY + 15)
    }

    currentAngle += segmentAngle
  })

  // Center circle
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius * 0.4, 0, 2 * Math.PI)
  ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
  ctx.fill()
  ctx.strokeStyle = "#06b6d4"
  ctx.lineWidth = 3
  ctx.stroke()

  // Center text
  ctx.fillStyle = "#06b6d4"
  ctx.font = "16px monospace"
  ctx.textAlign = "center"
  ctx.fillText("DSTL", centerX, centerY - 5)
  ctx.font = "12px monospace"
  ctx.fillText("Token", centerX, centerY + 10)
}

function drawLineChart(ctx: CanvasRenderingContext2D, width: number, height: number, frame: number) {
  const padding = 40
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  // Sample data
  const data = [
    { x: 0, y: 100 },
    { x: 1, y: 150 },
    { x: 2, y: 120 },
    { x: 3, y: 200 },
    { x: 4, y: 180 },
    { x: 5, y: 250 },
    { x: 6, y: 300 },
  ]

  const animationProgress = Math.min(frame / 120, 1)

  // Draw grid
  ctx.strokeStyle = "rgba(6, 182, 212, 0.2)"
  ctx.lineWidth = 1
  for (let i = 0; i <= 5; i++) {
    const y = padding + (chartHeight / 5) * i
    ctx.beginPath()
    ctx.moveTo(padding, y)
    ctx.lineTo(width - padding, y)
    ctx.stroke()
  }

  // Draw axes
  ctx.strokeStyle = "#06b6d4"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(padding, padding)
  ctx.lineTo(padding, height - padding)
  ctx.lineTo(width - padding, height - padding)
  ctx.stroke()

  // Draw line
  if (data.length > 1) {
    const maxY = Math.max(...data.map((d) => d.y))
    const animatedLength = Math.floor(data.length * animationProgress)

    ctx.strokeStyle = "#06b6d4"
    ctx.lineWidth = 3
    ctx.beginPath()

    for (let i = 0; i <= animatedLength && i < data.length; i++) {
      const x = padding + (chartWidth / (data.length - 1)) * data[i].x
      const y = height - padding - (data[i].y / maxY) * chartHeight

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.stroke()

    // Draw points
    data.slice(0, animatedLength + 1).forEach((point, i) => {
      const x = padding + (chartWidth / (data.length - 1)) * point.x
      const y = height - padding - (point.y / maxY) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fillStyle = "#06b6d4"
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()
    })
  }

  // Labels
  ctx.fillStyle = "#ffffff"
  ctx.font = "12px monospace"
  ctx.textAlign = "center"
  ctx.fillText("Data Growth Over Time", width / 2, 20)
}

function drawBarChart(ctx: CanvasRenderingContext2D, width: number, height: number, frame: number) {
  const padding = 40
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  const data = [
    { label: "Q1", value: 120, color: "#06b6d4" },
    { label: "Q2", value: 180, color: "#3b82f6" },
    { label: "Q3", value: 240, color: "#8b5cf6" },
    { label: "Q4", value: 300, color: "#ec4899" },
  ]

  const animationProgress = Math.min(frame / 120, 1)
  const maxValue = Math.max(...data.map((d) => d.value))
  const barWidth = (chartWidth / data.length) * 0.6

  // Draw axes
  ctx.strokeStyle = "#06b6d4"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(padding, padding)
  ctx.lineTo(padding, height - padding)
  ctx.lineTo(width - padding, height - padding)
  ctx.stroke()

  // Draw bars
  data.forEach((bar, index) => {
    const x = padding + (chartWidth / data.length) * index + (chartWidth / data.length - barWidth) / 2
    const barHeight = (bar.value / maxValue) * chartHeight * animationProgress
    const y = height - padding - barHeight

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, y, 0, height - padding)
    gradient.addColorStop(0, bar.color)
    gradient.addColorStop(1, bar.color + "40")

    ctx.fillStyle = gradient
    ctx.fillRect(x, y, barWidth, barHeight)

    // Border
    ctx.strokeStyle = bar.color
    ctx.lineWidth = 2
    ctx.strokeRect(x, y, barWidth, barHeight)

    // Labels
    ctx.fillStyle = "#ffffff"
    ctx.font = "12px monospace"
    ctx.textAlign = "center"
    ctx.fillText(bar.label, x + barWidth / 2, height - padding + 20)

    if (animationProgress > 0.8) {
      ctx.fillText(bar.value.toString(), x + barWidth / 2, y - 10)
    }
  })

  // Title
  ctx.fillStyle = "#ffffff"
  ctx.font = "14px monospace"
  ctx.textAlign = "center"
  ctx.fillText("Quarterly Performance", width / 2, 20)
}

function drawNetworkChart(ctx: CanvasRenderingContext2D, width: number, height: number, frame: number) {
  const nodes = [
    { x: width * 0.5, y: height * 0.3, label: "DataSoul", size: 20, color: "#06b6d4" },
    { x: width * 0.2, y: height * 0.6, label: "AI", size: 15, color: "#8b5cf6" },
    { x: width * 0.8, y: height * 0.6, label: "Data", size: 15, color: "#3b82f6" },
    { x: width * 0.3, y: height * 0.8, label: "Users", size: 12, color: "#ec4899" },
    { x: width * 0.7, y: height * 0.8, label: "Market", size: 12, color: "#ef4444" },
  ]

  const connections = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 3],
    [2, 4],
    [1, 2],
  ]

  const animationProgress = Math.min(frame / 120, 1)
  const pulse = Math.sin(frame * 0.1) * 0.3 + 0.7

  // Draw connections
  ctx.strokeStyle = `rgba(6, 182, 212, ${0.3 * animationProgress})`
  ctx.lineWidth = 2
  connections.forEach(([from, to]) => {
    ctx.beginPath()
    ctx.moveTo(nodes[from].x, nodes[from].y)
    ctx.lineTo(nodes[to].x, nodes[to].y)
    ctx.stroke()
  })

  // Draw nodes
  nodes.forEach((node, index) => {
    const delay = index * 20
    const nodeProgress = Math.max(0, Math.min(1, (frame - delay) / 60))

    if (nodeProgress > 0) {
      // Node circle
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.size * nodeProgress * pulse, 0, 2 * Math.PI)

      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size)
      gradient.addColorStop(0, node.color + "80")
      gradient.addColorStop(1, node.color)
      ctx.fillStyle = gradient
      ctx.fill()

      ctx.strokeStyle = node.color
      ctx.lineWidth = 2
      ctx.stroke()

      // Label
      if (nodeProgress > 0.5) {
        ctx.fillStyle = "#ffffff"
        ctx.font = "12px monospace"
        ctx.textAlign = "center"
        ctx.fillText(node.label, node.x, node.y + node.size + 20)
      }
    }
  })
}

function drawTimelineChart(ctx: CanvasRenderingContext2D, width: number, height: number, frame: number) {
  const padding = 40
  const timelineY = height / 2
  const timelineWidth = width - padding * 2

  const milestones = [
    { x: 0.1, label: "Q2 2025", title: "MVP", color: "#06b6d4" },
    { x: 0.3, label: "Q3 2025", title: "Launch", color: "#3b82f6" },
    { x: 0.5, label: "Q4 2025", title: "Multi-Chain", color: "#8b5cf6" },
    { x: 0.7, label: "Q1 2026", title: "Partnerships", color: "#ec4899" },
    { x: 0.9, label: "Q2 2026", title: "Ecosystem", color: "#ef4444" },
  ]

  const animationProgress = Math.min(frame / 180, 1)

  // Draw timeline line
  ctx.strokeStyle = "#06b6d4"
  ctx.lineWidth = 4
  ctx.beginPath()
  ctx.moveTo(padding, timelineY)
  ctx.lineTo(padding + timelineWidth * animationProgress, timelineY)
  ctx.stroke()

  // Draw milestones
  milestones.forEach((milestone, index) => {
    const x = padding + timelineWidth * milestone.x
    const progress = Math.max(0, Math.min(1, (animationProgress - milestone.x) * 2))

    if (progress > 0) {
      // Milestone circle
      ctx.beginPath()
      ctx.arc(x, timelineY, 12 * progress, 0, 2 * Math.PI)
      ctx.fillStyle = milestone.color
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 3
      ctx.stroke()

      // Labels
      if (progress > 0.5) {
        ctx.fillStyle = "#ffffff"
        ctx.font = "12px monospace"
        ctx.textAlign = "center"

        // Date
        ctx.fillText(milestone.label, x, timelineY - 30)
        // Title
        ctx.font = "14px monospace"
        ctx.fillText(milestone.title, x, timelineY + 35)
      }
    }
  })

  // Title
  ctx.fillStyle = "#ffffff"
  ctx.font = "16px monospace"
  ctx.textAlign = "center"
  ctx.fillText("DataSoul Roadmap", width / 2, 30)
}
