import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Search, Tag, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  // Extract unique categories
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-darkblue mb-4">Kobamelo College Blog</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Stay updated with the latest educational insights, career tips, and news from Kobamelo College.
          </p>
          <div className="w-20 h-1 bg-skyblue mx-auto mt-4"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row mb-10">
          {/* Search and Filter */}
          <div className="md:w-1/4 mb-6 md:mb-0 pr-0 md:pr-6">
            <div className="bg-lightblue p-6 rounded-lg">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-darkblue mb-3">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-skyblue"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-darkblue mb-3">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="all-categories"
                      name="category"
                      className="mr-2"
                      checked={selectedCategory === ""}
                      onChange={() => setSelectedCategory("")}
                    />
                    <label htmlFor="all-categories" className="text-gray-700 cursor-pointer">All Categories</label>
                  </div>
                  
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${index}`}
                        name="category"
                        className="mr-2"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                      />
                      <label htmlFor={`category-${index}`} className="text-gray-700 cursor-pointer">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog posts */}
          <div className="md:w-3/4">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="w-4 h-4 text-skyblue mr-1" />
                        <span className="text-xs font-medium text-skyblue">{post.category}</span>
                      </div>
                      <h2 className="text-xl font-bold text-darkblue mb-2 line-clamp-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center text-xs text-gray-500 mb-4">
                        <div className="flex items-center mr-4">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      
                      <Link to={`/blog/${post.id}`} className="inline-block bg-darkblue text-white px-4 py-2 rounded-md text-sm hover:bg-skyblue transition duration-300">
                        Read More
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-10 text-center rounded-lg border border-gray-200">
                <h3 className="text-xl text-darkblue mb-2">No posts found</h3>
                <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;