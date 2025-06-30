"use client"

import { Badge } from "@/components/ui/badge"
import { Target, Users, Lightbulb, Globe, Shield, Zap, Brain, Database } from "lucide-react"
import { motion } from "framer-motion"
import { CyberCard } from "@/components/ui/cyber-card"
import { CyberButton } from "@/components/ui/cyber-button"
import { BackgroundEffects } from "@/components/background-effects"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Former AI researcher at Google DeepMind with 10+ years in machine learning and blockchain",
      avatar: "/placeholder.svg?height=100&width=100",
      expertise: ["AI/ML", "Blockchain", "Product Strategy"],
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Ex-Ethereum core developer and smart contract security expert",
      avatar: "/placeholder.svg?height=100&width=100",
      expertise: ["Smart Contracts", "DeFi", "Security"],
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of Research",
      bio: "PhD in Computer Science, published researcher in federated learning and privacy",
      avatar: "/placeholder.svg?height=100&width=100",
      expertise: ["Privacy Tech", "Federated Learning", "Research"],
    },
    {
      name: "James Kim",
      role: "Head of Community",
      bio: "Community builder with experience at major DeFi protocols and DAOs",
      avatar: "/placeholder.svg?height=100&width=100",
      expertise: ["Community", "Governance", "Partnerships"],
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "User data sovereignty and privacy protection are fundamental to our design",
      color: "cyan" as const,
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Decentralized governance ensures the community shapes the platform's future",
      color: "blue" as const,
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing the boundaries of AI, blockchain, and data monetization",
      color: "purple" as const,
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Making data monetization accessible to everyone, everywhere",
      color: "green" as const,
    },
  ]

  const milestones = [
    {
      year: "2023",
      title: "Concept & Research",
      description: "Initial research and whitepaper development",
      status: "completed",
    },
    {
      year: "2024",
      title: "MVP Development",
      description: "Core platform development and testnet launch",
      status: "in-progress",
    },
    {
      year: "2025",
      title: "Mainnet Launch",
      description: "Public launch and token generation event",
      status: "upcoming",
    },
    {
      year: "2026",
      title: "Global Expansion",
      description: "Multi-chain deployment and enterprise partnerships",
      status: "planned",
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
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-mono">About DataSoul</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                Our Vision
              </h1>
              <p className="text-xl text-cyan-300/70 max-w-4xl mx-auto font-mono leading-relaxed">
                DataSoul is pioneering the future of data monetization by combining AI, blockchain technology, and
                social finance to create a decentralized ecosystem where data has value and contributors are rewarded.
              </p>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <CyberCard glowColor="cyan" className="p-8">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white font-mono">Our Mission</h2>
                <p className="text-lg text-cyan-300/80 font-mono leading-relaxed">
                  To democratize data monetization and create a fair, transparent ecosystem where individuals and
                  organizations can derive value from their data contributions while maintaining privacy and control.
                </p>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Core Values
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              The principles that guide everything we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor={value.color} className="p-6 h-full text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${
                      value.color === "cyan"
                        ? "from-cyan-500 to-blue-600"
                        : value.color === "blue"
                          ? "from-blue-500 to-purple-600"
                          : value.color === "purple"
                            ? "from-purple-500 to-pink-600"
                            : "from-green-500 to-emerald-600"
                    } rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white font-mono font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-cyan-300/80 font-mono text-sm leading-relaxed">{value.description}</p>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Meet the Team
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Experienced professionals from AI, blockchain, and data science backgrounds
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor="cyan" className="p-6 h-full text-center">
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-mono font-bold text-lg">{member.name}</h3>
                      <p className="text-cyan-400 font-mono text-sm">{member.role}</p>
                    </div>
                    <p className="text-cyan-300/80 font-mono text-xs leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="border-cyan-500/50 text-cyan-300 font-mono text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Our Journey
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Key milestones in DataSoul's development
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="flex-1">
                    <CyberCard
                      glowColor={
                        milestone.status === "completed"
                          ? "green"
                          : milestone.status === "in-progress"
                            ? "cyan"
                            : milestone.status === "upcoming"
                              ? "blue"
                              : "purple"
                      }
                      className="p-6"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center"
                          >
                            <span className="text-cyan-400 font-mono font-bold text-sm">{milestone.year}</span>
                          </div>
                          <h3 className="text-white font-mono font-bold text-lg">{milestone.title}</h3>
                          <Badge
                            className={`${
                              milestone.status === "completed"
                                ? "bg-green-500/20 text-green-300 border-green-500/50"
                                : milestone.status === "in-progress"
                                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50"
                                  : milestone.status === "upcoming"
                                    ? "bg-blue-500/20 text-blue-300 border-blue-500/50"
                                    : "bg-purple-500/20 text-purple-300 border-purple-500/50"
                            }`}
                          >
                            {milestone.status}
                          </Badge>
                        </div>
                        <p className="text-cyan-300/80 font-mono text-sm">{milestone.description}</p>
                      </div>
                    </CyberCard>
                  </div>
                  <div className="w-8 flex justify-center">
                    <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-purple-500" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Technology Stack
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Built with cutting-edge technologies for maximum performance and security
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Blockchain",
                technologies: ["Ethereum", "Arbitrum", "Cosmos", "Solidity", "CosmWasm"],
                icon: Zap,
                color: "cyan" as const,
              },
              {
                category: "AI & ML",
                technologies: ["TensorFlow", "PyTorch", "Federated Learning", "Privacy-Preserving ML", "IPFS"],
                icon: Brain,
                color: "purple" as const,
              },
              {
                category: "Data & Storage",
                technologies: ["IPFS", "Filecoin", "Arweave", "PostgreSQL", "Redis"],
                icon: Database,
                color: "blue" as const,
              },
            ].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor={stack.color} className="p-6 h-full">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div
                        className="w-12 h-12 mx-auto mb-4 bg-transparent rounded-full flex items-center justify-center shadow-lg"
                      >
                        <stack.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-white font-mono font-bold text-lg">{stack.category}</h3>
                    </div>
                    <div className="space-y-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="bg-black/30 rounded-lg p-2 border border-gray-800 text-center">
                          <span className="text-cyan-300/90 font-mono text-sm">{tech}</span>
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

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Join Our Mission
            </h2>
            <p className="text-xl text-cyan-300/70 mb-8 max-w-2xl mx-auto font-mono">
              Be part of the data revolution and help build the future of decentralized data monetization
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CyberButton color="cyan" size="xl">
                Join Community
              </CyberButton>
              <CyberButton color="purple" variant="outline" size="xl">
                Read Whitepaper
              </CyberButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
