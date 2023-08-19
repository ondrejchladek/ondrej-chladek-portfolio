'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
   const form = useRef<HTMLFormElement>(null);
   const [message, setMessage] = React.useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   if (!form.current) {
      return;
  }
    emailjs.sendForm('service_9zhe3nd', 'template_245fkus', form.current, '88gi5waSnLISSIjZZ')
      .then((result) => {
         console.log(result.text)
         setMessage("Email was successfully sent!")
         form.current!.reset()
      }, (error) => {
          console.log(error.text)
          setMessage("Failed to send email. Please try again later.")
      })
   
  }
   return (
      <section className="container mx-auto mt-12 md:mt-12 lg:mt-14 xl:mt-16 pt-5 lg:pb-6">
         <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-base-content text-center">
            Get In Touch
         </h2>
         <p className="text-base text-base-content/60 mt-4 md:max-w-[438px] w-full mx-auto text-center">
         Whether you have a project to develop or simply fancy connnecting over a shared love for development, donˇt hesitate to reach out.
         </p>
         <div className="flex flex-wrap md:flex-nowrap lg:grid lg:grid-cols-7 md:gap-6 mt-12">
            <div className="lg:col-span-5 bg-base-100 p-6 lg:p-10 rounded-xl w-full">
               <h3 className="text-xl font-bold pb-6">Leave a Message</h3>
               <form ref={form} onSubmit={sendEmail}>
                  <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
                     <div className="w-full">
                        <p className="text-sm text-base-content/80 pb-2">
                           Name
                        </p>
                        <input
                           type="text" name="user_name" className="w-full bg-base-200 rounded-lg outline-none px-4 h-12"
                        />
                     </div>
                     <div className="w-full">
                        <p className="text-sm text-base-content/80 pb-2">
                           E-mail
                        </p>
                        <input
                           type="email" name="user_email" className="w-full bg-base-200 rounded-lg outline-none px-4 h-12"
                        />
                     </div>
                  </div>
                  <div className="w-full py-5">
                     <p className="text-sm text-base-content/80 pb-2">
                        Subject
                     </p>
                     <input
                        type="text" name="subject" className="w-full bg-base-200 rounded-lg outline-none px-4 h-12"
                     />
                  </div>
                  <div className="w-full">
                     <p className="text-sm text-base-content/80 pb-2">
                        Messages
                     </p>
                     <textarea name="message" className="w-full bg-base-200 rounded-lg outline-none p-5 h-36 lg:h-52" />
                  </div>
                  <button
                     type="submit" value="Send"
                     className="rounded-lg btn btn-primary text-base font-medium text-primary-content px-5 py-3 mt-6"
                  >
                     Send Message
                  </button>
                  {message && <p className="inline-block mx-3 text-base text-base-content/60 mt-4">{message}</p>}
               </form>
            </div>
            <div className="lg:col-span-2 space-y-6 mt-6 md:mt-0 w-full">
               {/* box 1 */}
               <div className="rounded-xl bg-base-100 p-3 lg:p-6 w-full">
                  <div className="flex items-center justify-center bg-primary rounded-full w-10 h-10 mx-auto p-3 mb-6">
                     <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M0.666626 3.1665L6.49996 0.666504L11.5 3.1665L16.7525 0.915671C16.8159 0.88849 16.885 0.877478 16.9537 0.883623C17.0224 0.889767 17.0886 0.912876 17.1461 0.950875C17.2037 0.988874 17.251 1.04057 17.2836 1.10134C17.3163 1.1621 17.3334 1.23002 17.3333 1.299V14.8332L11.5 17.3332L6.49996 14.8332L1.24746 17.084C1.18405 17.1112 1.11489 17.1222 1.04618 17.1161C0.977469 17.1099 0.911359 17.0868 0.853782 17.0488C0.796205 17.0108 0.748964 16.9591 0.716298 16.8983C0.683633 16.8376 0.666565 16.7697 0.666626 16.7007V3.1665ZM11.5 15.4698V4.97984L11.4458 5.00317L6.49996 2.52984V13.0198L6.55413 12.9965L11.5 15.4698Z"
                           fill="#131313"
                        />
                     </svg>
                  </div>
                  <div className="space-y-3">
                     <div className="flex items-center justify-between">
                        <p className="text-sm text-base-content">Country:</p>
                        <span className="text-sm text-base-content/60">
                           Czech Republic
                        </span>
                     </div>
                     <div className="flex items-center justify-between">
                        <p className="text-sm text-base-content">Region:</p>
                        <span className="text-sm text-base-content/60">
                           Plzeňský kraj
                        </span>
                     </div>
                     <div className="flex items-center justify-between">
                        <p className="text-sm text-base-content">City:</p>
                        <span className="text-sm text-base-content/60">
                           Klatovy
                        </span>
                     </div>
                     <div className="flex items-center justify-between">
                        <p className="text-sm text-base-content">Street:</p>
                        <span className="text-sm text-base-content/60">
                           Vídeňská 1
                        </span>
                     </div>
                  </div>
               </div>
               {/* box 2 */}
               <div className="rounded-xl bg-base-100 p-3 lg:p-6 w-full">
                  <div className="flex items-center justify-center bg-primary rounded-full w-10 h-10 mx-auto p-3 mb-6">
                     <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M1.49996 0.5H16.5C16.721 0.5 16.9329 0.587797 17.0892 0.744078C17.2455 0.900358 17.3333 1.11232 17.3333 1.33333V14.6667C17.3333 14.8877 17.2455 15.0996 17.0892 15.2559C16.9329 15.4122 16.721 15.5 16.5 15.5H1.49996C1.27895 15.5 1.06698 15.4122 0.910704 15.2559C0.754423 15.0996 0.666626 14.8877 0.666626 14.6667V1.33333C0.666626 1.11232 0.754423 0.900358 0.910704 0.744078C1.06698 0.587797 1.27895 0.5 1.49996 0.5ZM9.04996 7.73583L3.70663 3.19833L2.62746 4.46833L9.06079 9.93083L15.3783 4.46417L14.2883 3.20333L9.05079 7.73583H9.04996Z"
                           fill="#131313"
                        />
                     </svg>
                  </div>
                  <div className="space-y-3">
                     <div className="flex items-center justify-between">
                        <p className="text-sm text-base-content">E-mail:</p>
                        <a
                  href="mailto: ondrejchladek@gmail.com"
                  className="text-sm text-base-content/60 hover:text-primary hover:duration-300 transition underl"
               >
                  ondrejchladek@gmail.com
               </a>
                     </div>
                     <div className="flex items-center justify-between">
                        <p className="text-sm text-base-content">Whatsapp:</p>
                        <a href="https://wa.me/420723513978"
                  className="text-sm text-base-content/60 hover:text-primary hover:duration-300 transition underl"
               >
                  +420 723 513 978
               </a>
                     </div>
                     <div className="flex items-center justify-between">
                        <p className="text-sm text-base-content">Telegram:</p>
                        <a
                  href="https://t.me/+420723513978"
                  className="text-sm text-base-content/60 hover:text-primary hover:duration-300 transition underl"
               >
                  @ondrejchladek
               </a>
                     </div>
                  </div>
               </div>
               {/* box 3 */}
               <div className="rounded-xl bg-base-100 p-3 lg:p-6 w-full">
                  <div className="flex items-center justify-center bg-primary rounded-full w-10 h-10 mx-auto p-3 mb-6">
                     <svg
                        className="text-primary-content"
                        width="12"
                        height="18"
                        viewBox="0 0 12 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M0.999959 0.666504H11C11.221 0.666504 11.4329 0.754301 11.5892 0.910582C11.7455 1.06686 11.8333 1.27882 11.8333 1.49984V16.4998C11.8333 16.7208 11.7455 16.9328 11.5892 17.0891C11.4329 17.2454 11.221 17.3332 11 17.3332H0.999959C0.778946 17.3332 0.566984 17.2454 0.410704 17.0891C0.254424 16.9328 0.166626 16.7208 0.166626 16.4998V1.49984C0.166626 1.27882 0.254424 1.06686 0.410704 0.910582C0.566984 0.754301 0.778946 0.666504 0.999959 0.666504ZM5.99996 13.1665C5.77895 13.1665 5.56698 13.2543 5.4107 13.4106C5.25442 13.5669 5.16663 13.7788 5.16663 13.9998C5.16663 14.2209 5.25442 14.4328 5.4107 14.5891C5.56698 14.7454 5.77895 14.8332 5.99996 14.8332C6.22097 14.8332 6.43293 14.7454 6.58922 14.5891C6.7455 14.4328 6.83329 14.2209 6.83329 13.9998C6.83329 13.7788 6.7455 13.5669 6.58922 13.4106C6.43293 13.2543 6.22097 13.1665 5.99996 13.1665Z"
                           fill="currentColor"
                        />
                     </svg>
                  </div>
                  <div className="space-y-3">
                     <div className="flex items-center justify-between">
                        <p className="text-sm text-base-content">Support:</p>
                        <span className="text-sm text-base-content/60">
                           Mon-Fri 11am-3pm
                        </span>
                     </div>
                     <div className="flex items-center justify-between">
                        <p className="text-sm text-base-content">Phone:</p>
                        <a href="tel:+420723513978"
                  className="text-sm text-base-content/60 hover:text-primary hover:duration-300 transition underl"
               >
                  +420 723 513 978
               </a>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactUs
