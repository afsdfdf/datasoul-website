"use client"

import { Badge } from "@/components/ui/badge"
import { FileText, Download, Share, BookOpen, Lightbulb, Target, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { CyberCard } from "@/components/ui/cyber-card"
import { CyberButton } from "@/components/ui/cyber-button"
import { BackgroundEffects } from "@/components/background-effects"

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
    },
    {
      title: "Privacy-Preserving AI",
      description: "Federated learning and zero-knowledge proofs for data privacy",
      color: "blue" as const,
    },
    {
      title: "Multi-Chain Architecture",
      description: "Deployed across Ethereum, Arbitrum, and Cosmos for maximum reach",
      color: "purple" as const,
    },
    {
      title: "Sustainable Economics",
      description: "Deflationary tokenomics with multiple value accrual mechanisms",
      color: "green" as const,
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
                    <Lightbulb className="h-6 w-6 text-white" />
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

      {/* Additional Resources */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
              Additional Resources
            </h2>
            <p className="text-xl text-cyan-300/70 max-w-3xl mx-auto font-mono">
              Supplementary materials and documentation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Specifications",
                description: "Detailed technical documentation and API references",
                icon: Zap,
                color: "cyan" as const,
                link: "/documentation",
              },
              {
                title: "Economic Model",
                description: "In-depth analysis of tokenomics and economic incentives",
                icon: Users,
                color: "purple" as const,
                link: "/tokenomics",
              },
              {
                title: "Research Papers",
                description: "Academic research and peer-reviewed publications",
                icon: BookOpen,
                color: "blue" as const,
                link: "#",
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CyberCard glowColor={resource.color} className="p-6 h-full">
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${
                        resource.color === "cyan"
                          ? "from-cyan-500 to-blue-600"
                          : resource.color === "purple"
                            ? "from-purple-500 to-pink-600"
                            : "from-blue-500 to-indigo-600"
                      } rounded-lg flex items-center justify-center shadow-lg`}
                    >
                      <resource.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-mono font-bold text-lg">{resource.title}</h3>
                    <p className="text-cyan-300/80 font-mono text-sm leading-relaxed">{resource.description}</p>
                    <CyberButton color={resource.color} variant="outline" className="w-full">
                      Learn More
                    </CyberButton>
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
              Ready to Dive Deeper?
            </h2>
            <p className="text-xl text-cyan-300/70 mb-8 max-w-2xl mx-auto font-mono">
              Download the complete whitepaper and join our community of builders and innovators
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CyberButton color="cyan" size="xl">
                <Download className="h-5 w-5 mr-2" />
                Download Whitepaper
              </CyberButton>
              <CyberButton color="purple" variant="outline" size="xl">
                Join Community
              </CyberButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
