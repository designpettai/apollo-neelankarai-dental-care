"use client";
import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import axios from 'axios';
import { BackgroundImage } from '@/components/BackgroundImage';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Input } from '@/components/input';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  appointmentDate: string;
  timeSlot: string;
  reasonForVisit: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  appointmentDate?: string;
  timeSlot?: string;
  reasonForVisit?: string;
}

export function Hero() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    appointmentDate: '',
    timeSlot: '',
    reasonForVisit: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = useCallback((): Errors => {
    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.appointmentDate) newErrors.appointmentDate = 'Appointment date is required';
    if (!formData.timeSlot) newErrors.timeSlot = 'Time slot is required';
    if (!formData.reasonForVisit) newErrors.reasonForVisit = 'Reason for visit is required';
    return newErrors;
  }, [formData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('/api/send-email', formData);
        alert('Appointment booked successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          appointmentDate: '',
          timeSlot: '',
          reasonForVisit: '',
        });
      } catch (error) {
        alert('There was an error booking your appointment. Please try again later.');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="relative py-12 sm:pb-8 sm:pt-8">
      <BackgroundImage className="-bottom-0 top-8" />
      <Container className="relative">
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4 md:flex-row md:gap-4 justify-between items-center py-4'>
            <div className="md:basis-1/2 mx-auto">
              <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Let Your Smile Shine with Confidence
                  </h1>
                  <p className="mt-4 text-lg text-gray-600">
                    Expert Care You Can Trust
                  </p>
                  <div className="mt-8 text-left max-w-2xl mx-auto">
                    <p className="text-gray-700 leading-relaxed">
                      We offer a comprehensive range of speciality driven dental services...
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      Our panel of dentists understand the importance of evidence-based dentistry...
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      Aiming to bring world-class dental care in Suchitra, Kompally, Hyderabad...
                    </p>
                  </div>
                  <div className="mt-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 ">Opening Hours</h2>
                    <h4 className="mt-4 text-lg text-gray-600 flex justify-between">
                      Monday - Sunday | 10:00 AM to 8:00 PM
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:basis-1/2 mx-auto px-4 py-6">
              <div className="bg-[#fff] rounded-[20px] p-6 md:p-12">
                <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2">
                  <div className="sm:col-span-1 mb-6">
                    <label htmlFor="first-name" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
                      First name
                    </label>
                    <div className="mt-2">
                      <Input
                        id="first-name"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className='w-full'
                      />
                      {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                    </div>
                  </div>

                  <div className="sm:col-span-1 mb-6">
                    <label htmlFor="last-name" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
                      Last name
                    </label>
                    <div className="mt-2">
                      <Input
                        id="last-name"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className='w-full'
                      />
                      {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
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
                      className="w-full"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2">
                  <div className="sm:col-span-1 mb-6">
                    <label htmlFor="appointment-date" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
                      Date of Appointment
                    </label>
                    <div className="mt-2">
                      <Input
                        id="appointment-date"
                        name="appointmentDate"
                        type="date"
                        className="w-full"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        min={today} 
                      />
                      {errors.appointmentDate && <p className="text-red-500 text-xs">{errors.appointmentDate}</p>}
                    </div>
                  </div>

                  <div className="sm:col-span-1 mb-6">
                    <label htmlFor="time-slot" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
                      Select Time Slot
                    </label>
                    <div className="mt-2 relative">
                      <select
                        id="time-slot"
                        name="timeSlot"
                        className="w-full h-[48px] rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 focus:border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-gray-400 active:text-gray-700 placeholder-[#B5B5B5] appearance-none"
                        value={formData.timeSlot}
                        onChange={handleChange}
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
                      {errors.timeSlot && <p className="text-red-500 text-xs">{errors.timeSlot}</p>}
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-gray-500">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
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
                      name="reasonForVisit"
                      as="textarea"
                      placeholder="Enter the reason for your visit"
                      className='w-full'
                      value={formData.reasonForVisit}
                      onChange={handleChange}
                    />
                    {errors.reasonForVisit && <p className="text-red-500 text-xs">{errors.reasonForVisit}</p>}
                  </div>
                </div>
                <div className="w-full hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0">
                  <Button className="w-full" type="submit">Book Your Appointment</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <dl className="mt-10 flex flex-col sm:flex-row justify-evenly gap-6 sm:mt-16 sm:gap-10 lg:gap-12">
              {[
                ['Happy Patients', '25L+'],
                ['Specialists', '500'],
                ['Cities', '25'],
                ['Location', '175'],
              ].map(([name, value]) => (
                <div key={name} className="flex-1 text-center sm:w-1/2 md:w-1/4 w-full mb-6 sm:mb-0">
                  <dt className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-900 mb-2">{name}</dt>
                  <dd className="mt-0.5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-500">
                    <span className="count-up">{value}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </form>
      </Container>
    </div>
  );
}
