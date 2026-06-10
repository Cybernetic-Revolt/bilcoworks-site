import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

async function login(formData: FormData) {
  'use server'

  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const validUser = process.env.BASIC_AUTH_USER
  const validPass = process.env.BASIC_AUTH_PASS

  if (username === validUser && password === validPass) {
    const cookieStore = await cookies()
    cookieStore.set('ops_auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
    redirect('/ops')
  }

  redirect('/ops/login?error=1')
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  // Check if already authenticated
  const cookieStore = await cookies()
  const auth = cookieStore.get('ops_auth')
  if (auth?.value === 'authenticated') {
    redirect('/ops')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold text-gray-900 mb-6 text-center">Ops Login</h1>

        {searchParams.error && (
          <p className="text-red-600 text-sm mb-4 text-center">Invalid credentials</p>
        )}

        <form action={login} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              className="w-full border rounded px-3 py-2 text-sm"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full border rounded px-3 py-2 text-sm"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
