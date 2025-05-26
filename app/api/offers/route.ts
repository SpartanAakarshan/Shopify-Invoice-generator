import { type NextRequest, NextResponse } from "next/server"

// Mock database for offers
const offers = [
  {
    id: "OFFER-001",
    title: "Summer Sale 2024",
    description: "Get 20% off on all products",
    discountType: "percentage",
    discountValue: 20,
    code: "SUMMER20",
    cardId: "CARD-001",
    isActive: true,
    expiresAt: "2024-08-31T23:59:59Z",
    usageLimit: 500,
    usageCount: 156,
    createdAt: "2024-01-15T10:00:00Z",
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const cardId = searchParams.get("cardId")

  let filteredOffers = offers
  if (cardId) {
    filteredOffers = offers.filter((offer) => offer.cardId === cardId)
  }

  return NextResponse.json({ offers: filteredOffers })
}

export async function POST(request: NextRequest) {
  try {
    const offerData = await request.json()

    const offerId = `OFFER-${String(offers.length + 1).padStart(3, "0")}`

    const newOffer = {
      id: offerId,
      ...offerData,
      usageCount: 0,
      createdAt: new Date().toISOString(),
      isActive: true,
    }

    offers.push(newOffer)

    return NextResponse.json({
      success: true,
      offer: newOffer,
      message: "Offer created successfully",
    })
  } catch (error) {
    console.error("Error creating offer:", error)
    return NextResponse.json({ error: "Failed to create offer" }, { status: 500 })
  }
}

// Validate and redeem offer
export async function PATCH(request: NextRequest) {
  try {
    const { offerId, action } = await request.json()

    const offer = offers.find((o) => o.id === offerId)
    if (!offer) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 })
    }

    if (action === "redeem") {
      // Check if offer is valid
      if (!offer.isActive) {
        return NextResponse.json({ error: "Offer is not active" }, { status: 400 })
      }

      if (new Date() > new Date(offer.expiresAt)) {
        return NextResponse.json({ error: "Offer has expired" }, { status: 400 })
      }

      if (offer.usageCount >= offer.usageLimit) {
        return NextResponse.json({ error: "Offer usage limit reached" }, { status: 400 })
      }

      // Redeem offer
      offer.usageCount += 1

      return NextResponse.json({
        success: true,
        message: "Offer redeemed successfully",
        offer,
      })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("Error processing offer:", error)
    return NextResponse.json({ error: "Failed to process offer" }, { status: 500 })
  }
}
