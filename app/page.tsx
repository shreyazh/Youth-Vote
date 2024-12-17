import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signUp, getVotingStatistics } from './actions'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import RealtimeUpdates from './components/RealtimeUpdates'
import VotingStatistics from './components/VotingStatistics'

// This would typically come from your database
const leaderboard = [
  { name: 'Alex', peersRegistered: 15, votesPledged: 25 },
  { name: 'Sam', peersRegistered: 12, votesPledged: 20 },
  { name: 'Jordan', peersRegistered: 10, votesPledged: 18 },
]

export default async function Home() {
  const votingStats = await getVotingStatistics()

  return (
    <div className="container mx-auto px-4">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Mobilize Your Community</h1>
        <p className="text-xl mb-8">Empower youth to drive voter engagement and participation.</p>
        <Link href="/organize" className="bg-peach text-black px-6 py-3 rounded-full inline-flex items-center hover:bg-opacity-80 transition-colors">
          Get Started
          <ArrowRight className="ml-2" />
        </Link>
      </section>

      <section className="py-16 grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Organize</h2>
          <p>Create and manage voter registration drives and community events.</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Engage</h2>
          <p>Leverage social media to spread awareness about voting importance.</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Incentivize</h2>
          <p>Gamify the voting process and reward participation among peers.</p>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Join the Movement</h2>
        <form action={signUp} className="max-w-md mx-auto space-y-4">
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Button type="submit" className="w-full bg-peach text-black hover:bg-opacity-80">
            Sign Up
          </Button>
        </form>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Leaderboard</h2>
        <div className="max-w-md mx-auto">
          {leaderboard.map((user, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Peers Registered: {user.peersRegistered}</p>
                <p>Votes Pledged: {user.votesPledged}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Real-time Updates</h2>
        <div className="max-w-md mx-auto">
          <RealtimeUpdates />
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Voting Statistics</h2>
        <VotingStatistics stats={votingStats} />
      </section>
    </div>
  )
}

