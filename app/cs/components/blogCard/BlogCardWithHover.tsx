import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCardWithHover = () => {
   return (
      <div className="bg-base-100 rounded-xl before:rounded-tr-xl after:rounded-bl-xl p-8 w-fit card">
         <Link href="/blog/single-page" className="z-10">
            <Image
               src="/cardImg.png"
               width={320}
               height={240}
               alt="card-image"
               className="w-full"
            />
         </Link>
         <h2 className="text-xl font-semibold text-base-content hover:text-primary transition duration-300 ease-in-out mt-4 line-clamp-1 z-10">
            <Link href="/blog/single-page">How to make web tempates</Link>
         </h2>
         <p className="text-base-content/50 mt-2 line-clamp-3 max-w-[412px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit...
         </p>
         <Link
            href="/blog/single-page"
            className="flex items-center gap-3.5 text-base font-medium text-primary mt-3 hover:opacity-70 duration-300 ease-in-out cursor-pointer z-10"
         >
            <span> Read More</span>
            <span>
               <svg
                  className="mt-1 text-primary"
                  width="18"
                  height="9"
                  viewBox="0 0 18 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M13.1667 1.5L16.5 4.83333M16.5 4.83333L13.1667 8.16667M16.5 4.83333L1.5 4.83333"
                     stroke="currentColor"
                     strokeWidth="1.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </span>
         </Link>
      </div>
   )
}

export default BlogCardWithHover
