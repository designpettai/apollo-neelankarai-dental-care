import { Container } from '@/components/Container';
import { FadeInObserver } from '@/components/FadeInObserver';

export function Experience() {
    return (
        <div className="py-20 relative">
            <Container className="relative">
                <div className="mx-auto">
                    <div className="">
                        <div className="mb-8">
                            <h1 className="text-xl text-gray-800  fade-in">
                                Advanced Dentistry. Exceptional Care.
                            </h1>
                            <p className="text-4xl font-bold text-gray-800 mb-4 fade-in">
                                Experience Dentistry Designed for You at Neelankarai-ECR’s Apollo Dental Clinic.
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <FadeInObserver>
                                <div className="flex-1">
                                    <p className="text-md text-gray-600 text-md mb-8 fade-in">
                                        Whether you’re due for a routine checkup, considering cosmetic dentistry options, or have a dental concern, our team is here to listen to your needs and answer your questions.
                                        We utilize the latest dental technology and techniques to ensure the most effective and comfortable treatment possible. We are dedicated to building trusting relationships with our patients and helping them achieve optimal oral health.
                                    </p>
                                    <div className="flex flex-col md:flex-row items-start">
                                        <ul className="w-full md:w-1/2 list-none space-y-2 text-gray-900">
                                            <li className="flex items-center fade-in">
                                                🦷
                                                <span className="ml-2">Dental services for all ages</span>
                                            </li>
                                            <li className="flex items-center fade-in">
                                                💰
                                                <span className="ml-2">Affordable pricing</span>
                                            </li>
                                            <li className="flex items-center fade-in">
                                                📅
                                                <span className="ml-2">Convenient scheduling</span>
                                            </li>
                                            <li className="flex items-center fade-in">
                                                🏢
                                                <span className="ml-2">World class ambience</span>
                                            </li>
                                        </ul>
                                        <ul className="w-full md:w-1/2 list-none space-y-2 text-gray-900 mt-4 md:mt-0">
                                            <li className="flex items-center fade-in">
                                                💳
                                                <span className="ml-2">Easy EMI Options</span>
                                            </li>
                                            <li className="flex items-center fade-in">
                                                ⏳
                                                <span className="ml-2">Minimal Wait Time</span>
                                            </li>
                                            <li className="flex items-center fade-in">
                                                📍
                                                <span className="ml-2">Convenient Location</span>
                                            </li>
                                            <li className="flex items-center fade-in">
                                                😊
                                                <span className="ml-2">Friendly Staff</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeInObserver>

                            <FadeInObserver>
                                <div className="flex-1 space-y-4">
                                    <div className="bg-white shadow-lg rounded-lg py-4 px-8 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 fade-in">
                                        <h2 className="text-md font-semibold text-gray-800 mb-2">Advanced Technology</h2>
                                        <p className="text-gray-600 text-md">
                                            OPG, 3D scanner, Digital Xray, Intra oral camera, digital dental impressions - utilizing state-of-the-art equipment for precise and comfortable treatments.
                                        </p>
                                    </div>
                                    <div className="bg-white shadow-lg rounded-lg py-4 px-8 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 fade-in">
                                        <h2 className="text-md font-semibold text-gray-800 mb-2">Experienced Team</h2>
                                        <p className="text-gray-600 text-md">
                                            Endodontist, Prosthodontist, Implantologist, Orthodontist, and Pedodontist – all dental specialists available around the clock for your optimal oral health.
                                        </p>
                                    </div>
                                    <div className="bg-white shadow-lg rounded-lg py-4 px-8 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 fade-in">
                                        <h2 className="text-md font-semibold text-gray-800 mb-2">Patient-Centric Approach</h2>
                                        <p className="text-gray-600 text-md">
                                            We tailor our services to meet your unique dental needs and preferences.
                                        </p>
                                    </div>
                                </div>
                            </FadeInObserver>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
