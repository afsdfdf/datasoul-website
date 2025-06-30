"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlatformArchitecture } from "@/components/platform-architecture"
import { CoreLayerDemos } from "@/components/core-layer-demos"
import { MultiChainVisualization } from "@/components/multi-chain-visualization"
import { BackgroundEffects } from "@/components/background-effects"
import { ArrowRight, Layers, Network, Zap, Shield, Database } from "lucide-react"

export default function PlatformPage() {
  const features = [
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Composable layers for maximum flexibility and scalability",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Network,
      title: "Multi-Chain Support",
      description: "Deploy across Ethereum, Arbitrum, and Cosmos ecosystems",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and decentralized access control",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Sub-second response times with 99.9% uptime guarantee",
      color: "from-orange-500 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-mono">
                Platform Overview
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-mono">
                DataSoul Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
                A comprehensive decentralized infrastructure for AI-powered data intelligence, built on multi-chain
                architecture with enterprise-grade security and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-mono"
                >
                  Explore Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-mono bg-transparent"
                >
                  Technical Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white font-mono">Platform Capabilities</h2>
              <p className="text-gray-400 font-mono max-w-2xl mx-auto">
                Built for scale, designed for innovation, secured by blockchain technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/30 transition-all h-full relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`} />
                    <CardContent className="p-6 space-y-4 relative z-10">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-white font-mono font-bold text-lg">{feature.title}</h3>
                      <p className="text-gray-400 font-mono text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Multi-Chain Architecture */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white font-mono">Multi-Chain Architecture</h2>
              <p className="text-gray-400 font-mono max-w-2xl mx-auto">
                Deploy across multiple blockchain networks for maximum reach and interoperability
              </p>
            </motion.div>

            <MultiChainVisualization />
          </div>
        </section>

        {/* Core Platform Layers */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white font-mono">Core Platform Layers</h2>
              <p className="text-gray-400 font-mono max-w-2xl mx-auto">
                Modular architecture with specialized layers for different functionalities
              </p>
            </motion.div>

            <CoreLayerDemos />
          </div>
        </section>

        {/* Platform Architecture Visualization */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white font-mono">Platform Architecture Visualization</h2>
              <p className="text-gray-400 font-mono max-w-2xl mx-auto">
                Complete system overview showing data flow and component interactions
              </p>
            </motion.div>

            <PlatformArchitecture />
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white font-mono">Technical Specifications</h2>
              <p className="text-gray-400 font-mono max-w-2xl mx-auto">
                Enterprise-grade performance metrics and capabilities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Performance",
                  specs: [
                    { label: "Throughput", value: "10,000+ TPS" },
                    { label: "Latency", value: "< 100ms" },
                    { label: "Uptime", value: "99.9%" },
                    { label: "Scalability", value: "Horizontal" },
                  ],
                  icon: Zap,
                  color: "from-yellow-500 to-orange-600",
                },
                {
                  category: "Security",
                  specs: [
                    { label: "Encryption", value: "AES-256" },
                    { label: "Key Management", value: "HSM" },
                    { label: "Access Control", value: "Multi-sig" },
                    { label: "Audit", value: "Continuous" },
                  ],
                  icon: Shield,
                  color: "from-green-500 to-emerald-600",
                },
                {
                  category: "Storage",
                  specs: [
                    { label: "Capacity", value: "Unlimited" },
                    { label: "Redundancy", value: "3x Replication" },
                    { label: "Backup", value: "Real-time" },
                    { label: "Recovery", value: "< 1 minute" },
                  ],
                  icon: Database,
                  color: "from-blue-500 to-purple-600",
                },
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 h-full relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-5`} />
                    <CardContent className="p-6 space-y-4 relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${spec.color} rounded-lg flex items-center justify-center shadow-lg`}
                        >
                          <spec.icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-white font-mono font-bold text-lg">{spec.category}</h3>
                      </div>
                      <div className="space-y-3">
                        {spec.specs.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-gray-400 font-mono text-sm">{item.label}</span>
                            <span className="text-cyan-400 font-mono text-sm font-semibold">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
                <CardContent className="p-12 relative z-10">
                  <h2 className="text-3xl font-bold mb-4 text-white font-mono">Ready to Build on DataSoul?</h2>
                  <p className="text-gray-300 font-mono mb-8 max-w-2xl mx-auto">
                    Join the next generation of decentralized AI applications. Start building with our comprehensive
                    platform today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-mono"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-mono bg-transparent"
                    >
                      Contact Sales
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
