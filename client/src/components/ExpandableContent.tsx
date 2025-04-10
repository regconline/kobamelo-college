import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableContentProps {
  isExpanded: boolean;
  children: ReactNode;
  className?: string;
}

const ExpandableContent = ({ isExpanded, children, className = "" }: ExpandableContentProps) => {
  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: "auto", 
            opacity: 1,
            transition: { 
              height: { duration: 0.3 },
              opacity: { duration: 0.3, delay: 0.1 }
            }
          }}
          exit={{ 
            height: 0, 
            opacity: 0,
            transition: { 
              height: { duration: 0.3 },
              opacity: { duration: 0.2 }
            }
          }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExpandableContent;
