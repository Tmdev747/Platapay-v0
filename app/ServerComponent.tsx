import { cookies } from 'next/headers'

export function ServerComponent() {
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.get('isAuthenticated')?.value === 'true'
  
  return { isAuthenticated }
}
