import React from 'react'

interface SubtitleProps {
   title: string
   description: string
}

const Subtitle = ({ title, description }: SubtitleProps) => {
   return (
      <>
         <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] text-base-content font-bold text-center">
            {title}
         </h2>
         <p className="md:max-w-[592px] text-center text-base text-base-content/60 mx-auto mt-4">
            {description}
         </p>
      </>
   )
}

export default Subtitle
