import { Hero } from '@/components/Hero'
import { Service } from '@/components/service'
import { Experience } from '@/components/Experiance'
// import { Homepage } from '@/components/Homapage'
// import { Schedule } from '@/components/Schedule'
// import { Speakers } from '@/components/Speakers'
// import { Sponsors } from '@/components/Sponsors'
// import { Newsletter } from '@/components/Newsletter'

export default function Home() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Hero />
      <Service />
      <Experience />
      {/* <Homepage /> */}
      {/* <Schedule /> */}
      {/* <Speakers /> */}
      {/* <Sponsors /> */}
      {/* <Newsletter /> */}
    </div>
  )
}
