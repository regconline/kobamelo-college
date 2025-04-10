import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import ExpandableContent from "./ExpandableContent";
import { useExpandable } from "@/hooks/useExpandable";

const About = () => {
  const { 
    isExpanded: historyExpanded, 
    toggleExpand: toggleHistory 
  } = useExpandable();
  
  const { 
    isExpanded: teamExpanded, 
    toggleExpand: toggleTeam 
  } = useExpandable();

  const missionPoints = [
    "Provide accessible and affordable education programs",
    "Foster a culture of excellence, innovation, and entrepreneurship",
    "Develop partnerships to promote economic growth",
    "Empower students to become active citizens and leaders"
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for academic excellence and continuous improvement in all our programs and services."
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethics in all our interactions and operations."
    },
    {
      title: "Diversity",
      description: "We celebrate diversity and promote inclusivity in our student body, staff, and curriculum."
    },
    {
      title: "Innovation",
      description: "We encourage creativity, critical thinking, and entrepreneurship in our approach to education."
    }
  ];

  const teamMembers = [
    {
      initials: "JM",
      name: "John M.",
      role: "Founder & Director"
    },
    {
      initials: "SK",
      name: "Sarah K.",
      role: "Academic Head"
    }
  ];

  const accreditations = [
    "QCTO", "SAIOSH", "CPD Group", "Step Ahead CPD"
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-darkblue mb-4">About Kobamelo College</h2>
          <div className="w-20 h-1 bg-skyblue mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-darkblue mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At Kobamelo College, we strive to create a supportive and stimulating learning environment that fosters academic excellence, creativity, and critical thinking.
            </p>
            <ul className="space-y-3">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <Check className="flex-shrink-0 w-5 h-5 text-skyblue mt-1" />
                  <span className="ml-2 text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            
            <button 
              className={`mt-6 flex items-center font-medium transition-colors duration-300 ${historyExpanded ? 'text-skyblue' : 'text-darkblue hover:text-skyblue'}`}
              onClick={toggleHistory}
            >
              <span>Our History</span>
              <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-300 ${historyExpanded ? 'rotate-180' : ''}`} />
            </button>
            
            <ExpandableContent isExpanded={historyExpanded} className="mt-4 pl-2 border-l-2 border-skyblue">
              <p className="text-gray-700 mb-4">
                Founded in 2023, Kobamelo College began as a small training center with a vision to transform education in our community. Our founder, recognizing the need for quality vocational education, established the college with just two programs and a handful of students.
              </p>
              <p className="text-gray-700">
                Within our first year, we've grown to serve over 100 students across multiple programs, earning accreditation from respected organizations like QCTO and SAIOSH. Our rapid growth is a testament to the quality of our programs and the dedication of our staff.
              </p>
            </ExpandableContent>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 bg-lightblue p-8 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-darkblue mb-4">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-2">
                    <div className="bg-skyblue text-white p-1 rounded-full mr-3">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-darkblue">{value.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
            
            <button 
              className={`mt-6 flex items-center font-medium transition-colors duration-300 ${teamExpanded ? 'text-skyblue' : 'text-darkblue hover:text-skyblue'}`}
              onClick={toggleTeam}
            >
              <span>Meet Our Team</span>
              <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-300 ${teamExpanded ? 'rotate-180' : ''}`} />
            </button>
            
            <ExpandableContent isExpanded={teamExpanded} className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-skyblue text-white w-10 h-10 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <span className="font-bold">{member.initials}</span>
                    </div>
                    <h4 className="text-center font-medium text-darkblue">{member.name}</h4>
                    <p className="text-center text-xs text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </ExpandableContent>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-darkblue text-white p-8 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Accreditation & Recognition</h3>
              <p className="mb-4">Kobamelo College is proud to be accredited by reputable organizations ensuring the highest standards of education.</p>
              <div className="flex flex-wrap gap-4">
                {accreditations.map((accreditation, index) => (
                  <div 
                    key={index} 
                    className="bg-white text-darkblue px-3 py-1 rounded-md text-sm font-medium transform transition-all duration-300 hover:scale-105"
                  >
                    {accreditation}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white text-darkblue p-4 rounded-lg text-center transform transition-all duration-500 hover:rotate-3">
                <div className="text-3xl font-bold mb-2 gradient-text">20%</div>
                <div className="text-sm">Growth in student enrollment from 2024 to 2025</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
