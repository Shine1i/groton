"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { 
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  AcademicCapIcon,
  BeakerIcon,
  CommandLineIcon,
  PaintBrushIcon,
  GlobeAmericasIcon,
  TrophyIcon,
  BriefcaseIcon,
  BookmarkIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  SunIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

// Mock programs data
const programs = [
  {
    id: 1,
    name: 'Harvard Summer School',
    institution: 'Harvard University',
    category: 'Academic',
    duration: '7 weeks',
    dates: 'June 21 - Aug 6, 2025',
    location: 'Cambridge, MA',
    type: 'In-Person',
    cost: '$13,500',
    financialAid: true,
    deadline: 'April 15, 2025',
    daysLeft: 135,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop',
    description: 'Earn college credit with courses taught by Harvard faculty.',
    subjects: ['All Subjects', 'Pre-College'],
    applicationRequired: true,
    competitiveness: 'Highly Competitive'
  },
  {
    id: 2,
    name: 'MIT Launch X',
    institution: 'MIT',
    category: 'Entrepreneurship',
    duration: '4 weeks',
    dates: 'July 5 - Aug 1, 2025',
    location: 'Multiple Locations',
    type: 'Hybrid',
    cost: '$7,995',
    financialAid: true,
    deadline: 'March 1, 2025',
    daysLeft: 90,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop',
    description: 'Build a real startup with mentorship from MIT entrepreneurs.',
    subjects: ['Business', 'Technology', 'Innovation'],
    applicationRequired: true,
    competitiveness: 'Very Competitive'
  },
  {
    id: 3,
    name: 'Yale Young Global Scholars',
    institution: 'Yale University',
    category: 'Leadership',
    duration: '2 weeks',
    dates: 'Multiple Sessions',
    location: 'New Haven, CT',
    type: 'In-Person',
    cost: '$6,500',
    financialAid: true,
    deadline: 'January 10, 2025',
    daysLeft: 40,
    urgent: true,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop',
    description: 'Intensive academic enrichment and leadership development.',
    subjects: ['Politics', 'STEM', 'Arts & Humanities'],
    applicationRequired: true,
    competitiveness: 'Extremely Competitive'
  },
  {
    id: 4,
    name: 'National Geographic Student Expeditions',
    institution: 'National Geographic',
    category: 'Adventure',
    duration: '2-3 weeks',
    dates: 'June - August 2025',
    location: 'Various International',
    type: 'Travel',
    cost: '$4,000 - $8,000',
    financialAid: false,
    deadline: 'Rolling',
    daysLeft: null,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop',
    description: 'Photography, conservation, and cultural immersion expeditions.',
    subjects: ['Photography', 'Conservation', 'Culture'],
    applicationRequired: false,
    competitiveness: 'Moderately Competitive'
  },
  {
    id: 5,
    name: 'Google Computer Science Summer Institute',
    institution: 'Google',
    category: 'STEM',
    duration: '3 weeks',
    dates: 'July 12 - July 30, 2025',
    location: 'Virtual',
    type: 'Online',
    cost: 'Free',
    financialAid: false,
    deadline: 'February 15, 2025',
    daysLeft: 75,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=400&fit=crop',
    description: 'Introduction to computer science for aspiring tech leaders.',
    subjects: ['Computer Science', 'AI/ML', 'Web Development'],
    applicationRequired: true,
    competitiveness: 'Highly Competitive'
  },
  {
    id: 6,
    name: 'Tanglewood Music Festival',
    institution: 'Boston Symphony Orchestra',
    category: 'Arts',
    duration: '6 weeks',
    dates: 'June 15 - July 27, 2025',
    location: 'Lenox, MA',
    type: 'In-Person',
    cost: '$5,500',
    financialAid: true,
    deadline: 'January 31, 2025',
    daysLeft: 61,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    description: 'Elite music training with world-renowned musicians.',
    subjects: ['Classical Music', 'Jazz', 'Composition'],
    applicationRequired: true,
    competitiveness: 'Extremely Competitive'
  },
  {
    id: 7,
    name: 'Wall Street Prep Finance Boot Camp',
    institution: 'Wall Street Prep',
    category: 'Business',
    duration: '1 week',
    dates: 'Multiple Sessions',
    location: 'New York, NY',
    type: 'In-Person',
    cost: '$2,495',
    financialAid: false,
    deadline: 'Rolling',
    daysLeft: null,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=400&fit=crop',
    description: 'Intensive financial modeling and investment banking prep.',
    subjects: ['Finance', 'Investment Banking', 'Private Equity'],
    applicationRequired: false,
    competitiveness: 'Open Enrollment'
  },
  {
    id: 8,
    name: 'Johns Hopkins CTY Summer Programs',
    institution: 'Johns Hopkins',
    category: 'Academic',
    duration: '3 weeks',
    dates: 'June - August 2025',
    location: 'Multiple Campuses',
    type: 'In-Person',
    cost: '$4,999',
    financialAid: true,
    deadline: 'May 1, 2025',
    daysLeft: 150,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop',
    description: 'Advanced academic courses for gifted students.',
    subjects: ['Mathematics', 'Sciences', 'Humanities'],
    applicationRequired: true,
    competitiveness: 'Competitive'
  }
]

const categories = [
  { name: 'All Programs', icon: SunIcon },
  { name: 'Academic', icon: AcademicCapIcon },
  { name: 'STEM', icon: BeakerIcon },
  { name: 'Leadership', icon: TrophyIcon },
  { name: 'Arts', icon: PaintBrushIcon },
  { name: 'Business', icon: BriefcaseIcon },
  { name: 'Adventure', icon: GlobeAmericasIcon }
]

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Programs')
  const [showFinancialAid, setShowFinancialAid] = useState(false)
  const [showFreeOnly, setShowFreeOnly] = useState(false)

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'All Programs' || program.category === selectedCategory
    const matchesFinancialAid = !showFinancialAid || program.financialAid
    const matchesFree = !showFreeOnly || program.cost === 'Free'
    return matchesSearch && matchesCategory && matchesFinancialAid && matchesFree
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 pt-12 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-orange-400/20 px-4 py-1.5 mb-4"
            >
              <SunIcon className="h-4 w-4 text-orange-100" />
              <span className="text-sm font-medium text-orange-100">Summer Programs 2025</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Expand Your Horizons This Summer
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-2 max-w-2xl text-lg text-orange-100"
            >
              Discover pre-college programs, internships, and enrichment opportunities
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
                  placeholder="Search programs, universities, or subjects..."
                  className="w-full rounded-full bg-white py-3 pl-12 pr-4 text-gray-900 shadow-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </motion.div>

            {/* Deadline Alert */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red-500/20 px-4 py-2"
            >
              <ExclamationTriangleIcon className="h-5 w-5 text-red-200" />
              <span className="text-sm font-medium text-white">
                3 programs have deadlines in the next 60 days!
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex gap-1 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Filters */}
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={showFinancialAid}
                  onChange={(e) => setShowFinancialAid(e.target.checked)}
                  className="rounded text-orange-600"
                />
                Financial Aid
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={showFreeOnly}
                  onChange={(e) => setShowFreeOnly(e.target.checked)}
                  className="rounded text-orange-600"
                />
                Free Only
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Programs Grid */}
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl bg-white overflow-hidden shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all"
                >
                  {/* Image */}
                  <div className="relative h-40">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      className="object-cover"
                    />
                    {program.urgent && (
                      <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-red-500 px-2 py-1">
                        <ExclamationTriangleIcon className="h-3 w-3 text-white" />
                        <span className="text-xs font-medium text-white">Deadline Soon</span>
                      </div>
                    )}
                    <button className="absolute top-2 right-2 rounded-full bg-white/80 p-1.5 hover:bg-white transition-colors">
                      <BookmarkIcon className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{program.name}</h3>
                        <p className="text-sm text-gray-600">{program.institution}</p>
                      </div>
                      {program.financialAid && (
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                          Aid Available
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {program.description}
                    </p>

                    {/* Details */}
                    <div className="mt-3 space-y-1 text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="h-3 w-3" />
                        {program.dates} ({program.duration})
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="h-3 w-3" />
                        {program.location} • {program.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <CurrencyDollarIcon className="h-3 w-3" />
                        {program.cost}
                      </div>
                    </div>

                    {/* Deadline */}
                    {program.deadline && (
                      <div className={`mt-3 flex items-center justify-between p-2 rounded-lg ${
                        program.urgent ? 'bg-red-50' : 'bg-gray-50'
                      }`}>
                        <span className="text-xs text-gray-600">
                          Deadline: {program.deadline}
                        </span>
                        {program.daysLeft && (
                          <span className={`text-xs font-medium ${
                            program.urgent ? 'text-red-600' : 'text-gray-700'
                          }`}>
                            {program.daysLeft} days left
                          </span>
                        )}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="mt-3 flex gap-2">
                      <button className="flex-1 rounded-lg bg-orange-600 px-3 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors">
                        Learn More
                      </button>
                      <button className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        Save
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Application Timeline */}
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                <ClockIcon className="h-5 w-5 text-orange-600" />
                Application Timeline
              </h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-1.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">January</p>
                    <p className="text-xs text-gray-600">Yale YGS, Tanglewood deadlines</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-1.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">February</p>
                    <p className="text-xs text-gray-600">Google CSSI applications open</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-500 mt-1.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">March</p>
                    <p className="text-xs text-gray-600">MIT Launch X deadline</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-1.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">April-May</p>
                    <p className="text-xs text-gray-600">Most program deadlines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 p-4 text-white">
              <SparklesIcon className="h-8 w-8 mb-2" />
              <h3 className="text-lg font-semibold">Application Resources</h3>
              <p className="mt-1 text-sm text-orange-100">
                Get help with essays, recommendations, and financial aid applications.
              </p>
              <button className="mt-3 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-orange-700 hover:bg-orange-50 transition-colors">
                Access Resources
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Tips */}
            <div className="rounded-xl bg-yellow-50 p-4">
              <h3 className="font-semibold text-yellow-900">Application Tips</h3>
              <ul className="mt-2 space-y-1 text-sm text-yellow-700">
                <li>• Apply early for better chances</li>
                <li>• Request recommendations 3+ weeks ahead</li>
                <li>• Check if your school has partnerships</li>
                <li>• Apply for financial aid simultaneously</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}