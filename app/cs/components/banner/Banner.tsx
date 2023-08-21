import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IconSlider from '../slider/IconSlider'

const Banner = () => {
   return (
      <><div className="bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover max-h-[492px] bg-base-100 p-6 sm:p-10 xl:pr-7 xl:pl-16 rounded-xl flex items-center justify-center md:justify-between">
         <div className="w-full md:max-w-[260px] lg:max-w-[425px]">
            <h1 className="max-w-[400px] text-4xl mx-auto sm:mx-auto md:mx-0 lg:text-5xl xl:text-[57px] font-semibold text-base-content text-center md:text-start leading-10 xl:!leading-[66px]">
               Vize přepsané<br />do precizního kódu
            </h1>
            <p className="mt-4 mb-6 xl:my-6 text-base xl:text-lg text-base-content/60 text-center md:text-start leading-6 xl:leading-7">
            Jako Full Stack Developer a UI/UX designer se specializuji na tvorbu aplikačních řešení pro front-end i back-end webů a webových aplikací se znalostí technologií React, Node.js, Tailwind a TypeScript.
            </p>
            <div className="flex items-center justify-center md:justify-start">
               <Link
                  href={'/#contact'}
                  className="btn border-none btn-primary py-1.5 pl-6 pr-1.5 rounded-full flex items-center justify-center gap-5 w-fit"
               >
                  <span className="text-base font-medium text-primary-content">
                     Kontakt
                  </span>
                  <span className="p-2 bg-primary-content rounded-full">
                     <svg
                        className="text-primary"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M14.1667 7.5L17.5 10.8333M17.5 10.8333L14.1667 14.1667M17.5 10.8333L2.5 10.8333"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round" />
                     </svg>
                  </span>
               </Link>
            </div>
         </div>
         <div className="hidden md:block flex-none">
            <Image
               src="/person3.png"
               alt="Picture of the author"
               className="h-full"
               width={490}
               height={490} />
         </div>
      </div><div className="pt-7">
            <IconSlider />
         </div></>
   )
}

export default Banner
