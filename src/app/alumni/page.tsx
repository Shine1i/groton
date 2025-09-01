"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { 
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  GlobeAmericasIcon,
  CheckBadgeIcon,
  CalendarIcon,
  EnvelopeIcon,
  VideoCameraIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline'

// Mock alumni data
const alumni = [
  {
    id: 1,
    name: 'Katherine Chen',
    gradYear: '2018',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    currentRole: 'Product Manager',
    company: 'Google',
    location: 'San Francisco, CA',
    education: 'Stanford University',
    industries: ['Tech', 'Product', 'Startups'],
    expertise: ['Career Advice', 'Tech Industry', 'PM Interviews'],
    available: true,
    verified: true,
    bio: 'Happy to help current students navigate tech careers and college applications.',
    linkedIn: '#'
  },
  {
    id: 2,
    name: 'Dr. Michael Roberts',
    gradYear: '2012',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    currentRole: 'Resident Physician',
    company: 'Johns Hopkins Hospital',
    location: 'Baltimore, MD',
    education: 'Harvard Medical School',
    industries: ['Medicine', 'Healthcare', 'Research'],
    expertise: ['Pre-Med Guidance', 'MCAT Prep', 'Medical School Applications'],
    available: true,
    verified: true,
    bio: 'Passionate about mentoring future doctors. Can help with pre-med planning and applications.',
    linkedIn: '#'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    gradYear: '2015',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    currentRole: 'Investment Banking Analyst',
    company: 'Goldman Sachs',
    location: 'New York, NY',
    education: 'Wharton School',
    industries: ['Finance', 'Banking', 'Consulting'],
    expertise: ['Finance Careers', 'Investment Banking', 'Case Interviews'],
    available: false,
    verified: true,
    bio: 'Former varsity athlete turned IB analyst. Can discuss finance careers and recruiting.',
    linkedIn: '#'
  },
  {
    id: 4,
    name: 'James Park',
    gradYear: '2020',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    currentRole: 'Software Engineer',
    company: 'Meta',
    location: 'Menlo Park, CA',
    education: 'MIT',
    industries: ['Engineering', 'AI/ML', 'Startups'],
    expertise: ['Coding Interviews', 'CS Careers', 'Startup Advice'],
    available: true,
    verified: true,
    bio: 'Recent grad working in AI. Love helping students with CS and engineering paths.',
    linkedIn: '#'
  },
  {
    id: 5,
    name: 'Emily Thompson',
    gradYear: '2014',
    avatar: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=400&h=400&fit=crop',
    currentRole: 'Environmental Lawyer',
    company: 'Earth Justice',
    location: 'Washington, DC',
    education: 'Yale Law School',
    industries: ['Law', 'Non-Profit', 'Environment'],
    expertise: ['Law School', 'Public Interest', 'LSAT Prep'],
    available: true,
    verified: false,
    bio: 'Environmental advocate and lawyer. Happy to discuss law school and public interest careers.',
    linkedIn: '#'
  },
  {
    id: 6,
    name: 'David Martinez',
    gradYear: '2019',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    currentRole: 'Founder & CEO',
    company: 'EduTech Startup',
    location: 'Boston, MA',
    education: 'Harvard Business School',
    industries: ['Entrepreneurship', 'EdTech', 'Venture Capital'],
    expertise: ['Startups', 'Fundraising', 'Product Development'],
    available: true,
    verified: true,
    bio: 'Founded my company right after Groton. Love talking entrepreneurship with students.',
    linkedIn: '#'
  }
]

const industries = [
  'All Industries',
  'Tech',
  'Finance',
  'Medicine',
  'Law',
  'Consulting',
  'Entrepreneurship',
  'Non-Profit',
  'Arts & Media'
]

const upcomingEvents = [
  {
    id: 1,
    title: 'Tech Career Panel',
    date: 'Nov 15, 2024',
    time: '7:00 PM EST',
    type: 'Virtual',
    speakers: 3
  },
  {
    id: 2,
    title: 'Finance Networking Night',
    date: 'Nov 20, 2024',
    time: '6:00 PM EST',
    type: 'In-Person',
    speakers: 5
  },
  {
    id: 3,
    title: 'Medical School Q&A',
    date: 'Nov 25, 2024',
    time: '8:00 PM EST',
    type: 'Virtual',
    speakers: 2
  }
]

export default function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries')
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  const filteredAlumni = alumni.filter(alum => {
    const matchesSearch = alum.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alum.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alum.currentRole.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesIndustry = selectedIndustry === 'All Industries' || 
                           alum.industries.includes(selectedIndustry)
    const matchesAvailability = !showAvailableOnly || alum.available
    return matchesSearch && matchesIndustry && matchesAvailability
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 pt-12 pb-8 overflow-hidden">
        {/* Network Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white" />
                <line x1="50" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="50" y2="100" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 mb-4"
            >
              <UserGroupIcon className="h-4 w-4 text-blue-200" />
              <span className="text-sm font-medium text-blue-100">Alumni Network</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Connect with Groton Alumni Worldwide
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-2 max-w-2xl text-lg text-blue-100"
            >
              Get mentorship, career advice, and internship opportunities from successful alumni
            </motion.p>

            {/* Search */}
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
                  placeholder="Search by name, company, or role..."
                  className="w-full rounded-full bg-white py-3 pl-12 pr-4 text-gray-900 shadow-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 grid grid-cols-3 gap-6 text-blue-100 max-w-lg mx-auto"
            >
              <div>
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-sm">Active Mentors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm">Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15</div>
                <div className="text-sm">Countries</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Industry Filters */}
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    selectedIndustry === industry
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
            
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
                className="rounded text-blue-600"
              />
              Available only
            </label>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Alumni Grid */}
          <div className="lg:col-span-2">
            <div className="grid gap-4">
              {filteredAlumni.map((alum, index) => (
                <motion.div
                  key={alum.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="relative">
                      <Image
                        src={alum.avatar}
                        alt={alum.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      {alum.verified && (
                        <CheckBadgeIcon className="absolute -bottom-1 -right-1 h-5 w-5 text-blue-600 bg-white rounded-full" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {alum.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Class of {alum.gradYear} • {alum.education}
                          </p>
                          <div className="mt-1 flex items-center gap-3 text-sm">
                            <span className="flex items-center gap-1">
                              <BriefcaseIcon className="h-4 w-4 text-gray-400" />
                              {alum.currentRole} at {alum.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <GlobeAmericasIcon className="h-4 w-4 text-gray-400" />
                              {alum.location}
                            </span>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          alum.available 
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {alum.available ? 'Available' : 'Busy'}
                        </span>
                      </div>

                      {/* Bio */}
                      <p className="mt-3 text-sm text-gray-600">
                        {alum.bio}
                      </p>

                      {/* Expertise */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {alum.expertise.map(skill => (
                          <span
                            key={skill}
                            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                          Request Connection
                        </button>
                        <button className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                          View LinkedIn
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Success Stories */}
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                Success Stories
              </h2>
              <div className="space-y-3">
                <div className="border-l-2 border-blue-500 pl-3">
                  <p className="text-sm text-gray-600 italic">
                    "Katherine helped me land my dream internship at Microsoft!"
                  </p>
                  <p className="text-xs text-gray-500 mt-1">- Current Senior</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-3">
                  <p className="text-sm text-gray-600 italic">
                    "Dr. Roberts' guidance was invaluable for my med school apps."
                  </p>
                  <p className="text-xs text-gray-500 mt-1">- Class of 2023</p>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                <CalendarIcon className="h-5 w-5 text-blue-600" />
                Upcoming Events
              </h2>
              <div className="space-y-3">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <VideoCameraIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                      <p className="text-xs text-gray-500">
                        {event.date} • {event.time}
                      </p>
                      <p className="text-xs text-gray-500">
                        {event.type} • {event.speakers} speakers
                      </p>
                    </div>
                    <button className="text-xs text-blue-600 hover:text-blue-700">
                      RSVP
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full text-center text-sm text-blue-600 hover:text-blue-700">
                View all events →
              </button>
            </div>

            {/* Request Form CTA */}
            <div className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 p-4 text-white">
              <EnvelopeIcon className="h-8 w-8 mb-2" />
              <h3 className="text-lg font-semibold">Can't Find Someone?</h3>
              <p className="mt-1 text-sm text-blue-100">
                Submit a request and we'll connect you with the right alumni mentor.
              </p>
              <button className="mt-3 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors">
                Submit Request
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}