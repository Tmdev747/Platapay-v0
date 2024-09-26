import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bell, Menu, Home, CreditCard, QrCode, User, Settings } from 'lucide-react'
import { ClientSideHandler } from '@/components/ClientSideHandler'

interface LayoutProps {
  children: ReactNode
  title: string
  showBackButton?: boolean
  onBackButtonClick?: () => void
}

export function LayoutComponent({ children, title, showBackButton = false, onBackButtonClick }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#4B0082]">
      <ClientSideHandler />
      {/* Header */}
      <header className="bg-[#3B006A] text-white p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center">
          <button className="mr-4 md:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <div className="h-8 w-32 relative">
            <Image
              src="/logo.png"
              alt="Platapay Logo"
              width={128}
              height={32}
              priority
            />
          </div>
        </div>
        <div className="flex items-center">
          <button className="mr-4">
            <Bell className="w-6 h-6" />
          </button>
          {showBackButton && (
            <button className="md:hidden" onClick={onBackButtonClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
        </div>
      </header>

      {/* Page Title */}
      <div className="bg-[#4B0082] text-white p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      {/* Scrollable content area */}
      <main className="flex-grow overflow-y-auto bg-gray-100">
        {children}
      </main>

      {/* Mobile footer navigation */}
      <footer className="md:hidden bg-[#3B006A] text-white py-2 sticky bottom-0 left-0 right-0 shadow-lg">
        <nav className="flex justify-around items-center relative">
          <Link href="/" className="flex flex-col items-center p-2">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/cards" className="flex flex-col items-center p-2">
            <CreditCard className="w-6 h-6" />
            <span className="text-xs mt-1">Cards</span>
          </Link>
          <Link href="/scan" className="flex flex-col items-center p-2 relative">
            <div className="absolute -top-8 bg-[#4B0082] rounded-full p-4">
              <QrCode className="w-8 h-8" />
            </div>
            <span className="text-xs mt-8">Scan</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center p-2">
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
          <Link href="/settings" className="flex flex-col items-center p-2">
            <Settings className="w-6 h-6" />
            <span className="text-xs mt-1">Settings</span>
          </Link>
        </nav>
      </footer>
    </div>
  )
}
