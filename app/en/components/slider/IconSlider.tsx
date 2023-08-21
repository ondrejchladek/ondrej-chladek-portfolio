'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

const IconSlider = () => {
   const settings = {
      initialSlide: 1,
      cssEase: 'linear',
      autoplay: true,
      speed: 3000,
      className: 'center',
      arrows: false,
      dots: false,
      centerMode: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 960,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 704,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            },
         },
      ],
   }
   return (
      <div className="py-[0.85rem] px-10 bg-[url('/bg.png')] bg-no-repeat bg-cover bg-base-100 rounded-xl">
         <Slider {...settings}>
            {IconData.map((item, index) => (
               <div key={index} className="flexmid">
               <div className="flex items-center justify-center">
                  {item.icon}
               </div></div>
            ))}
         </Slider>
      </div>
   )
}

export default IconSlider

const IconData = [
   {
      id: 1,
      icon: <Image src="/1.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 2,
      icon: <Image src="/2.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 3,
      icon: <Image src="/3.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 4,
      icon: <Image src="/4.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 5,
      icon: <Image src="/5.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 6,
      icon: <Image src="/6.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 7,
      icon: <Image src="/7.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 8,
      icon: <Image src="/8.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 9,
      icon: <Image src="/9.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 10,
      icon: <Image src="/10.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 11,
      icon: <Image src="/11.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 12,
      icon: <Image src="/12.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 13,
      icon: <Image src="/13.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 14,
      icon: <Image src="/14.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 15,
      icon: <Image src="/15.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
   {
      id: 16,
      icon: <Image src="/16.png" width={100} height={60} alt="Logo" className="w-4/5 opacity-45" />,
   },
]
