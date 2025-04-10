import { motion } from "framer-motion";
import { ChevronDown, Monitor, Shield, Cross, FlaskRound } from "lucide-react";
import ExpandableContent from "./ExpandableContent";
import { useExpandable } from "@/hooks/useExpandable";

const Courses = () => {
  const { isExpanded: ecdContentVisible, toggleExpand: toggleEcdContent } = useExpandable();
  const { isExpanded: ohsContentVisible, toggleExpand: toggleOhsContent } = useExpandable();
  const { isExpanded: comingContentVisible, toggleExpand: toggleComingContent } = useExpandable();
  const { isExpanded: computerContentVisible, toggleExpand: toggleComputerContent } = useExpandable();
  const { isExpanded: safetyContentVisible, toggleExpand: toggleSafetyContent } = useExpandable();
  const { isExpanded: firstaidContentVisible, toggleExpand: toggleFirstaidContent } = useExpandable();
  const { isExpanded: ehsContentVisible, toggleExpand: toggleEhsContent } = useExpandable();
  const { isExpanded: allCoursesVisible, toggleExpand: toggleAllCourses } = useExpandable();

  const academicPrograms = [
    {
      title: "Early Childhood Development",
      level: "NQF level 4",
      description: "Comprehensive training for practitioners in early childhood development.",
      duration: "1 year",
      toggleFunc: toggleEcdContent,
      isVisible: ecdContentVisible,
      contentId: "ecd-content",
      details: [
        "Comprehensive ECD practitioner training",
        "Child development theories and practices",
        "Classroom management techniques",
        "Health and safety in ECD environments"
      ],
      careers: [
        "ECD Practitioner",
        "Daycare Center Manager",
        "Preschool Teacher",
        "Child Development Specialist"
      ]
    },
    {
      title: "Occupational Health & Safety",
      level: "NQF level 4",
      description: "Training for professionals in workplace health and safety management.",
      duration: "6 months",
      toggleFunc: toggleOhsContent,
      isVisible: ohsContentVisible,
      contentId: "ohs-content",
      details: [
        "Occupational Health and Safety Act compliance",
        "Risk assessment and management",
        "Incident investigation procedures",
        "Workplace hazard identification"
      ],
      careers: [
        "Safety Officer",
        "Health and Safety Manager",
        "SHE Representative",
        "Risk Assessor"
      ]
    },
    {
      title: "Coming Soon",
      level: "New Programs",
      description: "We are continuously expanding our academic offerings to meet industry demands.",
      duration: "Varies",
      toggleFunc: toggleComingContent,
      isVisible: comingContentVisible,
      contentId: "coming-content",
      details: [
        "Business Management (NQF 5)",
        "Human Resources Management",
        "Project Management",
        "Information Technology"
      ],
      careers: []
    }
  ];

  const shortCourses = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Computer Literacy",
      description: "Essential computer skills for the modern workplace.",
      toggleFunc: toggleComputerContent,
      isVisible: computerContentVisible,
      contentId: "computer-content",
      details: [
        "Basic computer operations",
        "Microsoft Office Suite",
        "Internet and email",
        "Duration: 4 weeks"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Management",
      description: "Comprehensive workplace safety training.",
      toggleFunc: toggleSafetyContent,
      isVisible: safetyContentVisible,
      contentId: "safety-content",
      details: [
        "OSH Act compliance",
        "Risk assessment",
        "Safety procedures",
        "Duration: 6 weeks"
      ]
    },
    {
      icon: <Cross className="w-6 h-6" />,
      title: "First Aid",
      description: "Essential first aid training for emergencies.",
      toggleFunc: toggleFirstaidContent,
      isVisible: firstaidContentVisible,
      contentId: "firstaid-content",
      details: [
        "CPR certification",
        "Emergency response",
        "Wound care",
        "Duration: 2 days"
      ]
    },
    {
      icon: <FlaskRound className="w-6 h-6" />,
      title: "Environmental Health & Safety",
      description: "Managing health and safety in work environments.",
      toggleFunc: toggleEhsContent,
      isVisible: ehsContentVisible,
      contentId: "ehs-content",
      details: [
        "Environmental regulations",
        "Waste management",
        "Workplace hygiene",
        "Duration: 4 weeks"
      ]
    }
  ];

  const academicCourseList = [
    { name: "Early Childhood Development (NQF 4)", duration: "1 Year" },
    { name: "Occupational Health & Safety (NQF 4)", duration: "6 Months" }
  ];

  const shortCourseList = [
    { name: "Computer Literacy", duration: "4 Weeks" },
    { name: "Safety Management", duration: "6 Weeks" },
    { name: "First Aid", duration: "2 Days" },
    { name: "Environmental Health & Safety", duration: "4 Weeks" },
    { name: "H.I.R.A", duration: "1 Week" },
    { name: "SHE Rep", duration: "1 Week" },
    { name: "Basic Fire fighter", duration: "3 Days" },
    { name: "HIV and Aids counselling", duration: "2 Weeks" }
  ];

  return (
    <section id="courses" className="py-16 bg-lightblue">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-darkblue mb-4">Our Courses & Programs</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">We offer a range of academic programs and courses designed to equip students with the knowledge and skills required to succeed.</p>
          <div className="w-20 h-1 bg-skyblue mx-auto mt-4"></div>
        </motion.div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Academic Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicPrograms.map((program, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="bg-darkblue text-white p-4">
                  <h4 className="font-bold text-lg">{program.title}</h4>
                  <p className="text-sm opacity-80">{program.level}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Duration: {program.duration}</span>
                    <button 
                      className="text-skyblue font-medium text-sm hover:underline"
                      onClick={program.toggleFunc}
                    >
                      More Info
                    </button>
                  </div>
                  
                  <ExpandableContent isExpanded={program.isVisible} className="mt-4">
                    <div className="border-t pt-4">
                      <h5 className="font-bold text-darkblue mb-2">Course Details:</h5>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
                        {program.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                      
                      {program.careers.length > 0 && (
                        <>
                          <h5 className="font-bold text-darkblue mb-2">Career Opportunities:</h5>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            {program.careers.map((career, i) => (
                              <li key={i}>{career}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      
                      <div className="mt-4">
                        {program.title !== "Coming Soon" ? (
                          <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer" className="inline-block bg-darkblue text-white px-4 py-2 rounded-md text-sm hover:bg-skyblue transition duration-300">
                            Apply Now
                          </a>
                        ) : (
                          <a href="#contact" className="inline-block bg-darkblue text-white px-4 py-2 rounded-md text-sm hover:bg-skyblue transition duration-300">
                            Contact Us
                          </a>
                        )}
                      </div>
                    </div>
                  </ExpandableContent>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-darkblue mb-6 text-center">Short Courses & Skills Programs</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shortCourses.map((course, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="bg-skyblue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {course.icon}
                </div>
                <h4 className="font-bold text-darkblue mb-2">{course.title}</h4>
                <p className="text-gray-700 text-sm mb-4">{course.description}</p>
                <button 
                  className="text-skyblue text-xs font-medium hover:underline"
                  onClick={course.toggleFunc}
                >
                  Details
                </button>
                
                <ExpandableContent isExpanded={course.isVisible} className="mt-2">
                  <div className="border-t pt-2">
                    <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 text-left">
                      {course.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-darkblue text-white px-3 py-1 rounded-md text-xs hover:bg-skyblue transition duration-300">
                      Apply
                    </a>
                  </div>
                </ExpandableContent>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button 
              className="inline-block bg-darkblue text-white px-6 py-3 rounded-md hover:bg-skyblue transition duration-300"
              onClick={toggleAllCourses}
            >
              View All Courses
            </button>
            
            <ExpandableContent isExpanded={allCoursesVisible} className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-darkblue mb-4">Complete Course Catalog</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-darkblue mb-2">Academic Programs</h5>
                  <ul className="space-y-2">
                    {academicCourseList.map((course, index) => (
                      <li key={index} className="flex justify-between items-center border-b pb-2">
                        <span>{course.name}</span>
                        <span className="text-sm text-gray-600">{course.duration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-darkblue mb-2">Short Courses</h5>
                  <ul className="space-y-2">
                    {shortCourseList.map((course, index) => (
                      <li key={index} className="flex justify-between items-center border-b pb-2">
                        <span>{course.name}</span>
                        <span className="text-sm text-gray-600">{course.duration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ExpandableContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
