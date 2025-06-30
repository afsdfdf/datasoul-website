"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Star, Download, Zap, TrendingUp, Users, Activity, Database } from "lucide-react"

export function AIModelMarketplace() {
  const models = [
    {
      name: "DataSoul GPT-4 Fine-tuned",
      category: "Language Model",
      description: "Specialized for data analysis and blockchain queries",
      rating: 4.9,
      downloads: "12.4K",
      price: "250 DSTL",
      accuracy: "96.8%",
      latency: "120ms",
      provider: "DataSoul Labs",
      tags: ["NLP", "Analysis", "Blockchain"],
      status: "Featured",
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "DeFi Prediction Engine",
      category: "Financial ML",
      description: "Advanced price prediction for DeFi tokens",
      rating: 4.7,
      downloads: "8.9K",
      price: "180 DSTL",
      accuracy: "89.2%",
      latency: "85ms",
      provider: "CryptoAI",
      tags: ["DeFi", "Prediction", "Trading"],
      status: "Popular",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Social Sentiment Analyzer",
      category: "Sentiment Analysis",
      description: "Real-time social media sentiment for crypto projects",
      rating: 4.6,
      downloads: "6.2K",
      price: "120 DSTL",
      accuracy: "92.5%",
      latency: "95ms",
      provider: "SentimentLab",
      tags: ["Social", "Sentiment", "Analytics"],
      status: "New",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "NFT Valuation Model",
      category: "Computer Vision",
      description: "AI-powered NFT rarity and price estimation",
      rating: 4.5,
      downloads: "4.8K",
      price: "200 DSTL",
      accuracy: "87.3%",
      latency: "150ms",
      provider: "NFTVision",
      tags: ["NFT", "Vision", "Valuation"],
      status: "Trending",
      color: "from-purple-500 to-pink-600",
    },
  ]

  const categories = [
    { name: "Language Models", count: 24, icon: Brain, color: "blue" },
    { name: "Financial ML", count: 18, icon: TrendingUp, color: "green" },
    { name: "Computer Vision", count: 15, icon: Activity, color: "purple" },
    { name: "Data Analytics", count: 32, icon: Database, color: "cyan" },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Marketplace Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white font-mono">AI Model Marketplace</h2>
        </div>
        <p className="text-gray-400 font-mono max-w-2xl mx-auto">
          Discover, deploy, and monetize AI models on the decentralized DataSoul network
        </p>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {categories.map((category, index) => (
          <Card
            key={index}
            className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/30 transition-all cursor-pointer"
          >
            <CardContent className="p-4 text-center">
              <div
                className="w-10 h-10 bg-transparent rounded-lg mx-auto mb-3 flex items-center justify-center"
              >
                <category.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="text-white font-mono font-semibold text-sm">{category.name}</div>
              <div className="text-gray-400 text-xs">{category.count} models</div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Featured Models */}
      <div className="grid lg:grid-cols-2 gap-6">
        {models.map((model, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/30 transition-all h-full relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-5`} />
              <CardContent className="p-6 space-y-4 relative z-10">
                {/* Model Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-white font-mono font-bold text-lg">{model.name}</h3>
                      <Badge
                        className={`${
                          model.status === "Featured"
                            ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
                            : model.status === "Popular"
                              ? "bg-green-500/20 text-green-300 border-green-500/50"
                              : model.status === "New"
                                ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                                : "bg-purple-500/20 text-purple-300 border-purple-500/50"
                        } font-mono text-xs`}
                      >
                        {model.status}
                      </Badge>
                    </div>
                    <div className="text-cyan-400 font-mono text-sm mb-1">{model.category}</div>
                    <p className="text-gray-400 font-mono text-sm">{model.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-mono font-bold text-lg">{model.price}</div>
                    <div className="text-gray-400 text-xs">per 1K requests</div>
                  </div>
                </div>

                {/* Model Stats */}
                <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 font-mono font-bold">{model.rating}</span>
                      </div>
                      <div className="text-gray-400 text-xs">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Download className="h-4 w-4 text-cyan-400" />
                        <span className="text-cyan-400 font-mono font-bold">{model.downloads}</span>
                      </div>
                      <div className="text-gray-400 text-xs">Downloads</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-green-400 font-mono font-bold">{model.accuracy}</div>
                      <div className="text-gray-400 text-xs">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-mono font-bold">{model.latency}</div>
                      <div className="text-gray-400 text-xs">Latency</div>
                    </div>
                  </div>
                </div>

                {/* Performance Visualization */}
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-mono text-sm">Performance Metrics</span>
                    <div className="flex items-center space-x-1">
                      <Activity className="h-3 w-3 text-green-400" />
                      <span className="text-green-400 text-xs">Live</span>
                    </div>
                  </div>
                  <div className="flex space-x-1 h-6">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`flex-1 bg-gradient-to-t ${model.color} opacity-60 rounded-sm`}
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

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {model.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-gray-600 text-gray-300 font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Provider Info */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                      <Users className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-400 font-mono text-sm">{model.provider}</span>
                  </div>
                  <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white font-mono">
                    Deploy Model
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Marketplace Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-white font-mono font-bold text-xl mb-2">Marketplace Statistics</h3>
              <p className="text-gray-400 font-mono text-sm">Real-time metrics from the DataSoul AI ecosystem</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total Models", value: "89", icon: Brain, color: "blue" },
                { label: "Active Providers", value: "34", icon: Users, color: "green" },
                { label: "Total Requests", value: "2.4M", icon: Zap, color: "purple" },
                { label: "Avg. Response", value: "98ms", icon: Activity, color: "cyan" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="w-12 h-12 bg-transparent rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg"
                  >
                    <stat.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className={`text-${stat.color}-400 font-mono text-2xl font-bold`}>{stat.value}</div>
                  <div className="text-gray-400 font-mono text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
