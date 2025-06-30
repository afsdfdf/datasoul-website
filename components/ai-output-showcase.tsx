"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, FileText, ImageIcon, BarChart3, MessageSquare, Code, Zap, Download, Eye, ThumbsUp } from "lucide-react"

export function AIOutputShowcase() {
  const outputs = [
    {
      type: "Text Generation",
      title: "DeFi Market Analysis Report",
      description: "Comprehensive analysis of current DeFi trends and predictions",
      model: "DataSoul GPT-4",
      timestamp: "2 minutes ago",
      icon: FileText,
      color: "from-blue-500 to-purple-600",
      preview:
        "The DeFi market shows strong bullish indicators with TVL increasing by 23% this quarter. Key drivers include...",
      metrics: { accuracy: "96.8%", tokens: "2,847", confidence: "High" },
      tags: ["Analysis", "DeFi", "Market Research"],
    },
    {
      type: "Data Visualization",
      title: "Token Price Correlation Chart",
      description: "Interactive visualization of token price correlations",
      model: "DataViz AI",
      timestamp: "5 minutes ago",
      icon: BarChart3,
      color: "from-green-500 to-emerald-600",
      preview: "Generated interactive chart showing correlation patterns between top 50 DeFi tokens",
      metrics: { accuracy: "94.2%", dataPoints: "10K+", confidence: "High" },
      tags: ["Visualization", "Analytics", "Correlation"],
    },
    {
      type: "Code Generation",
      title: "Smart Contract Audit Script",
      description: "Automated security audit script for ERC-20 tokens",
      model: "CodeAI Pro",
      timestamp: "8 minutes ago",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      preview:
        "// Automated security audit for ERC-20 contracts\nfunction auditContract(address) {\n  // Check for common vulnerabilities...",
      metrics: { accuracy: "98.1%", lines: "247", confidence: "Very High" },
      tags: ["Security", "Smart Contracts", "Audit"],
    },
    {
      type: "Image Generation",
      title: "NFT Collection Concept Art",
      description: "AI-generated concept art for blockchain gaming NFTs",
      model: "ArtGen AI",
      timestamp: "12 minutes ago",
      icon: ImageIcon,
      color: "from-cyan-500 to-blue-600",
      preview: "Cyberpunk-themed character designs with blockchain elements and futuristic aesthetics",
      metrics: { resolution: "1024x1024", style: "Cyberpunk", confidence: "High" },
      tags: ["NFT", "Art", "Gaming"],
    },
    {
      type: "Sentiment Analysis",
      title: "Community Sentiment Report",
      description: "Real-time sentiment analysis of crypto community discussions",
      model: "SentimentAI",
      timestamp: "15 minutes ago",
      icon: MessageSquare,
      color: "from-orange-500 to-red-600",
      preview:
        "Overall sentiment: Bullish (73%) | Key topics: DeFi adoption, regulatory clarity, institutional interest",
      metrics: { sources: "15K+", sentiment: "Bullish", confidence: "High" },
      tags: ["Sentiment", "Community", "Social"],
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white font-mono">AI Output Showcase</h2>
        </div>
        <p className="text-gray-400 font-mono max-w-2xl mx-auto">
          Real-time AI-generated content from the DataSoul network
        </p>
      </motion.div>

      {/* Output Grid */}
      <div className="space-y-6">
        {outputs.map((output, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/30 transition-all relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${output.color} opacity-5`} />
              <CardContent className="p-6 relative z-10">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Output Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${output.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <output.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-white font-mono font-bold text-lg">{output.title}</h3>
                            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-mono text-xs">
                              {output.type}
                            </Badge>
                          </div>
                          <p className="text-gray-400 font-mono text-sm">{output.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span>Model: {output.model}</span>
                            <span>•</span>
                            <span>{output.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-300 font-mono text-sm font-semibold">Output Preview</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-green-400 text-xs font-mono">Generated</span>
                        </div>
                      </div>

                      {output.type === "Code Generation" ? (
                        <div className="bg-gray-900 rounded p-3 font-mono text-sm text-green-400 border border-gray-700">
                          <pre className="whitespace-pre-wrap">{output.preview}</pre>
                        </div>
                      ) : output.type === "Data Visualization" ? (
                        <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                          <div className="flex items-center justify-center space-x-4 mb-3">
                            <div className="text-center">
                              <div className="w-8 h-8 bg-transparent rounded-lg flex items-center justify-center mb-1">
                                <BarChart3 className="h-4 w-4 text-cyan-400" />
                              </div>
                              <span className="text-xs text-blue-300 font-mono">Chart</span>
                            </div>
                            <div className="flex-1 mx-4 relative">
                              <div className="flex space-x-1 h-8">
                                {[...Array(8)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className={`flex-1 bg-gradient-to-t ${output.color} opacity-60 rounded-sm`}
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
                          </div>
                          <p className="text-gray-300 font-mono text-sm">{output.preview}</p>
                        </div>
                      ) : output.type === "Image Generation" ? (
                        <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className={`aspect-square bg-gradient-to-br ${output.color} opacity-20 rounded-lg`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-300 font-mono text-sm">{output.preview}</p>
                        </div>
                      ) : (
                        <div className="text-gray-300 font-mono text-sm leading-relaxed">{output.preview}</div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {output.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="border-gray-600 text-gray-300 font-mono text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics & Actions */}
                  <div className="space-y-4">
                    {/* Metrics */}
                    <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                      <div className="text-gray-300 font-mono text-sm font-semibold mb-3">Output Metrics</div>
                      <div className="space-y-3">
                        {Object.entries(output.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="flex items-center justify-between">
                            <span className="text-gray-400 text-xs capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                            <span className="text-cyan-400 font-mono text-sm font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quality Score */}
                    <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-4 border border-green-500/30">
                      <div className="text-green-300 font-mono text-sm font-semibold mb-2">Quality Score</div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "94%" }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                        <span className="text-green-400 font-mono text-sm font-bold">94%</span>
                      </div>
                      <div className="text-green-400/80 text-xs font-mono">Verified by community</div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Button size="sm" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-mono">
                        <Eye className="h-4 w-4 mr-2" />
                        View Full Output
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-800 font-mono bg-transparent"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-800 font-mono bg-transparent"
                        >
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Rate
                        </Button>
                      </div>
                    </div>

                    {/* Usage Stats */}
                    <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700">
                      <div className="text-gray-400 text-xs font-mono mb-2">Usage Statistics</div>
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div>
                          <div className="text-purple-400 font-mono text-sm font-bold">
                            {Math.floor(Math.random() * 500 + 100)}
                          </div>
                          <div className="text-gray-500 text-xs">Views</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-mono text-sm font-bold">
                            {Math.floor(Math.random() * 50 + 10)}
                          </div>
                          <div className="text-gray-500 text-xs">Downloads</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Generation Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-white font-mono font-bold text-xl mb-2">Generation Statistics</h3>
              <p className="text-gray-400 font-mono text-sm">Real-time metrics from AI content generation</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total Outputs", value: "24.7K", icon: Zap, color: "purple" },
                { label: "Active Models", value: "89", icon: Brain, color: "blue" },
                { label: "Avg. Quality", value: "94.2%", icon: BarChart3, color: "green" },
                { label: "Response Time", value: "1.2s", icon: MessageSquare, color: "cyan" },
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
