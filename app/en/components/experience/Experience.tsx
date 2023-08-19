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
      time: 'Jan 2022 - now',
      post: 'Full Stack Developer',
      description:
         'In my position as a Full Stack Developer at Retailys s.r.o., I have been actively engaged in developing both front-end and back-end functionalities. Utilizing languages such as JavaScript, HTML, CSS, PHP and Javascript, I have contributed to building fast user interfaces with reliable server-side logic. This position has allowed me to be involved in all stages of web development.',
   },
   {
      company: 'Inspirit Energy s.r.o.',
      time: 'Jan 2016 - now',
      post: 'Full Stack Developer',
      description:
         'Utilizing skill sets in JavaScript, React, Node.js, Tailwind and PHP, I create intuitive interfaces that enhance end-user experience. On the server-side, I ensure robust functionality and diligently maintain databases. Guiding the project from initial design to final deployment stages, my role necessitates a strong synergy of technical knowledge, problem-solving, and strategic planning.',
   },
   {
      company: 'Neologic s.r.o.',
      time: 'Dec 2020 - Apr 2022',
      post: 'Lead Front-End Developer',
      description:
         'As Lead Front-End Developer at Neologic s.r.o, I coded intricated Figma designs into responsive web interfaces using HTML, CSS, and JavaScript. My responsibilities included creating intuitive elements, optimizing UX, and ensuring seamless functionality across various platforms.',
   },
]
