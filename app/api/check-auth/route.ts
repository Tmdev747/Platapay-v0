import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.get('isAuthenticated')?.value === 'true'

  return NextResponse.json({ isAuthenticated })
}
