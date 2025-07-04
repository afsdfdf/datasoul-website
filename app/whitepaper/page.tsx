"use client"

import { Badge } from "@/components/ui/badge"
import { FileText, Download, Share, BookOpen, Lightbulb, Target, Users, Zap, Database, Shield, Globe, Brain, TrendingUp, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { CyberCard } from "@/components/ui/cyber-card"
import { CyberButton } from "@/components/ui/cyber-button"
import { BackgroundEffects } from "@/components/background-effects"
import Link from "next/link"

export default function WhitepaperPage() {
  const sections = [
    {
      id: "abstract",
      title: "Abstract",
      description: "Executive summary of DataSoul's vision and approach",
      pages: "2-3",
      icon: Target,
    },
    {
      id: "introduction",
      title: "Introduction",
      description: "The current state of data monetization and market opportunities",
      pages: "4-8",
      icon: BookOpen,
    },
    {
      id: "technology",
      title: "Technology Architecture",
      description: "Technical implementation details and system design",
      pages: "9-18",
      icon: Zap,
    },
    {
      id: "tokenomics",
      title: "Tokenomics",
      description: "DSTL token economics, distribution, and utility",
      pages: "19-25",
      icon: Users,
    },
    {
      id: "governance",
      title: "Governance Model",
      description: "Decentralized governance structure and voting mechanisms",
      pages: "26-30",
      icon: Lightbulb,
    },
    {
      id: "roadmap",
      title: "Roadmap & Implementation",
      description: "Development timeline and future milestones",
      pages: "31-35",
      icon: FileText,
    },
  ]

  const keyHighlights = [
    {
      title: "Novel InfoFi Protocol",
      description: "First-of-its-kind information finance protocol combining AI and blockchain",
      color: "cyan" as const,
      icon: Database,
    },
    {
      title: "Privacy-Preserving AI",
      description: "Federated learning and zero-knowledge proofs for data privacy",
      color: "blue" as const,
      icon: Shield,
    },
    {
      title: "Multi-Chain Architecture",
      description: "Deployed across Ethereum, Arbitrum, and Cosmos for maximum reach",
      color: "purple" as const,
      icon: Globe,
    },
    {
      title: "Sustainable Economics",
      description: "Deflationary tokenomics with multiple value accrual mechanisms",
      color: "green" as const,
      icon: TrendingUp,
    },
  ]

  const technicalSpecs = [
    {
      title: "Performance Metrics",
      items: [
        "10,000+ TPS throughput",
        "< 100ms latency",
        "99.9% uptime guarantee",
        "Horizontal scalability"
      ]
    },
    {
      title: "Security Features",
      items: [
        "AES-256 encryption",
        "HSM key management",
        "Multi-sig access control",
        "Continuous security audits"
      ]
    },
    {
      title: "AI Capabilities",
      items: [
        "Natural language processing",
        "Computer vision models",
        "Predictive analytics",
        "Federated learning systems"
      ]
    }
  ]

  const useCases = [
    {
      title: "Data Monetization",
      description: "Turn your data into tradable assets through our InfoFi marketplace",
      icon: Database,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Social Influence",
      description: "Monetize your social interactions and build on-chain reputation",
      icon: Users,
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "AI Integration",
      description: "Access specialized AI models and contribute to their improvement",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Multi-Chain Deployment",
      description: "Deploy across multiple blockchains for maximum reach and liquidity",
      icon: Globe,
      color: "from-green-500 to-emerald-600",
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
                Technical Documentation
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                DataSoul Whitepaper
              </h1>
              <p className="text-xl text-cyan-300/70 max-w-4xl mx-auto font-mono leading-relaxed">
                Comprehensive technical documentation outlining DataSoul's vision, architecture, and implementation
                strategy for the future of data monetization.
              </p>
            </motion.div>
          </div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <CyberCard glowColor="cyan" className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white font-mono">DataSoul Whitepaper v2.1</h2>
                      <p className="text-cyan-400 font-mono">Released January 2024 • 35 pages</p>
                    </div>
                  </div>
                  <p className="text-cyan-300/80 font-mono text-sm leading-relaxed mb-6">
                    Deep dive into DataSoul's technical architecture, tokenomics, and roadmap. Essential reading for
                    developers, investors, and community members.
                  </p>
                  <div className="flex space-x-4">
                    <CyberButton color="cyan" size="lg">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </CyberButton>
                    <CyberButton color="blue" variant="outline" size="lg">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </CyberButton>
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-6 border border-cyan-500/20">
                  <div className="aspect-[3/4] bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-lg flex items-center justify-center border border-cyan-500/20">
                    <div className="text-center">
                      <FileText className="h-16 w-16 mx-auto mb-4 text-cyan-400" />
                      <p className="text-cyan-300 font-mono">Whitepaper Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Key Highlights
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Core innovations and breakthrough concepts introduced in the whitepaper
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor={highlight.color} className="p-6 h-full text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${
                      highlight.color === "cyan"
                        ? "from-cyan-500 to-blue-600"
                        : highlight.color === "blue"
                          ? "from-blue-500 to-purple-600"
                          : highlight.color === "purple"
                            ? "from-purple-500 to-pink-600"
                            : "from-green-500 to-emerald-600"
                    } rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white font-mono font-bold text-lg mb-3">{highlight.title}</h3>
                  <p className="text-cyan-300/80 font-mono text-sm leading-relaxed">{highlight.description}</p>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Table of Contents
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Comprehensive coverage of DataSoul's technology and vision
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CyberCard
                    glowColor="cyan"
                    className="p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-mono font-bold text-lg">{section.title}</h3>
                          <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 font-mono">
                            Pages {section.pages}
                          </Badge>
                        </div>
                        <p className="text-cyan-300/80 font-mono text-sm">{section.description}</p>
                      </div>
                      <div className="text-cyan-400">
                        <BookOpen className="h-5 w-5" />
                      </div>
                    </div>
                  </CyberCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Technology Overview
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Built on cutting-edge blockchain and AI technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor="blue" className="p-6 h-full">
                  <h3 className="text-white font-mono font-bold text-lg mb-4">{spec.title}</h3>
                  <ul className="space-y-2">
                    {spec.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-cyan-400/50 shadow-lg" />
                        <span className="text-cyan-300/80 font-mono text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Use Cases & Applications
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Real-world applications of the DataSoul technology stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor="purple" className="p-6 h-full">
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.color} flex items-center justify-center shadow-lg`}
                    >
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-mono font-bold text-lg">{useCase.title}</h3>
                    <p className="text-cyan-300/70 text-sm leading-relaxed font-mono">{useCase.description}</p>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Preview */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Tokenomics Preview
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Key economic principles of the DSTL token ecosystem
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <CyberCard glowColor="green" className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono mb-6">Token Distribution</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                        <span className="text-cyan-300 font-mono">Foundation Reserve</span>
                      </div>
                      <span className="text-white font-mono">30%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-cyan-300 font-mono">Community Rewards</span>
                      </div>
                      <span className="text-white font-mono">25%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-cyan-300 font-mono">Team & Advisors</span>
                      </div>
                      <span className="text-white font-mono">20%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                        <span className="text-cyan-300 font-mono">Public Sale</span>
                      </div>
                      <span className="text-white font-mono">15%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-cyan-300 font-mono">Liquidity Pool</span>
                      </div>
                      <span className="text-white font-mono">10%</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link href="/tokenomics">
                      <CyberButton color="green" size="lg">
                        Full Tokenomics <ArrowRight className="ml-2 h-4 w-4" />
                      </CyberButton>
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono mb-6">Token Utility</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="mt-1">
                        <Zap className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-white font-mono font-bold">AI Service Payments</span>
                        <p className="text-cyan-300/70 text-sm font-mono">Pay for AI computations and data processing</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-1">
                        <Users className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-white font-mono font-bold">Governance Voting</span>
                        <p className="text-cyan-300/70 text-sm font-mono">Participate in protocol decisions and upgrades</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-1">
                        <Shield className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-white font-mono font-bold">Staking Rewards</span>
                        <p className="text-cyan-300/70 text-sm font-mono">Earn passive income by securing the network</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="mt-1">
                        <Database className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-white font-mono font-bold">Data Marketplace</span>
                        <p className="text-cyan-300/70 text-sm font-mono">Buy and sell datasets using DSTL tokens</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CyberCard>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <CyberCard glowColor="cyan" className="p-8">
              <h2 className="text-3xl font-bold text-white font-mono mb-6">Abstract</h2>
              <div className="prose prose-invert max-w-none font-mono text-cyan-300/80 space-y-4">
                <p>
                  DataSoul is a pioneering decentralized platform that combines blockchain technology and artificial intelligence to create a new paradigm for data monetization. In today's digital economy, data has become one of the most valuable assets, yet individuals and organizations lack efficient mechanisms to monetize their data assets while maintaining privacy and control.
                </p>
                <p>
                  The DataSoul Network introduces a novel InfoFi (Information Finance) protocol that enables users to transform their data into valuable digital assets through AI-powered blockchain technology. By leveraging multi-chain architecture, privacy-preserving AI, and decentralized governance, DataSoul creates a sustainable ecosystem where data providers, AI model developers, and data consumers can interact in a secure, transparent, and mutually beneficial environment.
                </p>
                <p>
                  This whitepaper outlines the technical architecture, tokenomics, governance model, and roadmap of the DataSoul platform, providing a comprehensive overview of our vision to revolutionize the data economy and empower users to capture the full value of their digital footprint.
                </p>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <CyberCard glowColor="blue" className="p-8">
              <h2 className="text-3xl font-bold text-white font-mono mb-6">Introduction</h2>
              <div className="prose prose-invert max-w-none font-mono text-cyan-300/80 space-y-4">
                <h3 className="text-xl font-bold text-white">The Data Economy Challenge</h3>
                <p>
                  The global data economy is projected to reach $400 billion by 2025, yet most of this value is captured by a small number of centralized entities. Individual data creators and contributors receive minimal compensation for their valuable contributions, while facing increasing concerns about privacy and data ownership.
                </p>
                
                <h3 className="text-xl font-bold text-white">Market Opportunity</h3>
                <p>
                  DataSoul addresses this imbalance by creating a decentralized marketplace where data becomes a tradable asset class. Our platform enables:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Direct monetization of personal and organizational data</li>
                  <li>Privacy-preserving data sharing through advanced cryptographic techniques</li>
                  <li>Creation of specialized AI models trained on high-quality, consensual data</li>
                  <li>Development of prediction markets and data-driven financial instruments</li>
                </ul>
                
                <h3 className="text-xl font-bold text-white">The InfoFi Revolution</h3>
                <p>
                  Information Finance (InfoFi) represents the next evolution in decentralized finance, where information itself becomes a valuable, tradable asset class. DataSoul pioneers this new paradigm by providing the infrastructure, governance, and incentive mechanisms necessary for a thriving information economy.
                </p>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Technology Architecture Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <CyberCard glowColor="purple" className="p-8">
              <h2 className="text-3xl font-bold text-white font-mono mb-6">Technology Architecture</h2>
              <div className="prose prose-invert max-w-none font-mono text-cyan-300/80 space-y-4">
                <h3 className="text-xl font-bold text-white">Multi-Layer Protocol Stack</h3>
                <p>
                  DataSoul's architecture consists of four primary layers, each designed for specific functionality while maintaining interoperability:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><span className="text-white font-bold">Base Layer:</span> Multi-chain infrastructure deployed across Ethereum, Arbitrum, and Cosmos ecosystems for maximum reach and flexibility.</li>
                  <li><span className="text-white font-bold">Protocol Layer:</span> Core smart contracts that handle data verification, tokenization, and marketplace dynamics.</li>
                  <li><span className="text-white font-bold">AI Layer:</span> Federated learning systems and privacy-preserving computation that enable AI model training without exposing raw data.</li>
                  <li><span className="text-white font-bold">Application Layer:</span> User-facing interfaces, APIs, and developer tools for building on the DataSoul ecosystem.</li>
                </ol>
                
                <h3 className="text-xl font-bold text-white">Privacy-Preserving Technology</h3>
                <p>
                  DataSoul employs cutting-edge cryptographic techniques to ensure data privacy while enabling utility:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Zero-knowledge proofs for verifiable computation without data exposure</li>
                  <li>Homomorphic encryption for performing calculations on encrypted data</li>
                  <li>Federated learning protocols that keep raw data on the owner's device</li>
                  <li>Differential privacy mechanisms that prevent re-identification of individuals</li>
                </ul>
                
                <h3 className="text-xl font-bold text-white">Cross-Chain Interoperability</h3>
                <p>
                  DataSoul's multi-chain architecture enables seamless asset and data transfer across different blockchain networks, maximizing liquidity and accessibility. Our custom bridge protocols maintain security while reducing transaction costs and increasing throughput.
                </p>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <CyberCard glowColor="green" className="p-8">
              <h2 className="text-3xl font-bold text-white font-mono mb-6">Tokenomics</h2>
              <div className="prose prose-invert max-w-none font-mono text-cyan-300/80 space-y-4">
                <h3 className="text-xl font-bold text-white">DSTL Token Utility</h3>
                <p>
                  The DataSoul Token (DSTL) is the native utility token of the ecosystem with multiple use cases:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment for AI services and data processing</li>
                  <li>Governance voting rights for protocol decisions</li>
                  <li>Staking rewards for network security</li>
                  <li>Data marketplace transactions</li>
                  <li>Fee discounts and premium feature access</li>
                </ul>
                
                <h3 className="text-xl font-bold text-white">Token Distribution</h3>
                <p>
                  The total supply of DSTL is fixed at 1 billion tokens, distributed as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Foundation Reserve: 30% (300M) - Long-term development and ecosystem growth</li>
                  <li>Community Rewards: 25% (250M) - Staking rewards and community incentives</li>
                  <li>Team & Advisors: 20% (200M) - 4-year vesting with 1-year cliff</li>
                  <li>Public Sale: 15% (150M) - Initial and future public offerings</li>
                  <li>Liquidity Pool: 10% (100M) - DEX liquidity and market making</li>
                </ul>
                
                <h3 className="text-xl font-bold text-white">Deflationary Mechanisms</h3>
                <p>
                  DataSoul implements several deflationary mechanisms to ensure long-term token value appreciation:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transaction fee burn: 0.5% of all marketplace transactions are burned</li>
                  <li>Buyback and burn: 10% of protocol revenue is used to buy and burn DSTL</li>
                  <li>Staking incentives: Rewards for long-term token locking</li>
                </ul>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Governance Model Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <CyberCard glowColor="blue" className="p-8">
              <h2 className="text-3xl font-bold text-white font-mono mb-6">Governance Model</h2>
              <div className="prose prose-invert max-w-none font-mono text-cyan-300/80 space-y-4">
                <h3 className="text-xl font-bold text-white">Decentralized Autonomous Organization</h3>
                <p>
                  DataSoul is governed by a DAO structure that enables stakeholders to participate in decision-making processes. The governance system includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>On-chain voting for protocol upgrades and parameter changes</li>
                  <li>Tiered voting power based on token holdings and staking duration</li>
                  <li>Proposal mechanisms with appropriate thresholds and quorum requirements</li>
                  <li>Delegation capabilities for passive token holders</li>
                </ul>
                
                <h3 className="text-xl font-bold text-white">Governance Scope</h3>
                <p>
                  The DAO governs critical aspects of the protocol, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Treasury management and fund allocation</li>
                  <li>Protocol fee adjustments</li>
                  <li>Smart contract upgrades and security measures</li>
                  <li>Integration of new blockchain networks</li>
                  <li>Grant distribution for ecosystem development</li>
                </ul>
                
                <h3 className="text-xl font-bold text-white">Progressive Decentralization</h3>
                <p>
                  DataSoul follows a phased approach to decentralization:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Phase 1: Foundation-led governance with community input</li>
                  <li>Phase 2: Hybrid governance with increasing community control</li>
                  <li>Phase 3: Fully decentralized governance with minimal foundation involvement</li>
                </ol>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <CyberCard glowColor="purple" className="p-8">
              <h2 className="text-3xl font-bold text-white font-mono mb-6">Roadmap & Implementation</h2>
              <div className="prose prose-invert max-w-none font-mono text-cyan-300/80 space-y-4">
                <h3 className="text-xl font-bold text-white">Development Timeline</h3>
                <p>
                  DataSoul's development roadmap is structured into four major phases:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <span className="text-white font-bold">Phase 1: Foundation (Q2-Q3 2025)</span>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Core protocol development and smart contract audits</li>
                      <li>Initial AI model integration and testing</li>
                      <li>Testnet deployment on Ethereum and Arbitrum</li>
                      <li>Private beta with selected partners</li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-white font-bold">Phase 2: Expansion (Q3-Q4 2025)</span>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Mainnet launch on multiple chains</li>
                      <li>Data marketplace public release</li>
                      <li>Initial DAO formation and governance implementation</li>
                      <li>Developer SDK and API documentation</li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-white font-bold">Phase 3: Acceleration (Q1-Q2 2026)</span>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Advanced AI model marketplace</li>
                      <li>Cross-chain bridge expansion</li>
                      <li>Enterprise integration solutions</li>
                      <li>Mobile application release</li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-white font-bold">Phase 4: Maturity (Q3 2026 onwards)</span>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Full protocol decentralization</li>
                      <li>Advanced prediction markets</li>
                      <li>Industry-specific vertical expansions</li>
                      <li>Global ecosystem partnerships</li>
                    </ul>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold text-white">Key Milestones</h3>
                <p>
                  Critical achievements that mark our progress include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Q2 2025: Testnet launch with 10,000+ users</li>
                  <li>Q3 2025: Token Generation Event (TGE)</li>
                  <li>Q4 2025: Data marketplace with 100+ datasets</li>
                  <li>Q1 2026: 50,000 monthly active users</li>
                  <li>Q2 2026: Integration with 5+ major blockchain networks</li>
                  <li>Q4 2026: $100M+ Total Value Locked (TVL)</li>
                </ul>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <CyberCard glowColor="cyan" className="p-8">
              <h2 className="text-3xl font-bold text-white font-mono mb-6">Conclusion</h2>
              <div className="prose prose-invert max-w-none font-mono text-cyan-300/80 space-y-4">
                <p>
                  DataSoul represents a paradigm shift in how data is valued, shared, and monetized in the digital economy. By combining the transparency and security of blockchain technology with the analytical power of AI, we are creating a new ecosystem where data creators receive fair compensation for their contributions while maintaining privacy and control.
                </p>
                <p>
                  The DSTL token serves as the backbone of this ecosystem, aligning incentives among all participants and enabling a truly decentralized governance model. Our multi-chain architecture ensures maximum accessibility and interoperability, while our privacy-preserving technologies address the critical concerns of data security and ownership.
                </p>
                <p>
                  As we progress through our roadmap, DataSoul will continue to innovate at the intersection of blockchain, AI, and data science, creating new opportunities for individuals, organizations, and developers to participate in the information economy of the future.
                </p>
                <p>
                  We invite you to join us on this journey to revolutionize the data economy and build a more equitable digital future.
                </p>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <CyberCard glowColor="purple" className="p-8">
              <h2 className="text-3xl font-bold text-white font-mono mb-4">Ready to Dive Deeper?</h2>
              <p className="text-cyan-300/80 font-mono text-lg mb-8">
                Download the full whitepaper to explore DataSoul's vision, technology, and roadmap in detail.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <CyberButton color="cyan" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download Whitepaper
                </CyberButton>
                <Link href="/platform">
                  <CyberButton color="blue" variant="outline" size="lg">
                    Explore Platform
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </CyberButton>
                </Link>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
