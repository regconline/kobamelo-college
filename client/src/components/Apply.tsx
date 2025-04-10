import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";

type ApplicationFormData = {
  name: string;
  email: string;
  phone: string;
  course: string;
};

const Apply = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationFormData>();
  
  const onSubmit = (data: ApplicationFormData) => {
    console.log("Application form submitted:", data);
    // Handle form submission (would connect to API in real implementation)
    alert("Thank you for your interest! We will contact you soon with more information.");
  };

  const applicationSteps = [
    "Submit your application form",
    "Provide required documents (ID, certificates)",
    "Pay the application fee"
  ];

  const applicationDeadlines = [
    { program: "Early Childhood Development", date: "30 November 2024" },
    { program: "Safety Programs", date: "Rolling Admission" },
    { program: "Short Courses", date: "Monthly Intakes" }
  ];

  const courseOptions = [
    "Early Childhood Development (NQF 4)",
    "Computer Literacy",
    "Safety Management",
    "First Aid",
    "Environmental Health and Safety",
    "H.I.R.A",
    "SHE Rep",
    "Basic Fire fighter",
    "HIV and Aids counselling"
  ];

  return (
    <section id="apply" className="py-16 bg-gradient-to-r from-darkblue to-skyblue">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-darkblue text-white p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="mb-6">Join Kobamelo College and take the first step towards empowering your future. Our application process is simple and straightforward.</p>
              <div className="space-y-4">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="flex-shrink-0 w-5 h-5 text-skyblue mt-1" />
                    <span className="ml-2">{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-2">Application Deadlines</h4>
                <ul className="space-y-2 text-sm">
                  {applicationDeadlines.map((deadline, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{deadline.program}</span>
                      <span>{deadline.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-xl font-bold text-darkblue mb-6">Start Your Application</h3>
              <p className="text-gray-700 mb-6">Complete this form to begin your application process, or click the button below to access our full online application portal.</p>
              
              <div className="text-center mb-6">
                <a 
                  href="https://forms.gle/example" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-darkblue text-white px-6 py-3 rounded-md hover:bg-skyblue transition duration-300 pulse-animation"
                >
                  Apply Online Now
                </a>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
                  <input 
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    id="name" 
                    type="text" 
                    placeholder="Your full name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input 
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    id="email" 
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
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
                  <input 
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    id="phone" 
                    type="tel" 
                    placeholder="078 123 4567"
                    {...register("phone", { required: "Phone number is required" })}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">Course Interested In</label>
                  <select 
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue ${errors.course ? 'border-red-500' : 'border-gray-300'}`}
                    id="course"
                    {...register("course", { required: "Please select a course" })}
                  >
                    <option value="">Select a course</option>
                    {courseOptions.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                  {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>}
                </div>
                <button 
                  className="w-full bg-darkblue text-white py-2 px-4 rounded-md hover:bg-skyblue transition duration-300" 
                  type="submit"
                >
                  Request Information
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Apply;
