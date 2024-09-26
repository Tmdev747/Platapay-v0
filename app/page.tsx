import { LayoutComponent } from '@/components/layout'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import SplashScreen from '@/components/SplashScreen'
import { cookies } from 'next/headers'

export default function Page() {
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.get('isAuthenticated')?.value === 'true'

  return (
    <LayoutComponent title={isAuthenticated ? 'Dashboard' : 'Login'}>
      {isAuthenticated ? <Dashboard /> : <Login />}
    </LayoutComponent>
  )
}

// Client-side component for handling dynamic behavior
"use client";

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

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
