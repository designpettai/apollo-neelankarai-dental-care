'use client';
import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import axios from 'axios';
import { Button } from '@/components/Button';
import { Input } from '@/components/input';

interface FormData {
    mobileNumber: string;
    appointmentDate: string;
    timeSlot: string;
    reasonForVisit: string;
}

interface Errors {
    [key: string]: string | undefined;
}

export function AppointmentForm({ closeForm }: { closeForm: () => void }) {
    const [formData, setFormData] = useState<FormData>({
        mobileNumber: '',
        appointmentDate: '',
        timeSlot: '',
        reasonForVisit: '',
    });

    const [errors, setErrors] = useState<Errors>({});

    const validate = useCallback((): Errors => {
        const newErrors: Errors = {};
        if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required';
        if (!formData.appointmentDate) newErrors.appointmentDate = 'Preferred visit date is required';
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
                    mobileNumber: '',
                    appointmentDate: '',
                    timeSlot: '',
                    reasonForVisit: '',
                });
                setErrors({});
                closeForm();
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
        setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="absolute left-0 right-0 top-[50%]">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">
                    <div style={{ boxShadow: '4px 6px 0px 0px #047AA2' }} className="bg-white rounded-2xl p-4 md:p-6 w-full flex flex-col items-start relative">
                        <button
                            type="button"
                            onClick={closeForm}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <p className="font-inter text-lg font-bold leading-[19.36px] text-left mb-4">Schedule Your Appointment Now!</p>
                        <div className="flex flex-col md:flex-row w-full">
                            {[ 
                                { label: 'Mobile Number', name: 'mobileNumber', type: 'tel', placeholder: 'Enter your mobile number' },
                                { label: 'Preferred Visit Date', name: 'appointmentDate', type: 'date', placeholder: '' },
                            ].map(({ label, name, type, placeholder }) => (
                                <div key={name} className="md:flex-1 mb-6 md:mr-4">
                                    <label htmlFor={name} className="text-gray-800 block text-sm font-medium mb-1 text-left">{label}</label>
                                    <Input
                                        id={name}
                                        name={name}
                                        type={type}
                                        autoComplete={type}
                                        placeholder={placeholder}
                                        value={formData[name as keyof FormData]}
                                        onChange={handleChange}
                                        className="w-full"
                                        min={name === 'appointmentDate' ? today : undefined}
                                    />
                                    {errors[name] && <p className="text-red-500 text-xs text-left">{errors[name]}</p>}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row w-full">
                            <div className="md:flex-1 mb-6 md:mr-4">
                                <label htmlFor="time-slot" className="text-gray-800 block text-sm font-medium mb-1 text-left">Time</label>
                                <select
                                    id="time-slot"
                                    name="timeSlot"
                                    className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-[#6B7280] focus:text-black outline-none"
                                    value={formData.timeSlot}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a time slot</option>
                                    {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].map(slot => (
                                        <option key={slot} value={slot}>{slot}</option>
                                    ))}
                                </select>
                                {errors.timeSlot && <p className="text-red-500 text-xs text-left">{errors.timeSlot}</p>}
                            </div>
                            <div className="md:flex-1 mb-6 md:mr-4">
                                <label htmlFor="reason-for-visit" className="text-gray-800 block text-sm font-medium mb-1 text-left">Reason for Visit</label>
                                <select
                                    id="reason-for-visit"
                                    name="reasonForVisit"
                                    className="text-[#6B7280] focus:text-black outline-none w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.reasonForVisit}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a reason</option>
                                    {['Checkup', 'Cleaning', 'Filling', 'Consultation', 'Emergency'].map(reason => (
                                        <option key={reason} value={reason}>{reason}</option>
                                    ))}
                                </select>
                                {errors.reasonForVisit && <p className="text-red-500 text-xs text-left">{errors.reasonForVisit}</p>}
                            </div>
                        </div>

                        <div className="w-full text-left">
                            <Button type="submit">Book Your Appointment</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
