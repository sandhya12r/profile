'use client';
import React, { useRef } from "react";
import { Meteors } from "./ui/meteors";
import { Button } from "./ui/moving-border";
import { MapPin, Mail, Phone } from 'react-feather';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  function sendEmail() {
    // const nameElement = document.getElementById('name') as HTMLInputElement;
    // const emailElement = document.getElementById('email') as HTMLInputElement;
    // const subjectElement = document.getElementById('subject') as HTMLInputElement;
    // const msgElement = document.getElementById('message') as HTMLInputElement;
    // if (subjectElement) {
    //   Email.send({
    //     SecureToken: "686652f2-3caf-4557-a553-aa665220acb996666",
    //     To: 'prajapatis1201@gmail.com',
    //     From: "prajapatis1201@gmail.com",
    //     Subject: subjectElement.value,
    //     Body: "Name: " + nameElement.value
    //       + "<br> Email:" + emailElement.value
    //       + "<br> Message:" + msgElement.value
    //   }).then(
    //     (message: string) => alert(message)
    //   );
    // }
  }
  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };
  return (
    <div id="contact" className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

      <h2 className='tex-base text-teal-600 font-semibold tracking-wide uppercase'>Contact me</h2>
      <p className='mb-8 text-3xl leading-8 font-extralight tracking-tight text-white sm:text-4xl'>Let's get in touch..</p>
      <div className=" text-white shadow-md rounded-lg p-10 max-w-6xl w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 gap-8">
        <div className="md:w-1/2 space-y-4">
          <p className="text-lg">
            Let's connect and explore how my expertise and enthusiasm for web development can contribute to your projects and goals.
          </p>
          <p className="text-lg">
            What's your story? Write to me, by filling this form or reach out to me @email mentioned below.</p>
          <p className="text-teal-600">#opentowork</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-teal-600 mr-2" />
              <span className="ml-2">Delhi, India</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-teal-600 mr-2" />
              <span className="ml-2">sandhya.12012002@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-teal-600 mr-2" />
              <span className="ml-2">+91-7011536629</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-4">
          <form ref={formRef} className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            sendEmail();
            resetForm();
          }}>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            ></textarea>

            <Button
              borderRadius='1.75rem'
              className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'
            >Send Message</Button>
          </form>
        </div>
      </div>

      <Meteors number={100} className="absolute " />
    </div>
  );
}