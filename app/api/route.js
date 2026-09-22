import { NextResponse } from 'next/server';

// รองรับ GET Method
export async function GET(request) {
  return NextResponse.json({ 
    message: 'Hello from Vercel External API!',
    timestamp: new Date().toISOString() 
  });
}

// รองรับ POST Method (ตัวอย่างการรับ Body)
export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ 
    message: 'Data received successfully',
    data: body 
  });
}
