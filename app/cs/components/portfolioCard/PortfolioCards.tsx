'use client'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioCards = () => {
   const [portfolioData, setPortfolioData] = useState(data)
   const [caregory, seCategory] = useState('Všechny kategorie')

   const filterData = (title: string) => {
      seCategory(title)
      if (title === 'Všechny kategorie') {
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
      title: 'Všechny kategorie',
   },
   {
      id: 2,
      title: 'Full Stack programování',
   },
   {
      id: 3,
      title: 'Webové šablony',
   },
   {
      id: 4,
      title: 'UI/UX design',
   },
]

const data = [
   {
      id: 1,
      src: '/partners.jpg',
      category: 'Full Stack programování',
      project: 'Blue Partners',
      desc: 'Projekt vývoje back-endu a front-endu portálu společnosti Blue Partners.',
   },
   {
      id: 2,
      src: '/brainymonkey.jpg',
      category: 'Full Stack programování',
      project: 'Brainy Monkey',
      desc: 'Komplexní vývoj inovativní AI webové platformy Brainy Monkey.',
   },
   {
      id: 3,
      src: '/kadera.jpg',
      category: 'Webové šablony',
      project: 'Kadera Kovoplast',
      desc: 'Tvorba šablon a návrh uživatelského rozhraní pro webové stránky společnosti Kadera Kovoplast.',
   },
   {
      id: 4,
      src: '/weilovna.jpg',
      category: 'Webové šablony',
      project: 'Weilovna',
      desc: 'Kódování a návrh uživatelského rozhraní pro veterinární kliniku Weilovna.',
   },
   {
      id: 5,
      src: '/retailys.jpg',
      category: 'Full Stack programování',
      project: 'Retailys',
      desc: 'Vývoj front-endu pro předního poskytovatele řešení pro internetové obchody Retailys s.r.o.',
   },
   {
      id: 6,
      src: '/atcspace.jpg',
      category: 'Webové šablony',
      project: 'ATC Space',
      desc: 'Kódování front-endu a tvorba šablon pro webové stránky společnosti ATC Space s.r.o.',
   },
   {
      id: 7,
      src: '/grazia.jpg',
      title: 'Full Stack programování',
      project: 'Grazia Store',
      desc: 'Kompletní vývoj internetového obchodu pro přední módní značku Grazia.',
   },
   {
      id: 8,
      src: '/skleniky.jpg',
      category: 'Webové šablony',
      project: 'Skleníky Pech',
      desc: 'Návrh uživatelského rozhraní a výroba šablon webových stránek Skleníky Pech.',
   },
   {
      id: 9,
      src: '/astaxanthin.jpg',
      category: 'UI/UX design',
      project: 'Astaxanthin',
      desc: 'Tvorba UI/UX designu a digitálních aktiv pro doplněk stravy Astaxanthin.',
   },
]