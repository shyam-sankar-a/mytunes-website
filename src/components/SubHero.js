import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import { heroSub } from '../assets';
import { featureHero } from '../constants';

const SubHero = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
      <div className='md:flex md:item-center md:justify-center md: h-full gap-16'>
          {/* IMAGE SECTION */}
          {isAboveLarge ? (
              <div className='flex flex-row basis-3/5 px-2 py-4 gap-10'>
                  <div className='m-4'>
                      <img src={heroSub} alt='subhero' />
                  </div>
                  <span className='border-2 border-gray-100 transform rotate-89 border-opacity-20 my-10 py-2'></span>
              </div>
          ) : (
                  <div className='flex flex-col pt-8 gap-4'>
                      <img src={heroSub} alt='subhero' />
                      <hr className='mx-6' />
                  </div>
          )}

          {/* TEXT SECTION */}
          <div className='flex flex-col items-center justify-center p-6 font-poppins text-white'>
              {isAboveLarge ? (
                  <div className='w-full'>
                        <h1 className='font-black text-[50px]'>
                            {featureHero.title}
                        </h1>
                        <h4 className='font-normal text-[14px] whitespace-pre'>
                            {featureHero.sub_title}
                        </h4>
                        <button className='bg-green-600 rounded md:font-weight-300 md:text-gray-900 px-6 mt-2 p-2 md:w-[200px]'>{ featureHero.btn_text}</button>
                    </div>
                ) : (
                    <div className='w-full'>
                        <h1 className='font-black text-[30px]'>
                            {featureHero.title}
                        </h1>
                        <h4 className='font-normal text-[12px] sm:whitespace-pre'>
                            {featureHero.sub_title}
                        </h4>
                        <button className='bg-green-600 rounded md:font-weight-300 md:text-gray-900 px-6 mt-2 p-2 md:w-[200px]'>{ featureHero.btn_text}</button>
                    </div>
                )}
          </div>
      </div>
  )
}

export default SubHero