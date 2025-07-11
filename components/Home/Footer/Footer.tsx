import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid
         md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* 1st Part */}
            <div className='space-y-5 '>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About Us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blogs</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Gift Cards</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Magazine</p>
            </div>

            {/* 2nd Part */}
            <div className='space-y-5 '>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Contact</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Legal Notice</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Privacy Policy</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Terms & Condition</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Sitemap</p>
            </div>

            {/* 3rd Part */}
            <div className='space-y-5 '>
                <h1 className='text-lg font-bold'>Other Services</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Car Hire</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Activity Finder</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Tour List</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Flight Finder</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Travel Agents</p>
            </div>

            {/* 4th Part */}
            <div>
                 <h1 className='text-lg font-bold'>Contact Us</h1>
                 <div className='mt-6 '>
                    <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                    <h1 className='text-base font-bold text-blue-950'>+94 764686751</h1>
                 </div>

                  <div className='mt-6 '>
                    <h1 className='text-sm text-gray-600'>Our Email</h1>
                    <h1 className='text-base font-bold text-blue-950'>acyogathassugeevan@gmail.com</h1>
                 </div>

            </div>

        </div>

    </div>
  )
}

export default Footer