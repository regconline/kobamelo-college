import { motion } from "framer-motion";
import { FileText, BookOpen, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient pt-32 pb-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-darkblue mb-6">
            Empowering Minds, <span className="text-primary">Enriching Futures</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Kobamelo College provides high-quality education and training programs that prepare students for success in their chosen careers.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a 
              href="#courses" 
              className="bg-darkblue text-white px-6 py-3 rounded-md text-center hover:bg-skyblue transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Explore Courses
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-white text-darkblue px-6 py-3 rounded-md text-center border-2 border-darkblue hover:bg-lightblue transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-skyblue rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-darkblue rounded-full opacity-50 animate-pulse"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-darkblue mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-lightblue p-2 rounded-full">
                    <FileText className="w-6 h-6 text-darkblue" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Students Trained (2024)</p>
                    <p className="text-lg font-bold text-darkblue">110+</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-lightblue p-2 rounded-full">
                    <BookOpen className="w-6 h-6 text-darkblue" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Courses Offered</p>
                    <p className="text-lg font-bold text-darkblue">10+</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-lightblue p-2 rounded-full">
                    <Shield className="w-6 h-6 text-darkblue" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Accreditation</p>
                    <p className="text-lg font-bold text-darkblue">QCTO & SAIOSH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
