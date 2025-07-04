import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Logo and social icons - always at the top on mobile */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-6 md:mb-8">
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="DataSoul Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                DataSoul
              </span>
            </div>
            <p className="text-gray-400 text-sm text-center sm:text-left">AI-Powered Data Sharing & SocialFi Ecosystem</p>
          </div>
          
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

        {/* Links section - grid on desktop, more compact on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-base">Platform</h3>
            <div className="space-y-1 md:space-y-2">
              <Link href="/platform" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                Architecture
              </Link>
              <Link href="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                AI Services
              </Link>
              <Link href="/data-marketplace" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                Data Marketplace
              </Link>
              <Link href="/staking" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                Staking
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-base">Resources</h3>
            <div className="space-y-1 md:space-y-2">
              <Link href="/whitepaper" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                Whitepaper
              </Link>
              <Link href="/docs" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                Documentation
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                Blog
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2 md:mb-4 text-sm md:text-base">Community</h3>
            <div className="space-y-1 md:space-y-2">
              <Link href="/community" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                Discord
              </Link>
              <Link href="/community" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                Telegram
              </Link>
              <Link href="/governance" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                Governance
              </Link>
              <Link href="/grants" className="block text-gray-400 hover:text-cyan-400 transition-colors text-xs md:text-sm">
                Grants
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-4 md:pt-6 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 DataSoul. All rights reserved. This is a demonstration website based on the whitepaper.
          </p>
        </div>
      </div>
    </footer>
  )
}
