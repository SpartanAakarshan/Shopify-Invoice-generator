import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, CreditCard, TrendingUp, Plus, Eye } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your invoices and digital business cards</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/invoices/create">
              <Plus className="h-4 w-4 mr-2" />
              New Invoice
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/cards/create">
              <Plus className="h-4 w-4 mr-2" />
              New Card
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cards</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Card Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,543</div>
            <p className="text-xs text-muted-foreground">+23% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
            <CardDescription>Your latest invoice activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: "INV-001", client: "Acme Corp", amount: "$1,250", status: "paid" },
              { id: "INV-002", client: "Tech Solutions", amount: "$890", status: "pending" },
              { id: "INV-003", client: "Design Studio", amount: "$2,100", status: "overdue" },
            ].map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{invoice.id}</p>
                  <p className="text-sm text-muted-foreground">{invoice.client}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{invoice.amount}</p>
                  <Badge
                    variant={
                      invoice.status === "paid" ? "default" : invoice.status === "pending" ? "secondary" : "destructive"
                    }
                  >
                    {invoice.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Offers</CardTitle>
            <CardDescription>Current promotional campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Summer Sale", discount: "20% OFF", expires: "2 days", views: 1234 },
              { title: "New Customer", discount: "15% OFF", expires: "5 days", views: 856 },
              { title: "Bulk Order", discount: "25% OFF", expires: "1 week", views: 432 },
            ].map((offer, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{offer.title}</p>
                  <p className="text-sm text-muted-foreground">{offer.discount}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{offer.views} views</p>
                  <p className="text-xs text-muted-foreground">Expires in {offer.expires}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
