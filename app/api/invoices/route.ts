import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Mock database - replace with your actual database
const invoices = [
  { id: "INV-001", clientId: "customer_123", amount: 1250.0, status: "paid" },
  { id: "INV-002", clientId: "customer_456", amount: 890.5, status: "pending" },
]

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

    const invoices = await prisma.invoice.findMany({
      where: { shopId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(invoices);
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch invoices' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { shopId, customerId, items, total, tax, discount, notes } = body;

    const invoice = await prisma.invoice.create({
      data: {
        shopId,
        customerId,
        items: JSON.stringify(items),
        total,
        tax,
        discount,
        notes,
        status: 'DRAFT',
      },
    });

    return NextResponse.json(invoice);
  } catch (error) {
    console.error('Error creating invoice:', error);
    return NextResponse.json(
      { error: 'Failed to create invoice' },
      { status: 500 }
    );
  }
}
