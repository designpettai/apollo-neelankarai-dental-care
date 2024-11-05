'use client';

import { Container } from '@/components/Container';
import { FadeInObserver } from './FadeInObserver';

export function Statistics() {
  const stats = [
    { label: 'Happy Patients', value: '25L+' },
    { label: 'Specialists', value: '500' },
    { label: 'Cities', value: '25' },
    { label: 'Locations', value: '175' },
  ];

  return (
    <div className="pt-[800px] md:pt-[320px] py-16">
      <Container>
        <FadeInObserver>
          <h1 className="text-3xl font-medium text-gray-800 text-left mb-6">About Us</h1>
          <div className="mx-auto">
            <p className="text-gray-700 text-base leading-relaxed mb-6 text-left">
              Welcome to our state-of-the-art dental centers, the dental vertical of the globally renowned health care giant Apollo Hospitals. Apollo Dental is the most trusted chain of dental clinics in India with over 125+ Centres in 25 cities across the country, aiming to bring world-class dental care within reach of every Indian.
              Our commitment to evidence-based, updated treatments is reflected in our well-equipped centers, which feature the most ergonomic dental chairs, cutting-edge LASERS, globally acclaimed dental implants, digital X-rays, and branded consumables. The use of dental microscopes, world-class CAD-CAM crown machines from Germany, Cone Beam CT, and other top-of-the-line equipment ensure continuous improvement of the quality of treatment delivery.
            </p>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 lg:gap-12 items-start">
              {stats.map(({ label, value }, index) => (
                <div key={index} className="fade-in">
                  <dt className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-900 mb-2">
                    {label}
                  </dt>
                  <dd className="mt-0.5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-500">
                    <span className="count-up">{value}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeInObserver>
      </Container>
    </div>
  );
}
