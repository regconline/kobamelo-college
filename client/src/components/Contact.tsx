import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Facebook, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { useExpandable } from "@/hooks/useExpandable";
import ExpandableContent from "./ExpandableContent";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  const { isExpanded: faq1Visible, toggleExpand: toggleFaq1 } = useExpandable();
  const { isExpanded: faq2Visible, toggleExpand: toggleFaq2 } = useExpandable();
  const { isExpanded: faq3Visible, toggleExpand: toggleFaq3 } = useExpandable();
  
  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    // Handle form submission (would connect to API in real implementation)
    alert("Thank you for your message! We will get back to you soon.");
    reset();
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "073 747 5150 or 078 990 3012"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "kobamelocollege@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "2283 Extension 10 Tswelelang Location, Wolmaransstad, 2630"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Social Media",
      content: (
        <div className="flex mt-2">
          <a
            href="https://facebook.com/kobamelocollege"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-darkblue text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-skyblue transition duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      )
    }
  ];

  const operatingHours = [
    { days: "Monday - Thursday", hours: "8:00 AM - 5:00 PM" },
    { days: "Friday", hours: "8:00 AM - 4:00 PM" },
    { days: "Saturday", hours: "9:00 AM - 1:00 PM" }
  ];

  const faqs = [
    {
      question: "What are the entry requirements for your courses?",
      answer: "Requirements vary by program. Most short courses require a Grade 10 certificate, while our NQF programs typically require Grade 12. Please contact us for specific program requirements.",
      isVisible: faq1Visible,
      toggleFunc: toggleFaq1
    },
    {
      question: "Do you offer financial aid or payment plans?",
      answer: "Yes, we offer flexible payment plans for all our programs. Some courses may also qualify for SETA funding or other financial assistance programs.",
      isVisible: faq2Visible,
      toggleFunc: toggleFaq2
    },
    {
      question: "Are your courses accredited?",
      answer: "Yes, our programs are accredited by QCTO, SAIOSH, and other relevant bodies. Each course page lists its specific accreditations.",
      isVisible: faq3Visible,
      toggleFunc: toggleFaq3
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-darkblue mb-4">Contact Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Get in touch with us at Kobamelo College. We're here to help with any questions or queries you may have.
          </p>
          <div className="w-20 h-1 bg-skyblue mx-auto mt-4"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-lightblue p-8 rounded-lg h-full">
              <h3 className="text-xl font-bold text-darkblue mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-skyblue text-white p-2 rounded-full flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-darkblue">{info.title}</h4>
                      {typeof info.content === 'string' ? (
                        <p className="text-gray-700">{info.content}</p>
                      ) : (
                        info.content
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-darkblue mb-4">Operating Hours</h4>
                <div className="bg-white p-4 rounded-lg">
                  {operatingHours.map((period, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between py-2 ${
                        index < operatingHours.length - 1 ? 'border-b' : ''
                      }`}
                    >
                      <span>{period.days}</span>
                      <span className="font-medium">{period.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 h-full">
              <h3 className="text-xl font-bold text-darkblue mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact-name">Name</label>
                  <input 
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    id="contact-name" 
                    type="text" 
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact-email">Email</label>
                  <input 
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    id="contact-email" 
                    type="email" 
                    placeholder="your@email.com"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact-subject">Subject</label>
                  <select 
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    id="contact-subject"
                    {...register("subject", { required: "Please select a subject" })}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Course Information">Course Information</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact-message">Message</label>
                  <textarea 
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    id="contact-message" 
                    rows={4} 
                    placeholder="Your message"
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button 
                  className="w-full bg-darkblue text-white py-2 px-4 rounded-md hover:bg-skyblue transition duration-300" 
                  type="submit"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-8">
                <h4 className="font-bold text-darkblue mb-4">Frequently Asked Questions</h4>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b pb-2">
                      <button 
                        className={`w-full flex justify-between items-center text-left font-medium ${faq.isVisible ? 'text-skyblue' : 'text-darkblue'}`}
                        onClick={faq.toggleFunc}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-300 ${faq.isVisible ? 'rotate-180' : ''}`} />
                      </button>
                      <ExpandableContent isExpanded={faq.isVisible} className="mt-2">
                        <p className="text-sm text-gray-700">{faq.answer}</p>
                      </ExpandableContent>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
