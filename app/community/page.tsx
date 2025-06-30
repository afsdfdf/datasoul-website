"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  MessageCircle,
  Trophy,
  Gift,
  Calendar,
  Github,
  Twitter,
  DiscIcon as Discord,
  TextIcon as Telegram,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react"
import { motion } from "framer-motion"
import { DemoCharts } from "@/components/demo-charts"

export default function CommunityPage() {
  const communityStats = [
    { label: "Total Members", value: "25,847", icon: Users, color: "cyan", growth: "+12%" },
    { label: "Active Contributors", value: "3,421", icon: Star, color: "blue", growth: "+8%" },
    { label: "Monthly Discussions", value: "1,892", icon: MessageCircle, color: "purple", growth: "+15%" },
    { label: "Community Projects", value: "127", icon: Trophy, color: "pink", growth: "+23%" },
  ]

  const socialPlatforms = [
    {
      name: "Discord",
      icon: Discord,
      members: "18,500+",
      description: "Real-time discussions and community support",
      color: "bg-indigo-500",
      link: "#",
    },
    {
      name: "Twitter",
      icon: Twitter,
      members: "12,300+",
      description: "Latest updates and announcements",
      color: "bg-blue-500",
      link: "#",
    },
    {
      name: "Telegram",
      icon: Telegram,
      members: "8,900+",
      description: "Community chat and quick updates",
      color: "bg-cyan-500",
      link: "#",
    },
    {
      name: "GitHub",
      icon: Github,
      members: "2,100+",
      description: "Open source development and contributions",
      color: "bg-gray-700",
      link: "#",
    },
  ]

  const communityPrograms = [
    {
      title: "Ambassador Program",
      description: "Represent DataSoul in your region and earn exclusive rewards",
      benefits: ["Monthly DSTL rewards", "Exclusive merchandise", "Direct team access"],
      icon: Trophy,
      color: "cyan",
      participants: "150+",
    },
    {
      title: "Developer Grants",
      description: "Build on DataSoul and receive funding for your projects",
      benefits: ["Up to $50K funding", "Technical support", "Marketing assistance"],
      icon: Gift,
      color: "blue",
      participants: "45+",
    },
    {
      title: "Bug Bounty",
      description: "Help secure the network and earn rewards for finding vulnerabilities",
      benefits: ["Up to $10K rewards", "Hall of fame", "Direct dev contact"],
      icon: Star,
      color: "purple",
      participants: "320+",
    },
  ]

  const recentActivity = [
    {
      user: "Alex Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "submitted a proposal",
      target: "Multi-chain Bridge Implementation",
      time: "2 hours ago",
      type: "proposal",
    },
    {
      user: "Sarah Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "won the weekly",
      target: "Data Quality Challenge",
      time: "1 day ago",
      type: "achievement",
    },
    {
      user: "Dev Team",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "released",
      target: "Alpha v0.3.2 Update",
      time: "3 days ago",
      type: "release",
    },
    {
      user: "Maria Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      action: "started discussion",
      target: "AI Model Optimization",
      time: "5 days ago",
      type: "discussion",
    },
  ]

  const upcomingEvents = [
    {
      title: "Community AMA",
      date: "2025-09-20",
      time: "18:00 UTC",
      description: "Monthly Q&A session with the development team",
      attendees: "500+",
      platform: "Discord",
    },
    {
      title: "Hackathon Kickoff",
      date: "2025-10-01",
      time: "12:00 UTC",
      description: "48-hour virtual hackathon with $100K in prizes",
      attendees: "1,200+",
      platform: "Virtual",
    },
    {
      title: "Regional Meetup",
      date: "2025-10-15",
      time: "19:00 Local",
      description: "In-person meetup in San Francisco",
      attendees: "80+",
      platform: "In-person",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "proposal":
        return "🗳️"
      case "achievement":
        return "🏆"
      case "release":
        return "🚀"
      case "discussion":
        return "💬"
      default:
        return "📝"
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
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Community Hub</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Join the DataSoul Community
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with developers, researchers, and enthusiasts building the future of decentralized AI and data
            infrastructure.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`bg-gradient-to-br from-${stat.color}-900/20 to-${stat.color}-800/20 border-${stat.color}-500/30 hover:border-${stat.color}-500/50 transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <stat.icon className={`h-8 w-8 text-${stat.color}-400`} />
                      <Badge className={`bg-green-500/20 text-green-300 border-green-500/50`}>{stat.growth}</Badge>
                    </div>
                    <div className={`text-2xl font-bold text-white mb-1`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Connect With Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our community across multiple platforms and stay updated with the latest developments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <platform.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{platform.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{platform.description}</p>
                    <Badge variant="outline" className="border-gray-600 text-gray-300 mb-4">
                      {platform.members} members
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 bg-transparent"
                    >
                      Join Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Community Programs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Participate in our programs and earn rewards while contributing to the ecosystem
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {communityPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`bg-gradient-to-br from-${program.color}-900/20 to-${program.color}-800/20 border-${program.color}-500/30 hover:border-${program.color}-500/50 transition-all duration-300 h-full`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <program.icon className={`h-8 w-8 text-${program.color}-400`} />
                      <Badge
                        className={`bg-${program.color}-500/20 text-${program.color}-300 border-${program.color}-500/50`}
                      >
                        {program.participants}
                      </Badge>
                    </div>
                    <CardTitle className="text-white">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {program.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 bg-${program.color}-400 rounded-full`} />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full bg-gradient-to-r from-${program.color}-500 to-${program.color}-600 hover:from-${program.color}-600 hover:to-${program.color}-700`}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Activity & Events */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-cyan-400" />
                  <span>Recent Activity</span>
                </CardTitle>
                <CardDescription>Latest community contributions and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {activity.user
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm">{getActivityIcon(activity.type)}</span>
                          <span className="text-white text-sm font-medium">{activity.user}</span>
                          <span className="text-gray-400 text-sm">{activity.action}</span>
                        </div>
                        <div className="text-cyan-400 text-sm font-medium mb-1">{activity.target}</div>
                        <div className="text-gray-500 text-xs">{activity.time}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-cyan-400" />
                  <span>Upcoming Events</span>
                </CardTitle>
                <CardDescription>Don't miss these community events and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 bg-black/30 rounded-lg border border-gray-800"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-semibold">{event.title}</h4>
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-300">
                          {event.attendees}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{event.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <div className="text-gray-300">
                          📅 {new Date(event.date).toLocaleDateString()} at {event.time}
                        </div>
                        <div className="text-cyan-400">📍 {event.platform}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Community Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Community Growth</CardTitle>
              <CardDescription>Our community has been growing steadily across all platforms</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <DemoCharts type="line" width={600} height={300} animated={true} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-500/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Involved?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of community members building the future of decentralized AI. Your contribution matters,
                no matter how big or small.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  <Users className="mr-2 h-4 w-4" />
                  Join Discord
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 bg-transparent"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Contribute on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
