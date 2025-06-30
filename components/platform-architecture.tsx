"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Brain, Shield, Zap, Globe, ArrowDown, Network } from "lucide-react"

export function PlatformArchitecture() {
  const layers = [
    {
      name: "Application Layer",
      description: "User interfaces and dApps",
      color: "from-cyan-500 to-blue-600",
      icon: Globe,
      components: ["Web Dashboard", "Mobile App", "API Gateway"],
      connections: ["REST APIs", "GraphQL", "WebSocket"],
    },
    {
      name: "AI Layer",
      description: "Machine learning and AI services",
      color: "from-blue-500 to-purple-600",
      icon: Brain,
      components: ["Model Training", "Inference Engine", "AI Marketplace"],
      connections: ["Model Registry", "GPU Compute", "Oracle Network"],
    },
    {
      name: "Data Layer",
      description: "Data storage and management",
      color: "from-purple-500 to-pink-600",
      icon: Database,
      components: ["IPFS Storage", "Metadata Index", "Access Control"],
      connections: ["Encryption Layer", "Content Addressing", "Pinning Service"],
    },
    {
      name: "Identity Layer",
      description: "User identity and reputation",
      color: "from-pink-500 to-red-600",
      icon: Shield,
      components: ["Soulbound Tokens", "Reputation Score", "Identity Verification"],
      connections: ["DID Protocol", "Attestation Network", "Privacy Layer"],
    },
    {
      name: "Blockchain Layer",
      description: "Smart contracts and consensus",
      color: "from-green-500 to-emerald-600",
      icon: Zap,
      components: ["Smart Contracts", "Token Management", "Governance"],
      connections: ["Multi-Chain Bridge", "Consensus Layer", "State Management"],
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="bg-gray-900/50 border-gray-800 p-8 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border border-cyan-500/20" />
            ))}
          </div>
        </div>

        {/* Floating Data Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                x: Math.random() * 800,
                y: Math.random() * 600,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 800,
                y: Math.random() * 600,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 space-y-8">
          {/* Architecture Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Network className="h-8 w-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white font-mono">DataSoul Platform Architecture</h3>
            </div>
            <p className="text-cyan-300/70 font-mono">Modular, scalable, and interoperable design</p>
          </div>

          {/* Layer Stack */}
          <div className="space-y-6">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Layer Container */}
                <div className="relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${layer.color} opacity-5 rounded-xl group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative bg-black/40 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Layer Info */}
                      <div className="flex items-center space-x-4">
                        <div
                          className="w-16 h-16 bg-transparent rounded-xl flex items-center justify-center shadow-lg shadow-black/50"
                        >
                          <layer.icon className="h-8 w-8 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-mono font-bold text-lg">{layer.name}</h4>
                          <p className="text-gray-400 font-mono text-sm">{layer.description}</p>
                          <Badge className="mt-2 bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-mono text-xs">
                            Layer {index + 1}
                          </Badge>
                        </div>
                      </div>

                      {/* Components */}
                      <div>
                        <h5 className="text-cyan-300 font-mono text-sm font-semibold mb-3">Core Components</h5>
                        <div className="space-y-2">
                          {layer.components.map((component, idx) => (
                            <motion.div
                              key={component}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                              className="bg-black/60 border border-gray-600 rounded-lg p-3 flex items-center space-x-2"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
                              <span className="text-gray-300 font-mono text-sm">{component}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Connections */}
                      <div>
                        <h5 className="text-purple-300 font-mono text-sm font-semibold mb-3">Connections</h5>
                        <div className="space-y-2">
                          {layer.connections.map((connection, idx) => (
                            <motion.div
                              key={connection}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
                              <span className="text-gray-400 font-mono text-xs">{connection}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Arrow */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center my-4">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      className="relative"
                    >
                      <ArrowDown className="h-8 w-8 text-cyan-400" />
                      <motion.div
                        className="absolute inset-0 bg-cyan-400/20 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* System Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Throughput", value: "10K TPS", color: "cyan" },
              { label: "Latency", value: "< 100ms", color: "blue" },
              { label: "Uptime", value: "99.9%", color: "green" },
              { label: "Nodes", value: "2,847", color: "purple" },
            ].map((metric, index) => (
              <div key={metric.label} className="bg-black/60 border border-gray-700 rounded-lg p-4 text-center">
                <div className="text-cyan-400 font-mono text-lg font-bold">{metric.value}</div>
                <div className="text-gray-400 font-mono text-xs">{metric.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Data Flow Indicators */}
          <div className="mt-8 flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 font-mono text-sm">Data Flow</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-purple-300 font-mono text-sm">AI Processing</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 font-mono text-sm">Blockchain Sync</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
