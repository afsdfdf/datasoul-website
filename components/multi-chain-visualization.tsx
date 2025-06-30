"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Activity, TrendingUp } from "lucide-react"
import { BlockchainLogo } from "@/components/blockchain-logo"

export function MultiChainVisualization() {
  const chains = [
    {
      name: "Ethereum",
      description: "Primary deployment with full feature set",
      color: "from-blue-500 to-purple-600",
      logo: "Ξ", // Official Ethereum symbol
      features: ["Main token contract", "Full marketplace", "Governance DAO"],
      stats: { tvl: "$2.4M", transactions: "1.2M", users: "8.9K" },
      status: "Live",
      gasPrice: "25 gwei",
      blockTime: "12s",
    },
    {
      name: "Arbitrum",
      description: "Layer 2 scaling for reduced fees",
      color: "from-cyan-500 to-blue-600",
      logo: "⟠", // Arbitrum-style symbol
      features: ["Bridged tokens", "AI model access", "Fast transactions"],
      stats: { tvl: "$890K", transactions: "2.8M", users: "12.4K" },
      status: "Live",
      gasPrice: "0.1 gwei",
      blockTime: "0.25s",
    },
    {
      name: "Cosmos",
      description: "Interoperability and custom features",
      color: "from-purple-500 to-pink-600",
      logo: "⚛", // Cosmos atom symbol
      features: ["Cross-chain bridges", "Custom modules", "IBC protocol"],
      stats: { tvl: "$650K", transactions: "890K", users: "5.2K" },
      status: "Beta",
      gasPrice: "0.025 ATOM",
      blockTime: "6s",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Chain Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        {chains.map((chain, index) => (
          <motion.div
            key={chain.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 h-full hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${chain.color} opacity-5`} />
              <CardContent className="p-6 space-y-4 relative z-10">
                {/* Chain Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-14 h-14 rounded-xl bg-transparent flex items-center justify-center shadow-lg relative"
                    >
                      <BlockchainLogo chain={chain.name} size="lg" />
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-white/20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-mono font-bold text-lg">{chain.name}</h3>
                      <Badge
                        className={`${
                          chain.status === "Live"
                            ? "bg-green-500/20 text-green-300 border-green-500/50"
                            : "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
                        } font-mono`}
                      >
                        {chain.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 font-mono text-sm">{chain.description}</p>

                {/* Chain Performance Metrics */}
                <div className="bg-black/30 rounded-lg p-3 border border-gray-700">
                  <div className="grid grid-cols-2 gap-3 text-center mb-3">
                    <div>
                      <div className="text-cyan-400 font-mono text-sm font-bold">{chain.stats.tvl}</div>
                      <div className="text-gray-400 text-xs">TVL</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-mono text-sm font-bold">{chain.stats.transactions}</div>
                      <div className="text-gray-400 text-xs">Transactions</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div className="text-purple-400 font-mono text-sm font-bold">{chain.stats.users}</div>
                      <div className="text-gray-400 text-xs">Users</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-mono text-sm font-bold">{chain.blockTime}</div>
                      <div className="text-gray-400 text-xs">Block Time</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="text-gray-300 font-mono text-sm font-semibold">Key Features</div>
                  <ul className="space-y-2">
                    {chain.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-cyan-300/90 font-mono text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-cyan-400/50 shadow-lg" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Chain Activity Indicator */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 border border-gray-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-mono text-xs">Network Activity</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 font-mono text-xs">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                    <span>Gas: {chain.gasPrice}</span>
                    <span>TPS: {Math.floor(Math.random() * 1000 + 500)}</span>
                  </div>
                  <div className="flex space-x-1 h-8">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`flex-1 bg-gradient-to-t ${chain.color} opacity-60 rounded-sm`}
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.random() * 100 + 20}%` }}
                        transition={{
                          duration: 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Cross-Chain Bridge Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="bg-gray-900/50 border-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-pink-900/10" />
          <CardContent className="p-8 relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-white font-mono font-bold text-2xl mb-2">Cross-Chain Bridge Network</h3>
              <p className="text-gray-400 font-mono text-sm">Seamless asset transfer across all supported chains</p>
            </div>

            {/* Bridge Visualization */}
            <div className="relative mb-8">
              <div className="flex items-center justify-between">
                {chains.map((chain, index) => (
                  <div key={chain.name} className="flex flex-col items-center space-y-3">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center shadow-xl relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <BlockchainLogo chain={chain.name} size="xl" className="w-12 h-12" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </motion.div>
                    <div className="text-center">
                      <span className="text-white font-mono text-sm font-semibold">{chain.name}</span>
                      <Badge className="mt-1 bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-mono text-xs">
                        {chain.stats.tvl}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection Lines with Animation */}
              <div className="absolute top-10 left-0 right-0 flex items-center justify-center">
                <div className="flex items-center space-x-4 w-full px-10">
                  <div className="flex-1 relative">
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-50" />
                    <motion.div
                      className="absolute top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full -translate-y-1/2 shadow-lg shadow-cyan-400/50"
                      animate={{ x: [0, "calc(100% - 16px)", 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-cyan-300 font-mono">
                      Bridge
                    </div>
                  </div>
                  <div className="flex-1 relative">
                    <div className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-50" />
                    <motion.div
                      className="absolute top-0 right-0 w-4 h-4 bg-purple-400 rounded-full -translate-y-1/2 shadow-lg shadow-purple-400/50"
                      animate={{ x: [0, "calc(-100% + 16px)", 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 2 }}
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-purple-300 font-mono">
                      IBC
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bridge Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Total Bridged", value: "$4.2M", color: "cyan", icon: TrendingUp },
                { label: "Bridge Transactions", value: "15.7K", color: "blue", icon: Activity },
                { label: "Success Rate", value: "99.9%", color: "green", icon: TrendingUp },
                { label: "Avg. Time", value: "2.3s", color: "purple", icon: Activity },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 rounded-lg p-4 text-center border border-gray-700 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-cyan-500/5" />
                  <div className="relative z-10">
                    <stat.icon className="h-5 w-5 text-cyan-400 mx-auto mb-2" />
                    <div className="text-cyan-400 font-mono text-lg font-bold">{stat.value}</div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Bridge Activity */}
            <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-mono font-semibold">Recent Bridge Activity</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-mono text-xs">Live</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  {
                    from: "Ethereum",
                    to: "Arbitrum",
                    amount: "1,500 DSTL",
                    time: "2s ago",
                    fromLogo: "Ξ",
                    toLogo: "⟠",
                  },
                  { from: "Arbitrum", to: "Cosmos", amount: "850 DSTL", time: "15s ago", fromLogo: "⟠", toLogo: "⚛" },
                  { from: "Cosmos", to: "Ethereum", amount: "2,200 DSTL", time: "32s ago", fromLogo: "⚛", toLogo: "Ξ" },
                ].map((tx, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-transparent rounded flex items-center justify-center">
                          <BlockchainLogo chain={tx.from} size="sm" />
                        </div>
                        <span className="text-gray-300 font-mono text-sm">{tx.from}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-cyan-400" />
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-transparent rounded flex items-center justify-center">
                          <BlockchainLogo chain={tx.to} size="sm" />
                        </div>
                        <span className="text-gray-300 font-mono text-sm">{tx.to}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400 font-mono text-sm font-semibold">{tx.amount}</div>
                      <div className="text-gray-400 text-xs">{tx.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
