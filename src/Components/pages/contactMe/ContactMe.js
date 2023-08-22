import React from 'react';
import ContactForm from './ContactMeForm';
import { textBeforeForm } from './textBeforeForm';

const ContactMe = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 align-middle max-w-7xl mx-auto p-6 min-h-[550px] lg:min-h-[600px] 2xl:min-h-[650px]">
      <div className='mt-8'>
        <h1 className="text-center md:text-left leading-normal text-4xl lg:text-6xl font-bold mb-8">
          Contact Me
        </h1>
        <div className='text-left'>{textBeforeForm}</div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;
