"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, PieChart, TrendingUp, Network, Clock, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { DemoCharts } from "./demo-charts"

export function DataVisualization() {
  const [selectedChart, setSelectedChart] = useState("pie")

  const chartTypes = [
    {
      id: "pie",
      name: "Token Distribution",
      icon: PieChart,
      description: "DSTL token allocation across different categories",
      insights: "Foundation holds 30%, Community rewards 25%, balanced distribution",
      color: "cyan",
    },
    {
      id: "line",
      name: "Growth Trends",
      icon: TrendingUp,
      description: "Platform growth metrics over time",
      insights: "Consistent upward trend with 300% growth in Q4",
      color: "blue",
    },
    {
      id: "bar",
      name: "Quarterly Performance",
      icon: BarChart3,
      description: "Revenue and user acquisition by quarter",
      insights: "Q4 shows strongest performance with 300 units",
      color: "purple",
    },
    {
      id: "network",
      name: "Ecosystem Map",
      icon: Network,
      description: "DataSoul network connections and relationships",
      insights: "Strong interconnections between AI, Data, and User nodes",
      color: "pink",
    },
    {
      id: "timeline",
      name: "Development Roadmap",
      icon: Clock,
      description: "Key milestones and development timeline",
      insights: "On track for Q3 2026 ecosystem completion",
      color: "green",
    },
  ]

  const currentChart = chartTypes.find((chart) => chart.id === selectedChart)

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Chart Type Selector */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {chartTypes.map((chart) => (
          <motion.button
            key={chart.id}
            onClick={() => setSelectedChart(chart.id)}
            className={`p-3 rounded-lg border transition-all duration-300 ${
              selectedChart === chart.id
                ? `border-${chart.color}-500/50 bg-${chart.color}-500/10`
                : "border-gray-800 bg-gray-900/50 hover:border-cyan-500/30"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <chart.icon
              className={`h-6 w-6 mx-auto mb-2 ${
                selectedChart === chart.id ? `text-${chart.color}-400` : "text-gray-400"
              }`}
            />
            <div className={`text-sm font-mono ${selectedChart === chart.id ? "text-white" : "text-gray-400"}`}>
              {chart.name}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Main Visualization */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart Display */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-900/50 border-gray-800 h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center space-x-2">
                  {currentChart && <currentChart.icon className="h-5 w-5 text-cyan-400" />}
                  <span>{currentChart?.name}</span>
                </CardTitle>
                <Badge
                  className={`bg-${currentChart?.color}-500/20 text-${currentChart?.color}-300 border-${currentChart?.color}-500/50`}
                >
                  Interactive
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedChart}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <DemoCharts type={selectedChart as any} width={500} height={350} animated={true} />
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>

        {/* Chart Info */}
        <div className="space-y-6">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Chart Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-cyan-300 font-semibold mb-2">Description</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{currentChart?.description}</p>
              </div>

              <div>
                <h4 className="text-cyan-300 font-semibold mb-2">Key Insights</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{currentChart?.insights}</p>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Data Summary */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Data Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-black/30 rounded">
                <span className="text-gray-400 text-sm">Data Points</span>
                <span className="text-cyan-400 font-mono">
                  {selectedChart === "pie"
                    ? "5"
                    : selectedChart === "line"
                      ? "7"
                      : selectedChart === "bar"
                        ? "4"
                        : selectedChart === "network"
                          ? "5"
                          : "5"}
                </span>
              </div>
              <div className="flex justify-between items-center p-2 bg-black/30 rounded">
                <span className="text-gray-400 text-sm">Last Updated</span>
                <span className="text-green-400 font-mono">Live</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-black/30 rounded">
                <span className="text-gray-400 text-sm">Accuracy</span>
                <span className="text-purple-400 font-mono">98.5%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Chart Controls */}
      <Card className="bg-gray-900/50 border-gray-800">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-400 text-sm font-mono">Real-time Data</span>
              </div>
              <Badge variant="outline" className="border-cyan-500/50 text-cyan-300">
                Auto-refresh: 30s
              </Badge>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 bg-transparent">
                Pause
              </Button>
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 bg-transparent">
                Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
