import { Container } from '@/components/Container';
import { BackgroundImage } from '@/components/BackgroundImage';

export function Experience() {
    return (
        <div className=" py-20 relative bg-gray-50">
            <BackgroundImage className="-bottom-0 -top-0" />
            <Container className="relative">
                <div className="mx-auto">
                    <div className="mx-auto px-4 py-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1">
                                <h1 className="text-xl text-gray-800 mb-4">
                                    Advanced Dentistry. Exceptional Care.
                                </h1>
                                <p className="text-4xl font-bold text-gray-800 mb-4">
                                    Experience Dentistry Designed for You at Suchitra’s Apollo Dental Clinic.
                                </p>
                                <p className="text-md text-gray-600 mb-8">
                                    Whether you’re due for a routine checkup, considering cosmetic dentistry options, or have a dental concern, our team is here to listen to your needs and answer your questions.
                                    We utilize the latest dental technology and techniques to ensure the most effective and comfortable treatment possible. We are dedicated to building trusting relationships with our patients and helping them achieve optimal oral health.
                                </p>
                                <div className="flex items-center">
                                    <ul className="w-1/2 list-none space-y-2 text-gray-900">
                                        <li>Dental services for all ages</li>
                                        <li>Affordable pricing</li>
                                        <li>Convenient scheduling</li>
                                        <li>World class ambience</li>
                                    </ul>
                                    <ul className="list-none space-y-2 text-gray-900">
                                        <li>Easy EMI Options</li>
                                        <li>Minimal Wait Time</li>
                                        <li>Convenient Location</li>
                                        <li>Friendly Staff</li>
                                    </ul>
                                </div>


                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="bg-white shadow-lg rounded-lg p-6 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Advanced Technology</h2>
                                    <p className="text-gray-600">
                                        OPG, 3D scanner, Digital Xray, Intra oral camera, digital dental impressions - utilizing state-of-the-art equipment for precise and comfortable treatments.
                                    </p>
                                </div>
                                <div className="bg-white shadow-lg rounded-lg p-6 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Experienced Team</h2>
                                    <p className="text-gray-600">
                                        Endodontist, Prosthodontist, Implantologist, Orthodontist, and Pedodontist – all dental specialists available around the clock for your optimal oral health.
                                    </p>
                                </div>
                                <div className="bg-white shadow-lg rounded-lg p-6 shadow-xl rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Patient-Centric Approach</h2>
                                    <p className="text-gray-600">
                                        We tailor our services to meet your unique dental needs and preferences.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
}
