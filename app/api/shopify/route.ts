import { type NextRequest, NextResponse } from "next/server"

// Shopify GraphQL API integration
export async function POST(request: NextRequest) {
  try {
    const { query, variables } = await request.json()

    const shopifyResponse = await fetch(`https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN || "",
      },
      body: JSON.stringify({ query, variables }),
    })

    const data = await shopifyResponse.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("Shopify API Error:", error)
    return NextResponse.json({ error: "Failed to fetch from Shopify" }, { status: 500 })
  }
}

// Get customer data
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const customerId = searchParams.get("customerId")

  try {
    const query = `
      query getCustomer($id: ID!) {
        customer(id: $id) {
          id
          firstName
          lastName
          email
          phone
          addresses {
            address1
            address2
            city
            province
            country
            zip
          }
          orders(first: 10) {
            edges {
              node {
                id
                name
                totalPrice
                createdAt
              }
            }
          }
        }
      }
    `

    const response = await fetch(`https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN || "",
      },
      body: JSON.stringify({
        query,
        variables: { id: `gid://shopify/Customer/${customerId}` },
      }),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching customer:", error)
    return NextResponse.json({ error: "Failed to fetch customer data" }, { status: 500 })
  }
}
