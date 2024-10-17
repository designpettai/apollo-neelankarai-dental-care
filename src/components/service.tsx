import { MdChatBubbleOutline, MdLocalHospital, Md3dRotation } from 'react-icons/md';
import { Button } from '@/components/Button'; // Assuming Button is imported here.
import { Container } from '@/components/Container'; // Assuming Container is imported here.
import { BackgroundImage } from '@/components/BackgroundImage';

export function Service() {
    const service = [
        { icon: <MdChatBubbleOutline />, title: 'Need Advice?', description: 'Connect instantly for personalized dental advice and quick answers.', buttonText: 'Chat us' },
        { icon: <MdLocalHospital />, title: 'Consultation', description: 'Speak with our dental specialists for immediate support and scheduling.', buttonText: 'Call us' },
        { icon: <Md3dRotation />, title: '3D Dental Scan', description: 'Know more on Invisalign Aligners, Dental Implants, SVE RCT', buttonText: 'Book Now' }
    ];

    return (
        <div className=" py-20 relative bg-gray-50">
            <BackgroundImage className="-bottom-0 -top-0" />
            <Container className="relative">
                <div className="mx-auto">
                    <div className="mt-10 flex  sm:flex-nowrap flex-wrap justify-center gap-6 sm:mt-16 lg:gap-12">
                        {service.map(({ icon, title, description, buttonText }) => (
                            <div key={title} className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 w-full sm:w-80 lg:w-1/3">
                                <div className="text-5xl text-indigo-600 mb-4 flex justify-center items-center">
                                    {icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                                <p className="text-center text-gray-500 mb-4 text-sm sm:text-base">{description}</p>
                                <Button className="w-auto px-6 py-2 ">
                                    {buttonText}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
