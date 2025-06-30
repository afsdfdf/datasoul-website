"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Lock, Users, Zap, ArrowRight, PieChart } from "lucide-react"
import { motion } from "framer-motion"
import { DemoCharts } from "@/components/demo-charts"
import { DataVisualization } from "@/components/data-visualization"

export default function TokenomicsPage() {
  const tokenDistribution = [
    {
      category: "Foundation Reserve",
      percentage: 30,
      amount: "300M",
      color: "bg-cyan-500",
      description: "Long-term development and ecosystem growth",
    },
    {
      category: "Community Rewards",
      percentage: 25,
      amount: "250M",
      color: "bg-blue-500",
      description: "Staking rewards and community incentives",
    },
    {
      category: "Team & Advisors",
      percentage: 20,
      amount: "200M",
      color: "bg-purple-500",
      description: "4-year vesting with 1-year cliff",
    },
    {
      category: "Public Sale",
      percentage: 15,
      amount: "150M",
      color: "bg-pink-500",
      description: "Initial and future public offerings",
    },
    {
      category: "Liquidity Pool",
      percentage: 10,
      amount: "100M",
      color: "bg-green-500",
      description: "DEX liquidity and market making",
    },
  ]

  const stakingTiers = [
    { tier: "Bronze", minStake: "1,000", apy: "8%", benefits: ["Basic voting rights", "Standard rewards"] },
    {
      tier: "Silver",
      minStake: "10,000",
      apy: "12%",
      benefits: ["Enhanced voting power", "Priority support", "Bonus rewards"],
    },
    {
      tier: "Gold",
      minStake: "50,000",
      apy: "16%",
      benefits: ["Maximum voting power", "Exclusive features", "Premium rewards"],
    },
    {
      tier: "Diamond",
      minStake: "100,000",
      apy: "20%",
      benefits: ["Governance participation", "Early access", "Maximum benefits"],
    },
  ]

  const utilityFeatures = [
    { icon: Zap, title: "AI Service Payments", description: "Pay for AI computations and data processing" },
    { icon: Users, title: "Governance Voting", description: "Participate in protocol decisions and upgrades" },
    { icon: Lock, title: "Staking Rewards", description: "Earn passive income by securing the network" },
    { icon: TrendingUp, title: "Data Marketplace", description: "Buy and sell datasets using DSTL tokens" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">DSTL Token Economics</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            DataSoul Token (DSTL)
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The native utility token powering the DataSoul ecosystem, enabling AI services, governance participation,
            and value creation across our decentralized platform.
          </p>
        </motion.div>

        {/* Token Distribution Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <PieChart className="h-6 w-6 text-cyan-400" />
                <span>Token Distribution</span>
              </CardTitle>
              <CardDescription>Total Supply: 1,000,000,000 DSTL tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="flex justify-center">
                  <DemoCharts type="pie" width={400} height={300} animated={true} />
                </div>
                <div className="space-y-4">
                  {tokenDistribution.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg"
                    >
                      <div className={`w-4 h-4 rounded-full ${item.color}`} />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white font-semibold">{item.category}</span>
                          <span className="text-cyan-400 font-bold">{item.percentage}%</span>
                        </div>
                        <div className="text-gray-400 text-sm mb-2">{item.description}</div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{item.amount} DSTL</span>
                          <Progress value={item.percentage} className="w-20 h-2" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Token Utility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Token Utility</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              DSTL tokens serve multiple purposes within the DataSoul ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {utilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Staking Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Staking Tiers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stake DSTL tokens to earn rewards and unlock exclusive benefits
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full ${
                    tier.tier === "Diamond" ? "ring-2 ring-yellow-500/50" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">{tier.tier}</CardTitle>
                      <Badge
                        className={`${
                          tier.tier === "Bronze"
                            ? "bg-orange-500/20 text-orange-300"
                            : tier.tier === "Silver"
                              ? "bg-gray-500/20 text-gray-300"
                              : tier.tier === "Gold"
                                ? "bg-yellow-500/20 text-yellow-300"
                                : "bg-purple-500/20 text-purple-300"
                        }`}
                      >
                        {tier.apy} APY
                      </Badge>
                    </div>
                    <CardDescription>Min. Stake: {tier.minStake} DSTL</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Data Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Token Analytics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Explore interactive charts and real-time token metrics</p>
          </div>
          <DataVisualization />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join the DataSoul ecosystem and start earning DSTL tokens through staking, data contributions, and AI
                service participation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Start Staking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 bg-transparent"
                >
                  View Whitepaper
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
