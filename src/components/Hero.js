import React from 'react'
import Navbar from './Navbar';
import { mainHero } from '../constants';
import styles from '../style';

const Hero = () => {
  return (
      <div className='w-full'>
          <div className='flex h-screen bg-hero-background w-screen'>
              {/* <Navbar /> */}
              <div className={`w-full flex item-center justify-end absolute ${styles.paddingX} top-1/3`}>
                  <div className='flex flex-col gap-2 font-poppins text-white'>
                      <h1 className='font-weight-900 xs:text-[48px] text-[40px]'>
                          {mainHero.main_title}
                      </h1>
                      <h4 className='font-weight-300 text-[14px] whitespace-pre'>
                          {mainHero.sub_title}
                      </h4>
                      <button className='bg-white rounded font-weight-300 text-gray-900 px-6 px-6 mt-2 p-2 w-[200px]'>{ mainHero.btn_text}</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Hero