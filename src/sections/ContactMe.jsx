import React from 'react'
import { IoMdMail } from 'react-icons/io'
import { ABOUT_ME } from '../utils/data'
import ContactInfoCard from '../components/ContactInfoCard'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdOutlineWeb } from 'react-icons/md'

const ContactMe = () => {
  return (
    <section id='contact'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h2 className='section-title'>Contact Me</h2>

          <p className='text-sm text-center mt-4 leading-6'>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of
            your vision. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16'>
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
          </div>

          <div>
            <h3 className='md:hidden text-secondary text-lg font-medium mt-4 pb-5'>Contact Form</h3>
            <form className='flex flex-col'>
              <input
                type='text'
                name='fullname'
                placeholder='Full Name'
                id=''
                className='input-box'
                autoComplete='off'
              />
              <input
                type='email'
                name='email'
                placeholder='Email Address'
                id=''
                className='input-box'
                autoComplete='off'
              />
              <textarea
                name='message'
                placeholder='Message'
                id=''
                className='input-box'
                autoComplete='off'
                rows={3}
              />
              <button className='action-btn btn-scale-anim'>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe