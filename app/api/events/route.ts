import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Session } from 'next-auth';

// Get all events (both local and national)
export async function GET(request: NextRequest) {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        startDate: 'asc',
      },
    });
    return NextResponse.json({
      events,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

// Create a new event (protected route)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as Session | null;
    if (!session?.user?.role || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    const body = await request.json();
    const event = await prisma.event.create({
      data: body,
    });
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}