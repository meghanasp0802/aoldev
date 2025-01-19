'use client'

import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { signIn } from "next-auth/react"
import { FaGoogle, FaGithub } from 'react-icons/fa'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string>('') // Type for error state
  const [passwordError, setPasswordError] = useState<string>('') // Password validation error state
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('') // Confirm password validation error state
  const { signup } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
    }
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter.')
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must contain at least one lowercase letter.')
    }
    if (!/[0-9]/.test(password)) {
      setError('Password must contain at least one number.')
    }
    if (!/[!@#$%^&*()_+={}|;:,.<>?~]/.test(password)) {
      setError('Password must contain at least one special character.')
    }
    

    // Check if the fields are empty or invalid
    if (!email) {
      setError('The Email field is required')
      return
    }

    if (!password || passwordError) {
      setError('Please fix the password error(s)')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    const success = await signup(email, password)
    if (!success) {
      setError('Failed to create account') // Handle signup failure
    }
  }




  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex flex-col space-y-2">
            <Button onClick={() => signIn('google')} type="button" className="w-full flex items-center justify-center">
              <FaGoogle className="mr-2" /> Sign up with Google
            </Button>
            <Button onClick={() => signIn('github')} type="button" className="w-full flex items-center justify-center">
              <FaGithub className="mr-2" /> Sign up with GitHub
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

