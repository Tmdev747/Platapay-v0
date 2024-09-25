import { LayoutComponent } from '@/components/layout'
import Dashboard from '@/components/Dashboard'
import { useEffect, useState } from 'react'

const cache = new Map();

export default function Page() {
  const [prompt, setPrompt] = useState('');

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
  }, []);

  return (
    <LayoutComponent title='Dashboard'>
      <Dashboard prompt={prompt} />
    </LayoutComponent>
  )
}
