"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Database, Zap, Activity, DollarSign } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [metrics, setMetrics] = useState({
    totalUsers: 12500,
    activeUsers: 8934,
    dataVolume: 2.4,
    tokenVolume: 890000,
    aiQueries: 45600,
    networkHealth: 98.5,
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 10),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5),
        dataVolume: prev.dataVolume + Math.random() * 0.1,
        tokenVolume: prev.tokenVolume + Math.floor(Math.random() * 1000),
        aiQueries: prev.aiQueries + Math.floor(Math.random() * 50),
        networkHealth: 95 + Math.random() * 5,
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const tabs = [
    { id: "overview", label: "Overview", icon: Activity },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "performance", label: "Performance", icon: Zap },
  ]

  const renderOverview = () => (
    <div className="grid md:grid-cols-3 gap-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-cyan-300 flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Users</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white mb-1">{metrics.totalUsers.toLocaleString()}</div>
            <div className="text-sm text-cyan-400">{metrics.activeUsers.toLocaleString()} active</div>
            <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000"
                style={{ width: `${(metrics.activeUsers / metrics.totalUsers) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-purple-300 flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>Data Volume</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white mb-1">{metrics.dataVolume.toFixed(1)}TB</div>
            <div className="text-sm text-purple-400">+{(Math.random() * 10).toFixed(1)}% this week</div>
            <div className="mt-2 flex space-x-1">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`h-6 w-2 rounded ${
                    i < Math.floor(metrics.dataVolume)
                      ? "bg-gradient-to-t from-purple-600 to-purple-400"
                      : "bg-gray-800"
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-green-300 flex items-center space-x-2">
              <DollarSign className="h-5 w-5" />
              <span>Token Volume</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white mb-1">{(metrics.tokenVolume / 1000).toFixed(0)}K DSTL</div>
            <div className="text-sm text-green-400">24h volume</div>
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>0</span>
                <span>1M</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-1000"
                  style={{ width: `${(metrics.tokenVolume / 1000000) * 100}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">AI Query Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-cyan-400 mb-2">{metrics.aiQueries.toLocaleString()}</div>
            <div className="text-sm text-gray-400 mb-4">Total queries this month</div>
            <div className="space-y-2">
              {[
                { label: "NLP", value: 45, color: "bg-cyan-500" },
                { label: "Analytics", value: 30, color: "bg-blue-500" },
                { label: "Vision", value: 15, color: "bg-purple-500" },
                { label: "Prediction", value: 10, color: "bg-pink-500" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-16 text-sm text-gray-300">{item.label}</div>
                  <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="w-8 text-sm text-gray-400">{item.value}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Network Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-400 mb-2">{metrics.networkHealth.toFixed(1)}%</div>
            <div className="text-sm text-gray-400 mb-4">Network health score</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Uptime</span>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/50">99.9%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Response Time</span>
                <span className="text-cyan-400">120ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Active Nodes</span>
                <span className="text-purple-400">247</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderPerformance = () => (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Transaction Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
              <span className="text-gray-300">TPS (Transactions/sec)</span>
              <span className="text-cyan-400 font-bold">1,247</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
              <span className="text-gray-300">Avg Block Time</span>
              <span className="text-blue-400 font-bold">2.1s</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
              <span className="text-gray-300">Gas Price</span>
              <span className="text-purple-400 font-bold">0.02 DSTL</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Resource Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { label: "CPU Usage", value: 65, color: "cyan" },
              { label: "Memory", value: 78, color: "blue" },
              { label: "Storage", value: 45, color: "purple" },
            ].map((resource, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{resource.label}</span>
                  <span className={`text-${resource.color}-400`}>{resource.value}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${
                      resource.color === "cyan"
                        ? "from-cyan-500 to-cyan-600"
                        : resource.color === "blue"
                          ? "from-blue-500 to-blue-600"
                          : "from-purple-500 to-purple-600"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${resource.value}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-gray-900/50 p-1 rounded-lg border border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                : "text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            <span className="font-mono">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "overview" && renderOverview()}
          {activeTab === "analytics" && renderAnalytics()}
          {activeTab === "performance" && renderPerformance()}
        </motion.div>
      </AnimatePresence>

      {/* Real-time indicator */}
      <div className="flex items-center justify-center mt-6 space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-gray-400 text-sm font-mono">Live Data</span>
      </div>
    </div>
  )
}
