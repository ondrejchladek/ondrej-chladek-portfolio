import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
   return (
      <div className="bg-base-100 rounded-xl">
         <Link href="/blog/single-page">
            <Image
               src="/blog.png"
               alt="Picture of the author"
               className="w-full rounded-xl"
               width={324}
               height={216}
            />
         </Link>
         <div className="p-6">
            <h6 className="text-lg font-semibold text-base-content hover:text-primary hover:duration-300 transition">
               <Link href="/blog/single-page">How to make web templates</Link>
            </h6>
            <p className="mt-2 mb-4 text-base text-base-content/60">
               Lorem ipsum dolor sit amet diam ac consectetur adipiscing elit...
            </p>
            <Link
               href="/blog/single-page"
               className="text-primary text-sm font-semibold flex items-center gap-3 hover:opacity-80 transition hover:duration-300"
            >
               <span> Read More</span>
               <span>
                  <svg
                     className="text-primary"
                     width="16"
                     height="12"
                     viewBox="0 0 10 10"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.86409 0.598461C5.12037 0.34218 5.53588 0.34218 5.79216 0.598461L9.72966 4.53596C9.98594 4.79224 9.98594 5.20776 9.72966 5.46404L5.79216 9.40154C5.53588 9.65782 5.12037 9.65782 4.86409 9.40154C4.6078 9.14526 4.6078 8.72974 4.86409 8.47346L7.6813 5.65625H0.734375C0.371938 5.65625 0.078125 5.36244 0.078125 5C0.078125 4.63756 0.371938 4.34375 0.734375 4.34375H7.6813L4.86409 1.52654C4.6078 1.27026 4.6078 0.854743 4.86409 0.598461Z"
                        fill="currentColor"
                     />
                  </svg>
               </span>
            </Link>
         </div>
      </div>
   )
}

export default BlogCard
