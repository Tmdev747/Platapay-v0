"use client";

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SplashScreen from '@/components/SplashScreen'
import { AnimatePresence } from 'framer-motion'

export function ClientSideHandler() {
  const [showSplash, setShowSplash] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000) // Increased to 3 seconds to allow for the animation

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('/api/check-auth')
      const data = await response.json()
      if (data.isAuthenticated) {
        router.push('/dashboard')
      } else {
        router.push('/login')
      }
    }

    if (!showSplash) {
      checkAuth()
    }
  }, [showSplash, router])

  return (
    <AnimatePresence>
      {showSplash && <SplashScreen />}
    </AnimatePresence>
  )
}
