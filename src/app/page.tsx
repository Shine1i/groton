import Hero from '@/components/Hero'
import QuickCategories from '@/components/QuickCategories'
import ProductList from '@/components/productList'
import NewArrivals from '@/components/NewArrivals'
import Incentive from '@/components/Incentive'
import HowItWorks from '@/components/HowItWorks'
import CommunityStats from '@/components/CommunityStats'
import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/magicui/scroll-based-velocity'
import Newsletter from '@/components/newsletter'

const popularItems = [
  "AP Biology Textbooks",
  "Mini Fridges",
  "Graphing Calculators",
  "Dorm Decor",
  "Winter Coats",
  "Lab Equipment",
  "Sports Uniforms",
  "Study Lamps",
  "Coffee Makers",
  "Storage Bins",
]

export default function Home() {
  return (
    <>
      <Hero />
      <QuickCategories />
      <ProductList />
      <NewArrivals />
      <Incentive />
      <HowItWorks />
      
      {/* Popular Items Marquee */}
      <section className="py-6 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">
            Popular This Term
          </h2>
        </div>
        <ScrollVelocityContainer className="w-full">
          <ScrollVelocityRow baseVelocity={3} direction={1} className="py-2">
            <div className="text-lg font-medium text-gray-600">
              {popularItems.join(" • ") + " • "}
            </div>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </section>
      
      <CommunityStats />
      <Newsletter />
    </>
  )
}