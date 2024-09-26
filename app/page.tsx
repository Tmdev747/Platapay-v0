import { LayoutComponent } from '@/components/layout'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import { ClientSideHandler } from '@/components/ClientSideHandler'
import { ServerComponent } from './ServerComponent'

export default function Page() {
  const { isAuthenticated } = ServerComponent()

  return (
    <LayoutComponent title={isAuthenticated ? 'Dashboard' : 'Login'}>
      {isAuthenticated ? <Dashboard /> : <Login />}
    </LayoutComponent>
  )
}
