"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { 
  MagnifyingGlassIcon,
  StarIcon,
  CheckBadgeIcon,
  ClockIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

// Mock tutors data
const tutors = [
  {
    id: 1,
    name: 'Emily Chen',
    year: 'Senior',
    gpa: '3.95',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    verified: true,
    subjects: ['AP Calculus', 'AP Physics', 'Chemistry'],
    rate: '$25/hr',
    rating: 4.9,
    reviews: 47,
    availability: 'Available',
    bio: 'National Merit Scholar specializing in STEM subjects. Patient and experienced with all learning styles.',
    responseTime: '~30 min'
  },
  {
    id: 2,
    name: 'James Wilson',
    year: 'Junior',
    gpa: '3.87',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    verified: true,
    subjects: ['Latin', 'Ancient Greek', 'English Literature'],
    rate: 'Free',
    rating: 5.0,
    reviews: 23,
    availability: 'Available',
    bio: 'Classics scholar and writing tutor. Helping students excel in languages and literature.',
    responseTime: '~1 hour'
  },
  {
    id: 3,
    name: 'Sarah Martinez',
    year: 'Senior',
    gpa: '3.92',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    verified: true,
    subjects: ['Spanish', 'French', 'ESL Support'],
    rate: '$20/hr',
    rating: 4.8,
    reviews: 35,
    availability: 'Busy',
    bio: 'Native Spanish speaker, fluent in French. Specialized in language acquisition and conversation practice.',
    responseTime: '~2 hours'
  },
  {
    id: 4,
    name: 'Michael Park',
    year: 'Junior',
    gpa: null,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    verified: false,
    subjects: ['SAT Prep', 'ACT Prep', 'College Essays'],
    rate: '$30/hr',
    rating: 4.7,
    reviews: 19,
    availability: 'Available',
    bio: 'Scored 1580 on SAT, 35 on ACT. Helped 20+ students improve their scores by 150+ points.',
    responseTime: '~45 min'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    year: 'Senior',
    gpa: '4.0',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    verified: true,
    subjects: ['Biology', 'AP Biology', 'Pre-Med Guidance'],
    rate: '$25/hr',
    rating: 4.9,
    reviews: 31,
    availability: 'Available',
    bio: 'Future pre-med student. Passionate about life sciences and helping others understand complex concepts.',
    responseTime: '~20 min'
  },
  {
    id: 6,
    name: 'David Lee',
    year: 'Junior',
    gpa: '3.78',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    verified: true,
    subjects: ['Computer Science', 'Web Development', 'Python'],
    rate: '$35/hr',
    rating: 5.0,
    reviews: 28,
    availability: 'Available',
    bio: 'CS enthusiast and hackathon winner. Teaching practical coding skills and problem-solving.',
    responseTime: '~1 hour'
  }
]

const subjects = [
  'All Subjects',
  'Mathematics',
  'Sciences',
  'Languages',
  'Humanities',
  'Test Prep',
  'Computer Science',
  'Writing Support'
]

export default function TutoringPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('All Subjects')
  const [priceFilter, setPriceFilter] = useState('all')

  const filteredTutors = tutors.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutor.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'free' && tutor.rate === 'Free') ||
                        (priceFilter === 'paid' && tutor.rate !== 'Free')
    return matchesSearch && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 pt-12 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-4 py-1.5 mb-4"
            >
              <SparklesIcon className="h-4 w-4 text-purple-200" />
              <span className="text-sm font-medium text-purple-100">Peer Tutoring Program</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Find Your Perfect Peer Tutor
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-2 max-w-2xl text-lg text-purple-100"
            >
              Connect with top students for personalized academic support
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl"
            >
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by subject or tutor name..."
                  className="w-full rounded-full bg-white py-3 pl-12 pr-4 text-gray-900 shadow-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-wrap justify-center gap-6 text-purple-100"
            >
              <div className="flex items-center gap-2">
                <CheckBadgeIcon className="h-5 w-5" />
                <span className="text-sm">50+ Verified Tutors</span>
              </div>
              <div className="flex items-center gap-2">
                <StarIcon className="h-5 w-5" />
                <span className="text-sm">4.8 Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span className="text-sm">Quick Response</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Subject Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {subjects.map(subject => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    selectedSubject === subject
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
            
            {/* Price Filter */}
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="ml-auto rounded-lg border-gray-300 text-sm"
            >
              <option value="all">All Prices</option>
              <option value="free">Free Only</option>
              <option value="paid">Paid Only</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Tutors Grid */}
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredTutors.map((tutor, index) => (
                <motion.div
                  key={tutor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <Image
                        src={tutor.avatar}
                        alt={tutor.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      {tutor.verified && (
                        <CheckBadgeIcon className="absolute -bottom-1 -right-1 h-5 w-5 text-purple-600 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                      <p className="text-sm text-gray-500">
                        {tutor.year} {tutor.gpa && `• GPA: ${tutor.gpa}`}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      tutor.availability === 'Available' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {tutor.availability}
                    </span>
                  </div>

                  {/* Subjects */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {tutor.subjects.map(subject => (
                      <span
                        key={subject}
                        className="inline-flex items-center rounded-md bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                    {tutor.bio}
                  </p>

                  {/* Stats */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <StarIconSolid className="h-4 w-4 text-yellow-400" />
                        <span className="font-medium">{tutor.rating}</span>
                        <span className="text-gray-500">({tutor.reviews})</span>
                      </div>
                      <span className="text-gray-500">{tutor.responseTime}</span>
                    </div>
                    <span className={`font-semibold ${
                      tutor.rate === 'Free' ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {tutor.rate}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 rounded-lg bg-purple-600 px-3 py-2 text-sm font-medium text-white hover:bg-purple-700 transition-colors">
                      Book Session
                    </button>
                    <button className="rounded-lg border border-gray-300 p-2 hover:bg-gray-50 transition-colors">
                      <ChatBubbleLeftRightIcon className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* How It Works */}
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <BookOpenIcon className="h-5 w-5 text-purple-600" />
                How Tutoring Works
              </h2>
              <ol className="mt-4 space-y-3">
                <li className="flex gap-3 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-purple-600">
                    1
                  </span>
                  <span className="text-gray-600">Browse tutors and find your match</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-purple-600">
                    2
                  </span>
                  <span className="text-gray-600">Book a session at your convenience</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-purple-600">
                    3
                  </span>
                  <span className="text-gray-600">Meet in designated study spaces</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-purple-600">
                    4
                  </span>
                  <span className="text-gray-600">Leave a review to help others</span>
                </li>
              </ol>
            </div>

            {/* Become a Tutor CTA */}
            <div className="rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 p-4 text-white">
              <AcademicCapIcon className="h-8 w-8 mb-2" />
              <h3 className="text-lg font-semibold">Become a Tutor</h3>
              <p className="mt-1 text-sm text-purple-100">
                Share your knowledge and earn money helping fellow students succeed.
              </p>
              <button className="mt-3 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-50 transition-colors">
                Apply Now
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Safety Tips */}
            <div className="rounded-xl bg-yellow-50 p-4">
              <h3 className="font-semibold text-yellow-900">Safety Tips</h3>
              <ul className="mt-2 space-y-1 text-sm text-yellow-700">
                <li>• Always meet in public study spaces</li>
                <li>• Verify tutor credentials first</li>
                <li>• Use school email for communication</li>
                <li>• Report any inappropriate behavior</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}