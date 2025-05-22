import React, { useEffect, useState } from 'react'
import { MENU_LINK } from '../utils/data'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true) // Show menu on larger screens
      } else {
        setIsOpen(false) // Hide menu on smaller screens
      }
    }

    handleResize() // Call it once to set the initial state

    window.addEventListener('resize', handleResize) // Add event listener

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  

  return (
    <nav className='container mx-auto sticky top-5 z-10'>
      <div className='flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0'>
        {/* Logo */}
        <p className='lg:text-3xl italic font-medium text-[#99632a] px-9'>My Portfolio</p>

        {/* Hamburger Icon */}
        <button
          className='block md:hidden text-[#333] mr-6 focus:outline-none'
          onClick={toggleMenu}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </svg>
        </button>

        {/* Navigation Link */}
        <ul className={`${isOpen ? 'flex' : 'hidden'} menu-wrapper`}>
          {MENU_LINK.map((item) => (
            <li key={item.id}>
              <Link
                activeClass='active'
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className='menu-item'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire me Button */}
        <button className='hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105'>
          Hire Me
        </button>
      </div>
    </nav>
  )
}

export default Navbar