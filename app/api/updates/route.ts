import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder()
      const sendEvent = (data: string) => {
        controller.enqueue(encoder.encode(`data: ${data}\n\n`))
      }

      const interval = setInterval(() => {
        const update = {
          id: Date.now(),
          message: `New voter registered in ${['New York', 'California', 'Texas', 'Florida'][Math.floor(Math.random() * 4)]}!`,
          timestamp: new Date().toLocaleTimeString(),
        }
        sendEvent(JSON.stringify(update))
      }, 5000)

      request.signal.addEventListener('abort', () => {
        clearInterval(interval)
        controller.close()
      })
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}

