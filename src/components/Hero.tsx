"use client"

import { ArrowRightIcon, ShieldCheckIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline'
import { motion } from 'motion/react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
            The Trusted Marketplace for{' '}
            <span className="relative whitespace-nowrap text-emerald-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-emerald-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Boarding School</span>
            </span>{' '}
            Students
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Buy, sell, borrow, and trade textbooks, dorm essentials, and more with your fellow students. 
            Safe, convenient, and built for campus life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/sell"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all hover:scale-105"
          >
            Start Selling
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/browse"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-600 shadow-lg ring-1 ring-emerald-100 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all hover:scale-105"
          >
            Browse Listings
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">100% Campus Verified</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <TruckIcon className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">Same-Day Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <ClockIcon className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">Quick Campus Meetups</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
          <div className="bg-white rounded-2xl shadow-2xl p-2 border border-slate-200">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600">2,847</div>
                  <div className="text-sm text-slate-600 mt-1">Active Listings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600">$45,230</div>
                  <div className="text-sm text-slate-600 mt-1">Saved This Semester</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600">1,523</div>
                  <div className="text-sm text-slate-600 mt-1">Happy Students</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}