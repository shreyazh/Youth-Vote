'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

type VotingStats = {
  totalRegistered: number
  totalVotesPledged: number
  ageGroups: { age: string; percentage: number }[]
  topIssues: { issue: string; percentage: number }[]
}

export default function VotingStatistics({ stats }: { stats: VotingStats }) {
  const ageChartRef = useRef<HTMLCanvasElement>(null)
  const issuesChartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (ageChartRef.current && issuesChartRef.current) {
      const ageChart = new Chart(ageChartRef.current, {
        type: 'pie',
        data: {
          labels: stats.ageGroups.map(group => group.age),
          datasets: [{
            data: stats.ageGroups.map(group => group.percentage),
            backgroundColor: [
              '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
            ],
          }],
        },
      })

      const issuesChart = new Chart(issuesChartRef.current, {
        type: 'bar',
        data: {
          labels: stats.topIssues.map(issue => issue.issue),
          datasets: [{
            label: 'Top Issues',
            data: stats.topIssues.map(issue => issue.percentage),
            backgroundColor: '#FFDAB9',
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        },
      })

      return () => {
        ageChart.destroy()
        issuesChart.destroy()
      }
    }
  }, [stats])

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Voter Registration Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Registered: {stats.totalRegistered}</p>
          <p>Total Votes Pledged: {stats.totalVotesPledged}</p>
          <h3 className="mt-4 mb-2 font-semibold">Age Distribution</h3>
          <canvas ref={ageChartRef}></canvas>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top Voting Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <canvas ref={issuesChartRef}></canvas>
        </CardContent>
      </Card>
    </div>
  )
}

