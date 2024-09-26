'use client'

import React, { useState } from 'react'
import { LayoutComponent } from '@/components/layout'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LandingPage() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => setIsLogin(!isLogin)

  return (
    <LayoutComponent title={isLogin ? "Login" : "Register"}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? "Login" : "Register"}</h2>
          <form className="space-y-4">
            {!isLogin && (
              <Input type="text" placeholder="Full Name" required />
            )}
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            {!isLogin && (
              <Input type="password" placeholder="Confirm Password" required />
            )}
            <Button className="w-full" type="submit">
              {isLogin ? "Login" : "Register"}
            </Button>
          </form>
          <p className="text-center mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <Button variant="link" onClick={toggleForm} className="ml-1">
              {isLogin ? "Register" : "Login"}
            </Button>
          </p>
        </div>
      </div>
    </LayoutComponent>
  )
}
