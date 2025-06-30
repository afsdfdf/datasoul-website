"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Lock, TrendingUp, Award, Users } from "lucide-react"
import { motion } from "framer-motion"
import { CyberCard } from "@/components/ui/cyber-card"
import { CyberButton } from "@/components/ui/cyber-button"
import { BackgroundEffects } from "@/components/background-effects"

export default function StakingPage() {
  const [stakeAmount, setStakeAmount] = useState("")
  const [selectedPool, setSelectedPool] = useState("flexible")
  const [userBalance] = useState(10000) // Mock user balance

  const stakingPools = [
    {
      id: "flexible",
      name: "Flexible Staking",
      apy: "8.5%",
      lockPeriod: "No lock",
      minStake: "100 DSTL",
      totalStaked: "2.4M DSTL",
      participants: 1234,
      color: "cyan" as const,
      features: ["Instant unstaking", "Daily rewards", "No minimum period"],
    },
    {
      id: "30day",
      name: "30-Day Lock",
      apy: "12.3%",
      lockPeriod: "30 days",
      minStake: "500 DSTL",
      totalStaked: "1.8M DSTL",
      participants: 892,
      color: "blue" as const,
      features: ["Higher rewards", "Monthly compounding", "Early exit penalty"],
    },
    {
      id: "90day",
      name: "90-Day Lock",
      apy: "18.7%",
      lockPeriod: "90 days",
      minStake: "1000 DSTL",
      totalStaked: "3.2M DSTL",
      participants: 567,
      color: "purple" as const,
      features: ["Maximum rewards", "Quarterly bonuses", "Governance voting"],
    },
    {
      id: "validator",
      name: "Validator Staking",
      apy: "25.4%",
      lockPeriod: "180 days",
      minStake: "10000 DSTL",
      totalStaked: "5.1M DSTL",
      participants: 234,
      color: "green" as const,
      features: ["Validator rewards", "Network security", "Premium benefits"],
    },
  ]

  const userStakes = [
    {
      pool: "Flexible Staking",
      amount: "2,500 DSTL",
      rewards: "45.2 DSTL",
      apy: "8.5%",
      status: "Active",
      timeLeft: "Flexible",
    },
    {
      pool: "30-Day Lock",
      amount: "5,000 DSTL",
      rewards: "123.8 DSTL",
      apy: "12.3%",
      status: "Locked",
      timeLeft: "18 days",
    },
    {
      pool: "90-Day Lock",
      amount: "10,000 DSTL",
      rewards: "456.7 DSTL",
      apy: "18.7%",
      status: "Locked",
      timeLeft: "67 days",
    },
  ]

  const calculateRewards = (amount: number, apy: string, days = 365) => {
    const apyNum = Number.parseFloat(apy.replace("%", "")) / 100
    return (amount * apyNum * days) / 365
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      <BackgroundEffects />

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-mono">DSTL Staking</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                Stake & Earn Rewards
              </h1>
              <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
                Secure the network and earn passive income with flexible staking options and competitive APY rates
              </p>
            </motion.div>
          </div>

          {/* Staking Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Total Staked", value: "12.5M DSTL", icon: Lock, color: "cyan" as const },
              { label: "Average APY", value: "16.2%", icon: TrendingUp, color: "blue" as const },
              { label: "Total Stakers", value: "2,927", icon: Users, color: "purple" as const },
              { label: "Rewards Paid", value: "890K DSTL", icon: Award, color: "green" as const },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor={stat.color} className="p-6 text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${
                      stat.color === "cyan"
                        ? "from-cyan-500 to-blue-600"
                        : stat.color === "blue"
                          ? "from-blue-500 to-purple-600"
                          : stat.color === "purple"
                            ? "from-purple-500 to-pink-600"
                            : "from-green-500 to-emerald-600"
                    } rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                  <div className="text-cyan-300/70 font-mono text-sm">{stat.label}</div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staking Interface */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Staking Pools */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                  Staking Pools
                </h2>
                <div className="grid gap-6">
                  {stakingPools.map((pool, index) => (
                    <motion.div
                      key={pool.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <CyberCard
                        glowColor={pool.color}
                        className={`p-6 cursor-pointer transition-all duration-300 ${
                          selectedPool === pool.id ? "ring-2 ring-cyan-400/50" : ""
                        }`}
                        onClick={() => setSelectedPool(pool.id)}
                      >
                        <div className="grid md:grid-cols-4 gap-6 items-center">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-10 h-10 bg-gradient-to-br ${
                                  pool.color === "cyan"
                                    ? "from-cyan-500 to-blue-600"
                                    : pool.color === "blue"
                                      ? "from-blue-500 to-purple-600"
                                      : pool.color === "purple"
                                        ? "from-purple-500 to-pink-600"
                                        : "from-green-500 to-emerald-600"
                                } rounded-lg flex items-center justify-center shadow-lg`}
                              >
                                <Lock className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-mono font-bold">{pool.name}</h3>
                                <p className="text-gray-400 text-sm font-mono">{pool.lockPeriod}</p>
                              </div>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 font-mono">{pool.apy}</div>
                            <p className="text-gray-400 text-sm font-mono">APY</p>
                          </div>

                          <div className="text-center">
                            <div className="text-lg font-bold text-white font-mono">{pool.totalStaked}</div>
                            <p className="text-gray-400 text-sm font-mono">{pool.participants} stakers</p>
                          </div>

                          <div className="space-y-2">
                            {pool.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                <span className="text-cyan-300/80 text-xs font-mono">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CyberCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Staking Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <CyberCard glowColor="cyan" className="p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-6 font-mono">Stake DSTL Tokens</h3>

                  <div className="space-y-6">
                    {/* Balance */}
                    <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/20">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-mono">Available Balance</span>
                        <span className="text-cyan-400 font-bold font-mono">{userBalance.toLocaleString()} DSTL</span>
                      </div>
                    </div>

                    {/* Amount Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">Stake Amount</label>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          value={stakeAmount}
                          onChange={(e) => setStakeAmount(e.target.value)}
                          className="bg-black/50 border-cyan-500/30 text-white placeholder-cyan-300/50 font-mono pr-16"
                        />
                        <button
                          onClick={() => setStakeAmount(userBalance.toString())}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 text-sm font-mono hover:text-cyan-300"
                        >
                          MAX
                        </button>
                      </div>
                    </div>

                    {/* Selected Pool Info */}
                    {selectedPool && (
                      <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/20">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400 font-mono">Pool</span>
                            <span className="text-white font-mono">
                              {stakingPools.find((p) => p.id === selectedPool)?.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400 font-mono">APY</span>
                            <span className="text-cyan-400 font-bold font-mono">
                              {stakingPools.find((p) => p.id === selectedPool)?.apy}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400 font-mono">Lock Period</span>
                            <span className="text-white font-mono">
                              {stakingPools.find((p) => p.id === selectedPool)?.lockPeriod}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Estimated Rewards */}
                    {stakeAmount && selectedPool && (
                      <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-lg p-4 border border-cyan-500/30">
                        <h4 className="text-cyan-300 font-mono font-semibold mb-2">Estimated Rewards</h4>
                        <div className="space-y-1 text-sm font-mono">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Daily</span>
                            <span className="text-cyan-400">
                              {calculateRewards(
                                Number.parseFloat(stakeAmount),
                                stakingPools.find((p) => p.id === selectedPool)?.apy || "0%",
                                1,
                              ).toFixed(2)}{" "}
                              DSTL
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Monthly</span>
                            <span className="text-cyan-400">
                              {calculateRewards(
                                Number.parseFloat(stakeAmount),
                                stakingPools.find((p) => p.id === selectedPool)?.apy || "0%",
                                30,
                              ).toFixed(2)}{" "}
                              DSTL
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Yearly</span>
                            <span className="text-cyan-400">
                              {calculateRewards(
                                Number.parseFloat(stakeAmount),
                                stakingPools.find((p) => p.id === selectedPool)?.apy || "0%",
                                365,
                              ).toFixed(2)}{" "}
                              DSTL
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Stake Button */}
                    <CyberButton
                      color="cyan"
                      className="w-full"
                      disabled={!stakeAmount || Number.parseFloat(stakeAmount) <= 0}
                    >
                      <Lock className="h-4 w-4 mr-2" />
                      Stake Tokens
                    </CyberButton>
                  </div>
                </CyberCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* User Stakes */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Your Stakes
            </h2>
          </motion.div>

          <div className="grid gap-6">
            {userStakes.map((stake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor="cyan" className="p-6">
                  <div className="grid md:grid-cols-6 gap-6 items-center">
                    <div>
                      <h3 className="text-white font-mono font-bold">{stake.pool}</h3>
                      <Badge
                        className={`mt-1 ${
                          stake.status === "Active"
                            ? "bg-green-500/20 text-green-300 border-green-500/50"
                            : "bg-orange-500/20 text-orange-300 border-orange-500/50"
                        }`}
                      >
                        {stake.status}
                      </Badge>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold text-white font-mono">{stake.amount}</div>
                      <p className="text-gray-400 text-sm font-mono">Staked</p>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400 font-mono">{stake.rewards}</div>
                      <p className="text-gray-400 text-sm font-mono">Rewards</p>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400 font-mono">{stake.apy}</div>
                      <p className="text-gray-400 text-sm font-mono">APY</p>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold text-white font-mono">{stake.timeLeft}</div>
                      <p className="text-gray-400 text-sm font-mono">Time Left</p>
                    </div>

                    <div className="flex space-x-2">
                      <CyberButton color="blue" variant="outline" size="sm">
                        Claim
                      </CyberButton>
                      {stake.status === "Active" && (
                        <CyberButton color="purple" variant="outline" size="sm">
                          Unstake
                        </CyberButton>
                      )}
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
