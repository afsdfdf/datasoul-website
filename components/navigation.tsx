"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navItems = [
    { href: "/", label: "Home" },
    {
      label: "Platform",
      dropdown: [
        { href: "/platform", label: "Architecture" },
        { href: "/ai-services", label: "AI Services" },
        { href: "/data-marketplace", label: "Data Marketplace" },
        { href: "/staking", label: "Staking" },
      ],
    },
    {
      label: "Ecosystem",
      dropdown: [
        { href: "/tokenomics", label: "Tokenomics" },
        { href: "/governance", label: "Governance" },
        { href: "/community", label: "Community" },
        { href: "/roadmap", label: "Roadmap" },
      ],
    },
    {
      label: "Resources",
      dropdown: [
        { href: "/whitepaper", label: "Whitepaper" },
        { href: "/documentation", label: "Documentation" },
        { href: "/about", label: "About" },
      ],
    },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-cyan-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg shadow-cyan-400/50">
              <Image
                src="/logo.png"
                alt="DataSoul Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent font-mono">
              DataSoul
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-cyan-300 hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="flex items-center space-x-1 text-cyan-300 hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">
                    <span>{item.label}</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-cyan-400/30 rounded-lg shadow-2xl shadow-cyan-400/20"
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-cyan-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors font-mono text-sm first:rounded-t-lg last:rounded-b-lg"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/launch-app">
              <Button className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 py-2 rounded-xl font-mono shadow-lg shadow-cyan-400/20">
                Launch App
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-cyan-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-cyan-400/20"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-cyan-300 hover:text-cyan-400 transition-colors px-4 py-2 font-mono"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <div className="text-cyan-300 px-4 py-2 font-mono font-semibold">{item.label}</div>
                        {item.dropdown?.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="text-cyan-300/80 hover:text-cyan-400 transition-colors px-8 py-2 font-mono text-sm block"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link href="/launch-app">
                    <Button className="w-full bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-mono">
                      Launch App
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
