import React from 'react'
import PROFILE_PIC from '../assets/images/profile-pic.png'
import ICON_1 from '../assets/images/icon-1.png'
import { STATS } from '../utils/data'
import StatInfoCard from '../components/StatInfoCard'

const Hero = () => {
  return (
    <section id='hero' className='container mx-auto px-8'>
      <div className='flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]'>
        <div className='order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0'>
          <h1 className='text-xl lg:text-2xl font-medium text-black'>👋 Hi , I'm Lorem Ipsum</h1>
          <h2 className='w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent'>Building Scalable & User Centric Web Apps</h2>

          <p className='w-full lg:w-[500px] text-sm lg:text-base mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, cumque, voluptates, quibusdam voluptatibus
            voluptatibus, quibusdam voluptatibus voluptatibus.
          </p>

          <div className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'>
            <button className='flex-1 md:flex-none action-btn-outline btn-scale-anim'>View My Work</button>
            <button className='flex-1 md:flex-none action-btn btn-scale-anim'>Download Resume</button>
          </div>
        </div>

        <div className='w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2'>
          <div className='profile-pic flex justify-center items-center'>
            <img src={PROFILE_PIC} alt='Profile Pic' className='w-[300px] h-[300px]' />
          </div>

          <img
            src={ICON_1}
            alt='Icon 1'
            className='icon-img -left-10 bottom-20 rotate-[1.75deg]'
          />
          <img
            src={ICON_1}
            alt='Icon 2'
            className='icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg]'
          />
          <img
            src={ICON_1}
            alt='Icon 3'
            className='icon-img left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]'
          />
          <img
            src={ICON_1}
            alt='Icon 4'
            className='icon-img left-[200px] md:left-[255px] -bottom-9 md:-bottom-10 rotate-[4.75deg]'
          />
        </div>
      </div>

      <div className='flex gap-12 mt-16 md:mt-24 flex-wrap'>
        {STATS.map((item) => (
          <StatInfoCard
            key={item.id}
            count={item.count}
            label={item.label}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero