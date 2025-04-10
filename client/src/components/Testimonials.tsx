import { motion } from "framer-motion";
import { useExpandable } from "@/hooks/useExpandable";
import ExpandableContent from "./ExpandableContent";

const Testimonials = () => {
  const { isExpanded: testimonial1Visible, toggleExpand: toggleTestimonial1 } = useExpandable();
  const { isExpanded: testimonial2Visible, toggleExpand: toggleTestimonial2 } = useExpandable();
  const { isExpanded: testimonial3Visible, toggleExpand: toggleTestimonial3 } = useExpandable();
  const { isExpanded: moreTestimonialsVisible, toggleExpand: toggleMoreTestimonials } = useExpandable();

  const testimonials = [
    {
      initials: "RM",
      name: "Reitumetse Mokomele",
      role: "Safety Officer",
      quote: "\"Sir, I got a job as a Safety Officer, thank you for the opportunity. Kobamelo College truly empowered me with the skills and knowledge I needed to succeed.\"",
      fullStory: "\"Before joining Kobamelo College, I was struggling to find stable employment. The Safety Management course gave me practical skills that employers were looking for. Within a month of completing my training, I secured a position as a Safety Officer at a local manufacturing plant. The hands-on approach and industry-relevant curriculum made all the difference in my job search.\"",
      isVisible: testimonial1Visible,
      toggleFunc: toggleTestimonial1
    },
    {
      initials: "GM",
      name: "Gloria Mocumi",
      role: "Promoted Employee",
      quote: "\"I got a job promotion at work, sir, thank you very much. The education and training I received at Kobamelo College were instrumental in my career advancement.\"",
      fullStory: "\"After completing the Computer Literacy and Business Communication courses at Kobamelo College, I was able to take on more responsibilities at my workplace. My improved skills didn't go unnoticed - within three months, I was promoted to a supervisory position with a significant pay increase. The flexible scheduling allowed me to study while working full-time, making it possible to upgrade my skills without sacrificing my income.\"",
      isVisible: testimonial2Visible,
      toggleFunc: toggleTestimonial2
    },
    {
      initials: "KV",
      name: "Khumalo Vuyo",
      role: "Counsellor",
      quote: "\"I got a job as a Counsellor at a local clinic, thank you very much. Kobamelo College provided me with the foundation I needed to pursue my passion and make a difference in my community.\"",
      fullStory: "\"The HIV and AIDS Counseling course at Kobamelo College changed my life. The trainers were knowledgeable and compassionate, creating a learning environment that encouraged open discussion and practical skill development. I now work at a community health center where I help individuals and families affected by HIV/AIDS. The college's emphasis on practical, community-focused training prepared me perfectly for this rewarding career.\"",
      isVisible: testimonial3Visible,
      toggleFunc: toggleTestimonial3
    }
  ];

  const moreTestimonials = [
    {
      initials: "TB",
      name: "Thabo B.",
      role: "Fire Safety Officer",
      quote: "\"The Basic Fire Fighter course gave me specialized skills that set me apart in the job market. I'm now working at a large industrial facility with excellent benefits.\""
    },
    {
      initials: "NM",
      name: "Nomsa M.",
      role: "ECD Practitioner",
      quote: "\"The ECD program was comprehensive and practical. I started my own daycare center just six months after completing the course, and now employ two other graduates.\""
    },
    {
      initials: "LP",
      name: "Lerato P.",
      role: "Office Administrator",
      quote: "\"The Computer Literacy course transformed my career prospects. From barely being able to use email, I'm now proficient in all Office applications and managing our company's database.\""
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-darkblue mb-4">Student Success Stories</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Hear from our graduates about how Kobamelo College helped them achieve their career goals.</p>
          <div className="w-20 h-1 bg-skyblue mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-lightblue p-6 rounded-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-darkblue text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="font-bold">{testimonial.initials}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-darkblue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
              <button 
                className="text-skyblue text-xs font-medium hover:underline"
                onClick={testimonial.toggleFunc}
              >
                Read Full Story
              </button>
              
              <ExpandableContent isExpanded={testimonial.isVisible} className="mt-2">
                <div className="border-t pt-2">
                  <p className="text-sm text-gray-700">{testimonial.fullStory}</p>
                </div>
              </ExpandableContent>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button 
            className="inline-block bg-darkblue text-white px-6 py-3 rounded-md hover:bg-skyblue transition duration-300"
            onClick={toggleMoreTestimonials}
          >
            View More Success Stories
          </button>
          
          <ExpandableContent isExpanded={moreTestimonialsVisible} className="mt-6 grid md:grid-cols-3 gap-8">
            {moreTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-lightblue p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-darkblue text-white w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="font-bold">{testimonial.initials}</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-darkblue">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
            ))}
          </ExpandableContent>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
