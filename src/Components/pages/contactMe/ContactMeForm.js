import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const toastInfo=[];

  const serviceEmail = process.env.REACT_APP_SERVICE_ID;
  const templateEmail = process.env.REACT_APP_EMAIL_TEMPLATE;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const validateForm = () => {
    let validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
      toastInfo.push('Name is required')
    }

    if (!formData.email.trim()) {
      validationErrors.email = ' Email is required';
      toastInfo.push('Email is required')
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
      toastInfo.push('Invalid email format')
    }

    if (!formData.message.trim()) {
      validationErrors.message = ' Message is required';
      toastInfo.push('Message is required')
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setFormSubmitted(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const formIsValid = validateForm();

    if (!formIsValid) {
      toastInfo.forEach((message) => {
        toast.error(message);
      });
      return;
    }
    
    emailjs.sendForm(serviceEmail, templateEmail , form.current, publicKey)
    .then(
      (result) => {
        console.log(result.text);
        toast.success('Thank you for sending me an email, ill get back to you as soon as posible')
        resetForm();
      },
      (error) => {
        console.log(error.text);
      }
    );
  
  };


  return (
    <form className="max-w-md mx-auto p-6 bg-transparent shadow-md rounded-lg" onSubmit={formSubmissionHandler} ref={form} noValidate>
      <div className="mb-6">
        <label htmlFor="name" className="block text-white text-sm text-left font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#FED409] ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-white text-left text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#FED409] ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-white text-left text-sm font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={`w-full min-h-[70px] p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FED409] ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1 text-left">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-64 py-4 text-xl font-bold text-center cursor-pointer outline-none text-black bg-[#FED409] border-none rounded-full shadow-md hover:bg-white hover:text-black active:bg-white focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
      >
        Submit
      </button>
      {formSubmitted && <div className="text-[#FED409] text-center mt-6">Submitted successfully! Thank you.</div>}
    </form>
  );
};

export default ContactForm;
