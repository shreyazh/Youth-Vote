import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { getUserStats } from "../actions"
import { Badge } from "@/components/ui/badge"

export default async function Incentivize() {
  const userStats = await getUserStats()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Voter Turnout Incentives</h1>
      <div className="max-w-md mx-auto">
        <div className="bg-peach p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Voting Impact</h2>
          <p className="mb-2">Peers Registered: {userStats.peersRegistered}</p>
          <Progress value={(userStats.peersRegistered / 10) * 100} className="mb-4" />
          <p className="mb-2">Votes Pledged: {userStats.votesPledged}</p>
          <Progress value={(userStats.votesPledged / 15) * 100} className="mb-4" />
          <p className="font-semibold mb-2">Current Level: {userStats.level}</p>
          <Progress value={(userStats.experience / userStats.nextLevelExperience) * 100} className="mb-4" />
          <p className="text-sm mb-4">{userStats.experience} / {userStats.nextLevelExperience} XP</p>
          <p className="font-semibold mb-2">Badges:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {userStats.badges.map((badge, index) => (
              <Badge key={index} variant="secondary">{badge}</Badge>
            ))}
          </div>
          <p className="font-semibold mb-4">Current Reward Tier: {userStats.rewardTier}</p>
          <Button className="w-full bg-black text-white hover:bg-opacity-80">
            Claim Rewards
          </Button>
        </div>
      </div>
    </div>
  )
}

