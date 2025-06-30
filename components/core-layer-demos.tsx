"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Users, Zap, Activity, Lock, Cpu, Network, Shield, TrendingUp } from "lucide-react"

export function CoreLayerDemos() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* AI Layer Demo */}
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <Card className="bg-gray-900/50 border-cyan-500/30 h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-blue-900/10" />
          <CardContent className="p-6 space-y-6 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-mono font-bold">AI Layer</h3>
                <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 font-mono">
                  Machine Learning
                </Badge>
              </div>
            </div>

            <p className="text-cyan-300/80 font-mono leading-relaxed">
              Suite of on-chain and oracle-connected AI modules for data analysis, predictions, and content generation
            </p>

            {/* AI Models Dashboard */}
            <Card className="bg-black/50 border-cyan-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4 text-cyan-400" />
                    <span className="text-cyan-300 text-sm font-mono">AI Models Dashboard</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 text-xs">Online</Badge>
                </div>

                {/* Neural Network Visualization */}
                <div className="mb-4 bg-gray-900/50 rounded-lg p-3 border border-cyan-500/20">
                  <div className="flex items-center justify-center space-x-4">
                    {/* Input Layer */}
                    <div className="flex flex-col space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 bg-cyan-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                    {/* Hidden Layers */}
                    <div className="flex space-x-3">
                      {[...Array(2)].map((_, layer) => (
                        <div key={layer} className="flex flex-col space-y-1">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-blue-400 rounded-full"
                              animate={{ opacity: [0.2, 0.8, 0.2] }}
                              transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: (layer * 6 + i) * 0.1,
                              }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                    {/* Output Layer */}
                    <div className="flex flex-col space-y-2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 bg-purple-400 rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 + i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-cyan-300 text-xs font-mono">Neural Network Processing</span>
                  </div>
                </div>

                {/* Model Cards */}
                <div className="space-y-2">
                  {[
                    { name: "GPT-4 Turbo", usage: "85%", status: "Active", requests: "2.4K/min" },
                    { name: "Claude-3", usage: "62%", status: "Active", requests: "1.8K/min" },
                    { name: "Llama-2", usage: "43%", status: "Standby", requests: "0.9K/min" },
                  ].map((model, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-800/50 rounded p-3 border border-gray-700"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white text-sm font-mono font-semibold">{model.name}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <div
                              className={`w-2 h-2 rounded-full ${model.status === "Active" ? "bg-green-400" : "bg-yellow-400"}`}
                            />
                            <span className="text-gray-400 text-xs">{model.status}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-cyan-400 text-sm font-mono">{model.usage}</div>
                          <div className="text-gray-400 text-xs">{model.requests}</div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: model.usage }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Processing Stats */}
                <div className="mt-4 pt-3 border-t border-gray-700 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-cyan-400 font-mono text-lg font-bold">2.4K</div>
                    <div className="text-gray-400 text-xs">Requests/min</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyan-400 font-mono text-lg font-bold">98.7%</div>
                    <div className="text-gray-400 text-xs">Accuracy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ul className="space-y-3">
              {[
                "Decentralized GPU compute networks",
                "Smart contract mediated access",
                "Collaborative model training",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-cyan-400/50 shadow-lg" />
                  <span className="text-cyan-300/90 font-mono text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Data Layer Demo */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="bg-gray-900/50 border-purple-500/30 h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10" />
          <CardContent className="p-6 space-y-6 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                <Database className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-mono font-bold">Data Layer</h3>
                <Badge variant="outline" className="border-purple-500/50 text-purple-300 font-mono">
                  Decentralized Storage
                </Badge>
              </div>
            </div>

            <p className="text-purple-300/80 font-mono leading-relaxed">
              Secure, encrypted data storage with on-chain metadata and access control
            </p>

            {/* Data Marketplace */}
            <Card className="bg-black/50 border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4 text-purple-400" />
                    <span className="text-purple-300 text-sm font-mono">Data Marketplace</span>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-300 text-xs">1,247 Assets</Badge>
                </div>

                {/* Data Flow Visualization */}
                <div className="mb-4 bg-gray-900/50 rounded-lg p-3 border border-purple-500/20">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mb-1">
                        <Database className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-xs text-purple-300 font-mono">Source</span>
                    </div>
                    <div className="flex-1 mx-4 relative">
                      <div className="h-0.5 bg-purple-500/30 rounded-full">
                        <motion.div
                          className="h-full bg-purple-500 rounded-full"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Lock className="h-3 w-3 text-purple-400" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mb-1">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-xs text-pink-300 font-mono">IPFS</span>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-purple-300 text-xs font-mono">Encrypted Data Pipeline</span>
                  </div>
                </div>

                {/* Data Categories */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { name: "Financial", count: "847", color: "from-green-500 to-emerald-600" },
                    { name: "Social", count: "623", color: "from-blue-500 to-cyan-600" },
                    { name: "IoT", count: "392", color: "from-orange-500 to-red-600" },
                  ].map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-purple-900/20 rounded-lg p-3 text-center border border-purple-500/30"
                    >
                      <div className={`w-6 h-6 bg-gradient-to-r ${category.color} rounded mx-auto mb-1`} />
                      <div className="text-purple-300 text-xs font-mono font-semibold">{category.name}</div>
                      <div className="text-gray-400 text-xs">{category.count} sets</div>
                    </motion.div>
                  ))}
                </div>

                {/* Featured Datasets */}
                <div className="space-y-2">
                  {[
                    {
                      name: "DeFi Trading",
                      size: "2.4GB",
                      price: "250 DSTL",
                      encryption: "AES-256",
                      downloads: "1.2K",
                    },
                    {
                      name: "Social Sentiment",
                      size: "1.8GB",
                      price: "180 DSTL",
                      encryption: "AES-256",
                      downloads: "890",
                    },
                  ].map((dataset, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white text-sm font-mono font-semibold">{dataset.name}</div>
                          <div className="text-gray-400 text-xs mt-1">
                            {dataset.size} • {dataset.encryption} • {dataset.downloads} downloads
                          </div>
                        </div>
                        <div className="text-purple-400 text-sm font-mono font-bold">{dataset.price}</div>
                      </div>
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="flex-1 h-1 bg-gray-700 rounded-full">
                          <div className="h-1 bg-purple-500 rounded-full w-3/4" />
                        </div>
                        <span className="text-xs text-gray-400">75% verified</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Storage Stats */}
                <div className="mt-4 pt-3 border-t border-gray-700 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-purple-400 font-mono text-lg font-bold">847TB</div>
                    <div className="text-gray-400 text-xs">Total Storage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-mono text-lg font-bold">99.9%</div>
                    <div className="text-gray-400 text-xs">Uptime</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ul className="space-y-3">
              {["IPFS/Filecoin integration", "Encrypted off-chain storage", "Smart contract licensing"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full shadow-purple-400/50 shadow-lg" />
                    <span className="text-purple-300/90 font-mono text-sm">{item}</span>
                  </motion.li>
                ),
              )}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Identity & Reputation Demo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="bg-gray-900/50 border-blue-500/30 h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-cyan-900/10" />
          <CardContent className="p-6 space-y-6 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-mono font-bold">Identity & Reputation</h3>
                <Badge variant="outline" className="border-blue-500/50 text-blue-300 font-mono">
                  Soulbound Tokens
                </Badge>
              </div>
            </div>

            <p className="text-blue-300/80 font-mono leading-relaxed">
              Blockchain-based identity with reputation scoring and anti-sybil measures
            </p>

            {/* Reputation Dashboard */}
            <Card className="bg-black/50 border-blue-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span className="text-blue-300 text-sm font-mono">Reputation Dashboard</span>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 text-xs">Verified</Badge>
                </div>

                {/* Reputation Score Visualization */}
                <div className="mb-4 bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-4 border-gray-700 flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">DS</span>
                        </div>
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-blue-500"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 0.847 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{
                          background: `conic-gradient(from 0deg, #3b82f6 ${84.7 * 3.6}deg, transparent 0deg)`,
                          mask: "radial-gradient(circle, transparent 50%, black 50%)",
                        }}
                      />
                    </div>
                    <div>
                      <div className="text-white text-lg font-mono font-bold">DataSoul User #1247</div>
                      <div className="text-blue-400 text-sm font-mono">Reputation Score: 847</div>
                      <div className="text-gray-400 text-xs">Top 5% • Verified Identity</div>
                    </div>
                  </div>
                </div>

                {/* Achievement Badges */}
                <div className="space-y-3">
                  <div className="text-blue-300 text-sm font-mono font-semibold">Achievement Badges</div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Data Provider", level: "Gold", color: "from-yellow-500 to-orange-500", icon: Database },
                      { name: "AI Trainer", level: "Silver", color: "from-gray-400 to-gray-600", icon: Brain },
                      { name: "Validator", level: "Bronze", color: "from-orange-500 to-red-500", icon: Shield },
                      { name: "Governance", level: "Platinum", color: "from-purple-500 to-pink-500", icon: Users },
                    ].map((badge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-800/50 rounded-lg p-3 text-center border border-gray-700"
                      >
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${badge.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}
                        >
                          <badge.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-white text-xs font-mono font-semibold">{badge.name}</div>
                        <div className="text-gray-400 text-xs">{badge.level}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Reputation Metrics */}
                <div className="mt-4 pt-3 border-t border-gray-700 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-blue-400 font-mono text-lg font-bold">8.9K</div>
                    <div className="text-gray-400 text-xs">Total Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-mono text-lg font-bold">Top 5%</div>
                    <div className="text-gray-400 text-xs">Ranking</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ul className="space-y-3">
              {["Soulbound Token badges", "Peer rating system", "Verified identity integration"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full shadow-blue-400/50 shadow-lg" />
                  <span className="text-blue-300/90 font-mono text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Smart Contracts Demo */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="bg-gray-900/50 border-green-500/30 h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-emerald-900/10" />
          <CardContent className="p-6 space-y-6 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-mono font-bold">Smart Contract Modules</h3>
                <Badge variant="outline" className="border-green-500/50 text-green-300 font-mono">
                  Multi-Chain
                </Badge>
              </div>
            </div>

            <p className="text-green-300/80 font-mono leading-relaxed">
              Core protocol contracts for token management, rewards, marketplace, and governance
            </p>

            {/* Contract Explorer */}
            <Card className="bg-black/50 border-green-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Network className="h-4 w-4 text-green-400" />
                    <span className="text-green-300 text-sm font-mono">Contract Explorer</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 text-xs">Live</Badge>
                </div>

                {/* Contract Network Visualization */}
                <div className="mb-4 bg-gray-900/50 rounded-lg p-3 border border-green-500/20">
                  <div className="flex items-center justify-center space-x-6">
                    {[
                      { name: "Token", icon: Zap, color: "green" },
                      { name: "Staking", icon: TrendingUp, color: "blue" },
                      { name: "DAO", icon: Users, color: "purple" },
                    ].map((contract, index) => (
                      <div key={index} className="text-center">
                        <motion.div
                          className={`w-10 h-10 bg-${contract.color}-500 rounded-lg flex items-center justify-center mb-2`}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                        >
                          <contract.icon className="h-5 w-5 text-white" />
                        </motion.div>
                        <span className="text-xs text-gray-300 font-mono">{contract.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-3">
                    <span className="text-green-300 text-xs font-mono">Smart Contract Network</span>
                  </div>
                </div>

                {/* Contract Status */}
                <div className="space-y-2 mb-4">
                  {[
                    { name: "Token Contract", status: "Active", gas: "21K", chain: "Ethereum", txs: "2.4M" },
                    { name: "Staking Pool", status: "Active", gas: "45K", chain: "Arbitrum", txs: "890K" },
                    { name: "Governance DAO", status: "Active", gas: "67K", chain: "Polygon", txs: "156K" },
                  ].map((contract, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white text-sm font-mono font-semibold">{contract.name}</div>
                          <div className="text-gray-400 text-xs mt-1">
                            {contract.chain} • {contract.txs} transactions
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-green-400 text-xs font-mono">{contract.status}</span>
                          </div>
                          <div className="text-gray-400 text-xs">{contract.gas} gas</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Transaction Activity */}
                <div className="bg-green-900/20 rounded-lg p-3 border border-green-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-300 text-sm font-mono font-semibold">Recent Activity</span>
                    <div className="flex items-center space-x-1">
                      <Activity className="h-3 w-3 text-green-400 animate-pulse" />
                      <span className="text-green-400 text-xs">Live</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { type: "Transfer", detail: "1,500 DSTL", time: "2s ago", hash: "0x1a2b..." },
                      { type: "Stake", detail: "45.2 DSTL reward", time: "15s ago", hash: "0x3c4d..." },
                      { type: "Vote", detail: "Proposal #12", time: "32s ago", hash: "0x5e6f..." },
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                          <span className="text-gray-300 font-mono">
                            {activity.type}: {activity.detail}
                          </span>
                        </div>
                        <div className="text-gray-400">
                          {activity.time} • {activity.hash}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="mt-4 pt-3 border-t border-gray-700 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-green-400 font-mono text-lg font-bold">2.4M</div>
                    <div className="text-gray-400 text-xs">Transactions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-mono text-lg font-bold">99.8%</div>
                    <div className="text-gray-400 text-xs">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ul className="space-y-3">
              {["Automated reward distribution", "Marketplace escrow system", "DAO governance contracts"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full shadow-green-400/50 shadow-lg" />
                    <span className="text-green-300/90 font-mono text-sm">{item}</span>
                  </motion.li>
                ),
              )}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
