'use client'
import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SideBar from '../sidebar/SideBar'
import useThemes from '@/context/themeProvider'

const MobileNavbar = () => {
   const { theme, setTheme, themes: AllTheme, hydrationFix } = useThemes()
   const [sidebarOpen, setSidebarOpen] = React.useState(false)
   const [profileOpen, setProfileOpen] = React.useState(false)
   return (
      <Fragment>
         <nav className="responsive_status max-w-5xl mx-auto">
            <div className="flex items-center justify-between p-3 rounded-full  bg-base-100 border border-base-content/5 mb-10 sm:mb-16 h-[60px]">
               <div className="cursor-pointer" onClick={() => setProfileOpen(!profileOpen)}>
                  <Image
                     src="/Profile2.png"
                     width={36}
                     height={36}
                     alt="profle-image"
                  />
               </div>
               <div className="flex items-center gap-9">
                  <div className="">
                     <div tabIndex={0} className="btn-ghost2 btn-circle">
                        <div className="flex justify-center bg-base-100  p-[13px] cursor-pointer muj"></div>
                        <div className="cz"><Link href="./en">EN</Link></div>
                     </div>
                  </div>
                  <svg
                     onClick={() => setSidebarOpen(!sidebarOpen)}
                     className="text-base-content mr-2 cursor-pointer"
                     width="18"
                     height="16"
                     viewBox="0 0 18 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M15 14V16H3V14H15ZM18 7V9H0V7H18ZM15 0V2H3V0H15Z"
                        fill="currentColor"
                     />
                  </svg>
               </div>
            </div>
         </nav>
         {/* small device sidebar */}
         <nav className="responsive_status">
            <div
               className={`overflow-y-auto z-40 flex p-8 top-0 flex-col h-screen w-full max-w-[360px] fixed bg-base-100  duration-500 ease-in  gap-2 md:gap-0 shadow-xl ${sidebarOpen ? 'right-0' : '-right-full'
                  }`}
            >
               <div className="flex items-center justify-between">
                  {/* logo svg icon  */}
                  <svg
                     className="text-primary"
                     width="40"
                     height="40"
                     viewBox="0 0 40 40"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M0 16C0 7.16344 7.16344 0 16 0H24C15.1634 0 8 7.16344 8 16V40C3.58172 40 0 36.4183 0 32V16Z"
                        fill="currentColor"
                     />
                     <path
                        d="M24 32C32.8366 32 40 24.8366 40 16V24C40 32.8366 32.8366 40 24 40H18V30.837C19.8529 31.587 21.8782 32 24 32Z"
                        fill="currentColor"
                     />
                     <path
                        d="M24 24C28.4183 24 32 20.4183 32 16C32 11.5817 28.4183 8 24 8C19.5817 8 16 11.5817 16 16C16 20.4183 19.5817 24 24 24Z"
                        fill="currentColor"
                     />
                  </svg>
                  {/* cross svg icon  */}
                  <div>
                     <svg
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-base-content cursor-pointer hover:text-red-600 transition hover:duration-300"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.93934 6L0.21967 10.7197C-0.0732233 11.0126 -0.0732233 11.4874 0.21967 11.7803C0.512563 12.0732 0.987437 12.0732 1.28033 11.7803L6 7.06066L10.7197 11.7803C11.0126 12.0732 11.4874 12.0732 11.7803 11.7803C12.0732 11.4874 12.0732 11.0126 11.7803 10.7197L7.06066 6L11.7803 1.28033C12.0732 0.987437 12.0732 0.512563 11.7803 0.21967C11.4874 -0.0732233 11.0126 -0.0732233 10.7197 0.21967L6 4.93934L1.28033 0.21967Z"
                           fill="currentColor"
                        />
                     </svg>
                  </div>
               </div>
               <div className="mt-16 flex flex-col gap-7">
                  {NavData.map((item: any, index: number) => (
                     <Link
                        key={index}
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        href={item.link}
                        className="text-lg text-base-content/80 font-normal hover:opacity-60 transition-all hover:duration-300"
                     >
                        {item.title}
                     </Link>
                  ))}
               </div>
            </div>

            {/* bg overlay */}
            <div
               className={`fixed top-0 z-30 transition-all duration-500 ease-in-out  h-full w-full backdrop-blur-sm ${sidebarOpen ? 'right-0' : '-right-full'
                  }`}
               onClick={() => setSidebarOpen(false)}
            />
         </nav>
         {/* small device profile open */}
         <div className="responsive_status">
            <div
               className={`overflow-y-auto z-40 flex top-0 flex-col h-screen w-full max-w-[320px] fixed bg-base-100  duration-500 ease-in  gap-2 md:gap-0 shadow-xl ${profileOpen ? 'left-0' : '-left-full'
                  }`}
            >
               <SideBar />
            </div>

            {/* bg overlay */}
            <div
               className={`fixed top-0 z-30 transition-all duration-500 ease-in-out  h-full w-full backdrop-blur-sm ${profileOpen ? 'left-0' : '-left-full'
                  }`}
               onClick={() => setProfileOpen(false)}
            />
         </div>
      </Fragment>
   )
}

export default MobileNavbar

const NavData = [
   {
      title: 'Home',
      link: '#home',
   },
   {
      title: 'Services',
      link: '#service',
   },
   {
      title: 'Experience',
      link: '#experience',
   },
   {
      title: 'Projects',
      link: '#portfolio',
   },
   {
      title: 'Contact',
      link: '#contact',
   },
]
