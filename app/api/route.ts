import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { message: 'Hello' },
    {
      headers: {
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    }
  );
} 