"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  {
    date: "2024-04-15",
    title: "Spring Formal",
    description: "Annual spring formal celebration at the Grand Hotel",
  },
  {
    date: "2024-04-20",
    title: "Community Service Day",
    description: "Volunteering at the local food bank",
  },
  {
    date: "2024-05-01",
    title: "Alumni Networking Event",
    description: "Connect with alumni and learn about career opportunities",
  },
]

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const selectedDateEvents = events.filter(
    (event) => event.date === date?.toISOString().split("T")[0]
  )

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Chapter Calendar</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Select a Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="border-l-4 border-primary pl-4 py-2"
                >
                  <div className="font-semibold">{event.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="mt-1 text-sm">{event.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}