import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import axios from 'axios';

// Get all events (both local and national)
export async function GET() {
  try {
    const localEvents = await prisma.event.findMany({
      where: {
        type: 'LOCAL',
      },
      orderBy: {
        startDate: 'asc',
      },
    });

    // Fetch national events from Kappa Alpha Psi API
    // This is a placeholder - you'll need to implement the actual API integration
    const nationalEvents = await fetchNationalEvents();

    return NextResponse.json({
      local: localEvents,
      national: nationalEvents,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

// Create a new local event (protected route)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const event = await prisma.event.create({
      data: {
        ...body,
        type: 'LOCAL',
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}

async function fetchNationalEvents() {
  try {
    // This is a placeholder - implement actual API integration
    const response = await axios.get(
      'https://api.kappaalphapsi1911.org/events/southwestern'
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch national events:', error);
    return [];
  }
}