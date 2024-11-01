import { Hero } from '@/components/Hero';
import { Service } from '@/components/service';
import { Experience } from '@/components/Experiance';
import { Statistics } from '@/components/Statistics';
import { Greview } from '@/components/Greview';
import { BannerContent } from '@/components/BannerContent';

// import { Schedule } from '@/components/Schedule';
// import { Speakers } from '@/components/Speakers';
// import { Sponsors } from '@/components/Sponsors';
// import { Newsletter } from '@/components/Newsletter';

export default function Home() {
  const style = {
    fontFamily: 'Poppins',
    background: 'linear-gradient(254.29deg, #ddfbff .83%, #e0ddff 64.17%, #ffc0fc 112.85%)',
    border: '1px solid #d6dae4',
  };

  return (
    <div style={style}>
      <Hero />
      <BannerContent />
      <Statistics />
      <Service />
      <Experience />
      <Greview />
      {/* <Schedule /> */}
      {/* <Speakers /> */}
      {/* <Sponsors /> */}
      {/* <Newsletter /> */}
    </div>
  );
}
