import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function AIAssistantDashboard() {
  return (
    <div className="p-4 md:p-10 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">ARA Dashboard – AI Assistant</h1>

      <Tabs defaultValue="tasks">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="tasks">📋 Tasks</TabsTrigger>
          <TabsTrigger value="chat">💬 Chat</TabsTrigger>
          <TabsTrigger value="clients">👥 Clients</TabsTrigger>
          <TabsTrigger value="tools">🛠 Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks">
          <Card>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold">Your Tasks</h2>
              <Input placeholder="Add new task..." />
              <Button>Add Task</Button>
              <div className="mt-4">
                <p>📌 Design logo for Arjé – Due Friday</p>
                <p>📌 Post Instagram content – Due Monday</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chat">
          <Card>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold">Chat with ARA</h2>
              <Textarea placeholder="Ask something like 'Write Instagram caption for luxury brand'..." />
              <Button>Send to ARA</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients">
          <Card>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold">Client Requests</h2>
              <p>🧾 Ravi – Packaging Design – ₹4000 Budget – Due 17th June</p>
              <p>🧾 Meena – Branding Kit – ₹6000 – Pending Review</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools">
          <Card>
            <CardContent className="space-y-4 p-4">
              <h2 className="text-xl font-semibold">ARA Tools</h2>

              <div className="space-y-2">
                <Label htmlFor="daily-summary">📅 Daily Summary Report</Label>
                <Switch id="daily-summary" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="auto-post">📢 Auto Instagram Caption Generator</Label>
                <Switch id="auto-post" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment-alerts">📈 Stock/Crypto Alert Assistant</Label>
                <Switch id="investment-alerts" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-responder">📧 Smart Email Auto-Responder</Label>
                <Switch id="email-responder" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
