"use client"

import { StarIcon, MapPinIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'AP Biology Textbook (Campbell)',
    href: '/product/1',
    price: '$45',
    originalPrice: '$280',
    condition: 'Like New',
    conditionColor: 'bg-green-100 text-green-800',
    seller: 'Alex Chen',
    dorm: 'Whitman Hall',
    rating: 4.8,
    reviewCount: 12,
    imageSrc: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop',
    imageAlt: 'Biology textbook on desk',
    badge: 'Hot Deal',
  },
  {
    id: 2,
    name: 'Mini Fridge (3.2 cu ft)',
    href: '/product/2',
    price: '$80',
    originalPrice: '$150',
    condition: 'Good',
    conditionColor: 'bg-yellow-100 text-yellow-800',
    seller: 'Sarah Johnson',
    dorm: 'Foster House',
    rating: 4.5,
    reviewCount: 8,
    imageSrc: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop',
    imageAlt: 'Compact mini fridge',
  },
  {
    id: 3,
    name: 'TI-84 Plus Graphing Calculator',
    href: '/product/3',
    price: '$65',
    originalPrice: '$120',
    condition: 'Like New',
    conditionColor: 'bg-green-100 text-green-800',
    seller: 'Mike Williams',
    dorm: 'North Campus',
    rating: 5.0,
    reviewCount: 15,
    imageSrc: 'https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?w=400&h=400&fit=crop',
    imageAlt: 'Graphing calculator',
    badge: 'Top Rated',
  },
  {
    id: 4,
    name: 'Lacrosse Stick (STX Stallion)',
    href: '/product/4',
    price: '$35',
    originalPrice: '$90',
    condition: 'Good',
    conditionColor: 'bg-yellow-100 text-yellow-800',
    seller: 'Tom Davis',
    dorm: 'Athletic Dorm',
    rating: 4.3,
    reviewCount: 6,
    imageSrc: 'https://images.unsplash.com/photo-1566479179474-c2e47c0fb0a1?w=400&h=400&fit=crop',
    imageAlt: 'Lacrosse stick',
  },
  {
    id: 5,
    name: 'Desk Lamp with USB Ports',
    href: '/product/5',
    price: '$20',
    originalPrice: '$45',
    condition: 'New',
    conditionColor: 'bg-blue-100 text-blue-800',
    seller: 'Emma Wilson',
    dorm: 'South Hall',
    rating: 4.7,
    reviewCount: 9,
    imageSrc: 'https://images.unsplash.com/photo-1565636192335-5710de816b26?w=400&h=400&fit=crop',
    imageAlt: 'Modern desk lamp',
    badge: 'New',
  },
  {
    id: 6,
    name: 'Organic Chemistry Model Kit',
    href: '/product/6',
    price: '$15',
    originalPrice: '$35',
    condition: 'Like New',
    conditionColor: 'bg-green-100 text-green-800',
    seller: 'Lisa Park',
    dorm: 'Science Center',
    rating: 4.6,
    reviewCount: 11,
    imageSrc: 'https://images.unsplash.com/photo-1632571981775-db19db76581e?w=400&h=400&fit=crop',
    imageAlt: 'Chemistry model kit',
  },
  {
    id: 7,
    name: 'School Blazer (Size M)',
    href: '/product/7',
    price: '$40',
    originalPrice: '$120',
    condition: 'Good',
    conditionColor: 'bg-yellow-100 text-yellow-800',
    seller: 'James Brown',
    dorm: 'East Wing',
    rating: 4.4,
    reviewCount: 7,
    imageSrc: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
    imageAlt: 'School uniform blazer',
  },
  {
    id: 8,
    name: 'Acoustic Guitar (Yamaha)',
    href: '/product/8',
    price: '$120',
    originalPrice: '$300',
    condition: 'Fair',
    conditionColor: 'bg-orange-100 text-orange-800',
    seller: 'Chris Lee',
    dorm: 'Arts House',
    rating: 4.2,
    reviewCount: 5,
    imageSrc: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&fit=crop',
    imageAlt: 'Acoustic guitar',
    badge: 'Rare Find',
  },
]

export default function ProductList() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Hot Deals This Week</h2>
            <p className="mt-2 text-sm text-gray-600">Save big on textbooks and dorm essentials</p>
          </div>
          <Link
            href="/browse"
            className="hidden sm:block text-sm font-medium text-emerald-600 hover:text-emerald-700"
          >
            View all
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="relative">
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={400}
                    height={400}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                {product.badge && (
                  <div className="absolute top-2 left-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                      product.badge === 'Hot Deal' ? 'bg-red-100 text-red-800' :
                      product.badge === 'Top Rated' ? 'bg-emerald-100 text-emerald-800' :
                      product.badge === 'New' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
                  <BookmarkIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <div className="mt-1">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${product.conditionColor}`}>
                        {product.condition}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span>{product.dorm}</span>
                </div>

                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIconSolid
                        key={rating}
                        className={`${
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                        } h-4 w-4 flex-shrink-0`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
                  <span className="ml-2 text-xs text-gray-500">by {product.seller}</span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <p className="text-lg font-semibold text-gray-900">{product.price}</p>
                  <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                  <span className="text-xs font-medium text-emerald-600">
                    Save {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/browse"
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
          >
            View all listings
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}