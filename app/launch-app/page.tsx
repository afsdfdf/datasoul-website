"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BackgroundEffects } from "@/components/background-effects"
import {
  Brain,
  Database,
  Users,
  Zap,
  TrendingUp,
  Shield,
  Wallet,
  Search,
  Upload,
  Download,
  Bell,
  Activity,
  BarChart3,
  Network,
  Lock,
  Star,
  Filter,
  RefreshCw,
  Eye,
  Plus,
  X,
  Check,
  AlertTriangle,
  Info,
  FileText,
  RotateCcw,
  Save,
  Menu,
} from "lucide-react"

export default function LaunchAppPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [balance, setBalance] = useState(0)
  const [notifications, setNotifications] = useState(3)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState("")
  const [aiQuery, setAiQuery] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [stakingAmount, setStakingAmount] = useState("")
  const [reputationScore, setReputationScore] = useState(847)
  const [totalEarnings, setTotalEarnings] = useState(2456.78)
  const [activeNodes, setActiveNodes] = useState(247)
  const [networkHealth, setNetworkHealth] = useState(98.5)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBalance((prev) => prev + Math.random() * 0.1)
      setTotalEarnings((prev) => prev + Math.random() * 0.5)
      setActiveNodes((prev) => prev + Math.floor(Math.random() * 3 - 1))
      setNetworkHealth((prev) => 95 + Math.random() * 5)
      setReputationScore((prev) => prev + Math.floor(Math.random() * 2))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const connectWallet = async () => {
    setIsLoading(true)
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnected(true)
      setWalletAddress("0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4")
      setBalance(1247.56)
      setIsLoading(false)
    }, 2000)
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
    setBalance(0)
  }

  const executeAIQuery = async () => {
    if (!aiQuery.trim()) return
    setIsLoading(true)

    // Simulate AI processing
    setTimeout(() => {
      const responses = [
        "Based on current DeFi market trends, I predict a 15% increase in TVL over the next quarter. Key drivers include institutional adoption and improved yield farming strategies.",
        "Analysis of social sentiment shows 73% bullish sentiment for DSTL token. Major discussion topics include platform upgrades and partnership announcements.",
        "Smart contract audit reveals no critical vulnerabilities. Recommended optimizations could reduce gas costs by approximately 12%.",
        "Data correlation analysis shows strong positive correlation (0.84) between user engagement and token price movements over the past 30 days.",
      ]
      setAiResponse(responses[Math.floor(Math.random() * responses.length)])
      setIsLoading(false)
    }, 3000)
  }

  const simulateUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
  }

  const stakeTokens = () => {
    if (!stakingAmount || Number.parseFloat(stakingAmount) <= 0) return
    setIsLoading(true)

    setTimeout(() => {
      setBalance((prev) => prev - Number.parseFloat(stakingAmount))
      setStakingAmount("")
      setIsLoading(false)
      alert(`Successfully staked ${stakingAmount} DSTL tokens!`)
    }, 2000)
  }

  const dashboardStats = [
    { label: "Total Balance", value: `${balance.toFixed(2)} DSTL`, icon: Wallet, color: "text-green-400" },
    { label: "Staked Amount", value: "892.34 DSTL", icon: Lock, color: "text-blue-400" },
    { label: "Total Earnings", value: `${totalEarnings.toFixed(2)} DSTL`, icon: TrendingUp, color: "text-purple-400" },
    { label: "Reputation Score", value: reputationScore.toString(), icon: Star, color: "text-yellow-400" },
  ]

  const aiModels = [
    { id: "gpt4", name: "DataSoul GPT-4", category: "Language Model", price: "0.02 DSTL/query" },
    { id: "defi-predictor", name: "DeFi Predictor", category: "Financial ML", price: "0.05 DSTL/query" },
    { id: "sentiment-analyzer", name: "Sentiment Analyzer", category: "NLP", price: "0.01 DSTL/query" },
    { id: "nft-valuator", name: "NFT Valuator", category: "Computer Vision", price: "0.03 DSTL/query" },
  ]

  const dataAssets = [
    { id: 1, name: "DeFi Trading Dataset", size: "2.4 GB", price: "250 DSTL", downloads: "1.2K", rating: 4.8 },
    { id: 2, name: "Social Sentiment Data", size: "1.8 GB", price: "180 DSTL", downloads: "890", rating: 4.6 },
    { id: 3, name: "NFT Market Analysis", size: "3.1 GB", price: "320 DSTL", downloads: "654", rating: 4.9 },
    { id: 4, name: "Crypto News Corpus", size: "5.2 GB", price: "450 DSTL", downloads: "2.1K", rating: 4.7 },
  ]

  const governanceProposals = [
    {
      id: 1,
      title: "Increase AI Model Rewards",
      description: "Proposal to increase rewards for AI model providers by 15%",
      status: "Active",
      votes: { for: 12847, against: 3421 },
      timeLeft: "5 days",
    },
    {
      id: 2,
      title: "New Data Category: IoT Sensors",
      description: "Add IoT sensor data as a new category in the marketplace",
      status: "Pending",
      votes: { for: 8934, against: 1256 },
      timeLeft: "12 days",
    },
    {
      id: 3,
      title: "Platform Fee Reduction",
      description: "Reduce platform transaction fees from 2.5% to 2.0%",
      status: "Passed",
      votes: { for: 18923, against: 4567 },
      timeLeft: "Completed",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10">
        {/* Mobile-Optimized Header */}
        <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-white font-mono">DataSoul App</h1>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-mono">Network Online</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Mobile Network Status */}
                <div className="hidden sm:flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-cyan-400" />
                    <span className="text-gray-300 font-mono">{networkHealth.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Network className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300 font-mono">{activeNodes}</span>
                  </div>
                </div>

                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative p-2">
                  <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[1rem] h-4 flex items-center justify-center p-0">
                      {notifications}
                    </Badge>
                  )}
                </Button>

                {/* Mobile Menu Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="sm:hidden p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="h-5 w-5 text-gray-400" />
                </Button>

                {/* Wallet Connection - Desktop */}
                {isConnected ? (
                  <div className="hidden sm:flex items-center space-x-3">
                    <div className="text-right">
                      <div className="text-sm font-mono text-white">{balance.toFixed(2)} DSTL</div>
                      <div className="text-xs text-gray-400 font-mono">
                        {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                      </div>
                    </div>
                    <Button
                      onClick={disconnectWallet}
                      variant="outline"
                      size="sm"
                      className="border-red-500/50 text-red-400 hover:bg-red-500/10 bg-transparent"
                    >
                      Disconnect
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={connectWallet}
                    disabled={isLoading}
                    className="hidden sm:flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-mono"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <Wallet className="h-4 w-4 mr-2" />
                        Connect Wallet
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="sm:hidden mt-4 pt-4 border-t border-gray-800"
                >
                  <div className="space-y-4">
                    {/* Mobile Network Status */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-4 w-4 text-cyan-400" />
                        <span className="text-gray-300 font-mono">Health: {networkHealth.toFixed(1)}%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Network className="h-4 w-4 text-purple-400" />
                        <span className="text-gray-300 font-mono">Nodes: {activeNodes}</span>
                      </div>
                    </div>

                    {/* Mobile Wallet Connection */}
                    {isConnected ? (
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-mono text-white">{balance.toFixed(2)} DSTL</div>
                          <div className="text-xs text-gray-400 font-mono">
                            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                          </div>
                        </div>
                        <Button
                          onClick={disconnectWallet}
                          variant="outline"
                          size="sm"
                          className="border-red-500/50 text-red-400 hover:bg-red-500/10 bg-transparent"
                        >
                          Disconnect
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={connectWallet}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-mono"
                      >
                        {isLoading ? (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                            Connecting...
                          </>
                        ) : (
                          <>
                            <Wallet className="h-4 w-4 mr-2" />
                            Connect Wallet
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
            {/* Mobile-Optimized Tab Navigation */}
            <div className="overflow-x-auto">
              <TabsList className="grid grid-cols-3 sm:grid-cols-6 w-full min-w-[600px] sm:min-w-0 bg-gray-900/50 border border-gray-800">
                <TabsTrigger value="dashboard" className="font-mono text-xs sm:text-sm">
                  <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Dashboard</span>
                  <span className="sm:hidden">Dash</span>
                </TabsTrigger>
                <TabsTrigger value="ai-services" className="font-mono text-xs sm:text-sm">
                  <Brain className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">AI Services</span>
                  <span className="sm:hidden">AI</span>
                </TabsTrigger>
                <TabsTrigger value="data-marketplace" className="font-mono text-xs sm:text-sm">
                  <Database className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Data Market</span>
                  <span className="sm:hidden">Data</span>
                </TabsTrigger>
                <TabsTrigger value="staking" className="font-mono text-xs sm:text-sm">
                  <Lock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Staking</span>
                  <span className="sm:hidden">Stake</span>
                </TabsTrigger>
                <TabsTrigger value="governance" className="font-mono text-xs sm:text-sm">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Governance</span>
                  <span className="sm:hidden">Gov</span>
                </TabsTrigger>
                <TabsTrigger value="profile" className="font-mono text-xs sm:text-sm">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Profile</span>
                  <span className="sm:hidden">User</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-4 sm:space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
                  {dashboardStats.map((stat, index) => (
                    <Card key={index} className="bg-gray-900/50 border-gray-800">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-400 text-xs sm:text-sm font-mono">{stat.label}</p>
                            <p className={`text-lg sm:text-2xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
                          </div>
                          <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color}`} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Charts Section */}
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white font-mono text-lg sm:text-xl">Portfolio Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 sm:h-64 flex items-center justify-center">
                        <div className="w-full space-y-3 sm:space-y-4">
                          {[
                            { label: "DSTL Holdings", value: 65, color: "bg-cyan-500" },
                            { label: "Staked Rewards", value: 25, color: "bg-blue-500" },
                            { label: "AI Earnings", value: 10, color: "bg-purple-500" },
                          ].map((item, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-gray-300 font-mono">{item.label}</span>
                                <span className="text-white font-mono">{item.value}%</span>
                              </div>
                              <div className="w-full bg-gray-800 rounded-full h-2">
                                <motion.div
                                  className={`${item.color} h-2 rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${item.value}%` }}
                                  transition={{ duration: 1, delay: index * 0.2 }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white font-mono text-lg sm:text-xl">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          { action: "AI Query Executed", amount: "-0.02 DSTL", time: "2 min ago", icon: Brain },
                          { action: "Staking Reward", amount: "+12.45 DSTL", time: "1 hour ago", icon: TrendingUp },
                          { action: "Data Purchase", amount: "-250 DSTL", time: "3 hours ago", icon: Database },
                          { action: "Governance Vote", amount: "0 DSTL", time: "1 day ago", icon: Users },
                        ].map((activity, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 sm:p-3 bg-black/30 rounded-lg"
                          >
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <activity.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                              <div>
                                <p className="text-white font-mono text-xs sm:text-sm">{activity.action}</p>
                                <p className="text-gray-400 text-xs">{activity.time}</p>
                              </div>
                            </div>
                            <span
                              className={`font-mono text-xs sm:text-sm ${
                                activity.amount.startsWith("+")
                                  ? "text-green-400"
                                  : activity.amount.startsWith("-")
                                    ? "text-red-400"
                                    : "text-gray-400"
                              }`}
                            >
                              {activity.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* AI Services Tab */}
            <TabsContent value="ai-services" className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* AI Query Interface */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white font-mono text-lg sm:text-xl">AI Query Interface</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-300 font-mono text-sm mb-2 block">Select AI Model</label>
                        <select
                          value={selectedModel}
                          onChange={(e) => setSelectedModel(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white font-mono text-sm"
                        >
                          <option value="">Choose a model...</option>
                          {aiModels.map((model) => (
                            <option key={model.id} value={model.id}>
                              {model.name} - {model.price}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-gray-300 font-mono text-sm mb-2 block">Query Type</label>
                        <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white font-mono text-sm">
                          <option>Market Analysis</option>
                          <option>Sentiment Analysis</option>
                          <option>Price Prediction</option>
                          <option>Smart Contract Audit</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-300 font-mono text-sm mb-2 block">Your Query</label>
                      <Textarea
                        value={aiQuery}
                        onChange={(e) => setAiQuery(e.target.value)}
                        placeholder="Enter your AI query here..."
                        className="bg-gray-800 border border-gray-700 text-white font-mono min-h-[80px] sm:min-h-[100px] text-sm"
                      />
                    </div>

                    <Button
                      onClick={executeAIQuery}
                      disabled={!selectedModel || !aiQuery.trim() || isLoading}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-mono"
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Brain className="h-4 w-4 mr-2" />
                          Execute Query
                        </>
                      )}
                    </Button>

                    {aiResponse && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-black/30 border border-gray-700 rounded-lg p-3 sm:p-4"
                      >
                        <div className="flex items-center space-x-2 mb-3">
                          <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                          <span className="text-purple-400 font-mono font-semibold text-sm sm:text-base">
                            AI Response
                          </span>
                        </div>
                        <p className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed">{aiResponse}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>

                {/* Available AI Models */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white font-mono text-lg sm:text-xl">Available AI Models</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {aiModels.map((model) => (
                        <div
                          key={model.id}
                          className="bg-black/30 border border-gray-700 rounded-lg p-3 sm:p-4 hover:border-cyan-500/30 transition-colors cursor-pointer"
                          onClick={() => setSelectedModel(model.id)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-white font-mono font-semibold text-sm sm:text-base">{model.name}</h3>
                            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-mono text-xs">
                              {model.category}
                            </Badge>
                          </div>
                          <p className="text-gray-400 font-mono text-xs sm:text-sm mb-3">
                            Specialized AI model for {model.category.toLowerCase()} tasks
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-purple-400 font-mono text-xs sm:text-sm font-semibold">
                              {model.price}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 bg-transparent text-xs"
                            >
                              Select
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Data Marketplace Tab */}
            <TabsContent value="data-marketplace" className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Upload Data */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white font-mono text-lg sm:text-xl">Upload Data Asset</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-300 font-mono text-sm mb-2 block">Dataset Name</label>
                        <Input
                          placeholder="Enter dataset name..."
                          className="bg-gray-800 border border-gray-700 text-white font-mono text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-gray-300 font-mono text-sm mb-2 block">Category</label>
                        <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white font-mono text-sm">
                          <option>Financial Data</option>
                          <option>Social Media</option>
                          <option>IoT Sensors</option>
                          <option>Market Research</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-300 font-mono text-sm mb-2 block">Description</label>
                      <Textarea
                        placeholder="Describe your dataset..."
                        className="bg-gray-800 border border-gray-700 text-white font-mono text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-300 font-mono text-sm mb-2 block">Price (DSTL)</label>
                        <Input
                          type="number"
                          placeholder="0.00"
                          className="bg-gray-800 border border-gray-700 text-white font-mono text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-gray-300 font-mono text-sm mb-2 block">License Type</label>
                        <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white font-mono text-sm">
                          <option>Commercial Use</option>
                          <option>Research Only</option>
                          <option>Open Source</option>
                        </select>
                      </div>
                    </div>

                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 sm:p-8 text-center">
                      <Upload className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
                      <p className="text-gray-400 font-mono mb-3 sm:mb-4 text-sm">
                        Drag and drop your files here, or click to browse
                      </p>
                      <Button
                        onClick={simulateUpload}
                        disabled={isUploading}
                        variant="outline"
                        className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 bg-transparent"
                      >
                        {isUploading ? "Uploading..." : "Select Files"}
                      </Button>

                      {isUploading && (
                        <div className="mt-4">
                          <div className="w-full bg-gray-800 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${uploadProgress}%` }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                          <p className="text-cyan-400 font-mono text-sm mt-2">
                            Uploading... {Math.round(uploadProgress)}%
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Browse Data Assets */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                      <CardTitle className="text-white font-mono text-lg sm:text-xl">Browse Data Assets</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Input
                          placeholder="Search datasets..."
                          className="bg-gray-800 border border-gray-700 text-white font-mono text-sm w-full sm:w-48"
                        />
                        <Button size="sm" variant="outline" className="border-gray-700 text-gray-300 bg-transparent">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {dataAssets.map((asset) => (
                        <div
                          key={asset.id}
                          className="bg-black/30 border border-gray-700 rounded-lg p-3 sm:p-4 hover:border-cyan-500/30 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-white font-mono font-semibold mb-1 text-sm sm:text-base">
                                {asset.name}
                              </h3>
                              <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                                <span>{asset.size}</span>
                                <span>•</span>
                                <span>{asset.downloads} downloads</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                              <span className="text-yellow-400 font-mono text-xs sm:text-sm">{asset.rating}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-green-400 font-mono font-semibold text-sm">{asset.price}</span>
                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-700 text-gray-300 bg-transparent p-2"
                              >
                                <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                              </Button>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xs"
                              >
                                Purchase
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Staking Tab */}
            <TabsContent value="staking" className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Staking Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <Lock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mx-auto mb-3" />
                      <p className="text-gray-400 text-xs sm:text-sm font-mono mb-1">Total Staked</p>
                      <p className="text-lg sm:text-2xl font-bold text-blue-400 font-mono">892.34 DSTL</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-3" />
                      <p className="text-gray-400 text-xs sm:text-sm font-mono mb-1">Current APY</p>
                      <p className="text-lg sm:text-2xl font-bold text-green-400 font-mono">16.2%</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mx-auto mb-3" />
                      <p className="text-gray-400 text-xs sm:text-sm font-mono mb-1">Pending Rewards</p>
                      <p className="text-lg sm:text-2xl font-bold text-purple-400 font-mono">45.67 DSTL</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Stake Tokens */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white font-mono text-lg sm:text-xl">Stake DSTL Tokens</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-300 font-mono text-sm mb-2 block">Amount to Stake</label>
                        <div className="relative">
                          <Input
                            type="number"
                            value={stakingAmount}
                            onChange={(e) => setStakingAmount(e.target.value)}
                            placeholder="0.00"
                            className="bg-gray-800 border border-gray-700 text-white font-mono pr-16 text-sm"
                          />
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-mono text-sm">
                            DSTL
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs font-mono mt-1">Available: {balance.toFixed(2)} DSTL</p>
                      </div>

                      <div>
                        <label className="text-gray-300 font-mono text-sm mb-2 block">Lock Period</label>
                        <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white font-mono text-sm">
                          <option>30 days (12% APY)</option>
                          <option>90 days (16% APY)</option>
                          <option>180 days (20% APY)</option>
                          <option>365 days (25% APY)</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-black/30 border border-gray-700 rounded-lg p-3 sm:p-4">
                      <h4 className="text-white font-mono font-semibold mb-3 text-sm sm:text-base">
                        Staking Rewards Calculation
                      </h4>
                      <div className="space-y-2 text-xs sm:text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-mono">Staking Amount:</span>
                          <span className="text-white font-mono">{stakingAmount || "0"} DSTL</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-mono">Annual Rewards:</span>
                          <span className="text-green-400 font-mono">
                            {stakingAmount ? (Number.parseFloat(stakingAmount) * 0.16).toFixed(2) : "0"} DSTL
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-mono">Monthly Rewards:</span>
                          <span className="text-green-400 font-mono">
                            {stakingAmount ? ((Number.parseFloat(stakingAmount) * 0.16) / 12).toFixed(2) : "0"} DSTL
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={stakeTokens}
                      disabled={
                        !stakingAmount ||
                        Number.parseFloat(stakingAmount) <= 0 ||
                        Number.parseFloat(stakingAmount) > balance ||
                        isLoading
                      }
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-mono"
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          Staking...
                        </>
                      ) : (
                        <>
                          <Lock className="h-4 w-4 mr-2" />
                          Stake Tokens
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                {/* Active Stakes */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white font-mono text-lg sm:text-xl">Active Stakes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        {
                          amount: "500 DSTL",
                          period: "90 days",
                          apy: "16%",
                          remaining: "45 days",
                          rewards: "32.45 DSTL",
                        },
                        {
                          amount: "300 DSTL",
                          period: "180 days",
                          apy: "20%",
                          remaining: "120 days",
                          rewards: "18.67 DSTL",
                        },
                        {
                          amount: "92.34 DSTL",
                          period: "30 days",
                          apy: "12%",
                          remaining: "12 days",
                          rewards: "2.89 DSTL",
                        },
                      ].map((stake, index) => (
                        <div key={index} className="bg-black/30 border border-gray-700 rounded-lg p-3 sm:p-4">
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 items-center">
                            <div>
                              <p className="text-gray-400 text-xs font-mono">Staked Amount</p>
                              <p className="text-white font-mono font-semibold text-sm">{stake.amount}</p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-xs font-mono">Lock Period</p>
                              <p className="text-white font-mono text-sm">{stake.period}</p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-xs font-mono">APY</p>
                              <p className="text-green-400 font-mono font-semibold text-sm">{stake.apy}</p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-xs font-mono">Time Remaining</p>
                              <p className="text-cyan-400 font-mono text-sm">{stake.remaining}</p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-xs font-mono">Pending Rewards</p>
                              <p className="text-purple-400 font-mono font-semibold text-sm">{stake.rewards}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Governance Tab */}
            <TabsContent value="governance" className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Governance Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mx-auto mb-3" />
                      <p className="text-gray-400 text-xs sm:text-sm font-mono mb-1">Total Voters</p>
                      <p className="text-lg sm:text-2xl font-bold text-blue-400 font-mono">8,934</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mx-auto mb-3" />
                      <p className="text-gray-400 text-xs sm:text-sm font-mono mb-1">Active Proposals</p>
                      <p className="text-lg sm:text-2xl font-bold text-green-400 font-mono">12</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mx-auto mb-3" />
                      <p className="text-gray-400 text-xs sm:text-sm font-mono mb-1">Voting Power</p>
                      <p className="text-lg sm:text-2xl font-bold text-purple-400 font-mono">1,247</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mx-auto mb-3" />
                      <p className="text-gray-400 text-xs sm:text-sm font-mono mb-1">Participation</p>
                      <p className="text-lg sm:text-2xl font-bold text-yellow-400 font-mono">73.2%</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Active Proposals */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white font-mono text-lg sm:text-xl">Active Proposals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 sm:space-y-6">
                      {governanceProposals.map((proposal) => (
                        <div key={proposal.id} className="bg-black/30 border border-gray-700 rounded-lg p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
                            <div className="flex-1">
                              <h3 className="text-white font-mono font-semibold text-base sm:text-lg mb-2">
                                {proposal.title}
                              </h3>
                              <p className="text-gray-400 font-mono text-xs sm:text-sm mb-3">{proposal.description}</p>
                              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                <Badge
                                  className={`${
                                    proposal.status === "Active"
                                      ? "bg-green-500/20 text-green-300 border-green-500/50"
                                      : proposal.status === "Pending"
                                        ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
                                        : "bg-blue-500/20 text-blue-300 border-blue-500/50"
                                  } font-mono text-xs`}
                                >
                                  {proposal.status}
                                </Badge>
                                <span className="text-gray-400 font-mono text-xs sm:text-sm">
                                  Time left: {proposal.timeLeft}
                                </span>
                              </div>
                            </div>
                            <div className="text-left sm:text-right">
                              <p className="text-gray-400 font-mono text-xs sm:text-sm mb-1">Proposal #{proposal.id}</p>
                            </div>
                          </div>

                          {/* Voting Progress */}
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center justify-between text-xs sm:text-sm">
                              <span className="text-green-400 font-mono">
                                For: {proposal.votes.for.toLocaleString()}
                              </span>
                              <span className="text-red-400 font-mono">
                                Against: {proposal.votes.against.toLocaleString()}
                              </span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                                style={{
                                  width: `${(proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100}%`,
                                }}
                              />
                            </div>
                            <div className="text-center">
                              <span className="text-gray-400 font-mono text-xs sm:text-sm">
                                {((proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100).toFixed(
                                  1,
                                )}
                                % in favor
                              </span>
                            </div>
                          </div>

                          {/* Voting Buttons */}
                          {proposal.status === "Active" && (
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-mono text-xs"
                              >
                                <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                                Vote For
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-500/50 text-red-400 hover:bg-red-500/10 bg-transparent text-xs"
                              >
                                <X className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                                Vote Against
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent text-xs"
                              >
                                <Info className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                                Details
                              </Button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Create Proposal */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white font-mono text-lg sm:text-xl">Create New Proposal</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-gray-300 font-mono text-sm mb-2 block">Proposal Title</label>
                      <Input
                        placeholder="Enter proposal title..."
                        className="bg-gray-800 border border-gray-700 text-white font-mono text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-gray-300 font-mono text-sm mb-2 block">Description</label>
                      <Textarea
                        placeholder="Describe your proposal in detail..."
                        className="bg-gray-800 border border-gray-700 text-white font-mono min-h-[100px] sm:min-h-[120px] text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-300 font-mono text-sm mb-2 block">Category</label>
                        <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white font-mono text-sm">
                          <option>Platform Upgrade</option>
                          <option>Economic Policy</option>
                          <option>Technical Change</option>
                          <option>Community Initiative</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-gray-300 font-mono text-sm mb-2 block">Voting Duration</label>
                        <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white font-mono text-sm">
                          <option>7 days</option>
                          <option>14 days</option>
                          <option>30 days</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 sm:p-4">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mt-0.5" />
                        <div>
                          <p className="text-yellow-400 font-mono text-xs sm:text-sm font-semibold mb-1">
                            Proposal Requirements
                          </p>
                          <ul className="text-yellow-400/80 font-mono text-xs space-y-1">
                            <li>• Minimum 1,000 DSTL tokens required to create proposal</li>
                            <li>• Proposal fee: 100 DSTL (refunded if proposal passes)</li>
                            <li>• Minimum 10% participation required for validity</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Button
                      disabled={balance < 1000}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-mono"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Create Proposal (100 DSTL)
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Profile Overview */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                        <span className="text-white font-bold text-xl sm:text-2xl">DS</span>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                          <h2 className="text-xl sm:text-2xl font-bold text-white font-mono">DataSoul User #1247</h2>
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50 font-mono">Verified</Badge>
                        </div>
                        <p className="text-gray-400 font-mono mb-4 text-sm">
                          Active contributor to the DataSoul ecosystem since 2024
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                          <div>
                            <p className="text-gray-400 text-xs sm:text-sm font-mono">Reputation Score</p>
                            <p className="text-cyan-400 font-mono font-bold text-base sm:text-lg">{reputationScore}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs sm:text-sm font-mono">Rank</p>
                            <p className="text-purple-400 font-mono font-bold text-base sm:text-lg">Top 5%</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs sm:text-sm font-mono">Total Earnings</p>
                            <p className="text-green-400 font-mono font-bold text-base sm:text-lg">
                              {totalEarnings.toFixed(0)} DSTL
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-xs sm:text-sm font-mono">Member Since</p>
                            <p className="text-yellow-400 font-mono font-bold text-base sm:text-lg">Jan 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Achievement Badges */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white font-mono text-lg sm:text-xl">Achievement Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {[
                        {
                          name: "Data Provider",
                          level: "Gold",
                          icon: Database,
                          color: "from-yellow-500 to-orange-500",
                          earned: true,
                        },
                        {
                          name: "AI Trainer",
                          level: "Silver",
                          icon: Brain,
                          color: "from-gray-400 to-gray-600",
                          earned: true,
                        },
                        {
                          name: "Validator",
                          level: "Bronze",
                          icon: Shield,
                          color: "from-orange-500 to-red-500",
                          earned: true,
                        },
                        {
                          name: "Governance",
                          level: "Platinum",
                          icon: Users,
                          color: "from-purple-500 to-pink-500",
                          earned: false,
                        },
                        {
                          name: "Staking Master",
                          level: "Gold",
                          icon: Lock,
                          color: "from-yellow-500 to-orange-500",
                          earned: true,
                        },
                        {
                          name: "Community Leader",
                          level: "Diamond",
                          icon: Star,
                          color: "from-cyan-500 to-blue-500",
                          earned: false,
                        },
                        {
                          name: "Bug Hunter",
                          level: "Silver",
                          icon: Search,
                          color: "from-gray-400 to-gray-600",
                          earned: true,
                        },
                        {
                          name: "Early Adopter",
                          level: "Legendary",
                          icon: Zap,
                          color: "from-purple-500 to-pink-500",
                          earned: true,
                        },
                      ].map((badge, index) => (
                        <div
                          key={index}
                          className={`bg-black/30 border rounded-lg p-3 sm:p-4 text-center ${
                            badge.earned ? "border-gray-700" : "border-gray-800 opacity-50"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r ${badge.color} rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center ${
                              !badge.earned && "grayscale"
                            }`}
                          >
                            <badge.icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <h3 className="text-white font-mono font-semibold text-xs sm:text-sm mb-1">{badge.name}</h3>
                          <p className="text-gray-400 font-mono text-xs">{badge.level}</p>
                          {!badge.earned && <p className="text-gray-500 font-mono text-xs mt-1">Not earned</p>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Activity History */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white font-mono text-lg sm:text-xl">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        {
                          type: "AI Query",
                          description: "Executed DeFi market analysis",
                          time: "2 hours ago",
                          icon: Brain,
                          color: "text-purple-400",
                        },
                        {
                          type: "Data Upload",
                          description: "Uploaded 'Crypto Sentiment Dataset'",
                          time: "1 day ago",
                          icon: Upload,
                          color: "text-blue-400",
                        },
                        {
                          type: "Staking",
                          description: "Staked 500 DSTL tokens",
                          time: "3 days ago",
                          icon: Lock,
                          color: "text-green-400",
                        },
                        {
                          type: "Governance",
                          description: "Voted on Proposal #12",
                          time: "5 days ago",
                          icon: Users,
                          color: "text-cyan-400",
                        },
                        {
                          type: "Purchase",
                          description: "Bought 'DeFi Trading Dataset'",
                          time: "1 week ago",
                          icon: Download,
                          color: "text-yellow-400",
                        },
                        {
                          type: "Reward",
                          description: "Received staking rewards",
                          time: "1 week ago",
                          icon: TrendingUp,
                          color: "text-green-400",
                        },
                      ].map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 bg-black/30 rounded-lg"
                        >
                          <activity.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${activity.color}`} />
                          <div className="flex-1">
                            <p className="text-white font-mono text-xs sm:text-sm font-semibold">{activity.type}</p>
                            <p className="text-gray-400 font-mono text-xs">{activity.description}</p>
                          </div>
                          <span className="text-gray-400 font-mono text-xs">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Settings */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white font-mono text-lg sm:text-xl">Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="text-gray-300 font-mono text-sm mb-2 block">Display Name</label>
                          <Input
                            defaultValue="DataSoul User #1247"
                            className="bg-gray-800 border border-gray-700 text-white font-mono text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 font-mono text-sm mb-2 block">Email</label>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-gray-800 border border-gray-700 text-white font-mono text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 font-mono text-sm mb-2 block">Bio</label>
                          <Textarea
                            placeholder="Tell us about yourself..."
                            className="bg-gray-800 border border-gray-700 text-white font-mono text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-mono font-semibold mb-3 text-sm sm:text-base">
                            Notification Preferences
                          </h4>
                          <div className="space-y-3">
                            {[
                              { label: "Email notifications", checked: true },
                              { label: "Push notifications", checked: false },
                              { label: "Governance updates", checked: true },
                              { label: "Staking rewards", checked: true },
                              { label: "Market alerts", checked: false },
                            ].map((pref, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <input
                                  type="checkbox"
                                  defaultChecked={pref.checked}
                                  className="w-4 h-4 text-cyan-600 bg-gray-800 border-gray-700 rounded focus:ring-cyan-500"
                                />
                                <span className="text-gray-300 font-mono text-xs sm:text-sm">{pref.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-mono font-semibold mb-3 text-sm sm:text-base">
                            Privacy Settings
                          </h4>
                          <div className="space-y-3">
                            {[
                              { label: "Public profile", checked: true },
                              { label: "Show activity history", checked: false },
                              { label: "Show earnings", checked: false },
                              { label: "Show reputation score", checked: true },
                            ].map((pref, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <input
                                  type="checkbox"
                                  defaultChecked={pref.checked}
                                  className="w-4 h-4 text-cyan-600 bg-gray-800 border-gray-700 rounded focus:ring-cyan-500"
                                />
                                <span className="text-gray-300 font-mono text-xs sm:text-sm">{pref.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4 border-t border-gray-700">
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-mono">
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reset
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm mt-12 sm:mt-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-3 w-3 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-white font-mono font-semibold text-sm sm:text-base">DataSoul Platform</p>
                  <p className="text-gray-400 font-mono text-xs">Decentralized AI & Data Intelligence</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-mono">All Systems Operational</span>
                </div>
                <span className="text-gray-400 font-mono">v2.1.0</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Connection Status Modal */}
      <AnimatePresence>
        {!isConnected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 max-w-md w-full"
            >
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-white font-mono font-bold text-lg sm:text-xl mb-2">Connect Your Wallet</h3>
                <p className="text-gray-400 font-mono text-sm mb-6">
                  Connect your wallet to access all DataSoul platform features
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={connectWallet}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-mono"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <Wallet className="h-4 w-4 mr-2" />
                        Connect Wallet
                      </>
                    )}
                  </Button>
                  <p className="text-gray-500 font-mono text-xs">
                    Supported wallets: MetaMask, WalletConnect, Coinbase Wallet
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
