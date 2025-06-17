import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from "react-icons/io5";

const ContactFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
        >
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="relative bg-[#e6e2da] text-black p-8 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <IoCloseOutline size={30} />
            </button>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Tell us where you're at</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">What is your name?</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#469C71]" placeholder="Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">What is your email?</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#469C71]" placeholder="Email" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">What is your role in the company?</label>
                <input type="text" id="role" name="role" className="mt-1 block w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#469C71]" placeholder="Enter role" />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" id="companyName" name="companyName" className="mt-1 block w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#469C71]" placeholder="Enter company name" />
              </div>
              <div>
                <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700">Company Website</label>
                <input type="text" id="companyWebsite" name="companyWebsite" className="mt-1 block w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#469C71]" placeholder="Enter company website" />
              </div>
              <div>
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">Company Size</label>
                <select id="companySize" name="companySize" className="mt-1 block w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#469C71] pr-8">
                  <option value="">Select company size</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-700">Company's Annual Revenue</label>
                <select id="annualRevenue" name="annualRevenue" className="mt-1 block w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#469C71] pr-8">
                  <option value="">Select revenue range</option>
                  <option value="<1M">&lt; $1M</option>
                  <option value="1-5M">$1M - $5M</option>
                  <option value="5-25M">$5M - $25M</option>
                  <option value="25-100M">$25M - $100M</option>
                  <option value="100M+">$100M+</option>
                </select>
              </div>
              <div>
                <label htmlFor="projectBudget" className="block text-sm font-medium text-gray-700">Project budget</label>
                <select id="projectBudget" name="projectBudget" className="mt-1 block w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#469C71] pr-8">
                  <option value="">Select budget range</option>
                  <option value="<10k">&lt; $10k</option>
                  <option value="10-50k">$10k - $50k</option>
                  <option value="50-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>
              <div>
                <label htmlFor="servicesInterested" className="block text-sm font-medium text-gray-700">What services are you interested in?</label>
                <select id="servicesInterested" name="servicesInterested" className="mt-1 block w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#469C71] pr-8">
                  <option value="">Select service</option>
                  <option value="AI Strategy">AI Strategy</option>
                  <option value="AI Training">AI Training</option>
                  <option value="AI Development">AI Development</option>
                  <option value="Data Analytics">Data Analytics</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="3" className="mt-1 block w-full px-3 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#469C71]" placeholder="Enter message"></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-[#469C71] text-black py-3 px-8 rounded-full font-semibold hover:bg-[#3a8b61] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal; 