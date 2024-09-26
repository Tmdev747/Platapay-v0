import { LayoutComponent } from '@/components/layout'
import Dashboard from '@/components/Dashboard'
import { ClientSideHandler } from '@/components/ClientSideHandler'
import { ServerComponent } from './ServerComponent'
import { redirect } from 'next/navigation'

export default function Page() {
  const { isAuthenticated } = ServerComponent()

  if (!isAuthenticated) {
    redirect('/login')
  }

  return (
    <LayoutComponent title="Dashboard">
      <Dashboard />
    </LayoutComponent>
  )
}
