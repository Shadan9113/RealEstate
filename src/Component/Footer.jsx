import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3  mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, saepe. lorem lorem lorem</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-lg text-white font-bold mb-4'>Compnay</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a className='hover:text-white' href="Header">Home</a>
                    <a className='hover:text-white' href="Contact Us">Contact Us</a>
                    <a className='hover:text-white' href="About">About</a>
                    <a className='hover:text-white' href="">Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='text-lg text-white font-bold mb-4'>Subscribe to Our Newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources sent to your inbox weekly</p>
            <div className='flex gap-2'>
            <input className='p-2 bg-gray-800 rounded border-gray-400 text-white focus:outline-none w-full md:w-auto' type="email" placeholder='Enter your email' />
            <button className='px-4 py-2 bg-blue-600 text-white rounded'>Subscribe</button>
            </div>
            </div>   
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-gray-400 text-center'>
            Copyright 2024 © ShadanDev. All Right Reserved
        </div>
    </div>
  )
}

export default Footer