'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Update = {
  id: number
  message: string
  timestamp: string
}

export default function RealtimeUpdates() {
  const [updates, setUpdates] = useState<Update[]>([])

  useEffect(() => {
    const eventSource = new EventSource('/api/updates')

    eventSource.onmessage = (event) => {
      const update = JSON.parse(event.data)
      setUpdates((prevUpdates) => [update, ...prevUpdates.slice(0, 4)])
    }

    return () => {
      eventSource.close()
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-time Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {updates.map((update) => (
            <li key={update.id} className="text-sm">
              <span className="font-semibold">{update.timestamp}</span>: {update.message}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

