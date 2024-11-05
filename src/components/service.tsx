import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import needAdviceImage from '@/images/avatars/Need Advice.jpg';
import consultationImage from '@/images/avatars/Consultation.jpg';
import dentalScanImage from '@/images/avatars/3D Dental Scan.jpg';
import { FadeInObserver } from '@/components/FadeInObserver';

export function Service() {
  const service = [
    { src: needAdviceImage.src, title: 'Need Advice?', description: 'Connect instantly for personalized dental advice and quick answers.', buttonText: 'Chat us' },
    { src: consultationImage.src, title: 'Consultation', description: 'Speak with our dental specialists for immediate support and scheduling.', buttonText: 'Call us' },
    { src: dentalScanImage.src, title: '3D Dental Scan', description: 'Know more on Invisalign Aligners, Dental Implants, SVE RCT', buttonText: 'Book Now' }
  ];

  return (
    <div className="py-20 relative bg-custom-gradient">
      <Container className="relative">
        <div className="mx-auto">
          <div className="flex sm:flex-nowrap flex-wrap justify-center gap-6  lg:gap-12">
            {service.map(({ src, title, description, buttonText }) => (
              <FadeInObserver key={title}>
                <div className="fade-in flex flex-col items-start pb-12 bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 w-full sm:w-80 lg:w-1/3">
                  <div className="mb-4 flex justify-center items-center w-full">
                    <img style={{ height: '250px' }} src={src} alt={title} className="rounded-t-lg w-full" />
                  </div>
                  <div className="w-[90%] mx-auto">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-left">{title}</h3> {/* Align title to the left */}
                    <p className="text-left text-gray-500 mb-4 text-sm sm:text-base">{description}</p> {/* Align description to the left */}
                    <Button className="w-auto py-2">
                      {buttonText}
                    </Button>
                  </div>

                </div>
              </FadeInObserver>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
