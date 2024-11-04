"use client";
import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import axios from 'axios';
import { Button } from '@/components/Button';
import { Input } from '@/components/input';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; 


interface FormData {
  firstName: string;
  email: string;
  phoneNumber: string;
  appointmentDate: string;
  timeSlot: string;
  reasonForVisit: string;
}

interface Errors {
  [key: string]: string | undefined;
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
        setErrors({}); // Clear errors on successful submission
      } catch {
        alert('There was an error booking your appointment. Please try again later.');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined })); // Clear individual field errors on change
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <div className="flex flex-col md:flex-row w-full mb-4 md:mb-0 space-y-4 md:space-y-0 md:space-x-4 items-center justify-between">
        <button
          className="w-[250px] bg-green-600 text-white flex items-center justify-center py-2 px-4 rounded"
          onClick={() => window.open("https://wa.me/9360901090", "_blank")}
        >
          <FaWhatsapp className="mr-2" />
          WhatsApp Chat
        </button>
        <button
          className="w-[250px] bg-gray-500 text-white flex items-center justify-center py-2 px-4 rounded"
          onClick={() => window.location.href = "tel:9360901090"}
        >
          <FaPhoneAlt className="mr-2" />
          Call Us
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">
        <div className="bg-white rounded p-6 md:p-12 w-full flex flex-col items-start">
          <div className="flex flex-col md:flex-row w-full md:mb-6" >
            {[
              { label: 'First name', name: 'firstName', type: 'text', placeholder: 'Enter your first name' },
              { label: 'Phone Number', name: 'phoneNumber', type: 'tel', placeholder: 'Enter your phone number' },
              { label: 'Email address', name: 'email', type: 'email', placeholder: 'Enter your email' },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} className="md:flex-1 mb-6 md:mr-4">
                <label htmlFor={name} className="text-gray-800 block text-sm font-medium mb-1 text-left">{label}</label>
                <Input id={name} name={name} type={type} autoComplete={type} placeholder={placeholder} value={formData[name as keyof FormData]} onChange={handleChange} className="w-full" />
                {errors[name] && <p className="text-red-500 text-xs text-left">{errors[name]}</p>}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row w-full md:mb-6">
            <div className="md:flex-1 mb-6 md:mr-4">
              <label htmlFor="appointment-date" className="text-gray-800 block text-sm font-medium mb-1 text-left">Date of Appointment</label>
              <Input id="appointment-date" name="appointmentDate" type="date" className="w-full" value={formData.appointmentDate} onChange={handleChange} min={today} />
              {errors.appointmentDate && <p className="text-red-500 text-xs text-left">{errors.appointmentDate}</p>}
            </div>
            <div className="md:flex-1 mb-6 md:mr-4">
              <label htmlFor="time-slot" className="text-gray-800 block text-sm font-medium mb-1 text-left">Select Time Slot</label>
              <select id="time-slot" name="timeSlot" className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" value={formData.timeSlot} onChange={handleChange}>
                <option value="">Select a time slot</option>
                {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              {errors.timeSlot && <p className="text-red-500 text-xs text-left">{errors.timeSlot}</p>}
            </div>
            <div className="md:flex-1 mb-6 md:mr-4">
              <label htmlFor="reason-for-visit" className="text-gray-800 block text-sm font-medium mb-1 text-left">Reason for Visit</label>
              <select id="reason-for-visit" name="reasonForVisit" className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" value={formData.reasonForVisit} onChange={handleChange}>
                <option value="">Select a reason</option>
                {['Checkup', 'Cleaning', 'Filling', 'Consultation', 'Emergency'].map(reason => (
                  <option key={reason} value={reason}>{reason}</option>
                ))}
              </select>
              {errors.reasonForVisit && <p className="text-red-500 text-xs text-left">{errors.reasonForVisit}</p>}
            </div>
          </div>

          <div className="w-full">
            <Button className="w-full" type="submit">Book Your Appointment</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
