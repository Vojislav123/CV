import React from 'react';
import ContactForm from './ContactMeForm';

let textBeforeForm = (
  <p>
    I am interested in learning and full-time job opportunities - especially on ambitious or large projects.
    However, if you have any other requests or questions, don't hesitate to contact me using the form below.
  </p>
);

const ContactMe = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto p-6">
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
