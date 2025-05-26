import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Upload, Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your business information and app preferences</p>
      </div>

      <div className="grid gap-6">
        {/* Business Information */}
        <Card>
          <CardHeader>
            <CardTitle>Business Information</CardTitle>
            <CardDescription>Update your business details for invoices and cards</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" placeholder="Your Business Name" defaultValue="Acme Corporation" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessEmail">Business Email</Label>
                <Input
                  id="businessEmail"
                  type="email"
                  placeholder="business@example.com"
                  defaultValue="contact@acme.com"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://yourwebsite.com" defaultValue="https://acme.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Business Address</Label>
              <Textarea
                id="address"
                placeholder="Enter your business address"
                defaultValue="123 Business St, Suite 100&#10;New York, NY 10001&#10;United States"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="logo">Business Logo</Label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-sm font-medium">LOGO</span>
                </div>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Logo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shopify Integration */}
        <Card>
          <CardHeader>
            <CardTitle>Shopify Integration</CardTitle>
            <CardDescription>Configure your Shopify store connection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="shopifyStore">Shopify Store URL</Label>
              <Input id="shopifyStore" placeholder="your-store.myshopify.com" defaultValue="acme-store.myshopify.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="apiKey">API Access Token</Label>
              <Input id="apiKey" type="password" placeholder="shpat_..." defaultValue="••••••••••••••••" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="autoSync" defaultChecked />
              <Label htmlFor="autoSync">Auto-sync customer data</Label>
            </div>
          </CardContent>
        </Card>

        {/* Invoice Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Invoice Settings</CardTitle>
            <CardDescription>Configure default invoice preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="invoicePrefix">Invoice Number Prefix</Label>
                <Input id="invoicePrefix" placeholder="INV-" defaultValue="INV-" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentTerms">Default Payment Terms (days)</Label>
                <Input id="paymentTerms" type="number" placeholder="30" defaultValue="30" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="invoiceNotes">Default Invoice Notes</Label>
              <Textarea
                id="invoiceNotes"
                placeholder="Thank you for your business!"
                defaultValue="Thank you for your business! Payment is due within 30 days."
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="autoReminders" defaultChecked />
              <Label htmlFor="autoReminders">Send automatic payment reminders</Label>
            </div>
          </CardContent>
        </Card>

        {/* Card Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Digital Card Settings</CardTitle>
            <CardDescription>Configure default settings for digital business cards</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="trackViews" defaultChecked />
              <Label htmlFor="trackViews">Track card views and analytics</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="allowSharing" defaultChecked />
              <Label htmlFor="allowSharing">Allow card sharing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="showOffers" defaultChecked />
              <Label htmlFor="showOffers">Show active offers on cards</Label>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="defaultExpiry">Default Offer Expiry (days)</Label>
              <Input id="defaultExpiry" type="number" placeholder="30" defaultValue="30" />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  )
}
