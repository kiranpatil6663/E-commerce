import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div className="border-t pt-10 max-w-3xl mx-auto text-gray-700">
      <div className="flex flex-col items-center mb-8">
        <img src={assets.logo} alt="AstrapeWear Logo" className="w-16 mb-4" />
        <h1 className="prata-regular text-3xl font-bold mb-2">About AstrapeWear</h1>
        <p className="text-base text-gray-500 text-center max-w-xl">
          Welcome to AstrapeWear, your destination for the latest fashion collections for Men, Women, and Kids. Our platform is designed to provide a seamless shopping experience, featuring a curated selection of topwear, bottomwear, and winterwear, all crafted for comfort and style.
        </p>
      </div>
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-600">
          At AstrapeWear, we believe in making fashion accessible, affordable, and enjoyable for everyone. We are committed to delivering high-quality products, easy exchange and return policies, and exceptional customer support.
        </p>
      </div>
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-2">Why Shop With Us?</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Latest collections updated regularly</li>
          <li>Easy exchange and 7-day return policy</li>
          <li>Secure checkout and multiple payment options</li>
          <li>24/7 customer support</li>
          <li>Fast delivery and hassle-free shopping</li>
        </ul>
      </div>
      <div className="my-8">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or need help? Reach out to us at <b>contact@astrapewear.com</b> or call <b>+1-212-456-7890</b>. We’re here to help you with all your fashion needs!
        </p>
      </div>
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; 2025 AstrapeWear. All Rights Reserved.
      </div>
    </div>
  )
}

export default About