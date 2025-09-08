import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Footer = () => {
   const navigate=useNavigate();
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          <div>
             <Link  onClick={()=>{navigate('/');scrollTo(0,0);} } to='/
      '> <h1 className=" py-1 text-2xl font-extrabold tracking-wide flex items-center">
        <span className="text-gray-500">Astrape</span>
        <span className="text-black">Wear</span>
      </h1></Link>
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sit quasi consequuntur mollitia sunt sint temporibus odio asperiores nulla aspernatur molestiae repellendus a excepturi doloribus obcaecati impedit harum nam. Fugiat.</p>
          </div>
          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
          </div>
          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul  className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@astrapewear.com</li>
            </ul>
          </div>
          </div>
          <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@astrapewear.com-All Right Reserved.</p>
          </div>
    </div>
  )
}

export default Footer
