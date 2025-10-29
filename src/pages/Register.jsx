import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const url = 'http://localhost:5000/api/register' // Replace with your actual endpoint -- MAKE SURE TO REPLACE LATER!!!!

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== repeatPassword) {
      alert("Passwords do not match")
      return
    }

    const data = {
      email,
      password
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log(result)
      if (result?.token) {
          localStorage.setItem('token', `Bearer ${result.token}`) // Validation as in backend - required "Bearer " prefix - line 70 of backend/app.py
        }
      // handle success (e.g., redirect or show message)
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Sign up for an Account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              className="mt-1 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="mt-4 block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              id="password"
              placeholder="Your Password"
              className="mt-1 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="repeatpassword" className="mt-4 block text-sm font-medium text-gray-700">
              Repeat Password
            </label>
            <Input
              type="password"
              id="repeatpassword"
              placeholder="Repeat Password"
              className="mt-1 w-full"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />

            <Button type="submit" className="mt-6 w-full bg-blue-600 text-black hover:bg-blue-700">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
