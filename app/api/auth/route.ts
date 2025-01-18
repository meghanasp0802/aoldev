import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// This would typically be stored in a database
const users = new Map()

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(req: Request) {
  const { action, email, password } = await req.json()

  if (action === 'signup') {
    if (users.has(email)) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    users.set(email, hashedPassword)

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' })
    return NextResponse.json({ token })
  } else if (action === 'login') {
    const hashedPassword = users.get(email)
    if (!hashedPassword) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const isPasswordValid = await bcrypt.compare(password, hashedPassword)
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' })
    return NextResponse.json({ token })
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}

