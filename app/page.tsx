"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Brain, Users, Globe, Zap, TrendingUp, Shield, Coins } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sphere3D } from "@/components/sphere-3d"
import { CyberCard } from "@/components/ui/cyber-card"
import { CyberButton } from "@/components/ui/cyber-button"
import { BackgroundEffects } from "@/components/background-effects"
import { HeroAnimation } from "@/components/hero-animation"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-black" />
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundEffects />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Badge className="mb-6 bg-cyan-400/20 text-cyan-300 border-cyan-400/50 px-4 py-2 font-mono">
                  Next-Generation Web3 Platform
                </Badge>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent neon-text">
                    DataSoul
                  </span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent neon-text">
                    Network
                  </span>
                </h1>
                <p className="text-lg text-cyan-300/80 mt-6 font-mono leading-relaxed">
                  Transform your data into valuable digital assets through AI-powered blockchain technology. Join the
                  future of decentralized data monetization.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/whitepaper">
                  <CyberButton color="cyan" size="lg">
                    Read Whitepaper
                  </CyberButton>
                </Link>
                <Link href="/data-marketplace">
                  <CyberButton color="blue" variant="outline" size="lg">
                    Explore Marketplace
                  </CyberButton>
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Hero Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col items-center space-y-8"
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
                Revolutionary Features
              </h2>
              <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
                DataSoul combines InfoFi, SocialFi, and AI to create a new paradigm for data monetization
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: "Data Monetization",
                description: "Turn your data into tradable assets through our InfoFi marketplace",
                color: "cyan" as const,
              },
              {
                icon: Users,
                title: "Social Influence",
                description: "Monetize your social interactions and build on-chain reputation",
                color: "blue" as const,
              },
              {
                icon: Brain,
                title: "AI Integration",
                description: "Access specialized AI models and contribute to their improvement",
                color: "purple" as const,
              },
              {
                icon: Globe,
                title: "Multi-Chain",
                description: "Deploy across multiple blockchains for maximum reach and liquidity",
                color: "pink" as const,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor={feature.color} className="h-full p-6">
                  <div className="space-y-4">
                    <div
                      className="w-12 h-12 rounded-lg bg-transparent flex items-center justify-center shadow-lg"
                    >
                      <feature.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-white font-mono font-bold text-lg">{feature.title}</h3>
                    <p className="text-cyan-300/70 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                The DataSoul Ecosystem
              </h2>
              <p className="text-lg text-cyan-300/80 mb-6 font-mono leading-relaxed">
                Every user's contributions form a unique digital signature that has value. Share data and insights,
                participate in the community, and earn token rewards while building your on-chain reputation.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Publish market analyses and research on-chain",
                  "Upload anonymized datasets for AI training",
                  "Participate in prediction markets and governance",
                  "Stake content and monetize social influence",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-cyan-400/50 shadow-lg" />
                    <span className="text-cyan-300/90 font-mono">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/platform">
                <CyberButton color="cyan" size="lg">
                  Explore Platform <ArrowRight className="ml-2 h-4 w-4" />
                </CyberButton>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <Sphere3D />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                Built on Cutting-Edge Technology
              </h2>
              <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
                Our platform leverages the latest in blockchain, AI, and decentralized technologies
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Blockchain Security",
                description: "Multi-chain architecture with enterprise-grade security protocols",
                features: ["Cross-chain compatibility", "Smart contract audits", "Decentralized governance"],
                color: "cyan" as const,
              },
              {
                icon: Brain,
                title: "AI-Powered Analytics",
                description: "Advanced machine learning models for data processing and insights",
                features: ["Natural language processing", "Predictive analytics", "Automated data validation"],
                color: "purple" as const,
              },
              {
                icon: Zap,
                title: "High Performance",
                description: "Optimized for speed and scalability with minimal transaction costs",
                features: ["Sub-second transactions", "Infinite scalability", "Energy efficient"],
                color: "blue" as const,
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <CyberCard glowColor={tech.color} className="h-full p-6">
                  <div className="space-y-6">
                    <div
                      className="w-16 h-16 rounded-xl bg-transparent flex items-center justify-center shadow-2xl"
                    >
                      <tech.icon className="h-8 w-8 text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="text-white font-mono font-bold text-xl mb-3">{tech.title}</h3>
                      <p className="text-cyan-300/70 text-sm leading-relaxed mb-4">{tech.description}</p>
                    </div>

                    <div className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                          />
                          <span className="text-gray-300 font-mono text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Total Supply", value: "1B DSTL", icon: Coins, color: "cyan" as const },
              { label: "Multi-Chain", value: "3+ Networks", icon: Globe, color: "blue" as const },
              { label: "AI Models", value: "10+ Integrated", icon: Brain, color: "purple" as const },
              { label: "Community", value: "Growing", icon: TrendingUp, color: "pink" as const },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor={stat.color} className="p-6 text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-4 bg-transparent rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 font-mono">{stat.value}</div>
                  <div className="text-cyan-300/70 font-mono">{stat.label}</div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Join the Data Revolution
            </h2>
            <p className="text-xl text-cyan-300/70 mb-8 max-w-2xl mx-auto font-mono">
              Be part of the future where your data has value and your contributions are rewarded
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/data-marketplace">
                <CyberButton color="cyan" size="xl">
                  Get Started Now
                </CyberButton>
              </Link>
              <Link href="/community">
                <CyberButton color="purple" variant="outline" size="xl">
                  Join Community
                </CyberButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
