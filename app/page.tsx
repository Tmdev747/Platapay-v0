"use client";

"use client";

import { LayoutComponent } from '@/components/layout'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import { useEffect, useState } from 'react'

const cache = new Map();

export default function Page() {
  const [prompt, setPrompt] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const cachedPrompt = cache.get('prompt');
    if (cachedPrompt) {
      setPrompt(cachedPrompt);
    } else {
      // Fetch or generate the prompt
      const newPrompt = 'New Prompt'; // Replace with actual logic
      cache.set('prompt', newPrompt);
      setPrompt(newPrompt);
    }

    // Simulate authentication check
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  return (
    <LayoutComponent title={isAuthenticated ? 'Dashboard' : 'Login'}>
      {isAuthenticated ? <Dashboard prompt={prompt} /> : <Login />}
    </LayoutComponent>
  )
}
