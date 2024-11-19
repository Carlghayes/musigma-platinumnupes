import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Session } from 'next-auth';

// GET route handler
export const GET = async (
  _request: NextRequest,
  { params }: { params: Record<string, string> }
) => {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(event);
  } catch (error) {
    console.error('Failed to fetch event:', error);
    return NextResponse.json(
      { error: 'Failed to fetch event' },
      { status: 500 }
    );
  }
};

// PUT route handler
export const PUT = async (
  request: NextRequest,
  { params }: { params: Record<string, string> }
) => {
  try {
    const session = (await getServerSession(authOptions)) as Session | null;
    if (!session?.user?.role || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    const body = await request.json();
    const event = await prisma.event.update({
      where: {
        id: params.id,
      },
      data: body,
    });
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 500 }
    );
  }
};

// DELETE route handler
export const DELETE = async (
  request: NextRequest,
  { params }: { params: Record<string, string> }
) => {
  try {
    const session = (await getServerSession(authOptions)) as Session | null;
    if (!session?.user?.role || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    await prisma.event.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete event' },
      { status: 500 }
    );
  }
};