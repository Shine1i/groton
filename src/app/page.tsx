import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/navbar'
import Hero from '@/components/Hero'
import QuickCategories from '@/components/QuickCategories'
import ProductList from '@/components/productList'
import Incentive from '@/components/Incentive'
import HowItWorks from '@/components/HowItWorks'
import CommunityStats from '@/components/CommunityStats'
import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/magicui/scroll-based-velocity'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/Footer'

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
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      
      <main>
        <Hero />
        <QuickCategories />
        <ProductList />
        <Incentive />
        <HowItWorks />
        
        {/* Popular Items Marquee */}
        <section className="py-12 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
              Popular This Term
            </h2>
          </div>
          <ScrollVelocityContainer className="w-full">
            <ScrollVelocityRow baseVelocity={3} direction={1} className="py-4">
              <div className="text-lg font-medium text-gray-600">
                {popularItems.join(" • ") + " • "}
              </div>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </section>
        
        <CommunityStats />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  )
}