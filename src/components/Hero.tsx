import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Input } from '@/components/input'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className='flex flex-col gap-4 md:flex-row md:gap-4 justify-between items-center'>
          <div className="md:basis-1/2 mx-auto">
            <div className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Let Your Smile Shine with Confidence
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Expert Care You Can Trust
                </p>
                <div className="mt-8 text-left max-w-2xl mx-auto">
                  <p className="text-gray-700 leading-relaxed">
                    We offer a comprehensive range of speciality driven dental services on most ergonomic dental chairs, through 3D intraoral scanner and oral camera, in-house OPG and Digital X-rays which enable us to deliver precise care and treatments.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Our panel of dentists understand the importance of evidence-based dentistry ensuring oral health care with continuous functionality of teeth and a confident smile.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Aiming to bring world-class dental care in Suchitra, Kompally, Hyderabad. Don’t let dental anxiety hold you back from achieving healthy teeth and a confident smile.
                  </p>
                </div>

                <div className="mt-6 rounded-lg mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 ">Opening Hours</h2>
                  <h4 className="mt-4 text-lg text-gray-600 flex justify-between">
                    Monday - Sunday | 10:00 AM to 8:00 PM
                  </h4>
                </div>

                <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0">
                  <Button href="#"> Book Your Appointment</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:basis-1/2 mx-auto max-w-2xl lg:max-w-4xl px-4 py-6">
            <div className="bg-[#fff] rounded-[20px] p-6 md:p-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 md:grid-cols-2">
                <div className="sm:col-span-1 mb-6">
                  <label htmlFor="first-name" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
                    First name
                  </label>
                  <div className="mt-2">
                    <Input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>

                <div className="sm:col-span-1 mb-6">
                  <label htmlFor="last-name" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
                    Last name
                  </label>
                  <div className="mt-2">
                    <Input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
                  Email address
                </label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 md:grid-cols-2">
                <div className="sm:col-span-1 mb-6">
                  <label htmlFor="appointment-date" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
                    Date of Appointment
                  </label>
                  <div className="mt-2">
                    <Input
                      id="appointment-date"
                      name="appointment-date"
                      type="date"
                    />
                  </div>
                </div>

                <div className="sm:col-span-1 mb-6">
                  <label htmlFor="time-slot" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
                    Select Time Slot
                  </label>
                  <div className="mt-2">
                    <select
                      id="time-slot"
                      name="time-slot"
                      className="w-full h-[48px] rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-0 focus:outline-none"
                    >
                      <option value="">Select a time slot</option>
                      <option value="9:00AM">9:00 AM</option>
                      <option value="10:00AM">10:00 AM</option>
                      <option value="11:00AM">11:00 AM</option>
                      <option value="12:00PM">12:00 PM</option>
                      <option value="1:00PM">1:00 PM</option>
                      <option value="2:00PM">2:00 PM</option>
                      <option value="3:00PM">3:00 PM</option>
                      <option value="4:00PM">4:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="reason-for-visit" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
                  Reason for Visit
                </label>
                <div className="mt-2">
                  <Input
                    id="reason-for-visit"
                    name="reason-for-visit"
                    as="textarea"
                    rows={5}
                    placeholder="Enter the reason for your visit"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <dl className="mt-10 flex justify-evenly gap-6 sm:mt-16 sm:gap-10 lg:gap-12">
            {[
              ['Happy Patients', '25L+'],
              ['Specialists', '500'],
              ['Cities', '25'],
              ['Location', '175']
            ].map(([name, value]) => (
              <div key={name} className="w-1/4 text-center lg:text-center">
                <dt className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-900 mb-2">{name}</dt>
                <dd className="mt-0.5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-500">
                  <span className="count-up">{value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
