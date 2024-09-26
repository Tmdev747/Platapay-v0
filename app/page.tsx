import { LayoutComponent } from '@/components/layout'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import { cookies } from 'next/headers'
import { ClientSideHandler } from '@/components/ClientSideHandler'

export default function Page() {
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.get('isAuthenticated')?.value === 'true'

  return (
    <LayoutComponent title={isAuthenticated ? 'Dashboard' : 'Login'}>
      <ClientSideHandler />
      {isAuthenticated ? <Dashboard /> : <Login />}
    </LayoutComponent>
  )
}
