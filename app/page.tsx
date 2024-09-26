import { ServerComponent } from './ServerComponent'
import { redirect } from 'next/navigation'
import LandingPage from './landing/page'
import Dashboard from '@/components/Dashboard'

export default function Page() {
  const { isAuthenticated } = ServerComponent()

  if (!isAuthenticated) {
    return <LandingPage />
  }

  return <Dashboard />
}
