import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedPropertiesSection } from '@/components/home/FeaturedPropertiesSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturedPropertiesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
