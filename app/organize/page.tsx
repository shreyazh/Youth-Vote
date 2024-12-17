import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createEvent, getEvents } from "../actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Organize() {
  const events = await getEvents()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Organize Your Community</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Create a New Event</h2>
          <form action={createEvent} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Event Name</label>
              <Input type="text" id="name" name="name" placeholder="Voter Registration Drive" required />
            </div>
            <div>
              <label htmlFor="date" className="block mb-1">Event Date</label>
              <Input type="date" id="date" name="date" required />
            </div>
            <div>
              <label htmlFor="location" className="block mb-1">Location</label>
              <Input type="text" id="location" name="location" placeholder="City Hall" required />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1">Description</label>
              <Textarea id="description" name="description" placeholder="Describe your event..." required />
            </div>
            <Button type="submit" className="w-full bg-peach text-black hover:bg-opacity-80">
              Create Event
            </Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

