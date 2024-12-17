import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createSocialPost, getSocialPosts } from "../actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SocialMediaIntegration from "../components/SocialMediaIntegration"

export default async function Engage() {
  const posts = await getSocialPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Engage Your Network</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Create a Social Media Post</h2>
          <form action={createSocialPost} className="space-y-4">
            <div>
              <label htmlFor="platform" className="block mb-1">Social Media Platform</label>
              <Input type="text" id="platform" name="platform" placeholder="Twitter, Instagram, etc." required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <Textarea id="message" name="message" placeholder="Your voting awareness message..." required />
            </div>
            <div>
              <label htmlFor="hashtags" className="block mb-1">Hashtags</label>
              <Input type="text" id="hashtags" name="hashtags" placeholder="#YouthVote #VoterEngagement" required />
            </div>
            <Button type="submit" className="w-full bg-peach text-black hover:bg-opacity-80">
              Share Message
            </Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Social Media Integration</h2>
          <SocialMediaIntegration />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.platform}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.message}</p>
                <p className="text-sm text-gray-500 mt-2">{post.hashtags}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

