import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import { googlePlay, appleStore } from '../assets';
import { footerLinks } from '../constants';

const Footer = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
      <div className='md:flex md:item-center md:justify-center text-white font-poppins p-10'>
          {/*BADGE */}
          {isAboveLarge ? (
              <div className='flex px-2 py-4 gap-4 mr-40'>
                  <img src={googlePlay} alt="play-store" width={200} height={200} />
                  <img src={appleStore} alt="app-store" width={200} height={200} />
              </div>
          ) : (
                <div className='flex flex-col gap-4 items-center justify-center mb-8'>
                      <img src={googlePlay} alt="play-store" width={200} height={200} />
                    <img src={appleStore} alt="app-store" width={200} height={200} />
              </div>
          )}

          {/*LINKS */}
          {isAboveLarge ? (
              footerLinks.map((items, id) => (
                  <div className='flex-1 py-4 flex-row min-h-[175px]' key={`link-container-${id}`}>
                      <div className='font-weight-600' key={`title-${id}`}>{items.title}</div>
                      <div className='flex flex-col'>
                          <ul>
                              {items.links.map((link, idx) => (
                                  <li key={`links-${idx}`}>
                                      <a href={link.link}>{link.name}</a>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              ))
          ) : (<div></div>)}
    </div>
  )
}

export default Footer