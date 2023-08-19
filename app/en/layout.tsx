'use client';

import React, { Fragment, useState, useEffect } from 'react'
import Footer from './components/footer/Footer'
import RightNavbar from './components/header/RightNavbar'
import SideBar from './components/sidebar/SideBar'
import MobileNavbar from './components/header/MobileNavbar'
import Transitions from './components/transitions/Transitions'

export default function othersLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <Fragment>
         <Transitions>
         <div className="largeContainer px-5 xl:px-0 pt-7 relative">
            <MobileNavbar />
            <div className="flex items-start gap-6 relative">
               {/* left sidebar  */}
               <div
                  className={`pt-3 w-[300px] shrink-0 bg-base-100 rounded-xl desktop_sidebar sticky top-7 pb-3 mb-[1.8rem] z-10`}
               >
                  <div className="overflow-y-auto scrollbarStyle h-[calc(100vh-3.3rem)]">
                     <SideBar />
                  </div>
               </div>
               {/* middle content */}
               <div className="block w-full max-w-[1040px] mx-auto">
                  <main>{children}</main>
                  <Footer />
               </div>
               {/* Right sidebar */}
               <div
                  className={`min-w-[88px] max-w-[88px] h-[calc(100vh-1.8rem)] bg-base-100 py-[2.25rem] rounded-xl desktop_sidebar scrollbarStyle sticky top-7 mb-[1.8rem] z-10`}
               >
                  <RightNavbar />
               </div>
            </div>
         </div>
         </Transitions>
      </Fragment>
   )
}
