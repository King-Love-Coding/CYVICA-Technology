"use client"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import logo from './Cyvica_Logo_Transparent.png';
import Image from 'next/image';
import { url } from "inspector";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPartnersHovered, setIsPartnersHovered] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [footerAccordions, setFooterAccordions] = useState({
    products: false,
    services: false,
    resources: false,
    company: false,
  })
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleAccordion = (section: keyof typeof footerAccordions) => {
    setFooterAccordions((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Product categories data
  const productCategories = [
    {
      title: "Productivity",
      items: [
        "Google Workspace",
        "Hosted Exchange",
        "Microsoft 365",
        "Windows 365",
        "Discover Copilot for Microsoft 365"
      ]
    },
    {
      title: "Voice over IP (VoIP)",
      items: [
        "Cloud PBX",
        "SIP trunking",
        "UCaaS"
      ]
    },
    {
      title: "Infrastructure",
      items: [
        "KalibrB",
        "Microsoft Azure",
        "Nerdio",
        "Performance Cloud",
        "Wasabi"
      ]
    },
    {
      title: "Business apps",
      items: [
        "Dynamics 365",
        "Letsignit",
        "Nimble",
        "QuickBooks Online",
        "QuickHelp eLearning",
        "Revst",
        "signNow",
        "SyncMonkey"
      ]
    },
    {
      title: "Managed services",
      items: [
        "Managed Cloud"
      ]
    },
    {
      title: "Security, backup and compliance",
      items: [
        "Acronis Cyber Protect Cloud",
        "Acronis Online Backup",
        "Bitdefender Antivirus",
        "ConnectSecure",
        "DefensX",
        "Dronssuite",
        "Harmony SASE (formerly Perimeter 8I)",
        "IRONSCALES",
        "Keeper Security",
        "KeepIt",
        "LastPass",
        "NordPass",
        "Office Protect",
        "Proofpoint Email Protection",
        "SentinelOne",
        "ThreatDown powered by Malwarebytes"
      ]
    }
  ]

  // Partner categories data
  const partnerCategories = [
    {
      title: "Partner Programs",
      items: [
        "Microsoft CSP Program",
        "Google Partner Program",
        "Reseller Program",
        "Managed Service Provider",
        "Referral Program"
      ]
    },
    {
      title: "Resources",
      items: [
        "Technical Documentation",
        "Sales Enablement",
        "Marketing Resources",
        "Training & Certification",
        "API Documentation"
      ]
    },
    {
      title: "Support Services",
      items: [
        "Technical Support",
        "Account Management",
        "Professional Services",
        "Migration Assistance",
        "Billing Support"
      ]
    },
    {
      title: "Business Growth",
      items: [
        "Co-marketing Opportunities",
        "Lead Generation",
        "Deal Registration",
        "Market Development Funds",
        "Business Planning"
      ]
    },
    {
      title: "Tools & Integration",
      items: [
        "Partner Portal",
        "PSA Integrations",
        "RMM Integrations",
        "API Access",
        "Reporting Tools"
      ]
    }
  ]

  // Modern Dropdown Component - WIDER VERSION
  const ProductsDropdownMenu = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden animate-fadeIn"
      ref={dropdownRef}
      style={{left: '-20%', transform: 'translateX(-20%)', maxHeight: '500px', overflowY: 'auto'}}
    >
      <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Products & solutions</h3>
            <p className="text-gray-700 mt-3 text-lg max-w-2xl">
              Get your hands on the good stuff. We bring you business critical solutions backed by our reliable infrastructure.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base">
            Explore our marketplace
          </Button>
        </div>
      </div>
      
      <div className="p-8">
        {/* First row: Productivity, VoIP, Infrastructure, Business apps, Managed services */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {productCategories.slice(0, 5).map((category, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold text-gray-900 text-sm mb-4 flex items-center text-blue-800 px-2 py-1 bg-blue-50 rounded-md">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href="#" 
                      className="text-xs text-gray-700 hover:text-blue-600 transition-colors flex items-center py-2 px-2 rounded-md hover:bg-blue-50 group"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors flex-shrink-0"></span>
                      <span className="leading-tight">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Second row: Security, backup and compliance in 3 columns */}
        <div className="border-t border-gray-200 pt-8">
          <h4 className="font-semibold text-gray-900 text-sm mb-6 flex items-center text-blue-800 px-2 py-1 bg-blue-50 rounded-md">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Security, backup and compliance
          </h4>
          <div className="grid grid-cols-3 gap-6">
            {/* Split the security items into 3 columns */}
            {(() => {
              const securityItems = productCategories[5].items;
              const columnSize = Math.ceil(securityItems.length / 3);
              return Array.from({ length: 3 }).map((_, colIndex) => (
                <div key={colIndex} className="mb-4">
                  <ul className="space-y-2">
                    {securityItems.slice(colIndex * columnSize, (colIndex + 1) * columnSize).map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a 
                          href="#" 
                          className="text-xs text-gray-700 hover:text-blue-600 transition-colors flex items-center py-2 px-2 rounded-md hover:bg-blue-50 group"
                        >
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors flex-shrink-0"></span>
                          <span className="leading-tight">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
    </div>
  )
}

const PartnersDropdownMenu = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden animate-fadeIn"
      ref={dropdownRef}
      style={{left: '-100%', transform: 'translateX(-20%)', maxHeight: '500px', overflowY: 'auto'}}
    >
      <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">For partners</h3>
            <p className="text-gray-700 mt-3 text-lg max-w-2xl">
              Work with a trusted cloud solutions provider dedicated to your success. Get the services and support you need to grow your managed services offering.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base">
            Become a partner
          </Button>
        </div>
      </div>
      
      <div className="p-8">
        {/* Partner categories in 5 columns */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {partnerCategories.map((category, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold text-gray-900 text-sm mb-4 flex items-center text-blue-800 px-2 py-1 bg-blue-50 rounded-md">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href="#" 
                      className="text-xs text-gray-700 hover:text-blue-600 transition-colors flex items-center py-2 px-2 rounded-md hover:bg-blue-50 group"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors flex-shrink-0"></span>
                      <span className="leading-tight">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom sections */}
        <div className="border-t border-gray-200 pt-8">
          <h4 className="font-semibold text-gray-900 text-sm mb-6 flex items-center text-blue-800 px-2 py-1 bg-blue-50 rounded-md">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Partner Success Stories
          </h4>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col">
              <h4 className="font-semibold text-gray-900 text-sm mb-3 text-blue-800">
                Microsoft CSP
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                Our certified experts help you get more from the CSP program. Get ready to grow!
              </p>
              <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-medium mt-auto flex items-center">
                Learn more 
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="flex flex-col">
              <h4 className="font-semibold text-gray-900 text-sm mb-3 text-blue-800">
                Success stories
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                Learn how our partners are conquering their biggest challenges and increasing their revenue.
              </p>
              <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-medium mt-auto flex items-center">
                Read stories 
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-极7" />
                </svg>
              </a>
            </div>
            
            <div className="flex flex-col">
              <h4 className="font-semibold text-gray-900 text-sm mb-3 text-blue-800">
                Events
              </h4>
              <p className="text-xs text-gray-600 mb-3">
                Find here an ever-expanding database of various events for you to keep learning and networking.
              </p>
              <a href="#" className="text-xs text-blue-600 hover:text-blue-800 font-medium mt-auto flex items-center">
                View events 
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helpdesk Dropdown Component
const HelpdeskDropdownMenu = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden animate-fadeIn"
      ref={dropdownRef}
      style={{left: '-200%', transform: 'translateX(-20%)', maxHeight: '500px', overflowY: 'auto'}}
    >
      <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Helpdesk</h3>
            <p className="text-gray-700 mt-3 text-lg max-w-2xl">
              We want you to have all the information and support you need, exactly when you need it. Use our self-service tools to find answers to your questions on any helpdesk issue.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base">
            Contact Support
          </Button>
        </div>
      </div>
      
      <div className="p-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Resource Center */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 text-lg mb-4 flex items-center text-blue-800">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Resource center
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Search through our knowledge base of technical how-to guides and articles related to our products.
            </p>
            <a 
              href="#" 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Explore resources
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Network Status */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 text-lg mb-4 flex items-center text-blue-800">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Network status
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Check the latest system maintenance information and the status of our services.
            </p>
            <a 
              href="#" 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              View status
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Support Request */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 text-lg mb-4 flex items-center text-blue-800">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Support request
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Contact us by phone, chat or email. Our technical experts are available 24/7 and will work on your case in minutes.
            </p>
            <a 
              href="#" 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Get support
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* VoIP Connection Test */}
        <div className="border-t border-gray-200 pt-8 mt-4">
          <div className="flex items-start">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-lg mb-3 flex items-center text-blue-800">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                VoIP connection test
              </h4>
              <p className="text-sm text-gray-600">
                This test will simulate VoIP calls between a system and the telephony network to assess voice quality.
              </p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 text-sm">
              Run test
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}


// About Dropdown Component
const AboutDropdownMenu = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden animate-fadeIn"
      ref={dropdownRef}
      style={{left: '-250%', transform: 'translateX(-20%)', maxHeight: '500px', overflowY: 'auto'}}
    >
      <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">About</h3>
            <p className="text-gray-700 mt-3 text-lg max-w-2xl">
              We're born in the cloud and dedicated to offering tailored support. We'll help you develop your business strategy, streamline your operations, reduce skills gaps and provide the very best cloud products and services.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base">
            Meet The Team
          </Button>
        </div>
      </div>
      
      <div className="p-8">
        <div className="grid grid-cols-3 gap-8">
          {/* About us */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 text-lg mb-4 flex items-center text-blue-800">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              About us
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Our story began in 2024, from a small basement startup to a market leader. Today, we're proud to serve over 25,000 customers worldwide.
            </p>
          </div>

          {/* News */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 text-lg mb-4 flex items-center text-blue-800">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              News
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Keep up with the latest news from Sherweb.
            </p>
          </div>
          
          {/* Awards */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 text-lg mb-4 flex items-center text-blue-800">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Awards
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              We're always thankful to be recognized for the work we do for you.
            </p>
          </div>
        </div>
        
        {/* Legal */}
        <div className="border-t border-gray-200 pt-8 mt-4">
          <div className="flex items-start">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-lg mb-3 flex items-center text-blue-800">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Legal
              </h4>
              <p className="text-sm text-gray-600">
                All services offered by Sherweb are subject to our Terms of Service.
              </p>
            </div>
          </div>
        </div>
          
        {/* Careers */}
        <div className="border-t border-gray-200 pt-8 mt-4">
          <div className="flex items-start">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-lg mb-3 flex items-center text-blue-800">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Careers
              </h4>
              <p className="text-sm text-gray-600">
                Work alongside people who love what they do and work together toward a shared goal.
              </p>
            </div>
          </div>
        </div>
          
        {/* Contact us */}
        <div className="border-t border-gray-200 pt-8 mt-4">
          <div className="flex items-start">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-lg mb-3 flex items-center text-blue-800">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Contact us
              </h4>
              <p className="text-sm text-gray-600">
                We're happy to answer your questions about any of our products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


  // Regular Dropdown Component (for other menus)
  const DropdownMenu = ({ isActive, title }: { isActive: boolean, title: string }) => {
    if (!isActive) return null

    return (
      <div 
        className="absolute top-full left-0 bg-white shadow-xl rounded-md z-40 animate-fadeIn mt-1 min-w-[200px]"
        ref={dropdownRef}
      >
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-2 font-medium">{title}</div>
          <div className="h-px bg-gray-200 mb-3"></div>
          <div className="space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-1 px-2 rounded hover:bg-gray-50 transition-colors">
              Option 1
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-1 px-2 rounded hover:bg-gray-50 transition-colors">
              Option 2
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-1 px-2 rounded hover:bg-gray-50 transition-colors">
              Option 3
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 py-1 px-2 rounded hover:bg-gray-50 transition-colors">
              Option 4
            </a>
          </div>
        </div>
      </div>
    )
  }

  // Mobile Dropdown Component
  const MobileDropdownMenu = ({ data, isActive, onToggle }: { data: any, isActive: boolean, onToggle: () => void }) => {
    return (
      <div className="lg:hidden">
        <button 
          className="w-full text-left py-3 px-4 flex items-center justify-between bg-blue-900/30 rounded-md my-2 transition-all hover:bg-blue-900/40"
          onClick={onToggle}
        >
          <span className="font-medium">{data.title}</span>
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isActive && (
          <div className="ml-4 pl-2 border-l-2 border-blue-500/30 mb-4 animate-fadeIn">
            <div className="space-y-2">
              <a href="#" className="text-white/80 hover:text-white transition-colors block py-1 pl-4">
                Option 1
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors block py-1 pl-4">
                Option 2
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors block py-1 pl-4">
                Option 3
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors block py-1 pl-4">
                Option 4
              </a>
            </div>
          </div>
        )}
      </div>
    )
  }

  const partners = [
    {
      id: "microsoft",
      name: "Microsoft",
      component: (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
          <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
          <span className="text-lg md:text-xl font-semibold text-gray-600 ml-2">Microsoft</span>
        </div>
      ),
    },
    {
      id: "google",
      name: "Google",
      component: (
        <div className="text-xl md:text-2xl font-bold">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </div>
      ),
    },
    {
      id: "veeam",
      name: "Veeam",
      component: <div className="bg-[#00b04f] text-white px-4 py-2 rounded font-bold text-lg md:text-xl">veeam</div>,
    },
    {
      id: "sentinelone",
      name: "SentinelOne",
      component: (
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
          <span className="text-lg md:text-xl font-bold text-gray-600">SentinelOne</span>
        </div>
      ),
    },
    {
      id: "office365",
      name: "Office 365",
      component: <div className="text-sm md:text-lg font-bold text-gray-600">OFFICE 365 PROTECT</div>,
    },
  ]

  const services = [
    {
      id: "helpdesk",
      title: "White-label helpdesk",
      icon: (
        <div className="w-12 md:w-16 h-12 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <div className="w-6 md:w-8 h-6 md:h-8 bg-[#3498db] rounded-full flex items-center justify-center">
            <div className="w-3 md:w-4 h-3 md:h-4 bg-white rounded-sm"></div>
          </div>
        </div>
      ),
    },
    {
      id: "noc",
      title: "NOC services",
      icon: (
        <div className="w-12 md:w-16 h-12 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <div className="w-6 md:w-8 h-6 md:h-8 bg-[#3498db] rounded-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-sm"></div>
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-sm"></div>
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-sm"></div>
              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "microsoft-consultations",
      title: "Microsoft consultations",
      icon: (
        <div className="w-12 md:w-16 h-12 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <div className="w-6 md:w-8 h-6 md:h-8 bg-[#3498db] rounded-full flex items-center justify-center">
            <div className="w-3 md:w-4 h-3 md:h-4 bg-white rounded-full"></div>
          </div>
        </div>
      ),
    },
    {
      id: "mdr",
      title: "MDR for M365",
      icon: (
        <div className="w-12 md:w-16 h-12 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <div className="w-6 md:w-8 h-6 md:h-8 bg-[#3498db] rounded-full flex items-center justify-center">
            <div className="w-3 md:w-4 h-3 md:h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
        </div>
      ),
    },
    {
      id: "mdf",
      title: "MDF consultations",
      icon: (
        <div className="w-12 md:w-16 h-12 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <div className="w-6 md:w-8 h-6 md:h-8 bg-[#3498db] rounded-full flex items-center justify-center">
            <div className="w-3 md:w-4 h-3 md:h-4 bg-white rounded-sm"></div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1b1c44] text-white relative">
        <div className="container mx-auto px-2 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="flex items-center space-x-2">
             <div className="relative flex-shrink-0" style={{ width: '190px', height: '100px',marginRight: '0px' }}>
            <img
              src="/images/Cyvica_Logo_Transparent.png"
              alt="CYVICA Logo"
              className="w-full h-full object-contain filter brightness-0 invert"  
            />
          </div>
              <span className="text-xl font-bold">CYVICA TECHNOLOGY</span>
            </div>
            <nav className="hidden lg:flex space-x-6 text-sm">
              {/* Products Dropdown */}
              <div className="relative nav-item">
                <div 
                  onClick={() => toggleDropdown('products')}
                  className="hover:text-blue-400 py-2 cursor-pointer flex items-center"
                >
                  Products & solutions
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <ProductsDropdownMenu isActive={activeDropdown === 'products'} />
              </div>

              {/* Partners Dropdown */}
              <div className="relative nav-item">
                <div 
                  onClick={() => toggleDropdown('partners')}
                  className="hover:text-blue-400 py-2 cursor-pointer flex items-center"
                >
                  For partners
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'partners' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <PartnersDropdownMenu isActive={activeDropdown === 'partners'} />
              </div>

              {/* Helpdesk Dropdown */}
              <div className="relative nav-item">
                <div 
                  onClick={() => toggleDropdown('helpdesk')}
                  className="hover:text-blue-400 py-2 cursor-pointer flex items-center"
                >
                  Helpdesk
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'helpdesk' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <HelpdeskDropdownMenu isActive={activeDropdown === 'helpdesk'} />
              </div>

              
              {/* About Dropdown */}
<div className="relative nav-item">
  <div 
    onClick={() => toggleDropdown('about')}
    className="hover:text-blue-400 py-2 cursor-pointer flex items-center"
  >
    About CYVICA
    <svg 
      className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
  <AboutDropdownMenu isActive={activeDropdown === 'about'} />
</div>

            </nav>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4 text-sm">
            <button
              onClick={toggleSearch}
              className="hover:text-blue-400 p-2 rounded-full hover:bg-blue-700/20 transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="hover:text-blue-400 hidden sm:block">Contact</button>
            <button className="hover:text-blue-400 hidden sm:block border border-white px-3 py-1 rounded">
              Log in
            </button>
            <Button className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-3 md:px-4 py-2 rounded text-xs md:text-sm font-medium">
              Sign up
            </Button>
            <button
              className="lg:hidden flex flex-col space-y-1 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ''}`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></div>
            </button>
          </div>
        </div>


        {isSearchOpen && (
          <div className="absolute top-0 right-0 h-full bg-[#000080] border-l border-blue-700 z-50 w-80 max-w-[90vw]">
            <div className="flex items-center h-full px-4">
              <div className="flex-1 flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-transparent text-white placeholder-gray-300 border-none outline-none text-sm"
                  autoFocus
                />
              </div>
              <button
                onClick={toggleSearch}
                className="ml-3 p-2 hover:bg-blue-700/20 rounded-full transition-colors"
                aria-label="Close search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#000080] border-t border-blue-700">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <MobileDropdownMenu 
                data={{ title: "Products & solutions" }} 
                isActive={activeDropdown === 'products-mobile'} 
                onToggle={() => toggleDropdown('products-mobile')} 
              />
              
              <MobileDropdownMenu 
                data={{ title: "For partners" }} 
                isActive={activeDropdown === 'partners-mobile'} 
                onToggle={() => toggleDropdown('partners-mobile')} 
              />
              
              <MobileDropdownMenu 
                data={{ title: "Helpdesk" }} 
                isActive={activeDropdown === 'helpdesk-mobile'} 
                onToggle={() => toggleDropdown('helpdesk-mobile')} 
              />
              
              <MobileDropdownMenu 
                data={{ title: "About Sherweb" }} 
                isActive={activeDropdown === 'about-mobile'} 
                onToggle={() => toggleDropdown('about-mobile')} 
              />
              
              <div className="pt-3 border-t border-blue-700 space-y-2">
                <button className="block text-white hover:text-blue-400 py-2">Contact</button>
                <button className="block text-white hover:text-blue-400 py-2">Log in</button>
              </div>
            </nav>
          </div>
        )}
      </header>

      
      {/* Hero Section */}
      <section className="bg-[#000080] text-white py-12 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: "url(/images/Hero.png)" }}
        ></div>
        <div className="container mx-auto px-4 flex items-center relative z-10">
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8">
              Looking for <span className="text-white">more</span>
              <br />
              than a cloud
              <br />
              marketplace?
              <br />
              <span className="text-[#3498db]">
                You've come to
                <br />
                the right place
              </span>
            </h1>
            <Button className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6 md:px-8 py-3 rounded text-sm font-medium uppercase tracking-wide">
              START HERE
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 md:mb-12">
            The right cloud solutions for your MSP
          </h2>

          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPartnersHovered(true)}
            onMouseLeave={() => setIsPartnersHovered(false)}
          >
            <div
              className="flex space-x-16 py-8"
              style={{
                animation: isPartnersHovered ? "none" : "scroll-left-single 15s linear infinite",
                width: "fit-content",
              }}
            >
              {/* First set of partners */}
              {partners.map((partner) => (
                <div key={partner.id} className="flex-shrink-0 flex items-center justify-center">
                  <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                    {partner.component}
                  </div>
                </div>
              ))}
            </div>

            {/* Inline CSS for animation */}
            <style jsx>{`
              @keyframes scroll-left-single {
                0% {
                  transform: translateX(100%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
            `}</style>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-12 md:py-16 bg-[#ecf0f1]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 md:mb-16">
            Services to help you achieve more
          </h2>

          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <div
              className="flex space-x-16 py-8"
              style={{
                animation: isServicesHovered ? "none" : "scroll-left-services-single 20s linear infinite",
                width: "fit-content",
              }}
            >
              {/* First set of services */}
              {services.map((service) => (
                <div key={service.id} className="flex-shrink-0 flex items-center justify-center">
                  <div className="text-center">
                    {service.icon}
                    <h3 className="font-bold text-gray-800 text-sm md:text-base">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline CSS for animation */}
            <style jsx>{`
              @keyframes scroll-left-services-single {
                0% {
                  transform: translateX(100%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 md:mb-16">
            What you get when you work with us
          </h2>

          <div className="flex flex-col lg:flex-row items-center mb-16 md:mb-20">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-16 mb-8 lg:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">A partner you can trust</h3>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Count on a business partner that will go the extra mile to help you bring your MSP to the next level.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">
                    An account manager dedicated to your success
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">
                    Ongoing support to make the most of our marketplace
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">
                    Personalized tactics to increase your bottom line
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full h-60 md:h-80 bg-gradient-to-br from-[#e8f4fd] to-[#b3d9f2] rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-20 bg-[#3498db] rounded-full opacity-30 absolute top-8"></div>
                    <div className="w-24 h-24 bg-[#e74c3c] rounded-full opacity-40 absolute top-4 right-8"></div>
                    <div className="w-20 h-20 bg-[#2c3e50] rounded-full absolute bottom-8 left-4"></div>
                    <div className="w-16 h-8 bg-[#f39c12] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center mb-16 md:mb-20">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-16 order-2 lg:order-1">
              <div className="w-full h-60 md:h-80 bg-gradient-to-br from-[#fdf2e9] to-[#f8d7da] rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="grid grid-cols-3 gap-4">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-16 h-16 bg-white/60 rounded-lg flex items-center justify-center shadow-sm"
                        >
                          {i === 4 ? (
                            <div className="w-8 h-8 bg-[#3498db] rounded-lg"></div>
                          ) : (
                            <div className="w-6 h-6 bg-[#95a5a6] rounded"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 pl-0 lg:pl-16 order-1 lg:order-2 mb-8 lg:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Streamlined operations</h3>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Get the peace of mind to plan clients while keeping things simple with a suite of cloud solutions
                delivered through a unique platform.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">
                    Efficient provisioning to improve client experience
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">Centralized invoicing to simplify billing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">Vendor relationships managed for you</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-16 mb-8 lg:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">An entire team by your side</h3>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Rely on a team of passionate cloud experts who are fully engaged in getting the job done and solving
                your business challenges—from presales to helpdesk.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">
                    Official technical operations to free up time and resources
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">Extend your cloud expertise efficiently</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3 md:mr-4 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base">Get the help you need, when you need it</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full h-60 md:h-80 bg-gradient-to-br from-[#e8f4fd] to-[#3498db] rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-6 bg-[#e74c3c] transform skew-x-12 absolute bottom-16"></div>
                    <div className="w-28 h-6 bg-[#f39c12] transform -skew-x-12 absolute bottom-12 left-8"></div>
                    <div className="w-24 h-6 bg-[#3498db] transform skew-x-12 absolute bottom-8 left-4"></div>

                    <div className="absolute bottom-20 left-12 w-6 h-12 bg-[#e74c3c] rounded-t-full"></div>
                    <div className="absolute bottom-20 right-12 w-6 h-12 bg-[#2c3e50] rounded-t-full"></div>
                    <div className="absolute bottom-16 left-20 w-6 h-12 bg-[#f39c12] rounded-t-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 md:py-20 bg-[#ecf0f1]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 md:mb-16">
            Why MSPs partner with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 bg-white shadow-sm">
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm">
                "Sherweb does a great job of being accessible to us MSP partners. I feel I have somebody I can always
                reach out to when I need help navigating the world of cloud signing on."
              </p>
              <div className="border-t pt-4 md:pt-6">
                <p className="font-bold text-gray-800">Bryan Bagley</p>
                <p className="text-sm text-gray-500">President & Owner</p>
                <p className="text-sm text-gray-500">Bagley</p>
              </div>
            </Card>
            <Card className="p-6 md:p-8 bg-white shadow-sm">
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm">
                "Sherweb allowed us to grow our monthly recurring revenue over the last 5 years."
              </p>
              <div className="border-t pt-4 md:pt-6">
                <p className="font-bold text-gray-800">Mark A. Correia</p>
                <p className="text-sm text-gray-500">President</p>
                <p className="text-sm text-gray-500">Teknologik</p>
              </div>
            </Card>
            <Card className="p-6 md:p-8 bg-white shadow-sm">
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm">
                "Sherweb has been instrumental in accelerating our growth by providing innovative solutions and support
                that have enhanced our business for years opportunities."
              </p>
              <div className="border-t pt-4 md:pt-6">
                <p className="font-bold text-gray-800">Todd Swanzy</p>
                <p className="text-sm text-gray-500">CEO</p>
                <p className="text-sm text-gray-500">Swanzy Technologies</p>
              </div>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-[#2c3e50] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 md:mb-12">
            {/* Brand section - always visible */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4 md:mb-6">
                <div className="w-6 h-6 bg-[#3498db] rounded-sm"></div>
                <span className="text-xl font-bold">CYVICA</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 md:mb-6">
                The cloud marketplace built for MSPs. Get the right cloud solutions for your business.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-[#3b5998] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-[#1da1f2] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">▶</span>
                </div>
              </div>
            </div>

            {/* Products & Solutions - Accordion on mobile, static on desktop */}
            <div>
              <button
                className="md:hidden w-full flex items-center justify-between font-bold text-white mb-4 py-2 border-b border-gray-600"
                onClick={() => toggleAccordion("products")}
              >
                <span>Products & solutions</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${footerAccordions.products ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <h3 className="hidden md:block font-bold text-white mb-4">Products & solutions</h3>

              <ul
                className={`space-y-2 text-sm text-gray-300 transition-all duration-300 overflow-hidden ${
                  footerAccordions.products ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                }`}
              >
                <li>
                  <a href="#" className="hover:text-white">
                    Microsoft 365
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Microsoft Azure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Google Workspace
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Backup & recovery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    All products
                  </a>
                </li>
              </ul>
            </div>

            {/* Services - Accordion on mobile, static on desktop */}
            <div>
              <button
                className="md:hidden w-full flex items-center justify-between font-bold text-white mb-4 py-2 border-b border-gray-600"
                onClick={() => toggleAccordion("services")}
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${footerAccordions.services ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <h3 className="hidden md:block font-bold text-white mb-4">Services</h3>

              <ul
                className={`space-y-2 text-sm text-gray-300 transition-all duration-300 overflow-hidden ${
                  footerAccordions.services ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                }`}
              >
                <li>
                  <a href="#" className="hover:text-white">
                    White-label helpdesk
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    NOC services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Microsoft consultations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    MDR for M365
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    MDF consultations
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources - Accordion on mobile, static on desktop */}
            <div>
              <button
                className="md:hidden w-full flex items-center justify-between font-bold text-white mb-4 py-2 border-b border-gray-600"
                onClick={() => toggleAccordion("resources")}
              >
                <span>Resources</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${footerAccordions.resources ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <h3 className="hidden md:block font-bold text-white mb-4">Resources</h3>

              <ul
                className={`space-y-2 text-sm text-gray-300 transition-all duration-300 overflow-hidden ${
                  footerAccordions.resources ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                }`}
              >
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Case studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    White papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Partner portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company - Accordion on mobile, static on desktop */}
            <div>
              <button
                className="md:hidden w-full flex items-center justify-between font-bold text-white mb-4 py-2 border-b border-gray-600"
                onClick={() => toggleAccordion("company")}
              >
                <span>Company</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${footerAccordions.company ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <h3 className="hidden md:block font-bold text-white mb-4">Company</h3>

              <ul
                className={`space-y-2 text-sm text-gray-300 transition-all duration-300 overflow-hidden ${
                  footerAccordions.company ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                }`}
              >
                <li>
                  <a href="#" className="hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    News & events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Partner program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Helpdesk
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-sm text-gray-300">
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of service
                </a>
                <a href="#" className="hover:text-white">
                  Cookie policy
                </a>
                <a href="#" className="hover:text-white">
                  Accessibility
                </a>
              </div>
              <div className="text-sm text-gray-300">© 2025 CYVICA Inc. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
