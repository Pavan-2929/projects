"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ShoppingCart,
  CreditCard,
  ChartPie,
  ImageIcon,
  VerifiedIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";

const CasePandaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CasePanda
        </motion.h1>

        <motion.p
          className="text-lg text-center mb-6 border-b pb-6 border-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Your ultimate destination for custom iPhone cases with advanced
          features, a beautiful interface, and seamless performance.
        </motion.p>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Key Features</h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <VerifiedIcon className="text-green-400 mr-3" />
              <span>
                <strong>Advanced Authentication System:</strong> Secure your
                account with OTP, forget-password, and NextAuth V5 integration.
              </span>
            </li>
            <li className="flex items-start">
              <ShoppingCart className="text-blue-400 mr-3" />
              <span>
                <strong>Order Management:</strong> Stay updated with real-time
                order statuses—pending, confirmed, shipping, and delivered.
              </span>
            </li>
            <li className="flex items-start">
              <ImageIcon className="text-purple-400 mr-3" />
              <span>
                <strong>Image Drag & Drop:</strong> Effortlessly upload and
                manage product images with Firebase storage.
              </span>
            </li>
            <li className="flex items-start">
              <CreditCard className="text-yellow-400 mr-3" />
              <span>
                <strong>Multiple Payment Options:</strong> Choose from cash,
                card, and Stripe integration for secure transactions.
              </span>
            </li>
            <li className="flex items-start">
              <ChartPie className="text-pink-400 mr-3" />
              <span>
                <strong>Admin Dashboard:</strong> Monitor site activity, manage
                orders, and view insightful statistics with interactive charts.
              </span>
            </li>
            <li className="flex items-start">
              <TrendingUpIcon className="text-red-400 mr-3" />
              <span>
                <strong>Performance Optimization:</strong> Fast loading times,
                responsive design, and a smooth user experience across devices.
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Future Improvements
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="text-green-400 mr-3" />
              <span>Sample images to easily preview through the website.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-400 mr-3" />
              <span>
                Implement image crop functionality for better customization.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-400 mr-3" />
              <span>
                Integrate real-time reviews to showcase customer feedback.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-400 mr-3" />
              <span>
                Integrate real-time PhonePe payment gateway for seamless
                transactions.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-400 mr-3" />
              <span>
                Deploy the site on a custom domain for better reach and
                accessibility.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-400 mr-3" />
              <span>Fix minor bugs to enhance user experience.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default CasePandaPage;
