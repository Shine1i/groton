"use client"

import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  SunIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { motion } from 'motion/react'
import Link from 'next/link'

const services = [
  {
    name: 'Peer Tutoring',
    description: 'Get help from top students in any subject',
    href: '/tutoring',
    icon: AcademicCapIcon,
    color: 'purple',
    stats: '50+ Active Tutors',
    gradient: 'from-purple-500 to-purple-600',
    lightGradient: 'from-purple-50 to-purple-100',
  },
  {
    name: 'Alumni Connect',
    description: 'Connect with alumni for mentorship & internships',
    href: '/alumni',
    icon: UserGroupIcon,
    color: 'blue',
    stats: '200+ Alumni Mentors',
    gradient: 'from-blue-500 to-blue-600',
    lightGradient: 'from-blue-50 to-blue-100',
  },
  {
    name: 'Summer Programs',
    description: 'Discover enriching summer opportunities',
    href: '/programs',
    icon: SunIcon,
    color: 'orange',
    stats: '100+ Programs Listed',
    gradient: 'from-orange-500 to-orange-600',
    lightGradient: 'from-orange-50 to-orange-100',
  },
]

export default function CampusServices() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <SparklesIcon className="h-6 w-6 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">New</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            More Than a Marketplace
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Access exclusive Groton resources and opportunities
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-gray-300"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.lightGradient} opacity-0 transition-opacity group-hover:opacity-100`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex rounded-xl bg-gradient-to-r ${service.gradient} p-3 shadow-lg`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-gray-800">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {service.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`text-sm font-medium text-${service.color}-600`}>
                      {service.stats}
                    </span>
                    <ArrowRightIcon className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-gray-600" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Your complete campus hub for academics, networking, and growth
          </p>
        </div>
      </div>
    </div>
  )
}