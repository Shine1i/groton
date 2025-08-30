"use client"

import { useState } from 'react'
import { MapPinIcon, BookmarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import QuickViewModal from './QuickViewModal'

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
    imageSrc: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop',
    imageAlt: 'Biology textbook on desk',
    badge: 'Hot Deal',
    description: 'Comprehensive biology textbook in excellent condition. All chapters intact, minimal highlighting. Perfect for AP Bio students.',
    postedDate: '1 day ago',
    meetupLocation: 'Science Building Lobby'
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
    imageSrc: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=400&fit=crop',
    imageAlt: 'Compact mini fridge',
    description: 'Perfect for dorm room. Energy efficient and compact. Some minor scratches but works perfectly.',
    postedDate: '3 days ago',
    meetupLocation: 'Foster House Common Room'
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
    imageSrc: 'https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?w=400&h=400&fit=crop',
    imageAlt: 'Graphing calculator',
    badge: 'Top Rated',
    description: 'Barely used calculator, all functions working perfectly. Includes manual and protective case.',
    postedDate: '2 days ago',
    meetupLocation: 'Math Department'
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
    imageSrc: 'https://images.unsplash.com/photo-1566479179474-c2e47c0fb0a1?w=400&h=400&fit=crop',
    imageAlt: 'Lacrosse stick',
    description: 'Well-maintained lacrosse stick. Great for beginners or backup equipment. Some wear on the head but still game-ready.',
    postedDate: '5 days ago',
    meetupLocation: 'Athletic Center'
  },
]

interface ProductListProps {
  title?: string
  description?: string
  showViewAll?: boolean
}

export default function ProductList({ 
  title = "Hot Deals This Week", 
  description = "Save big on textbooks and dorm essentials",
  showViewAll = true 
}: ProductListProps) {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  const handleQuickView = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setIsQuickViewOpen(true)
  }

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
            {showViewAll && (
              <Link
                href="/browse"
                className="hidden sm:block text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                View all
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            )}
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
                  <div 
                    className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity cursor-pointer"
                    onClick={() => handleQuickView(product)}
                  >
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
                      <h3 
                        className="text-sm font-medium text-gray-900 cursor-pointer hover:text-emerald-600"
                        onClick={() => handleQuickView(product)}
                      >
                        {product.name}
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

                  <div className="mt-2 text-xs text-gray-500">
                    <span>by {product.seller}</span>
                  </div>

                  <div className="mt-3 flex items-baseline gap-2">
                    <p className="text-lg font-semibold text-gray-900">{product.price}</p>
                    <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                    <span className="text-xs font-medium text-emerald-600">
                      Save {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                    </span>
                  </div>

                  <div className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
                    >
                      <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
                      Message Seller
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {showViewAll && (
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/browse"
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                View all listings
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
      />
    </>
  )
}