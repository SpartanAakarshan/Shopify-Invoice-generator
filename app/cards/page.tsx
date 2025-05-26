import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, Eye, Edit, Share, BarChart3 } from "lucide-react"
import Link from "next/link"

const digitalCards = [
  {
    id: "CARD-001",
    name: "Premium Business Card",
    status: "active",
    views: 1234,
    offers: 3,
    created: "2024-01-15",
    template: "modern",
  },
  {
    id: "CARD-002",
    name: "Executive Card",
    status: "active",
    views: 856,
    offers: 2,
    created: "2024-01-20",
    template: "classic",
  },
  {
    id: "CARD-003",
    name: "Creative Studio Card",
    status: "draft",
    views: 0,
    offers: 1,
    created: "2024-01-25",
    template: "creative",
  },
]

export default function CardsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Digital Business Cards</h1>
          <p className="text-muted-foreground">Create and manage your digital business cards with offers</p>
        </div>
        <Button asChild>
          <Link href="/cards/create">
            <Plus className="h-4 w-4 mr-2" />
            Create Card
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search cards..." className="pl-8" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {digitalCards.map((card) => (
          <Card key={card.id} className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl font-bold">BC</span>
                  </div>
                  <h3 className="font-semibold">Business Card Preview</h3>
                  <p className="text-sm opacity-90">{card.template} template</p>
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{card.name}</CardTitle>
                <Badge variant={card.status === "active" ? "default" : "secondary"}>{card.status}</Badge>
              </div>
              <CardDescription>{card.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Views:</span>
                  <span className="font-medium">{card.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Active Offers:</span>
                  <span className="font-medium">{card.offers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Created:</span>
                  <span className="font-medium">{card.created}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
