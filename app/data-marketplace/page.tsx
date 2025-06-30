"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Database, Search, TrendingUp, Star, Download, Eye, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { CyberCard } from "@/components/ui/cyber-card"
import { CyberButton } from "@/components/ui/cyber-button"
import { BackgroundEffects } from "@/components/background-effects"

export default function DataMarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("trending")

  const categories = [
    { id: "all", label: "All Data", count: 1247 },
    { id: "financial", label: "Financial", count: 342 },
    { id: "social", label: "Social Media", count: 189 },
    { id: "iot", label: "IoT Sensors", count: 156 },
    { id: "research", label: "Research", count: 234 },
    { id: "market", label: "Market Data", count: 326 },
  ]

  const dataAssets = [
    {
      id: 1,
      title: "DeFi Trading Patterns Q4 2024",
      description: "Comprehensive analysis of DeFi trading behaviors across major protocols",
      category: "Financial",
      price: "250 DSTL",
      rating: 4.8,
      downloads: 1234,
      size: "2.3 GB",
      format: "JSON, CSV",
      verified: true,
      trending: true,
      preview: true,
    },
    {
      id: 2,
      title: "Social Sentiment Analysis Dataset",
      description: "Real-time social media sentiment data for crypto markets",
      category: "Social Media",
      price: "180 DSTL",
      rating: 4.6,
      downloads: 892,
      size: "1.8 GB",
      format: "JSON",
      verified: true,
      trending: false,
      preview: true,
    },
    {
      id: 3,
      title: "IoT Environmental Sensors",
      description: "Global environmental data from IoT sensor networks",
      category: "IoT Sensors",
      price: "320 DSTL",
      rating: 4.9,
      downloads: 567,
      size: "4.1 GB",
      format: "CSV, XML",
      verified: true,
      trending: true,
      preview: false,
    },
    {
      id: 4,
      title: "AI Model Training Dataset",
      description: "Curated dataset for training financial prediction models",
      category: "Research",
      price: "450 DSTL",
      rating: 4.7,
      downloads: 234,
      size: "6.2 GB",
      format: "TensorFlow, PyTorch",
      verified: true,
      trending: false,
      preview: true,
    },
    {
      id: 5,
      title: "Crypto Market Microstructure",
      description: "High-frequency trading data and order book analysis",
      category: "Market Data",
      price: "380 DSTL",
      rating: 4.5,
      downloads: 445,
      size: "3.7 GB",
      format: "HDF5, Parquet",
      verified: true,
      trending: true,
      preview: false,
    },
    {
      id: 6,
      title: "Consumer Behavior Analytics",
      description: "Anonymized consumer behavior patterns and preferences",
      category: "Research",
      price: "290 DSTL",
      rating: 4.4,
      downloads: 678,
      size: "2.9 GB",
      format: "JSON, CSV",
      verified: false,
      trending: false,
      preview: true,
    },
  ]

  const filteredAssets = dataAssets.filter((asset) => {
    const matchesSearch =
      asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || asset.category.toLowerCase().includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      <BackgroundEffects />

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-mono">Data Marketplace</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                Discover & Trade Data
              </h1>
              <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
                Access premium datasets, AI models, and research insights from the global DataSoul community
              </p>
            </motion.div>
          </div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto mb-12"
          >
            <CyberCard glowColor="cyan" className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-400" />
                  <Input
                    placeholder="Search datasets, models, research..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-black/50 border-cyan-500/30 text-white placeholder-cyan-300/50 font-mono"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-black/50 border border-cyan-500/30 rounded-lg px-3 py-2 text-white font-mono"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label} ({category.count})
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-black/50 border border-cyan-500/30 rounded-lg px-3 py-2 text-white font-mono"
                >
                  <option value="trending">Trending</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Marketplace Stats */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Datasets", value: "1,247", icon: Database, color: "cyan" as const },
              { label: "Active Traders", value: "8,934", icon: TrendingUp, color: "blue" as const },
              { label: "Total Volume", value: "2.4M DSTL", icon: Zap, color: "purple" as const },
              { label: "Verified Assets", value: "892", icon: Shield, color: "green" as const },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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

      {/* Data Assets Grid */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredAssets.map((asset, index) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor="cyan" className="p-6 h-full">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-white font-mono font-bold text-lg">{asset.title}</h3>
                          {asset.verified && <Shield className="h-4 w-4 text-green-400" title="Verified Dataset" />}
                          {asset.trending && (
                            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/50 text-xs">
                              Trending
                            </Badge>
                          )}
                        </div>
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 font-mono text-xs">
                          {asset.category}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold font-mono text-lg">{asset.price}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-gray-400 text-xs font-mono">{asset.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-cyan-300/80 font-mono text-sm leading-relaxed">{asset.description}</p>

                    {/* Metadata */}
                    <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                      <div>
                        <span className="text-gray-400">Size:</span>
                        <span className="text-cyan-300 ml-1">{asset.size}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Format:</span>
                        <span className="text-cyan-300 ml-1">{asset.format}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Downloads:</span>
                        <span className="text-cyan-300 ml-1">{asset.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="h-3 w-3 text-cyan-400" />
                        <span className="text-cyan-300">{asset.downloads}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-4">
                      {asset.preview && (
                        <CyberButton color="blue" variant="outline" size="sm" className="flex-1">
                          <Eye className="h-3 w-3 mr-1" />
                          Preview
                        </CyberButton>
                      )}
                      <CyberButton color="cyan" size="sm" className="flex-1">
                        <Download className="h-3 w-3 mr-1" />
                        Purchase
                      </CyberButton>
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <CyberButton color="cyan" size="lg">
              Load More Datasets
            </CyberButton>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Featured Collections
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Curated datasets and AI models from top contributors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "DeFi Analytics Suite",
                description: "Complete DeFi ecosystem analysis tools and datasets",
                items: 12,
                totalValue: "2,450 DSTL",
                color: "cyan" as const,
              },
              {
                title: "AI Training Collection",
                description: "Pre-processed datasets optimized for machine learning",
                items: 8,
                totalValue: "1,890 DSTL",
                color: "purple" as const,
              },
              {
                title: "Market Intelligence",
                description: "Real-time market data and predictive analytics",
                items: 15,
                totalValue: "3,200 DSTL",
                color: "blue" as const,
              },
            ].map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor={collection.color} className="p-6 h-full">
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${
                        collection.color === "cyan"
                          ? "from-cyan-500 to-blue-600"
                          : collection.color === "purple"
                            ? "from-purple-500 to-pink-600"
                            : "from-blue-500 to-indigo-600"
                      } rounded-lg flex items-center justify-center shadow-lg`}
                    >
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-mono font-bold text-lg">{collection.title}</h3>
                    <p className="text-cyan-300/80 font-mono text-sm leading-relaxed">{collection.description}</p>
                    <div className="flex justify-between text-sm font-mono">
                      <span className="text-gray-400">{collection.items} items</span>
                      <span className="text-cyan-400 font-bold">{collection.totalValue}</span>
                    </div>
                    <CyberButton color={collection.color} variant="outline" className="w-full">
                      View Collection
                    </CyberButton>
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
