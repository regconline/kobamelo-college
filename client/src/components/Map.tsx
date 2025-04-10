import { motion } from "framer-motion";

const Map = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d25.987654!3d-27.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDU5JzE1LjYiUyAyNcKwNTknMTUuNiJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Kobamelo College Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Map;
