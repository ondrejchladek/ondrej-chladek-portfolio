import Link from 'next/link'
import React, {ReactElement} from 'react'

interface DataProps {
   svg: ReactElement;
   title: string;
   data: DataProps[]
}

const FlipCardWithHover: React.FC<DataProps> = ({ svg, title, data }) => {
   return (
      <div className="p-6 lg:p-8 bg-base-100 rounded-xl group card xl:min-h-[363px]">
         <div className="w-[56px] h-[56px] flex items-center justify-center bg-primary/[0.05] text-primary rounded-xl group-hover:bg-primary group-hover:duration-300 transition group-hover:text-primary-content transition">
            {svg}
         </div>
         <h3 className="text-xl font-semibold text-base-content mt-8 group-hover:text-primary group-hover:duration-300 transition z-10">
            {title}
         </h3>
         <div className="flex flex-col gap-3 mt-6">
            {data.map((item: DataProps, index) => (
               <div className="flex items-center gap-4" key={index}>
                  <div>
                     <svg
                        className="text-base-content"
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M8 1L13 6M13 6L8 11M13 6L1 6"
                           stroke="currentColor"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </div>
                  <p className="text-base leading-[1.3rem] text-base-content/60">{item.title}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default FlipCardWithHover