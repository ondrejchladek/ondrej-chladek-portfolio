import React from 'react'

const Experience = () => {
   return (
      <div className="p-6 md:p-10 bg-base-100 rounded-xl flex flex-col gap-8 md:gap-8">
         {ExperienceData.map((item: any, index: number) => (
            <div key={index}>
               <div
                  className={`flex flex-col gap-6 xl:flex-row xl:justify-between ${
                     index + 1 === ExperienceData.length
                        ? ''
                        : 'border-b border-base-content/10 pb-7 xl:pb-7'
                  }`}
               >
                  <div className="pl-3 xl:pl-0 border-l-2 xl:border-l-0 border-base-content/10 w-full xl:max-w-[250px]">
                     <h5 className="text-lg text-base-content font-semibold">
                        {item.company}
                     </h5>
                     <div className="flex items-center gap-4 mt-2 xl:mt-3">
                        <p className="text-xs font-medium text-primary px-3 py-1 bg-primary/10 w-fit rounded-md">
                           {item.time}
                        </p>
                     </div>
                  </div>
                  <div className="w-full">
                     <h5 className="text-lg font-medium text-base-content">
                        {item.post}
                     </h5>
                     <p className="mt-2 lg:mt-4 text-base-content/50">
                        {item.description}
                     </p>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default Experience

const ExperienceData = [
   {
      company: 'Retailys s.r.o.',
      time: 'Leden 2022 - nyní',
      post: 'Full stack vývojář',
      description:
         'Na mé pozici full stack vývojáře ve společnosti Retailys s.r.o. se aktivně podílím na vývoji funkcionalit jak na front-endu, tak back-endu pomocí technologií React, Node.js, JavaScript, HTML, CSS a PHP a spolupracuji na výstavbě nejrůznějších uživatelských rozhraní. Tato pozice mi umožnila zapojit se do všech fází vývoje webových aplikací.',
   },
   {
      company: 'Inspirit Energy s.r.o.',
      time: 'Leden 2016 - nyní',
      post: 'Full stack vývojář, UI/UX designer',
      description:
         'Použitím dovedností v JavaScriptu, Reactu, Node.js, Tailwind a PHP vytvářím intuitivní webová rozhraní, která na klientské straně zlepšují uživatelský zážitek a na serverové straně zajišťují robustní funkčnost, spolehlivost a bezpečnost. Ve své roli obvykle vedu projekt od počátečního návrhu až po konečné fáze nasazení a moje role spojuje využití mých technických znalostí, schopnosti řešení problémů a strategického plánování.',
   },
   {
      company: 'Neologic s.r.o.',
      time: 'Prosinec 2020 - Duben 2022',
      post: 'Front-end vývojář',
      description:
         'Náplní mojí činnosti na pozici vedoucího front-end vývojáře ve společnosti Neologic s.r.o. bylo kódování webových šablon z nástroje Figma pomocí HTML, CSS a JavaScriptu. Mezi mé povinnosti patřilo vytváření intuitivních prvků uživatelského prostředí, optimalizace UX a zajišťování bezproblémové funkčnosti klientských webů na různých platformách.',
   },
]
