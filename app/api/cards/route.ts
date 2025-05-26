import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      shopId,
      businessName,
      logo,
      contactInfo,
      socialLinks,
      offerCode,
      offerExpiry,
      offerDetails,
    } = body;

    const card = await prisma.businessCard.create({
      data: {
        shopId,
        businessName,
        logo,
        contactInfo: JSON.stringify(contactInfo),
        socialLinks: JSON.stringify(socialLinks),
        offerCode,
        offerExpiry: new Date(offerExpiry),
        offerDetails,
        status: 'ACTIVE',
      },
    });

    return NextResponse.json(card);
  } catch (error) {
    console.error('Error creating business card:', error);
    return NextResponse.json(
      { error: 'Failed to create business card' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const shopId = searchParams.get('shopId');

    if (!shopId) {
      return NextResponse.json(
        { error: 'Shop ID is required' },
        { status: 400 }
      );
    }

    const cards = await prisma.businessCard.findMany({
      where: { shopId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(cards);
  } catch (error) {
    console.error('Error fetching business cards:', error);
    return NextResponse.json(
      { error: 'Failed to fetch business cards' },
      { status: 500 }
    );
  }
}
