import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';

const ContactUs: React.FC = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@druggenie.com',
      link: 'mailto:support@druggenie.com',
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'green',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Healthcare Ave, Medical District, NY 10001',
      link: 'https://maps.google.com',
      color: 'red',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9AM - 6PM EST',
      link: null,
      color: 'orange',
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', link: 'https://facebook.com', color: 'blue' },
    { icon: Twitter, name: 'Twitter', link: 'https://twitter.com', color: 'sky' },
    { icon: Linkedin, name: 'LinkedIn', link: 'https://linkedin.com', color: 'blue' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center"
      >
        <MessageCircle className="h-16 w-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-blue-100 text-lg">
          We're here to help! Reach out to us anytime.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have questions or need assistance? We're here to help! Reach out to us through any of the contact methods listed on this page.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-400 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">📧 Email Us</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For general inquiries, support requests, or feedback, please email us at:
            </p>
            <a 
              href="mailto:support@druggenie.com"
              className="text-blue-600 dark:text-blue-400 font-semibold text-lg hover:underline"
            >
              support@druggenie.com
            </a>
          </div>

          <div className="mt-6 bg-green-50 dark:bg-green-900/30 border-2 border-green-200 dark:border-green-400 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">📞 Call Us</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Speak directly with our support team:
            </p>
            <a 
              href="tel:+15551234567"
              className="text-green-600 dark:text-green-400 font-semibold text-lg hover:underline"
            >
              +1 (555) 123-4567
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Available Mon-Fri, 9AM - 6PM EST
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Contact Info Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div
                    className={`p-2 bg-${info.color}-100 rounded-lg flex-shrink-0`}
                  >
                    <info.icon className={`h-5 w-5 text-${info.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-200">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-${social.color}-50 rounded-xl hover:bg-${social.color}-100 transition-colors`}
                  title={social.name}
                >
                  <social.icon className={`h-6 w-6 text-${social.color}-600`} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Response */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border-2 border-green-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Quick Response</h3>
            </div>
            <p className="text-sm text-gray-700">
              We typically respond to all inquiries within 24 hours during business days.
              For urgent matters, please call us directly.
            </p>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-red-500 rounded-lg">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Emergency</h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              For medical emergencies, please call 911 or visit your nearest emergency room.
            </p>
            <p className="text-xs text-gray-600">
              Drug GENIE is not a substitute for emergency medical care.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
      >
        <div className="h-64 md:h-96 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <p className="text-gray-700 font-medium">Interactive Map Coming Soon</p>
            <p className="text-sm text-gray-500 mt-2">
              123 Healthcare Ave, Medical District, NY 10001
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
