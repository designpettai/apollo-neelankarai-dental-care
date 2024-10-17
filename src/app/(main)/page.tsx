import { Hero } from '@/components/Hero'
import {Service} from '@/components/service'
import {Experience} from '@/components/Experiance'

// import { Schedule } from '@/components/Schedule'
// import { Speakers } from '@/components/Speakers'
// import { Sponsors } from '@/components/Sponsors'
// import { Newsletter } from '@/components/Newsletter'


export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Experience />
      {/* <Schedule />
      <Sponsors />
      <Newsletter /> */}
    </>
  )
}
