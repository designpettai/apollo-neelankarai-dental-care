"use client"; // Add this line to indicate it's a client component
import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import axios from 'axios';
import { Button } from '@/components/Button';
import { Input } from '@/components/input';

interface FormData {
  firstName: string;
  email: string;
  phoneNumber: string;
  appointmentDate: string;
  timeSlot: string;
  reasonForVisit: string;
}

interface Errors {
  firstName?: string;
  email?: string;
  phoneNumber?: string;
  appointmentDate?: string;
  timeSlot?: string;
  reasonForVisit?: string;
}

export function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    phoneNumber: '',
    appointmentDate: '',
    timeSlot: '',
    reasonForVisit: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const validate = useCallback((): Errors => {
    const newErrors: Errors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
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
        await axios.post('/api/send-email', formData);
        alert('Appointment booked successfully!');
        setFormData({
          firstName: '',
          email: '',
          phoneNumber: '',
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[#fff] rounded-[20px] p-6 md:p-12 absolute right-[5%] top-1/2 transform translate-x-[0] -translate-y-[15%] w-[90%] md:w-auto md:-translate-y-[62%] -translate-y-[15%]">
        <div className="mb-4 mt-4 bg-[#06789a] p-4 rounded-lg">
          <h2 style={{ color: '#fd6c1e' }} className="text-2xl font-semibold">Opening Hours</h2>
          <h4 className="text-lg text-white">
            Monday - Sunday | 10:00 AM to 8:00 PM
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2">
          <div className="sm:col-span-1 mb-6">
            <label htmlFor="first-name" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
              First name
            </label>
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

          <div className="sm:col-span-1 mb-6">
            <label htmlFor="phone-number" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
              Phone Number
            </label>
            <Input
              id="phone-number"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className='w-full'
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
            Email address
          </label>
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

        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 md:grid-cols-2">
          <div className="sm:col-span-1 mb-6">
            <label htmlFor="appointment-date" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
              Date of Appointment
            </label>
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

          <div className="sm:col-span-1 mb-6">
            <label htmlFor="time-slot" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
              Select Time Slot
            </label>
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
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="reason-for-visit" className="text-gray-800 block text-sm font-medium leading-5 mb-1">
            Reason for Visit
          </label>
          <select
            id="reason-for-visit"
            name="reasonForVisit"
            className="w-full h-[48px] rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 focus:border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:border-gray-400 active:text-gray-700 placeholder-[#B5B5B5] appearance-none"
            value={formData.reasonForVisit}
            onChange={handleChange}
          >
            <option value="">Select a reason</option>
            <option value="Checkup">Checkup</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Filling">Filling</option>
            <option value="Consultation">Consultation</option>
            <option value="Emergency">Emergency</option>
          </select>
          {errors.reasonForVisit && <p className="text-red-500 text-xs">{errors.reasonForVisit}</p>}
        </div>

        <div className="w-full sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0">
          <Button className="w-full" type="submit">Book Your Appointment</Button>
        </div>
      </div>
    </form>
  );
}