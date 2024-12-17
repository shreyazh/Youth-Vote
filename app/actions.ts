'use server'

import { z } from 'zod'

const signUpSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
})

const eventSchema = z.object({
  name: z.string().min(3),
  date: z.string(),
  location: z.string().min(3),
  description: z.string().min(10),
})

const socialPostSchema = z.object({
  platform: z.string().min(2),
  message: z.string().min(10),
  hashtags: z.string(),
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export async function signUp(prevState: any, formData: FormData) {
  const validatedFields = signUpSchema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
  })

  if (!validatedFields.success) {
    return { error: 'Invalid input' }
  }

  // Here you would typically save the user to your database
  return { success: 'User signed up successfully!' }
}

export async function login(prevState: any, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return { error: 'Invalid credentials' }
  }

  // Here you would typically verify credentials and create a session
  return { success: 'Logged in successfully!' }
}

export async function createEvent(prevState: any, formData: FormData) {
  const validatedFields = eventSchema.safeParse({
    name: formData.get('name'),
    date: formData.get('date'),
    location: formData.get('location'),
    description: formData.get('description'),
  })

  if (!validatedFields.success) {
    return { error: 'Invalid input' }
  }

  // Here you would typically save the event to your database
  return { success: 'Event created successfully!' }
}

export async function createSocialPost(prevState: any, formData: FormData) {
  const validatedFields = socialPostSchema.safeParse({
    platform: formData.get('platform'),
    message: formData.get('message'),
    hashtags: formData.get('hashtags'),
  })

  if (!validatedFields.success) {
    return { error: 'Invalid input' }
  }

  // Here you would typically save the social post to your database and potentially post to social media
  return { success: 'Social post created successfully!' }
}

export async function getEvents() {
  // This would typically fetch events from your database
  return [
    { id: 1, name: 'Voter Registration Drive', date: '2023-08-15', location: 'City Hall' },
    { id: 2, name: 'Youth Voting Awareness Workshop', date: '2023-08-20', location: 'Community Center' },
  ]
}

export async function getSocialPosts() {
  // This would typically fetch social posts from your database
  return [
    { id: 1, platform: 'Twitter', message: 'Your vote matters! Register today!', hashtags: '#YouthVote #Democracy' },
    { id: 2, platform: 'Instagram', message: 'Be the change you want to see. Vote!', hashtags: '#VoterEngagement #YourVoiceMatters' },
  ]
}

export async function getUserStats() {
  // This would typically fetch user stats from your database
  return {
    peersRegistered: 5,
    votesPledged: 10,
    rewardTier: 'Silver',
    badges: ['Early Adopter', 'Community Organizer'],
    level: 3,
    experience: 350,
    nextLevelExperience: 500,
  }
}

export async function getVotingStatistics() {
  // This would typically fetch voting statistics from your database
  return {
    totalRegistered: 1000,
    totalVotesPledged: 800,
    ageGroups: [
      { age: '18-24', percentage: 30 },
      { age: '25-34', percentage: 25 },
      { age: '35-44', percentage: 20 },
      { age: '45-54', percentage: 15 },
      { age: '55+', percentage: 10 },
    ],
    topIssues: [
      { issue: 'Education', percentage: 35 },
      { issue: 'Healthcare', percentage: 30 },
      { issue: 'Environment', percentage: 20 },
      { issue: 'Economy', percentage: 15 },
    ],
  }
}

