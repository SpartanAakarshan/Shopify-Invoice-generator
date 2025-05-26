# Shopify Invoice & Digital Business Card App

A Next.js application that creates custom personalized invoices for businesses and digital visiting cards with business logos and details. The app includes customizable offers and coupon codes on the back face of the card, which are only valid until the offer expires.

## Features

- Custom invoice generation
- Digital business card creation
- Business logo and details management
- Customizable offers and coupon codes
- Offer expiration tracking
- Shopify integration

## Tech Stack

- Next.js 14
- TypeScript
- Prisma (PostgreSQL)
- Tailwind CSS
- Docker
- Shopify API

## Prerequisites

- Node.js 18 or higher
- PostgreSQL database
- Shopify Partner account
- Docker (for deployment)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/shopify_invoice_card_app"
SHOPIFY_API_KEY="your_shopify_api_key"
SHOPIFY_API_SECRET="your_shopify_api_secret"
SHOPIFY_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd shopify-invoice-card-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up the database:
```bash
pnpm prisma generate
pnpm prisma migrate dev
```

4. Start the development server:
```bash
pnpm dev
```

## Docker Deployment

1. Build the Docker image:
```bash
docker-compose build
```

2. Start the containers:
```bash
docker-compose up -d
```

## API Endpoints

### Invoices
- `GET /api/invoices` - Get all invoices for a shop
- `POST /api/invoices` - Create a new invoice

### Business Cards
- `GET /api/cards` - Get all business cards for a shop
- `POST /api/cards` - Create a new business card

## License

MIT 