"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, Tablet, Smartphone, BarChart3, ShoppingCart, Lock, Vote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function PlatformMockups() {
  const [selectedDevice, setSelectedDevice] = useState("desktop")
  const [selectedPage, setSelectedPage] = useState("dashboard")

  const devices = [
    { id: "desktop", name: "Desktop", icon: Monitor, width: "w-full", height: "h-96" },
    { id: "tablet", name: "Tablet", icon: Tablet, width: "w-3/4", height: "h-80" },
    { id: "mobile", name: "Mobile", icon: Smartphone, width: "w-1/3", height: "h-96" },
  ]

  const pages = [
    { id: "dashboard", name: "Dashboard", icon: BarChart3, color: "cyan" },
    { id: "marketplace", name: "Marketplace", icon: ShoppingCart, color: "blue" },
    { id: "staking", name: "Staking", icon: Lock, color: "purple" },
    { id: "governance", name: "Governance", icon: Vote, color: "pink" },
  ]

  const renderMockupContent = () => {
    const baseClasses = "bg-gray-900 rounded-lg p-4 space-y-4"

    switch (selectedPage) {
      case "dashboard":
        return (
          <div className={baseClasses}>
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-cyan-500 rounded" />
                <span className="text-white font-mono text-sm">DataSoul Dashboard</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <div className="w-2 h-2 bg-red-400 rounded-full" />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-cyan-900/20 p-2 rounded border border-cyan-500/30">
                <div className="text-cyan-400 text-xs">Total Balance</div>
                <div className="text-white font-bold text-sm">15,420 DSTL</div>
              </div>
              <div className="bg-blue-900/20 p-2 rounded border border-blue-500/30">
                <div className="text-blue-400 text-xs">Staked</div>
                <div className="text-white font-bold text-sm">8,500 DSTL</div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="bg-black/50 p-3 rounded border border-gray-700">
              <div className="text-gray-400 text-xs mb-2">Portfolio Performance</div>
              <div className="flex items-end space-x-1 h-16">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-sm flex-1"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="space-y-1">
              <div className="text-gray-400 text-xs">Recent Activity</div>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center justify-between bg-black/30 p-2 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300 text-xs">Data Upload</span>
                  </div>
                  <span className="text-cyan-400 text-xs">+50 DSTL</span>
                </div>
              ))}
            </div>
          </div>
        )

      case "marketplace":
        return (
          <div className={baseClasses}>
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-gray-800">
              <span className="text-white font-mono text-sm">Data Marketplace</span>
              <div className="bg-blue-500/20 px-2 py-1 rounded text-blue-300 text-xs">1,247 datasets</div>
            </div>

            {/* Search Bar */}
            <div className="bg-black/50 p-2 rounded border border-gray-700">
              <div className="text-gray-500 text-xs">🔍 Search datasets...</div>
            </div>

            {/* Dataset Cards */}
            <div className="space-y-2">
              {[
                { title: "DeFi Trading Data", price: "250 DSTL", rating: "4.8★" },
                { title: "Social Sentiment", price: "180 DSTL", rating: "4.6★" },
                { title: "IoT Sensors", price: "320 DSTL", rating: "4.9★" },
              ].map((item, i) => (
                <div key={i} className="bg-blue-900/20 p-2 rounded border border-blue-500/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white text-xs font-semibold">{item.title}</div>
                      <div className="text-gray-400 text-xs">High quality dataset</div>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-400 text-xs font-bold">{item.price}</div>
                      <div className="text-yellow-400 text-xs">{item.rating}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "staking":
        return (
          <div className={baseClasses}>
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-gray-800">
              <span className="text-white font-mono text-sm">DSTL Staking</span>
              <div className="bg-purple-500/20 px-2 py-1 rounded text-purple-300 text-xs">APY: 18.7%</div>
            </div>

            {/* Staking Stats */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-purple-900/20 p-2 rounded border border-purple-500/30">
                <div className="text-purple-400 text-xs">Your Stake</div>
                <div className="text-white font-bold text-sm">5,000 DSTL</div>
              </div>
              <div className="bg-green-900/20 p-2 rounded border border-green-500/30">
                <div className="text-green-400 text-xs">Rewards</div>
                <div className="text-white font-bold text-sm">123.8 DSTL</div>
              </div>
            </div>

            {/* Staking Pools */}
            <div className="space-y-2">
              <div className="text-gray-400 text-xs">Staking Pools</div>
              {[
                { name: "Flexible", apy: "8.5%", color: "cyan" },
                { name: "30-Day Lock", apy: "12.3%", color: "blue" },
                { name: "90-Day Lock", apy: "18.7%", color: "purple" },
              ].map((pool, i) => (
                <div key={i} className={`bg-${pool.color}-900/20 p-2 rounded border border-${pool.color}-500/30`}>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs">{pool.name}</span>
                    <span className={`text-${pool.color}-400 text-xs font-bold`}>{pool.apy}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stake Button */}
            <div className="bg-purple-500/20 p-2 rounded border border-purple-500/50 text-center">
              <span className="text-purple-300 text-xs">Stake More DSTL</span>
            </div>
          </div>
        )

      case "governance":
        return (
          <div className={baseClasses}>
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-gray-800">
              <span className="text-white font-mono text-sm">DAO Governance</span>
              <div className="bg-pink-500/20 px-2 py-1 rounded text-pink-300 text-xs">12 active</div>
            </div>

            {/* Voting Power */}
            <div className="bg-pink-900/20 p-2 rounded border border-pink-500/30">
              <div className="text-pink-400 text-xs">Your Voting Power</div>
              <div className="text-white font-bold text-sm">15,000 DSTL</div>
              <div className="text-gray-400 text-xs">0.18% of total</div>
            </div>

            {/* Active Proposals */}
            <div className="space-y-2">
              <div className="text-gray-400 text-xs">Active Proposals</div>
              {[
                { title: "Increase AI Rewards", status: "Active", votes: "73%" },
                { title: "Multi-Chain Bridge", status: "Voting", votes: "61%" },
                { title: "Grant Program", status: "Passed", votes: "84%" },
              ].map((proposal, i) => (
                <div key={i} className="bg-pink-900/20 p-2 rounded border border-pink-500/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white text-xs font-semibold">{proposal.title}</div>
                      <div className="text-gray-400 text-xs">{proposal.status}</div>
                    </div>
                    <div className="text-pink-400 text-xs">{proposal.votes}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Device Selector */}
      <div className="flex justify-center space-x-4">
        {devices.map((device) => (
          <Button
            key={device.id}
            onClick={() => setSelectedDevice(device.id)}
            variant={selectedDevice === device.id ? "default" : "outline"}
            size="sm"
            className={`${
              selectedDevice === device.id
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50"
                : "border-gray-700 text-gray-300 hover:border-cyan-500/30"
            }`}
          >
            <device.icon className="h-4 w-4 mr-2" />
            {device.name}
          </Button>
        ))}
      </div>

      {/* Page Selector */}
      <div className="flex justify-center space-x-2">
        {pages.map((page) => (
          <Button
            key={page.id}
            onClick={() => setSelectedPage(page.id)}
            variant="outline"
            size="sm"
            className={`${
              selectedPage === page.id
                ? `bg-${page.color}-500/20 text-${page.color}-300 border-${page.color}-500/50`
                : "border-gray-700 text-gray-300 hover:border-cyan-500/30"
            }`}
          >
            <page.icon className="h-4 w-4 mr-2" />
            {page.name}
          </Button>
        ))}
      </div>

      {/* Device Mockup */}
      <div className="flex justify-center">
        <motion.div
          key={selectedDevice}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`${devices.find((d) => d.id === selectedDevice)?.width} ${devices.find((d) => d.id === selectedDevice)?.height} mx-auto`}
        >
          <Card className="bg-gray-800 border-gray-700 h-full">
            <CardContent className="p-2 h-full">
              <div
                className={`
                h-full rounded-lg overflow-hidden
                ${selectedDevice === "desktop" ? "border-2 border-gray-600" : ""}
                ${selectedDevice === "tablet" ? "border-2 border-gray-600 rounded-xl" : ""}
                ${selectedDevice === "mobile" ? "border-4 border-gray-600 rounded-2xl" : ""}
              `}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    {renderMockupContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Info */}
      <div className="text-center">
        <Badge variant="outline" className="border-cyan-500/50 text-cyan-300">
          Interactive Platform Preview
        </Badge>
        <p className="text-gray-400 text-sm mt-2 font-mono">
          Switch between devices and pages to explore the DataSoul interface
        </p>
      </div>
    </div>
  )
}
