import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import styles from '../style';
import { features } from '../constants';
import { featureImage } from '../assets';

const Feature = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
      <div className='md:flex md:items-center md:justify-center bg-blue-gradient py-10 px-4 font-poppins'>
          {/*IMAGE SECTION */}
          <div className='md:flex basis-3/5 justify-center md:order-2'>
              {isAboveLarge ? (
                    <div className=''>
                        <img src={featureImage} alt="" />
                    </div>
                ) :
                (
                      <div className='m-4'>
                          <img src={featureImage} alt="" />
                    </div>
                )}
          </div>

          {/*TEXT SECTION */}
          <div className='md:flex basis-3/5 justify-center md:order-1'>
              {isAboveLarge ? (
                    <div className={`${styles.paddingY} flex items-center justify center px-2 py-6 font-weight-600 text-[40px]`}>
                        {features.title}
                    </div>
                ) :
                (
                    <div className={`flex items-center justify center px-2 py-6 font-semibold text-[22px]`}>
                        {features.title}
                    </div>
                )}
          </div>
      </div>
  )
}

export default Feature