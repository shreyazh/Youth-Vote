'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SocialMediaIntegration() {
  const [isConnected, setIsConnected] = useState(false)
  const [post, setPost] = useState('')

  const handleConnect = () => {
    // In a real implementation, this would initiate the OAuth flow
    setIsConnected(true)
  }

  const handlePost = () => {
    // In a real implementation, this would send the post to the social media API
    console.log('Posting to social media:', post)
    setPost('')
  }

  return (
    <div className="space-y-4">
      {!isConnected ? (
        <Button onClick={handleConnect}>Connect to Twitter</Button>
      ) : (
        <>
          <p className="text-green-600">Connected to Twitter</p>
          <Textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="What's happening?"
            className="w-full"
          />
          <Button onClick={handlePost} disabled={!post}>Post to Twitter</Button>
        </>
      )}
    </div>
  )
}

