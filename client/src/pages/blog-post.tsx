import { useParams, useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "@/data";

const BlogPost = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-darkblue mb-6">Post Not Found</h1>
          <p className="text-gray-700 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <button 
            onClick={() => setLocation("/blog")}
            className="bg-darkblue text-white px-6 py-3 rounded-md hover:bg-skyblue transition duration-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Format content with paragraphs
  const formattedContent = post.content.split("\n\n").map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph}
    </p>
  ));

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            onClick={() => setLocation("/blog")}
            className="flex items-center text-skyblue hover:text-darkblue transition duration-300 mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            <span>Back to all posts</span>
          </button>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-3">
              <Tag className="w-4 h-4 text-skyblue mr-1" />
              <span className="text-sm font-medium text-skyblue">{post.category}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-darkblue mb-4">{post.title}</h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <div className="flex items-center mr-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-8">
              {formattedContent}
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-10">
              <h3 className="text-lg font-bold text-darkblue mb-4">Interested in our courses?</h3>
              <p className="text-gray-700 mb-4">
                Kobamelo College offers a wide range of programs designed to help you achieve your career goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/#courses" className="bg-darkblue text-white px-4 py-2 rounded-md text-sm hover:bg-skyblue transition duration-300">
                  Explore Our Courses
                </Link>
                <Link to="/#apply" className="border-2 border-darkblue text-darkblue px-4 py-2 rounded-md text-sm hover:bg-lightblue transition duration-300">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;