import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, MessageCircle, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                DataSoul
              </span>
            </div>
            <p className="text-gray-400 mb-4">AI-Powered Data Sharing & SocialFi Ecosystem</p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-gray-700 hover:border-cyan-500 bg-transparent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-700 hover:border-cyan-500 bg-transparent">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-700 hover:border-cyan-500 bg-transparent">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <Link href="/platform" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Architecture
              </Link>
              <Link href="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                AI Services
              </Link>
              <Link href="/data-marketplace" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Data Marketplace
              </Link>
              <Link href="/staking" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Staking
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="/whitepaper" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Whitepaper
              </Link>
              <Link href="/docs" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Documentation
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <div className="space-y-2">
              <Link href="/community" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Discord
              </Link>
              <Link href="/community" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Telegram
              </Link>
              <Link href="/governance" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Governance
              </Link>
              <Link href="/grants" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Grants
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 DataSoul. All rights reserved. This is a demonstration website based on the whitepaper.
          </p>
        </div>
      </div>
    </footer>
  )
}
