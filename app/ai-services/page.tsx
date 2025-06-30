"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AIModelMarketplace } from "@/components/ai-model-marketplace"
import { AIOutputShowcase } from "@/components/ai-output-showcase"
import { BackgroundEffects } from "@/components/background-effects"
import { Brain, Zap, Database, ArrowRight, Activity, TrendingUp } from "lucide-react"

export default function AIServicesPage() {
  const services = [
    {
      id: "nlp",
      title: "Natural Language Processing",
      description: "Advanced text analysis, generation, and understanding capabilities",
      icon: Brain,
      features: ["Text Generation", "Sentiment Analysis", "Language Translation", "Content Summarization"],
      pricing: "From 50 DSTL/1K tokens",
      color: "from-blue-500 to-purple-600",
      status: "Live",
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      description: "Image and video analysis with state-of-the-art recognition models",
      icon: Activity,
      features: ["Object Detection", "Image Classification", "Face Recognition", "OCR Processing"],
      pricing: "From 25 DSTL/image",
      color: "from-green-500 to-emerald-600",
      status: "Live",
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      description: "Machine learning models for forecasting and trend analysis",
      icon: TrendingUp,
      features: ["Price Prediction", "Risk Assessment", "Market Analysis", "Trend Forecasting"],
      pricing: "From 100 DSTL/query",
      color: "from-purple-500 to-pink-600",
      status: "Beta",
    },
    {
      id: "data-processing",
      title: "Data Processing",
      description: "Automated data cleaning, transformation, and enrichment services",
      icon: Database,
      features: ["Data Cleaning", "Format Conversion", "Data Enrichment", "Quality Assessment"],
      pricing: "From 10 DSTL/MB",
      color: "from-cyan-500 to-blue-600",
      status: "Live",
    },
  ]

  // Find the service by ID for icon rendering
  const getServiceIcon = (serviceId: string) => {
    const service = services.find((s) => s.id === serviceId)
    return service ? service.icon : Brain
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/50 font-mono">
                AI Services
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-mono">
                AI-Powered Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
                Access cutting-edge AI models and services through our decentralized network. From natural language
                processing to computer vision, unlock the power of AI for your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-mono"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 font-mono bg-transparent"
                >
                  API Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white font-mono">Service Categories</h2>
              <p className="text-gray-400 font-mono max-w-2xl mx-auto">
                Comprehensive AI services designed for blockchain and decentralized applications
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = getServiceIcon(service.id)

                if (!IconComponent) {
                  return null
                }

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/30 transition-all h-full relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
                      <CardContent className="p-8 space-y-6 relative z-10">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}
                            >
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-mono font-bold text-xl mb-2">{service.title}</h3>
                              <Badge
                                className={`${
                                  service.status === "Live"
                                    ? "bg-green-500/20 text-green-300 border-green-500/50"
                                    : "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
                                } font-mono`}
                              >
                                {service.status}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-400 font-mono leading-relaxed">{service.description}</p>

                        <div className="space-y-3">
                          <div className="text-purple-300 font-mono font-semibold">Key Features</div>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full shadow-purple-400/50 shadow-lg" />
                                <span className="text-gray-300 font-mono text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-gray-400 font-mono text-sm">Pricing</div>
                              <div className="text-purple-400 font-mono font-bold">{service.pricing}</div>
                            </div>
                            <Button size="sm" className={`bg-gradient-to-r ${service.color} text-white font-mono`}>
                              Try Now
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* AI Model Marketplace */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <AIModelMarketplace />
            </motion.div>
          </div>
        </section>

        {/* AI Output Showcase */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <AIOutputShowcase />
            </motion.div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white font-mono">Performance Metrics</h2>
              <p className="text-gray-400 font-mono max-w-2xl mx-auto">
                Real-time performance statistics from our AI service network
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Models Available", value: "89", icon: Brain, color: "purple" },
                { label: "Requests/Second", value: "2.4K", icon: Zap, color: "blue" },
                { label: "Average Latency", value: "98ms", icon: Activity, color: "green" },
                { label: "Success Rate", value: "99.7%", icon: TrendingUp, color: "cyan" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 text-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-${metric.color}-500/5`} />
                    <CardContent className="p-6 relative z-10">
                      <div
                        className={`w-12 h-12 bg-${metric.color}-500 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg`}
                      >
                        <metric.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className={`text-${metric.color}-400 font-mono text-2xl font-bold mb-2`}>{metric.value}</div>
                      <div className="text-gray-400 font-mono text-sm">{metric.label}</div>
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
              <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
                <CardContent className="p-12 relative z-10">
                  <h2 className="text-3xl font-bold mb-4 text-white font-mono">Start Building with AI</h2>
                  <p className="text-gray-300 font-mono mb-8 max-w-2xl mx-auto">
                    Integrate powerful AI capabilities into your applications with our easy-to-use APIs and
                    comprehensive documentation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-mono"
                    >
                      Get API Key
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 font-mono bg-transparent"
                    >
                      View Examples
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
