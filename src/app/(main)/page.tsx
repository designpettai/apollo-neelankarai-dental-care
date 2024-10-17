import { Hero } from '@/components/Hero'
// import { Newsletter } from '@/components/Newsletter'
import {Service} from '@/components/service'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'


export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      {/* <Schedule />
      <Sponsors />
      <Newsletter /> */}
    </>
  )
}
