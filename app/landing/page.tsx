"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function LandingPage() {
  const [activeDrawer, setActiveDrawer] = useState(null)
  const [is3DLoaded, setIs3DLoaded] = useState(false)

  useEffect(() => {
    // Simulate 3D loading
    const timer = setTimeout(() => {
      setIs3DLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const drawerVariants = {
    hidden: { y: '100%' },
    visible: { y: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  }

  const handleDrawerOpen = (drawer) => {
    setActiveDrawer(drawer)
  }

  const handleDrawerClose = () => {
    setActiveDrawer(null)
  }

  return (
    <div className="relative min-h-screen bg-purple-900 text-white overflow-hidden">
      {/* 3D Background (placeholder) */}
      {is3DLoaded && (
        <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-purple-800 to-indigo-900"></div>
      )}

      {/* Content */}
      <div className={`relative z-10 min-h-screen flex flex-col justify-center items-center p-4 ${activeDrawer ? 'blur-sm' : ''}`}>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to PlataPay</h1>
          <p className="text-2xl">Your Fintech Solution for the Future</p>
        </div>

        {/* Fixed "Buttons" */}
        <div className="flex justify-center space-x-4 mt-8">
          <motion.div
            className="bg-purple-600 text-white px-12 py-3 rounded-full cursor-pointer shadow-lg text-center w-40"
            onClick={() => handleDrawerOpen('login')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.div>
          <motion.div
            className="bg-white text-purple-800 px-12 py-3 rounded-full cursor-pointer shadow-lg text-center w-40"
            onClick={() => handleDrawerOpen('register')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.div>
        </div>
      </div>

      {/* Login Drawer */}
      <AnimatePresence>
        {activeDrawer === 'login' && (
          <motion.div
            className="fixed inset-x-4 bottom-4 bg-white text-purple-900 rounded-3xl p-8 z-30 shadow-2xl"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            style={{ maxHeight: 'calc(100vh - 8rem)', overflowY: 'auto' }}
          >
            <button onClick={handleDrawerClose} className="absolute top-4 right-4 text-purple-600">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Sign In to Your Account</h2>
            <form className="space-y-4">
              <input type="email" placeholder="Email" className="w-full p-2 border border-purple-300 rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 border border-purple-300 rounded" />
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">Sign In</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Register Drawer */}
      <AnimatePresence>
        {activeDrawer === 'register' && (
          <motion.div
            className="fixed inset-x-4 bottom-4 bg-white text-purple-900 rounded-3xl p-8 z-30 shadow-2xl"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            style={{ maxHeight: 'calc(100vh - 8rem)', overflowY: 'auto' }}
          >
            <button onClick={handleDrawerClose} className="absolute top-4 right-4 text-purple-600">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-2 border border-purple-300 rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 border border-purple-300 rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 border border-purple-300 rounded" />
              <input type="password" placeholder="Confirm Password" className="w-full p-2 border border-purple-300 rounded" />
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">Register</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
