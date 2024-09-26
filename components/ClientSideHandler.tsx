"use client";

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SplashScreen from '@/components/SplashScreen'

export function ClientSideHandler() {
  const [showSplash, setShowSplash] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000)

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

  return showSplash ? <SplashScreen /> : null
}
