'use client'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioCards = () => {
   const [portfolioData, setPortfolioData] = useState(data)
   const [caregory, seCategory] = useState('All categories')

   const filterData = (title: string) => {
      seCategory(title)
      if (title === 'All categories') {
         setPortfolioData(data)
      } else {
         const filterData = data.filter((item: any) => item.category === title)
         setPortfolioData(filterData)
      }
   }

   return (
      <Fragment>
         <div className="mt-8 xl:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 cursor-pointer">
            {portfolioMenu.map((item: any, index: number) => (
               <p
                  onClick={() => filterData(item.title)}
                  className={`text-base font-medium text-base-content/60 hover:text-primary hover:duration-300 transition ${
                     caregory === item.title && 'text-primary'
                  }`}
                  key={index}
               >
                  {item.title}
               </p>
            ))}
         </div>
         <div className="mt-8 md:mt-12">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
               {portfolioData.map((item: any, index: any) => (
                  <div key={index}>
                     <div className="relative group">
                        <Image
                           src={item.src}
                           alt=""
                           className="w-full rounded-xl"
                           width={324}
                           height={324}
                        />
                        
                        <div className="p-10 bg-primary/80 w-full h-full font-bold absolute flex text-center items-center justify-center top-0 rounded-xl opacity-0 group-hover:opacity-100 transition group-hover:duration-500"
                        >  <div className="w-full">
                              <h5 className="text-2xl font-bold text-base-content w-full mb-3">{item.project}</h5>
                              <div className="w-full font-normal text-base">{item.desc}</div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Fragment>
   )
}

export default PortfolioCards

const portfolioMenu = [
   {
      id: 1,
      title: 'All categories',
   },
   {
      id: 2,
      title: 'Full Stack Development',
   },
   {
      id: 3,
      title: 'Web Templates',
   },
   {
      id: 4,
      title: 'Branding',
   },
]

const data = [
   {
      id: 1,
      src: '/partners.jpg',
      category: 'Full Stack Development',
      project: 'Blue Partners',
      desc: 'A comprehensive web development project for the global Blue Partners venture.',
   },
   {
      id: 2,
      src: '/brainymonkey.jpg',
      category: 'Full Stack Development',
      project: 'Brainy Monkey',
      desc: 'Complete web and application development for an innovative AI platform, Brainy Monkey.',
   },
   {
      id: 3,
      src: '/kadera.jpg',
      category: 'Web Templates',
      project: 'Kadera Kovoplast',
      desc: 'Development of front-end templates and user interface design for the Kadera Kovoplast website.',
   },
   {
      id: 4,
      src: '/weilovna.jpg',
      category: 'Web Templates',
      project: 'Weilovna',
      desc: 'Coding and user-interface design for the Weilovna animal clinic.',
   },
   {
      id: 5,
      src: '/retailys.jpg',
      category: 'Full Stack Development',
      project: 'Retailys',
      desc: 'In-depth web software development for a leading online retail solutions provider.',
   },
   {
      id: 6,
      src: '/atcspace.jpg',
      category: 'Web Templates',
      project: 'ATC Space',
      desc: 'Front-end coding and template creation for the ATC Space website.',
   },
   {
      id: 7,
      src: '/grazia.jpg',
      title: 'Full Stack Development',
      project: 'Grazia Store',
      desc: 'Complete online store development for a leading fashion brand, Grazia.',
   },
   {
      id: 8,
      src: '/skleniky.jpg',
      category: 'Web Templates',
      project: 'Skleníky Pech',
      desc: 'Creating front-end templates and user interface design for the Skleníky Pech website.',
   },
   {
      id: 9,
      src: '/astaxanthin.jpg',
      category: 'Branding',
      project: 'Astaxanthin',
      desc: 'Developing the brand identity and digital assets for the Astaxanthin health supplement.',
   },
]