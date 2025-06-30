"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Book, Code, Search, ExternalLink, Copy, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { CyberCard } from "@/components/ui/cyber-card"
import { CyberButton } from "@/components/ui/cyber-button"
import { BackgroundEffects } from "@/components/background-effects"

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("getting-started")

  const categories = [
    { id: "getting-started", label: "Getting Started", icon: Book },
    { id: "api", label: "API Reference", icon: Code },
    { id: "smart-contracts", label: "Smart Contracts", icon: Code },
    { id: "sdk", label: "SDK & Tools", icon: Code },
  ]

  const docs = {
    "getting-started": [
      {
        title: "Introduction to DataSoul",
        description: "Overview of the DataSoul ecosystem and core concepts",
        content: "Learn about InfoFi, SocialFi, and AI integration",
        difficulty: "Beginner",
      },
      {
        title: "Setting Up Your Wallet",
        description: "Connect your wallet and start using DataSoul",
        content: "Step-by-step wallet connection guide",
        difficulty: "Beginner",
      },
      {
        title: "First Data Upload",
        description: "Upload your first dataset to the marketplace",
        content: "Complete tutorial for data contributors",
        difficulty: "Intermediate",
      },
    ],
    api: [
      {
        title: "Authentication",
        description: "API authentication and authorization",
        content: "JWT tokens, API keys, and security best practices",
        difficulty: "Intermediate",
      },
      {
        title: "Data Marketplace API",
        description: "Interact with the data marketplace programmatically",
        content: "REST endpoints for browsing and purchasing data",
        difficulty: "Advanced",
      },
      {
        title: "AI Services API",
        description: "Access AI models and services via API",
        content: "Machine learning inference and model management",
        difficulty: "Advanced",
      },
    ],
    "smart-contracts": [
      {
        title: "DSTL Token Contract",
        description: "ERC-20 token contract documentation",
        content: "Token functions, events, and integration guide",
        difficulty: "Advanced",
      },
      {
        title: "Staking Contracts",
        description: "Staking mechanism and reward distribution",
        content: "Smart contract architecture and security features",
        difficulty: "Advanced",
      },
      {
        title: "Governance Contracts",
        description: "DAO governance and voting mechanisms",
        content: "Proposal creation, voting, and execution",
        difficulty: "Expert",
      },
    ],
    sdk: [
      {
        title: "JavaScript SDK",
        description: "Official JavaScript/TypeScript SDK",
        content: "Installation, configuration, and usage examples",
        difficulty: "Intermediate",
      },
      {
        title: "Python SDK",
        description: "Python library for DataSoul integration",
        content: "Data science and AI model integration",
        difficulty: "Intermediate",
      },
      {
        title: "CLI Tools",
        description: "Command-line tools for developers",
        content: "Deployment, testing, and management utilities",
        difficulty: "Advanced",
      },
    ],
  }

  const codeExamples = [
    {
      title: "Connect to DataSoul",
      language: "javascript",
      code: `import { DataSoul } from '@datasoul/sdk';

const datasoul = new DataSoul({
  network: 'mainnet',
  apiKey: 'your-api-key'
});

await datasoul.connect();`,
    },
    {
      title: "Upload Dataset",
      language: "javascript",
      code: `const dataset = await datasoul.data.upload({
  title: 'Market Analysis Q4 2024',
  description: 'Comprehensive market data',
  file: fileBuffer,
  price: '100',
  category: 'financial'
});`,
    },
    {
      title: "Query AI Service",
      language: "python",
      code: `from datasoul import DataSoul

client = DataSoul(api_key="your-key")

result = client.ai.analyze(
    model="sentiment-analysis",
    data={"text": "DataSoul is amazing!"}
)`,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      <BackgroundEffects />

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-mono">
                Developer Documentation
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                Documentation
              </h1>
              <p className="text-xl text-cyan-300/70 max-w-4xl mx-auto font-mono leading-relaxed">
                Complete guides, API references, and tutorials to help you build on the DataSoul platform
              </p>
            </motion.div>
          </div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-400" />
              <Input
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-black/50 border-cyan-500/30 text-white placeholder-cyan-300/50 font-mono h-12 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="sticky top-24"
              >
                <CyberCard glowColor="cyan" className="p-6">
                  <h3 className="text-white font-mono font-bold text-lg mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 font-mono text-sm ${
                          selectedCategory === category.id
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                            : "text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                        }`}
                      >
                        <category.icon className="h-4 w-4" />
                        <span>{category.label}</span>
                      </button>
                    ))}
                  </div>
                </CyberCard>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                  {categories.find((c) => c.id === selectedCategory)?.label}
                </h2>

                <div className="space-y-6">
                  {docs[selectedCategory as keyof typeof docs]?.map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <CyberCard
                        glowColor="cyan"
                        className="p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                      >
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-white font-mono font-bold text-lg mb-2">{doc.title}</h3>
                              <p className="text-cyan-300/80 font-mono text-sm mb-3">{doc.description}</p>
                              <p className="text-gray-400 font-mono text-xs">{doc.content}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge
                                className={`${
                                  doc.difficulty === "Beginner"
                                    ? "bg-green-500/20 text-green-300 border-green-500/50"
                                    : doc.difficulty === "Intermediate"
                                      ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                                      : doc.difficulty === "Advanced"
                                        ? "bg-purple-500/20 text-purple-300 border-purple-500/50"
                                        : "bg-red-500/20 text-red-300 border-red-500/50"
                                }`}
                              >
                                {doc.difficulty}
                              </Badge>
                              <ExternalLink className="h-4 w-4 text-cyan-400" />
                            </div>
                          </div>
                        </div>
                      </CyberCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Code Examples
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Get started quickly with these code snippets and examples
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor="purple" className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-mono font-bold">{example.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-purple-500/50 text-purple-300 font-mono text-xs">
                          {example.language}
                        </Badge>
                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4 border border-purple-500/20">
                      <pre className="text-cyan-300 font-mono text-sm overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Quick Links
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">Essential resources for developers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "GitHub Repository",
                description: "Access the open-source codebase and contribute",
                icon: Code,
                color: "cyan" as const,
                link: "https://github.com/datasoul",
              },
              {
                title: "API Playground",
                description: "Test API endpoints in an interactive environment",
                icon: Book,
                color: "purple" as const,
                link: "/api-playground",
              },
              {
                title: "Community Forum",
                description: "Get help from the developer community",
                icon: CheckCircle,
                color: "blue" as const,
                link: "/community",
              },
            ].map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor={link.color} className="p-6 h-full">
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${
                        link.color === "cyan"
                          ? "from-cyan-500 to-blue-600"
                          : link.color === "purple"
                            ? "from-purple-500 to-pink-600"
                            : "from-blue-500 to-indigo-600"
                      } rounded-lg flex items-center justify-center shadow-lg`}
                    >
                      <link.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-mono font-bold text-lg">{link.title}</h3>
                    <p className="text-cyan-300/80 font-mono text-sm leading-relaxed">{link.description}</p>
                    <CyberButton color={link.color} variant="outline" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit
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
