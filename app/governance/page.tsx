"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Vote, Users, Clock, CheckCircle, XCircle, AlertCircle, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { CyberCard } from "@/components/ui/cyber-card"
import { CyberButton } from "@/components/ui/cyber-button"
import { BackgroundEffects } from "@/components/background-effects"

export default function GovernancePage() {
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null)
  const [userVotingPower] = useState(15000) // Mock user voting power

  const governanceStats = [
    { label: "Total Voting Power", value: "8.2M DSTL", icon: Vote, color: "cyan" as const },
    { label: "Active Proposals", value: "12", icon: AlertCircle, color: "blue" as const },
    { label: "Participants", value: "2,847", icon: Users, color: "purple" as const },
    { label: "Passed Proposals", value: "89", icon: CheckCircle, color: "green" as const },
  ]

  const proposals = [
    {
      id: 1,
      title: "Increase AI Model Rewards by 25%",
      description:
        "Proposal to increase rewards for AI model contributors to incentivize more high-quality submissions",
      category: "Economic",
      status: "Active",
      timeLeft: "5 days",
      votesFor: 2450000,
      votesAgainst: 890000,
      totalVotes: 3340000,
      quorum: 4000000,
      proposer: "DataScientist_AI",
      created: "2024-01-15",
      userVoted: false,
    },
    {
      id: 2,
      title: "Implement Cross-Chain Bridge to Polygon",
      description: "Deploy DataSoul protocol on Polygon network to reduce transaction costs and increase accessibility",
      category: "Technical",
      status: "Active",
      timeLeft: "12 days",
      votesFor: 1890000,
      votesAgainst: 1200000,
      totalVotes: 3090000,
      quorum: 4000000,
      proposer: "BlockchainDev",
      created: "2024-01-10",
      userVoted: true,
      userVote: "for",
    },
    {
      id: 3,
      title: "Establish DataSoul Foundation Grant Program",
      description: "Allocate 500K DSTL from treasury for grants to support ecosystem development and research",
      category: "Governance",
      status: "Passed",
      timeLeft: "Ended",
      votesFor: 4200000,
      votesAgainst: 800000,
      totalVotes: 5000000,
      quorum: 4000000,
      proposer: "CommunityDAO",
      created: "2024-01-01",
      userVoted: true,
      userVote: "for",
    },
    {
      id: 4,
      title: "Update Data Privacy Standards",
      description: "Implement enhanced privacy protection measures for user data and strengthen encryption protocols",
      category: "Security",
      status: "Failed",
      timeLeft: "Ended",
      votesFor: 1500000,
      votesAgainst: 2800000,
      totalVotes: 4300000,
      quorum: 4000000,
      proposer: "SecurityExpert",
      created: "2023-12-20",
      userVoted: false,
    },
    {
      id: 5,
      title: "Reduce Minimum Staking Amount to 50 DSTL",
      description: "Lower the barrier to entry for staking to increase participation and decentralization",
      category: "Economic",
      status: "Draft",
      timeLeft: "Not started",
      votesFor: 0,
      votesAgainst: 0,
      totalVotes: 0,
      quorum: 4000000,
      proposer: "StakingAdvocate",
      created: "2024-01-18",
      userVoted: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "cyan"
      case "Passed":
        return "green"
      case "Failed":
        return "pink"
      case "Draft":
        return "blue"
      default:
        return "cyan"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return Clock
      case "Passed":
        return CheckCircle
      case "Failed":
        return XCircle
      case "Draft":
        return AlertCircle
      default:
        return Clock
    }
  }

  const calculateVotePercentage = (votes: number, total: number) => {
    return total > 0 ? (votes / total) * 100 : 0
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      <BackgroundEffects />

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-mono">DAO Governance</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                Shape the Future
              </h1>
              <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
                Participate in DataSoul governance by voting on proposals and helping guide the protocol's evolution
              </p>
            </motion.div>
          </div>

          {/* Governance Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {governanceStats.map((stat, index) => (
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

          {/* User Voting Power */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <CyberCard glowColor="cyan" className="p-6">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">
                    {userVotingPower.toLocaleString()}
                  </div>
                  <p className="text-gray-400 font-mono">Your Voting Power</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2 font-mono">
                    {((userVotingPower / 8200000) * 100).toFixed(3)}%
                  </div>
                  <p className="text-gray-400 font-mono">Network Influence</p>
                </div>
                <div className="text-center">
                  <CyberButton color="cyan" size="lg">
                    <Shield className="h-4 w-4 mr-2" />
                    Delegate Votes
                  </CyberButton>
                </div>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Proposals */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Active Proposals
            </h2>
          </motion.div>

          <div className="grid gap-8">
            {proposals.map((proposal, index) => {
              const StatusIcon = getStatusIcon(proposal.status)
              const forPercentage = calculateVotePercentage(proposal.votesFor, proposal.totalVotes)
              const againstPercentage = calculateVotePercentage(proposal.votesAgainst, proposal.totalVotes)
              const quorumPercentage = calculateVotePercentage(proposal.totalVotes, proposal.quorum)

              return (
                <motion.div
                  key={proposal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CyberCard glowColor={getStatusColor(proposal.status) as any} className="p-6">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-white font-mono font-bold text-lg">{proposal.title}</h3>
                            <Badge
                              className={`${
                                proposal.status === "Active"
                                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50"
                                  : proposal.status === "Passed"
                                    ? "bg-green-500/20 text-green-300 border-green-500/50"
                                    : proposal.status === "Failed"
                                      ? "bg-pink-500/20 text-pink-300 border-pink-500/50"
                                      : "bg-blue-500/20 text-blue-300 border-blue-500/50"
                              }`}
                            >
                              <StatusIcon className="h-3 w-3 mr-1" />
                              {proposal.status}
                            </Badge>
                            <Badge variant="outline" className="border-gray-500/50 text-gray-300 font-mono text-xs">
                              {proposal.category}
                            </Badge>
                          </div>
                          <p className="text-cyan-300/80 font-mono text-sm leading-relaxed mb-4">
                            {proposal.description}
                          </p>
                          <div className="flex items-center space-x-6 text-xs font-mono text-gray-400">
                            <span>Proposed by {proposal.proposer}</span>
                            <span>Created {proposal.created}</span>
                            <span>Time left: {proposal.timeLeft}</span>
                          </div>
                        </div>
                      </div>

                      {/* Voting Results */}
                      {proposal.status !== "Draft" && (
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-green-400 font-mono">
                                {(proposal.votesFor / 1000000).toFixed(1)}M
                              </div>
                              <p className="text-gray-400 text-sm font-mono">For ({forPercentage.toFixed(1)}%)</p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-red-400 font-mono">
                                {(proposal.votesAgainst / 1000000).toFixed(1)}M
                              </div>
                              <p className="text-gray-400 text-sm font-mono">
                                Against ({againstPercentage.toFixed(1)}%)
                              </p>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-cyan-400 font-mono">
                                {(proposal.totalVotes / 1000000).toFixed(1)}M
                              </div>
                              <p className="text-gray-400 text-sm font-mono">Total Votes</p>
                            </div>
                          </div>

                          {/* Progress Bars */}
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm font-mono mb-1">
                                <span className="text-green-400">For</span>
                                <span className="text-green-400">{forPercentage.toFixed(1)}%</span>
                              </div>
                              <Progress value={forPercentage} className="h-2 bg-gray-800">
                                <div
                                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-500"
                                  style={{ width: `${forPercentage}%` }}
                                />
                              </Progress>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm font-mono mb-1">
                                <span className="text-red-400">Against</span>
                                <span className="text-red-400">{againstPercentage.toFixed(1)}%</span>
                              </div>
                              <Progress value={againstPercentage} className="h-2 bg-gray-800">
                                <div
                                  className="h-full bg-gradient-to-r from-red-500 to-pink-600 rounded-full transition-all duration-500"
                                  style={{ width: `${againstPercentage}%` }}
                                />
                              </Progress>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm font-mono mb-1">
                                <span className="text-cyan-400">Quorum Progress</span>
                                <span className="text-cyan-400">{quorumPercentage.toFixed(1)}%</span>
                              </div>
                              <Progress value={quorumPercentage} className="h-2 bg-gray-800">
                                <div
                                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500"
                                  style={{ width: `${quorumPercentage}%` }}
                                />
                              </Progress>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Voting Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <div className="flex items-center space-x-4">
                          {proposal.userVoted && (
                            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                              You voted {proposal.userVote}
                            </Badge>
                          )}
                        </div>

                        {proposal.status === "Active" && !proposal.userVoted && (
                          <div className="flex space-x-3">
                            <CyberButton color="green" variant="outline" size="sm">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Vote For
                            </CyberButton>
                            <CyberButton color="pink" variant="outline" size="sm">
                              <XCircle className="h-3 w-3 mr-1" />
                              Vote Against
                            </CyberButton>
                          </div>
                        )}

                        {proposal.status === "Draft" && (
                          <CyberButton color="blue" variant="outline" size="sm">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            View Details
                          </CyberButton>
                        )}
                      </div>
                    </div>
                  </CyberCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Create Proposal */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Have an Idea?
            </h2>
            <p className="text-xl text-cyan-300/70 mb-8 max-w-2xl mx-auto font-mono">
              Submit your own proposal to improve the DataSoul ecosystem
            </p>
            <CyberButton color="cyan" size="xl">
              <Zap className="h-5 w-5 mr-2" />
              Create Proposal
            </CyberButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
