import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Filter, Eye, Edit, Copy, Pause, Play } from "lucide-react"
import Link from "next/link"

const offers = [
  {
    id: "OFFER-001",
    title: "Summer Sale 2024",
    discount: "20% OFF",
    code: "SUMMER20",
    status: "active",
    expires: "2024-08-31",
    uses: 156,
    limit: 500,
    card: "Premium Business Card",
  },
  {
    id: "OFFER-002",
    title: "New Customer Welcome",
    discount: "15% OFF",
    code: "WELCOME15",
    status: "active",
    expires: "2024-12-31",
    uses: 89,
    limit: 1000,
    card: "Executive Card",
  },
  {
    id: "OFFER-003",
    title: "Bulk Order Discount",
    discount: "25% OFF",
    code: "BULK25",
    status: "paused",
    expires: "2024-09-30",
    uses: 23,
    limit: 200,
    card: "Creative Studio Card",
  },
  {
    id: "OFFER-004",
    title: "Flash Sale",
    discount: "30% OFF",
    code: "FLASH30",
    status: "expired",
    expires: "2024-01-31",
    uses: 345,
    limit: 300,
    card: "Premium Business Card",
  },
]

export default function OffersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Offers & Coupons</h1>
          <p className="text-muted-foreground">Manage promotional offers for your digital business cards</p>
        </div>
        <Button asChild>
          <Link href="/offers/create">
            <Plus className="h-4 w-4 mr-2" />
            Create Offer
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Offers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Redemptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Revenue Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Discount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18%</div>
            <p className="text-xs text-muted-foreground">-2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Offer Management</CardTitle>
          <CardDescription>View and manage all your promotional offers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search offers..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Offer</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>Card</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {offers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{offer.title}</p>
                      <p className="text-sm text-muted-foreground">{offer.id}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{offer.discount}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded text-sm">{offer.code}</code>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        offer.status === "active" ? "default" : offer.status === "paused" ? "secondary" : "destructive"
                      }
                    >
                      {offer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <span className="font-medium">{offer.uses}</span>
                      <span className="text-muted-foreground">/{offer.limit}</span>
                    </div>
                  </TableCell>
                  <TableCell>{offer.expires}</TableCell>
                  <TableCell className="text-sm">{offer.card}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        {offer.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
