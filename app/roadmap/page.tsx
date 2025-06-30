"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Rocket, Target, Zap, Users, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { DemoCharts } from "@/components/demo-charts"

export default function RoadmapPage() {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      period: "Q3 2025",
      status: "in-progress",
      description: "Building core infrastructure and MVP",
      milestones: [
        { title: "Core Protocol Development", completed: true },
        { title: "Smart Contract Deployment", completed: true },
        { title: "Basic AI Integration", completed: false },
        { title: "Alpha Testing", completed: false },
      ],
      features: [
        "Decentralized data storage",
        "Basic AI model hosting",
        "Token economics implementation",
        "Initial governance framework",
      ],
    },
    {
      phase: "Phase 2",
      title: "Launch",
      period: "Q4 2025",
      status: "upcoming",
      description: "Public launch and community building",
      milestones: [
        { title: "Mainnet Launch", completed: false },
        { title: "Token Generation Event", completed: false },
        { title: "Community Onboarding", completed: false },
        { title: "Partnership Announcements", completed: false },
      ],
      features: ["Public token sale", "Staking mechanism", "Data marketplace beta", "Community governance"],
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      period: "Q1-Q2 2026",
      status: "planned",
      description: "Multi-chain support and advanced features",
      milestones: [
        { title: "Multi-Chain Bridge", completed: false },
        { title: "Advanced AI Models", completed: false },
        { title: "Enterprise Partnerships", completed: false },
        { title: "Mobile Application", completed: false },
      ],
      features: ["Cross-chain compatibility", "Advanced AI services", "Enterprise solutions", "Mobile platform"],
    },
    {
      phase: "Phase 4",
      title: "Ecosystem",
      period: "Q3-Q4 2026",
      status: "planned",
      description: "Full ecosystem maturity and global adoption",
      milestones: [
        { title: "Global Expansion", completed: false },
        { title: "Ecosystem Partnerships", completed: false },
        { title: "Advanced Governance", completed: false },
        { title: "Sustainability Initiatives", completed: false },
      ],
      features: ["Global marketplace", "Ecosystem partnerships", "Advanced governance", "Carbon neutral operations"],
    },
  ]

  const keyMetrics = [
    { label: "Development Progress", value: "65%", color: "cyan" },
    { label: "Community Growth", value: "40%", color: "blue" },
    { label: "Partnership Pipeline", value: "25%", color: "purple" },
    { label: "Technical Milestones", value: "55%", color: "pink" },
  ]

  const upcomingEvents = [
    {
      date: "2025-09-15",
      title: "Alpha Release",
      description: "Limited alpha testing for core features",
      type: "milestone",
    },
    {
      date: "2025-10-30",
      title: "Community AMA",
      description: "Live Q&A session with the development team",
      type: "event",
    },
    {
      date: "2025-11-20",
      title: "Beta Launch",
      description: "Public beta testing and feedback collection",
      type: "milestone",
    },
    {
      date: "2025-12-15",
      title: "Token Generation Event",
      description: "Official DSTL token launch and distribution",
      type: "milestone",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/50"
      case "in-progress":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/50"
      case "upcoming":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
      case "planned":
        return "bg-gray-500/20 text-gray-300 border-gray-500/50"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return CheckCircle
      case "in-progress":
        return Zap
      case "upcoming":
        return Clock
      case "planned":
        return Target
      default:
        return Clock
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Development Roadmap</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Journey to the Future
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Follow our development progress as we build the next generation of decentralized AI and data infrastructure.
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Development Progress</CardTitle>
              <CardDescription>Current status across key development areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {keyMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{metric.label}</span>
                        <span className={`text-${metric.color}-400 font-bold`}>{metric.value}</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${
                            metric.color === "cyan"
                              ? "from-cyan-500 to-cyan-600"
                              : metric.color === "blue"
                                ? "from-blue-500 to-blue-600"
                                : metric.color === "purple"
                                  ? "from-purple-500 to-purple-600"
                                  : "from-pink-500 to-pink-600"
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: metric.value }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <DemoCharts type="timeline" width={400} height={250} animated={true} />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Roadmap Phases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Development Phases</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our roadmap is divided into four key phases, each building upon the previous
            </p>
          </div>
          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => {
              const StatusIcon = getStatusIcon(phase.status)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full ${getStatusColor(phase.status)}`}>
                            <StatusIcon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-white">
                              {phase.phase}: {phase.title}
                            </CardTitle>
                            <CardDescription>{phase.period}</CardDescription>
                          </div>
                        </div>
                        <Badge className={getStatusColor(phase.status)}>{phase.status.replace("-", " ")}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6">{phase.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Milestones */}
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Milestones</h4>
                          <div className="space-y-2">
                            {phase.milestones.map((milestone, i) => (
                              <div key={i} className="flex items-center space-x-3">
                                <div
                                  className={`w-2 h-2 rounded-full ${
                                    milestone.completed ? "bg-green-400" : "bg-gray-600"
                                  }`}
                                />
                                <span className={`text-sm ${milestone.completed ? "text-green-300" : "text-gray-400"}`}>
                                  {milestone.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {phase.features.map((feature, i) => (
                              <div key={i} className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                <span className="text-sm text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Upcoming Events</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mark your calendar for these important milestones and community events
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-2 rounded-lg ${
                          event.type === "milestone"
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "bg-purple-500/20 text-purple-300"
                        }`}
                      >
                        {event.type === "milestone" ? <Target className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-semibold">{event.title}</h3>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">
                            {new Date(event.date).toLocaleDateString()}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Journey</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Be part of the DataSoul community and help shape the future of decentralized AI. Follow our progress and
                contribute to our development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  <Rocket className="mr-2 h-4 w-4" />
                  Join Community
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 bg-transparent"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Follow Updates
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
