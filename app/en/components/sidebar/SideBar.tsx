import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
   return (
      <div className="rounded-xl p-6">
         <div className="w-fit mx-auto relative">
            <Image
               className="rounded-full"
               src="/Profile.jpg"
               width={100}
               height={100}
               alt="user"
            />
            <svg
               className="absolute bottom-0 right-0"
               width="25"
               height="24"
               viewBox="0 0 25 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <circle
                  cx="12.9668"
                  cy="12"
                  r="10"
                  fill="#F78F42"
                  stroke="#151B2F"
                  strokeWidth="4"
               />
            </svg>
         </div>
         <h3 className="text-base-content text-[1.5rem] font-semibold text-center mt-7">
            Ondřej Chládek
         </h3>
         <p className="text-xs font-medium bg-primary/10 text-primary rounded-3xl px-3 w-fit mt-3 mx-auto py-1">
            Full Stack Developer
         </p>
         {/* social link  */}
         <div className="flex items-center justify-between bg-base-100 rounded-lg px-10 py-2 mt-5">
            {Icons.map((item, index) => (
               <Link href={item.link} target="_blank" key={index}>
                  {item.icon}
               </Link>
            ))}
         </div>
         {/* info  */}
         <div className="border-b border-base-content/10 py-6 space-y-1.5">
            <div className="flex items-center justify-between">
               <p className="text-sm text-base-content">IČ:</p>
               <span className="text-sm text-base-content/60">
                  02407604
               </span>
            </div>
            <div className="flex items-center justify-between">
               <p className="text-sm text-base-content">E-Mail:</p>
               <a
                  href="mailto: ondrejchladek@gmail.com"
                  className="text-sm text-base-content/60 hover:text-primary hover:duration-300 transition underl"
               >
                  ondrejchladek@gmail.com
               </a>
            </div>
            <div className="flex items-center justify-between">
               <p className="text-sm text-base-content">Phone:</p>
               <a
                  href="tel:+420723513978"
                  className="text-sm text-base-content/60 hover:text-primary hover:duration-300 transition underl"
               >
                  +420 723 513 978
               </a>
            </div>
            {content.map((item, index) => (
               <div key={index} className="flex items-center justify-between">
                  <p className="text-sm text-base-content">{item?.title}</p>
                  <span className="text-sm text-base-content/60">
                     {item?.value}
                  </span>
               </div>
            ))}
         </div>
         {/* Major Skill */}
         <div className="border-b border-base-content/10 py-6">
            <p className="text-base text-base-content">Major Skills</p>
            <div className="space-y-3 mt-5">
               {majorSkill.map((item, index) => (
                  <div key={index}>
                     <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-base-content">
                           {item?.name}
                        </p>
                        <span className="text-xs text-base-content/60">
                           {item?.value}
                        </span>
                     </div>
                     <div className="w-full h-1 bg-base-content/10 rounded-md relative mt-1">
                        <div
                           style={{
                              width: `${item?.value}`,
                           }}
                           className="rounded-md absolute bg-primary h-1"
                        ></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {/* extra skills */}
         <div className="border-b border-base-content/10 py-6">
            <p className="text-base text-base-content">Extra Skills</p>
            <div className="flex flex-wrap gap-2 mt-5">
               {extraSkills.map((item, index) => (
                  <p
                     key={index}
                     className="text-xs font-medium text-base-content/60 px-2 py-0.5 bg-base-100 rounded-md hover:bg-primary hover:text-primary-content transition hover:duration-300 cursor-pointer"
                  >
                     {item.value}
                  </p>
               ))}
            </div>
         </div>
         {/* download button  
         <Link
            href={'./Ondrej-Chladek-CV.pdf'}
            className="flex items-center justify-center gap-8 text-base font-medium text-primary-content btn btn-primary rounded-lg py-3 text-center w-full"
         >
            Download My CV
            <svg
               width="20"
               height="18"
               viewBox="0 0 20 18"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M4.5446 3.86191C5.29892 2.00533 7.18582 0.25 10 0.25C13.0271 0.25 15.6073 2.30807 16.176 5.63916C16.9468 5.73362 17.7738 5.96302 18.4651 6.40228C19.3443 6.96095 20 7.8637 20 9.17188C20 10.4372 19.461 11.3731 18.5746 11.965C17.724 12.5329 16.6079 12.75 15.4688 12.75H12.5C12.1548 12.75 11.875 12.4702 11.875 12.125C11.875 11.7798 12.1548 11.5 12.5 11.5H15.4688C16.4781 11.5 17.3151 11.3029 17.8805 10.9254C18.4101 10.5718 18.75 10.0311 18.75 9.17188C18.75 8.35544 18.3706 7.82323 17.7947 7.4573C17.1897 7.07287 16.37 6.88142 15.5941 6.84298C15.2862 6.82773 15.0354 6.5903 15.0034 6.28372C14.6885 3.27087 12.5231 1.5 10 1.5C7.61751 1.5 6.09426 3.07172 5.59516 4.62833C5.51883 4.86638 5.30798 5.03606 5.05911 5.0597C3.96283 5.16385 2.99657 5.48784 2.31922 6.0189C1.66382 6.53275 1.25 7.25934 1.25 8.28125C1.25 9.30134 1.68166 10.0823 2.3838 10.6242C3.10102 11.1776 4.12944 11.5 5.3125 11.5H7.5C7.84518 11.5 8.125 11.7798 8.125 12.125C8.125 12.4702 7.84518 12.75 7.5 12.75H5.3125C3.91744 12.75 2.60211 12.3716 1.62011 11.6137C0.623029 10.8443 0 9.70335 0 8.28125C0 6.86097 0.601806 5.77701 1.54797 5.0352C2.37401 4.38756 3.43734 4.01778 4.5446 3.86191Z"
                  fill="#131313"
               />
               <path
                  d="M7.05771 14.1873C7.3016 13.943 7.69733 13.9427 7.9416 14.1866L9.375 15.6178V7.75C9.375 7.40482 9.65482 7.125 10 7.125C10.3452 7.125 10.625 7.40482 10.625 7.75V15.6178L12.0584 14.1866C12.3027 13.9427 12.6984 13.943 12.9423 14.1873C13.1862 14.4316 13.1859 14.8273 12.9416 15.0712L10.4416 17.5673C10.1976 17.8109 9.8024 17.8109 9.5584 17.5673L7.0584 15.0712C6.81414 14.8273 6.81383 14.4316 7.05771 14.1873Z"
                  fill="#131313"
               />
               <path
                  d="M4.5446 3.86191C5.29892 2.00533 7.18582 0.25 10 0.25C13.0271 0.25 15.6073 2.30807 16.176 5.63916C16.9468 5.73362 17.7738 5.96302 18.4651 6.40228C19.3443 6.96095 20 7.8637 20 9.17188C20 10.4372 19.461 11.3731 18.5746 11.965C17.724 12.5329 16.6079 12.75 15.4688 12.75H12.5C12.1548 12.75 11.875 12.4702 11.875 12.125C11.875 11.7798 12.1548 11.5 12.5 11.5H15.4688C16.4781 11.5 17.3151 11.3029 17.8805 10.9254C18.4101 10.5718 18.75 10.0311 18.75 9.17188C18.75 8.35544 18.3706 7.82323 17.7947 7.4573C17.1897 7.07287 16.37 6.88142 15.5941 6.84298C15.2862 6.82773 15.0354 6.5903 15.0034 6.28372C14.6885 3.27087 12.5231 1.5 10 1.5C7.61751 1.5 6.09426 3.07172 5.59516 4.62833C5.51883 4.86638 5.30798 5.03606 5.05911 5.0597C3.96283 5.16385 2.99657 5.48784 2.31922 6.0189C1.66382 6.53275 1.25 7.25934 1.25 8.28125C1.25 9.30134 1.68166 10.0823 2.3838 10.6242C3.10102 11.1776 4.12944 11.5 5.3125 11.5H7.5C7.84518 11.5 8.125 11.7798 8.125 12.125C8.125 12.4702 7.84518 12.75 7.5 12.75H5.3125C3.91744 12.75 2.60211 12.3716 1.62011 11.6137C0.623029 10.8443 0 9.70335 0 8.28125C0 6.86097 0.601806 5.77701 1.54797 5.0352C2.37401 4.38756 3.43734 4.01778 4.5446 3.86191Z"
                  stroke="#131313"
               />
               <path
                  d="M7.05771 14.1873C7.3016 13.943 7.69733 13.9427 7.9416 14.1866L9.375 15.6178V7.75C9.375 7.40482 9.65482 7.125 10 7.125C10.3452 7.125 10.625 7.40482 10.625 7.75V15.6178L12.0584 14.1866C12.3027 13.9427 12.6984 13.943 12.9423 14.1873C13.1862 14.4316 13.1859 14.8273 12.9416 15.0712L10.4416 17.5673C10.1976 17.8109 9.8024 17.8109 9.5584 17.5673L7.0584 15.0712C6.81414 14.8273 6.81383 14.4316 7.05771 14.1873Z"
                  stroke="#131313"
               />
            </svg>
         </Link>
         */}
      </div>
   )
}

export default SideBar

const majorSkill = [
   {
      name: 'HTML',
      value: '95%',
   },
   {
      name: 'CSS',
      value: '88%',
   },
   {
      name: 'React',
      value: '82%',
   },
   {
      name: 'JavaScript',
      value: '85%',
   },
   {
      name: 'UI Design',
      value: '77%',
   }
]

const extraSkills = [
   {
      value: 'PHP',
   },
   {
      value: 'Node.js',
   },
   {
      value: 'TypeScript',
   },
   {
      value: 'Next.js',
   },
   {
      value: 'MongoDB',
   },
   {
      value: 'Git',
   },
   {
      value: 'Bootstrap',
   },
   {
      value: 'Tailwind',
   },
   {
      value: 'Express.js',
   },
]

const content = [
   {
      title: 'City:',
      value: 'Klatovy/Prague, CZ',
   },
   {
      title: 'Language:',
      value: 'English (B2), Czech',
   },
   {
      title: 'Freelance:',
      value: 'Available',
   },
]

const Icons = [
   {
      link: 'https://www.facebook.com/ochladek/',
      icon: (
         <svg
            className="text-base-content/50 hover:text-primary transition hover:duration-300"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M5.33335 8.00001H7.00002L7.66669 5.33334H5.33335V4.00001C5.33335 3.31334 5.33335 2.66668 6.66669 2.66668H7.66669V0.426677C7.44935 0.39801 6.62869 0.333344 5.76202 0.333344C3.95202 0.333344 2.66669 1.43801 2.66669 3.46668V5.33334H0.666687V8.00001H2.66669V13.6667H5.33335V8.00001Z"
               fill="currentColor"
            />
         </svg>
      ),
   },
   {
      link: 'https://twitter.com/OndrejChladek',
      icon: (
         <svg
            className="text-base-content/50 hover:text-primary transition hover:duration-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g clipPath="url(#clip0_5628_238)">
               <path
                  d="M14.7747 3.77068C14.2657 3.99581 13.726 4.14366 13.1734 4.20935C13.7559 3.86097 14.1918 3.31269 14.4 2.66668C13.8534 2.99201 13.254 3.22001 12.6294 3.34335C12.2098 2.8944 11.6536 2.59665 11.0473 2.4964C10.4411 2.39615 9.81866 2.49901 9.27688 2.78898C8.7351 3.07896 8.30429 3.5398 8.05145 4.09987C7.7986 4.65995 7.73787 5.28787 7.8787 5.88601C6.77011 5.83045 5.68559 5.54236 4.69556 5.04045C3.70553 4.53855 2.83212 3.83404 2.13204 2.97268C1.88423 3.39831 1.75401 3.88216 1.7547 4.37468C1.7547 5.34135 2.2467 6.19535 2.9947 6.69535C2.55204 6.68141 2.11912 6.56187 1.73204 6.34668V6.38135C1.73217 7.02515 1.95495 7.64909 2.3626 8.14739C2.77025 8.64568 3.33769 8.98766 3.9687 9.11535C3.55778 9.2267 3.12691 9.24312 2.7087 9.16335C2.88661 9.7175 3.23337 10.2021 3.70043 10.5494C4.16749 10.8967 4.73145 11.0892 5.31337 11.1C4.73502 11.5542 4.07282 11.89 3.36462 12.0881C2.65642 12.2863 1.91612 12.3428 1.18604 12.2547C2.4605 13.0743 3.9441 13.5094 5.45937 13.508C10.588 13.508 13.3927 9.25935 13.3927 5.57468C13.3927 5.45468 13.3894 5.33335 13.384 5.21468C13.9299 4.82012 14.4011 4.33136 14.7754 3.77135L14.7747 3.77068Z"
                  fill="currentColor"
               />
            </g>
            <defs>
               <clipPath id="clip0_5628_238">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
   {
      link: 'https://www.linkedin.com/in/ond%C5%99ej-chl%C3%A1dek-229641181/',
      icon: (
         <svg
            className="text-base-content hover:text-primary transition hover:duration-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.5">
               <g clipPath="url(#clip0_5402_824)">
                  <path
                     d="M4.62669 3.33333C4.62651 3.68695 4.48587 4.02602 4.23569 4.27594C3.98552 4.52587 3.64631 4.66617 3.29269 4.666C2.93907 4.66582 2.6 4.52517 2.35007 4.275C2.10015 4.02483 1.95985 3.68562 1.96002 3.332C1.9602 2.97837 2.10084 2.63931 2.35102 2.38938C2.60119 2.13946 2.9404 1.99915 3.29402 1.99933C3.64764 1.99951 3.98671 2.14015 4.23664 2.39032C4.48656 2.6405 4.62687 2.97971 4.62669 3.33333ZM4.66669 5.65333H2.00002V14H4.66669V5.65333ZM8.88002 5.65333H6.22669V14H8.85336V9.62C8.85336 7.18 12.0334 6.95333 12.0334 9.62V14H14.6667V8.71333C14.6667 4.6 9.96002 4.75333 8.85336 6.77333L8.88002 5.65333Z"
                     fill="currentColor"
                  />
               </g>
            </g>
            <defs>
               <clipPath id="clip0_5402_824">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
   {
      link: 'https://www.ondrejchladek.cz/',
      icon: (
         <svg
            className="text-base-content hover:text-primary transition hover:duration-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g opacity="0.5">
               <g clipPath="url(#clip0_5402_826)">
                  <path
                     d="M13.326 7.71468C13.2713 6.66529 12.9064 5.65575 12.2773 4.81401C12.0857 5.02043 11.8808 5.21417 11.664 5.39401C10.9979 5.94724 10.2536 6.3988 9.45531 6.73401C9.56665 6.96734 9.66865 7.19334 9.75865 7.40668V7.40868C9.78404 7.46829 9.80849 7.52829 9.83198 7.58868C10.8413 7.47534 11.9053 7.51668 12.9366 7.65601C13.074 7.67468 13.2033 7.69468 13.326 7.71468V7.71468ZM7.06931 2.74801C7.719 3.66346 8.31812 4.61377 8.86398 5.59468C9.67931 5.27334 10.3533 4.86801 10.896 4.41668C11.0843 4.26143 11.2617 4.09325 11.4266 3.91334C10.4673 3.10649 9.25352 2.6649 7.99998 2.66668C7.688 2.66646 7.3766 2.69345 7.06931 2.74734V2.74801ZM2.83531 6.66468C3.28946 6.65322 3.74308 6.62587 4.19531 6.58268C5.28841 6.48491 6.37216 6.30168 7.43665 6.03468C6.88032 5.06815 6.27968 4.12782 5.63665 3.21668C4.94979 3.55694 4.34415 4.04095 3.86081 4.63587C3.37747 5.23079 3.02773 5.9227 2.83531 6.66468ZM3.85531 11.3567C4.11398 10.9787 4.45398 10.5533 4.90531 10.0907C5.87465 9.09734 7.01865 8.32401 8.34265 7.89734L8.38398 7.88534C8.27398 7.64268 8.17065 7.42601 8.06665 7.22201C6.84265 7.57868 5.55331 7.80134 4.26865 7.91668C3.64198 7.97334 3.07998 7.99801 2.66665 8.00201C2.66547 9.22374 3.08551 10.4085 3.85598 11.3567H3.85531ZM10.0033 12.9433C9.74622 11.6468 9.38232 10.3738 8.91531 9.13734C7.58065 9.62201 6.51731 10.3307 5.69531 11.176C5.36358 11.5109 5.06919 11.8809 4.81731 12.2793C5.73652 12.9652 6.8531 13.335 7.99998 13.3333C8.68659 13.3343 9.36689 13.2023 10.0033 12.9447V12.9433ZM11.252 12.2267C12.2928 11.4265 13.0019 10.2705 13.2433 8.98001C13.0166 8.92334 12.7293 8.86668 12.4133 8.82268C11.7107 8.7215 10.9978 8.71411 10.2933 8.80068C10.69 9.9199 11.0103 11.0647 11.252 12.2273V12.2267ZM7.99998 14.6667C4.31798 14.6667 1.33331 11.682 1.33331 8.00001C1.33331 4.31801 4.31798 1.33334 7.99998 1.33334C11.682 1.33334 14.6666 4.31801 14.6666 8.00001C14.6666 11.682 11.682 14.6667 7.99998 14.6667Z"
                     fill="currentColor"
                  />
               </g>
            </g>
            <defs>
               <clipPath id="clip0_5402_826">
                  <rect width="16" height="16" fill="white" />
               </clipPath>
            </defs>
         </svg>
      ),
   },
]
