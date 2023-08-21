import { Fragment } from 'react'
import { Metadata } from 'next'
import Banner from './components/banner/Banner'
import ContactUs from './components/contact-us/ContactUs'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import PortfolioCards from './components/portfolioCard/PortfolioCards'
import BlogSlider from './components/slider/BlogSlider'
import TestimonialSlider from './components/slider/TestimonialSlider'
import FlipCardWithHover from './components/flipCard/FlipCardWithHover'
import SmallSubtitle from './components/subtitle/SmallSubtitle'

export const metadata: Metadata = {
   title: 'Ondřej Chládek | Full Stack Developer',
   description:
      'Website and Web App Development', 
}

export default function Home() {
   return (
      <Fragment>
         <div id="home" className="pt-7 -mt-[1.75rem]" >
            <Banner />
            <div id="service" className="mt-12 md:mt-12 lg:mt-14 xl:mt-14 pt-5">
               <div className="mb-10 xl:mb-12">
                  <SmallSubtitle
                     title="Moje služby"
                     description="Poskytuji komplexní vývojářské služby, zahrnující programování front-end i back-end částí webových a mobilních aplikací včetně návrhu samotné aplikace a vhodného UI/UX designu. Pracuji s nejmodernějšími technologiemi, jako jsou React, Node.js, Next.js a TypeScript."
                  />
                  {/* FlipCard section  */}
                  <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                     {[
                        {
                           id: 1, title: "Full stack development", data: [{
                              id: 1,
                              title: 'Front-end a back-end technologie, SSR, serverless architektura, nativní aplikace',
                           },
                           {
                              id: 2,
                              title: 'Technologie React, Node.js, Next.js, React Query a MongoDB',
                           },
                           {
                              id: 3,
                              title: 'Responzivní a efektivní webové aplikace',
                           }],
                           svg:<svg
                           width="32"
                           height="32"
                           viewBox="0 0 32 32"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M32 7.5625V2.875C32 1.32419 30.7383 0.0625 29.1875 0.0625H2.8125C1.26169 0.0625 0 1.32419 0 2.875V7.5625H32ZM21.625 3.8125H27.25C27.7677 3.8125 28.1875 4.23225 28.1875 4.75C28.1875 5.26775 27.7677 5.6875 27.25 5.6875H21.625C21.1073 5.6875 20.6875 5.26775 20.6875 4.75C20.6875 4.23225 21.1073 3.8125 21.625 3.8125ZM12.25 3.8125C12.7677 3.8125 13.1875 4.23225 13.1875 4.75C13.1875 5.26775 12.7677 5.6875 12.25 5.6875C11.7323 5.6875 11.3125 5.26775 11.3125 4.75C11.3125 4.23225 11.7323 3.8125 12.25 3.8125ZM8.5 3.8125C9.01775 3.8125 9.4375 4.23225 9.4375 4.75C9.4375 5.26775 9.01775 5.6875 8.5 5.6875C7.98225 5.6875 7.5625 5.26775 7.5625 4.75C7.5625 4.23225 7.98225 3.8125 8.5 3.8125ZM4.75 3.8125C5.26775 3.8125 5.6875 4.23225 5.6875 4.75C5.6875 5.26775 5.26775 5.6875 4.75 5.6875C4.23225 5.6875 3.8125 5.26775 3.8125 4.75C3.8125 4.23225 4.23225 3.8125 4.75 3.8125ZM0 9.4375V29.125C0 30.6758 1.26169 31.9375 2.8125 31.9375H29.1875C30.7383 31.9375 32 30.6758 32 29.125V9.4375H0ZM10.9606 22.7679C11.365 23.0914 11.4305 23.6813 11.1071 24.0856C10.7837 24.4899 10.1936 24.5555 9.78938 24.232L5.10187 20.482C4.63319 20.1072 4.63287 19.393 5.10187 19.0179L9.78938 15.2679C10.1935 14.9444 10.7836 15.0099 11.1071 15.4143C11.4305 15.8186 11.365 16.4086 10.9606 16.7319L7.18825 19.75L10.9606 22.7679ZM19.6742 13.5568L14.0492 26.6818C13.8453 27.1576 13.2943 27.3783 12.8182 27.1742C12.3423 26.9702 12.1218 26.4191 12.3258 25.9432L17.9508 12.8182C18.1548 12.3423 18.7059 12.1219 19.1818 12.3258C19.6577 12.5297 19.8782 13.0809 19.6742 13.5568ZM26.8981 20.4821L22.2106 24.2321C21.807 24.5551 21.2169 24.4906 20.8929 24.0857C20.5695 23.6814 20.635 23.0914 21.0394 22.768L24.8118 19.75L21.0394 16.7321C20.635 16.4086 20.5695 15.8187 20.8929 15.4144C21.2163 15.0101 21.8063 14.9445 22.2106 15.268L26.8981 19.018C27.3668 19.3928 27.3671 20.1069 26.8981 20.4821Z"
                              fill="currentColor"
                           />
                        </svg>,
                        },
                        {
                           id: 2, title: "UI/UX design", data: [{
                              id: 1,
                              title: 'Uživatelsko-centrický návrh designu',
                           },
                           {
                              id: 2,
                              title: 'Vyvážení vizuální stránky a funkcionality',
                           },
                           {
                              id: 3,
                              title: 'Směrování chování uživatele prostřednictvím strategického designu',
                           }],
                           svg:<svg
                           width="32"
                           height="30"
                           viewBox="0 0 32 30"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M18.485 13.143C18.7123 13.0065 18.9845 12.9658 19.2418 13.0299C19.4991 13.094 19.7204 13.2577 19.857 13.485L22 17.056L24.143 13.486C24.2842 13.2691 24.504 13.1154 24.7563 13.0572C25.0085 12.999 25.2734 13.0409 25.4954 13.174C25.7174 13.3071 25.8791 13.5211 25.9465 13.771C26.014 14.021 25.9819 14.2873 25.857 14.514L23.167 19L25.857 23.486C25.9935 23.7134 26.034 23.9857 25.9697 24.243C25.9053 24.5003 25.7414 24.7215 25.514 24.858C25.2866 24.9945 25.0143 25.035 24.757 24.9706C24.4997 24.9063 24.2785 24.7424 24.142 24.515L22 20.944L19.857 24.514C19.7177 24.7351 19.4973 24.8929 19.2431 24.9536C18.9889 25.0142 18.721 24.9729 18.4968 24.8386C18.2727 24.7042 18.11 24.4874 18.0437 24.2346C17.9774 23.9818 18.0127 23.7131 18.142 23.486L20.834 19L18.142 14.515C18.0744 14.4024 18.0297 14.2776 18.0104 14.1477C17.9911 14.0178 17.9975 13.8854 18.0293 13.758C18.0612 13.6306 18.1178 13.5107 18.196 13.4052C18.2742 13.2996 18.3724 13.2106 18.485 13.143ZM7 13C7.26522 13 7.51957 13.1054 7.70711 13.2929C7.89464 13.4804 8 13.7348 8 14V20C8 20.394 8.0776 20.7841 8.22836 21.1481C8.37913 21.512 8.6001 21.8427 8.87868 22.1213C9.15725 22.3999 9.48797 22.6209 9.85195 22.7716C10.2159 22.9224 10.606 23 11 23C11.394 23 11.7841 22.9224 12.1481 22.7716C12.512 22.6209 12.8427 22.3999 13.1213 22.1213C13.3999 21.8427 13.6209 21.512 13.7716 21.1481C13.9224 20.7841 14 20.394 14 20V14C14 13.7348 14.1054 13.4804 14.2929 13.2929C14.4804 13.1054 14.7348 13 15 13C15.2652 13 15.5196 13.1054 15.7071 13.2929C15.8946 13.4804 16 13.7348 16 14V20C16 21.3261 15.4732 22.5979 14.5355 23.5355C13.5979 24.4732 12.3261 25 11 25C9.67392 25 8.40215 24.4732 7.46447 23.5355C6.52678 22.5979 6 21.3261 6 20V14C6 13.7348 6.10536 13.4804 6.29289 13.2929C6.48043 13.1054 6.73478 13 7 13Z"
                              fill="currentColor"
                           />
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 2.98C0.00528131 2.18782 0.323682 1.42989 0.88572 0.871597C1.44776 0.313306 2.2078 -1.76038e-05 3 7.41814e-10H29C29.7956 7.41814e-10 30.5587 0.31607 31.1213 0.87868C31.6839 1.44129 32 2.20435 32 3V27C32 27.7956 31.6839 28.5587 31.1213 29.1213C30.5587 29.6839 29.7956 30 29 30H3C2.20435 30 1.44129 29.6839 0.87868 29.1213C0.31607 28.5587 0 27.7956 0 27L0 3V2.98ZM2 10V27C2 27.2652 2.10536 27.5196 2.29289 27.7071C2.48043 27.8946 2.73478 28 3 28H29C29.2652 28 29.5196 27.8946 29.7071 27.7071C29.8946 27.5196 30 27.2652 30 27V10H2ZM6 5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6C4.73478 6 4.48043 5.89464 4.29289 5.70711C4.10536 5.51957 4 5.26522 4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5ZM8 6C8.26522 6 8.51957 5.89464 8.70711 5.70711C8.89464 5.51957 9 5.26522 9 5C9 4.73478 8.89464 4.48043 8.70711 4.29289C8.51957 4.10536 8.26522 4 8 4C7.73478 4 7.48043 4.10536 7.29289 4.29289C7.10536 4.48043 7 4.73478 7 5C7 5.26522 7.10536 5.51957 7.29289 5.70711C7.48043 5.89464 7.73478 6 8 6ZM12 5C12 5.26522 11.8946 5.51957 11.7071 5.70711C11.5196 5.89464 11.2652 6 11 6C10.7348 6 10.4804 5.89464 10.2929 5.70711C10.1054 5.51957 10 5.26522 10 5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4C11.2652 4 11.5196 4.10536 11.7071 4.29289C11.8946 4.48043 12 4.73478 12 5Z"
                              fill="currentColor"
                           />
                        </svg>,
                        },
                        {
                           id: 3, title: "Vývoj webových aplikací", data: [{
                              id: 1,
                              title: 'Od analýzy potřeb a návrh konceptu aplikace po její spuštění',
                           },
                           {
                              id: 2,
                              title: 'Výběr vhodné technologie, návrh funkcinalit a UI/UX',
                           },
                           {
                              id: 3,
                              title: 'Funkčnost aplikace napříč platformami',
                           }],
                           svg:<svg
                           width="28"
                           height="28"
                           viewBox="0 0 28 28"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V25C0 25.7956 0.316071 26.5587 0.87868 27.1213C1.44129 27.6839 2.20435 28 3 28H15C15.7956 28 16.5587 27.6839 17.1213 27.1213C17.6839 26.5587 18 25.7956 18 25V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM17 24.5C17 25.878 15.879 27 14.5 27H3.5C2.8372 26.9992 2.20178 26.7356 1.73311 26.2669C1.26444 25.7982 1.00079 25.1628 1 24.5V3.5C1 2.122 2.122 1 3.5 1H14.5C15.879 1 17 2.122 17 3.5V24.5Z"
                              fill="currentColor"
                           />
                           <path
                              d="M14.5 2H11C11 2.53043 10.7893 3.03914 10.4142 3.41421C10.0391 3.78929 9.53043 4 9 4C8.46957 4 7.96086 3.78929 7.58579 3.41421C7.21071 3.03914 7 2.53043 7 2H3.5C2.673 2 2 2.673 2 3.5V24.5C2 25.327 2.673 26 3.5 26H14.5C15.327 26 16 25.327 16 24.5V3.5C16 2.673 15.327 2 14.5 2ZM7.83 17.124C7.92972 17.2115 7.99059 17.3351 7.99922 17.4675C8.00784 17.5999 7.96352 17.7303 7.876 17.83C7.78848 17.9297 7.66493 17.9906 7.53253 17.9992C7.40013 18.0078 7.26972 17.9635 7.17 17.876L3.17 14.376C3.11646 14.3291 3.07356 14.2713 3.04417 14.2064C3.01478 14.1416 2.99958 14.0712 2.99958 14C2.99958 13.9288 3.01478 13.8584 3.04417 13.7936C3.07356 13.7287 3.11646 13.6709 3.17 13.624L7.17 10.124C7.26997 10.0376 7.40009 9.99421 7.53193 10.0034C7.66376 10.0126 7.78659 10.0737 7.87355 10.1732C7.96051 10.2727 8.00453 10.4026 7.996 10.5345C7.98746 10.6664 7.92706 10.7895 7.828 10.877L4.26 14L7.83 17.124ZM14.83 14.376L10.83 17.876C10.7808 17.9197 10.7233 17.9531 10.661 17.9745C10.5988 17.9958 10.5329 18.0045 10.4672 18.0001C10.4015 17.9957 10.3373 17.9784 10.2784 17.949C10.2195 17.9196 10.167 17.8788 10.124 17.829C10.0368 17.7292 9.99284 17.599 10.0016 17.4668C10.0105 17.3346 10.0714 17.2113 10.171 17.124L13.74 14L10.17 10.876C10.0762 10.7872 10.0204 10.6655 10.0143 10.5364C10.0082 10.4073 10.0523 10.2809 10.1374 10.1836C10.2225 10.0864 10.342 10.0259 10.4707 10.0147C10.5995 10.0036 10.7275 10.0428 10.828 10.124L14.828 13.624C14.8815 13.6709 14.9244 13.7287 14.9538 13.7936C14.9832 13.8584 14.9984 13.9288 14.9984 14C14.9984 14.0712 14.9832 14.1416 14.9538 14.2064C14.9244 14.2713 14.8815 14.3291 14.828 14.376H14.83ZM27.491 15.897L26.082 15.102C26.137 14.73 26.164 14.362 26.164 14C26.164 13.638 26.137 13.27 26.082 12.898L27.492 12.103C27.6079 12.0377 27.7096 11.9499 27.7912 11.8448C27.8728 11.7396 27.9325 11.6193 27.967 11.4908C28.0014 11.3622 28.0099 11.2281 27.9919 11.0963C27.9739 10.9645 27.9297 10.8376 27.862 10.723L25.813 7.26C25.6798 7.03477 25.4636 6.87072 25.2109 6.80305C24.9581 6.73537 24.6889 6.76946 24.461 6.898L23.027 7.708C22.422 7.24269 21.7553 6.86373 21.046 6.582V5C21.046 4.73478 20.9406 4.48043 20.7531 4.29289C20.5656 4.10536 20.3112 4 20.046 4H19V10C20.0609 10 21.0783 10.4214 21.8284 11.1716C22.5786 11.9217 23 12.9391 23 14C23 15.0609 22.5786 16.0783 21.8284 16.8284C21.0783 17.5786 20.0609 18 19 18V24H20.047C20.3122 24 20.5666 23.8946 20.7541 23.7071C20.9416 23.5196 21.047 23.2652 21.047 23V21.42C21.7561 21.1379 22.4228 20.7589 23.028 20.294L24.462 21.103C24.6899 21.2315 24.9591 21.2656 25.2119 21.198C25.4646 21.1303 25.6808 20.9662 25.814 20.741L27.861 17.277C27.9287 17.1624 27.9729 17.0355 27.9909 16.9037C28.0089 16.7719 28.0004 16.6378 27.966 16.5092C27.9315 16.3807 27.8718 16.2604 27.7902 16.1552C27.7086 16.0501 27.6069 15.9623 27.491 15.897Z"
                              fill="currentColor"
                           />
                        </svg>,
                        },
                        {
                           id: 4, title: "Tvorba webových stránek", data: [{
                              id: 1,
                              title: 'Kódování webů a šablon v HTML, CSS, JavaScript',
                           },
                           {
                              id: 2,
                              title: 'Rychlé a responzivní webové stránky',
                           },
                           {
                              id: 3,
                              title: 'Řešení na míru dle specifických potřeb klienta',
                           }],
                           svg:<svg
                           width="32"
                           height="32"
                           viewBox="0 0 32 32"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M31.0625 0H27.25C26.7318 0 26.3125 0.419312 26.3125 0.9375V1.875H18.6398C18.2515 0.786125 17.2206 0 16 0C14.7794 0 13.7485 0.786125 13.3602 1.875H5.6875V0.9375C5.6875 0.419312 5.26819 0 4.75 0H0.9375C0.419312 0 0 0.419312 0 0.9375V4.6875C0 5.20569 0.419312 5.625 0.9375 5.625H4.75C5.26819 5.625 5.6875 5.20569 5.6875 4.6875V3.7375H9.53775C6.28419 5.77006 4.13888 9.34 3.88244 13.3384C2.75756 13.7066 1.9375 14.7537 1.9375 16C1.9375 17.5509 3.19913 18.8125 4.75 18.8125C6.30087 18.8125 7.5625 17.5509 7.5625 16C7.5625 14.8038 6.80869 13.7867 5.75375 13.3808C6.07362 8.923 9.18413 5.16575 13.5108 4.09375C13.9788 4.99856 14.9129 5.625 16 5.625C17.0871 5.625 18.0212 4.99856 18.4892 4.09375C22.8159 5.16569 25.9264 8.92294 26.2463 13.3807C25.1913 13.7867 24.4375 14.8038 24.4375 16C24.4375 17.5509 25.6991 18.8125 27.25 18.8125C28.8009 18.8125 30.0625 17.5509 30.0625 16C30.0625 14.7537 29.2424 13.7066 28.1176 13.3384C27.8611 9.34 25.7158 5.78256 22.4622 3.75H26.3125V4.6875C26.3125 5.20569 26.7318 5.625 27.25 5.625H31.0625C31.5807 5.625 32 5.20569 32 4.6875V0.9375C32 0.419312 31.5807 0 31.0625 0ZM22.3781 30.8372C21.8877 29.3366 20.475 28.1875 18.8125 28.1875H13.1875C11.525 28.1875 10.1122 29.3366 9.62187 30.8372C9.43281 31.4157 9.925 32 10.5337 32H21.4662C22.0749 32 22.5672 31.4157 22.3781 30.8372Z"
                              fill="currentColor"
                           />
                           <path
                              d="M24.28 19.23L16.9375 8.21619V17.1102C18.0264 17.4985 18.8125 18.5294 18.8125 19.75C18.8125 21.3009 17.5509 22.5625 16 22.5625C14.4491 22.5625 13.1875 21.3009 13.1875 19.75C13.1875 18.5294 13.9736 17.4985 15.0625 17.1102V8.21619L7.72001 19.23C7.47188 19.6017 7.52132 20.097 7.8372 20.4129C9.55826 22.1339 10.6584 24.3511 11.0829 26.7294C11.7342 26.4652 12.4425 26.3125 13.1875 26.3125H18.8125C19.5575 26.3125 20.2658 26.4652 20.9171 26.7293C21.3416 24.3509 22.4418 22.1339 24.1628 20.4129C24.4787 20.097 24.5281 19.6017 24.28 19.23Z"
                              fill="currentColor"
                           />
                           <path
                              d="M16 18.8125C15.4827 18.8125 15.0625 19.2327 15.0625 19.75C15.0625 20.2673 15.4827 20.6875 16 20.6875C16.5173 20.6875 16.9375 20.2673 16.9375 19.75C16.9375 19.2327 16.5173 18.8125 16 18.8125Z"
                              fill="currentColor"
                           />
                        </svg>
                        },
                        {
                           id: 5, title: "Vývoj Node.js server", data: [{
                              id: 1,
                              title: 'Škálovatelné řešení s vysokým výkonem',
                           },
                           {
                              id: 2,
                              title: 'Efektivní a nenáročné běhové prostředí',
                           },
                           {
                              id: 3,
                              title: 'Vývoj v JavaScriptu na serverové i klientské straně',
                           }],
                           svg:<svg
                           width="30"
                           height="32"
                           viewBox="0 0 30 32"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M28.1918 13.2861L15.7113 0.803813C14.9752 0.0695625 13.7846 0.07825 13.0581 0.802875C12.3276 1.53531 12.3276 2.72456 13.0581 3.45606L25.5404 15.9375C26.2717 16.6688 27.4605 16.6688 28.1918 15.9375C28.9251 15.2043 28.9251 14.0192 28.1918 13.2861ZM12.1322 5.18156L12.0382 5.65244C11.3766 8.96231 9.76843 12.1068 7.59337 14.6553L14.3838 21.4457C16.9321 19.2711 20.0332 17.6198 23.3432 16.9573L23.8149 16.8634L12.1322 5.18156ZM6.34843 16.0618L1.70762 20.7017C0.611055 21.7983 0.606493 23.5785 1.70762 24.6796L4.35899 27.331C5.45556 28.4276 7.23581 28.4321 8.33693 27.331L12.9773 22.6906L6.34843 16.0618ZM7.01131 23.354C6.64512 23.7202 6.05181 23.7202 5.68562 23.354C5.31943 22.9878 5.31943 22.3945 5.68562 22.0283L7.01131 20.7026C7.37749 20.3364 7.97081 20.3364 8.33699 20.7026C8.70318 21.0688 8.70318 21.6621 8.33699 22.0283L7.01131 23.354ZM16.8916 27.8299L18.1669 26.5546C19.2681 25.4536 19.2645 23.6733 18.167 22.5776L17.2197 21.6297C16.6962 21.9814 16.1962 22.3635 15.7101 22.7712L16.8413 23.9042C17.2066 24.2676 17.2092 24.8591 16.8413 25.2289L15.5449 26.5253L13.6398 24.6795L10.9883 27.331L15.2419 31.4527C15.9677 32.1804 17.1596 32.1846 17.8923 31.4517C18.6238 30.7202 18.6238 29.531 17.8923 28.7994L16.8916 27.8299ZM20.679 0C20.1608 0 19.7415 0.419312 19.7415 0.9375V2.8125C19.7415 3.33069 20.1608 3.75 20.679 3.75C21.1972 3.75 21.6165 3.33069 21.6165 2.8125V0.9375C21.6165 0.419312 21.1972 0 20.679 0ZM28.179 7.5H26.304C25.7858 7.5 25.3665 7.91931 25.3665 8.4375C25.3665 8.95569 25.7858 9.375 26.304 9.375H28.179C28.6972 9.375 29.1165 8.95569 29.1165 8.4375C29.1165 7.91931 28.6972 7.5 28.179 7.5ZM26.9668 2.14963C26.6006 1.78344 26.0073 1.78344 25.6411 2.14963L23.7661 4.02462C23.3999 4.39081 23.3999 4.98413 23.7661 5.35031C24.1323 5.7165 24.7256 5.71656 25.0918 5.35031L26.9668 3.47531C27.333 3.10912 27.333 2.51581 26.9668 2.14963Z"
                              fill="currentColor"
                           />
                        </svg>,
                        },
                        {
                           id: 6, title: "Průmyslová automatizace", data: [{
                              id: 1,
                              title: 'Software pro průmyslovou automatizaci procesů',
                           },
                           {
                              id: 2,
                              title: 'Řešení na míru na platformách Arduino a Raspberry Pi',
                           },
                           {
                              id: 3,
                              title: 'Monitoring procesů v reálném čase',
                           }],
                           svg:<svg
                           width="29"
                           height="28"
                           viewBox="0 0 29 28"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M15.0367 24.662C15.0236 23.9374 15.208 23.223 15.57 22.5953L20 14.9246V14H20.5333L21.688 12H20V7.99996H24V8.52263C24.2863 8.31816 24.6116 8.17473 24.9556 8.10121C25.2997 8.0277 25.6551 8.02569 26 8.09529V3.99996C26 3.1159 25.6488 2.26806 25.0237 1.64294C24.3986 1.01782 23.5507 0.666626 22.6667 0.666626H3.33333C2.44928 0.666626 1.60143 1.01782 0.976311 1.64294C0.351189 2.26806 0 3.1159 0 3.99996V22C0 22.4377 0.0862192 22.8712 0.253735 23.2756C0.421251 23.68 0.666782 24.0475 0.976311 24.357C1.28584 24.6665 1.6533 24.912 2.05772 25.0796C2.46214 25.2471 2.89559 25.3333 3.33333 25.3333H15.048L15.0367 24.662ZM20 2.66663H22.6667C23.0203 2.66663 23.3594 2.8071 23.6095 3.05715C23.8595 3.3072 24 3.64634 24 3.99996V5.99996H20V2.66663ZM6 23.3333H3.33333C2.97971 23.3333 2.64057 23.1928 2.39052 22.9428C2.14048 22.6927 2 22.3536 2 22V20H6V23.3333ZM6 18H2V14H6V18ZM6 12H2V7.99996H6V12ZM6 5.99996H2V3.99996C2 3.64634 2.14048 3.3072 2.39052 3.05715C2.64057 2.8071 2.97971 2.66663 3.33333 2.66663H6V5.99996ZM9.32933 16.4173V10.2493C9.32934 10.0152 9.39095 9.78533 9.50798 9.58264C9.62501 9.37995 9.79332 9.21164 9.99602 9.09462C10.1987 8.9776 10.4286 8.91599 10.6627 8.91599C10.8967 8.91599 11.1266 8.9776 11.3293 9.09463L16.6707 12.1786C16.8733 12.2957 17.0416 12.464 17.1587 12.6667C17.2757 12.8693 17.3373 13.0993 17.3373 13.3333C17.3373 13.5673 17.2757 13.7972 17.1587 13.9999C17.0416 14.2026 16.8733 14.3709 16.6707 14.488L11.3293 17.572C11.1266 17.689 10.8967 17.7506 10.6627 17.7506C10.4286 17.7506 10.1987 17.689 9.99602 17.572C9.79332 17.4549 9.62501 17.2866 9.50798 17.0839C9.39095 16.8813 9.32934 16.6513 9.32933 16.4173ZM24 21.33V22C23.9987 22.3202 23.8822 22.6293 23.6718 22.8706C23.4613 23.112 23.1711 23.2696 22.854 23.3146L21.6887 25.3333H22.6667C23.1044 25.3333 23.5379 25.2471 23.9423 25.0796C24.3467 24.912 24.7142 24.6665 25.0237 24.357C25.3332 24.0475 25.5787 23.68 25.7463 23.2756C25.9138 22.8712 26 22.4377 26 22V17.8666L24 21.33Z"
                              fill="currentColor"
                           />
                           <path
                              d="M23.1333 12.166L17.0239 22.7467L20.4906 24.7467L26.5999 14.166L23.1333 12.166ZM23.3246 17.166C23.2356 17.3179 23.0901 17.4284 22.9199 17.4734C22.7497 17.5184 22.5686 17.4942 22.4162 17.4062C22.2637 17.3182 22.1522 17.1734 22.1061 17.0035C22.06 16.8336 22.0829 16.6524 22.1699 16.4993L23.1699 14.766C23.2134 14.6896 23.2715 14.6225 23.341 14.5686C23.4105 14.5148 23.49 14.4752 23.5748 14.4521C23.6597 14.4291 23.7482 14.4231 23.8354 14.4344C23.9226 14.4457 24.0067 14.4742 24.0828 14.5182C24.159 14.5621 24.2257 14.6207 24.2791 14.6906C24.3325 14.7604 24.3715 14.8401 24.394 14.9251C24.4165 15.0101 24.4219 15.0987 24.41 15.1858C24.3981 15.2729 24.3691 15.3568 24.3246 15.4327L23.3246 17.166ZM27.2666 13.0107L27.8246 12.0447C27.912 11.8928 27.9686 11.7253 27.9913 11.5516C28.0139 11.3778 28.002 11.2013 27.9564 11.0322C27.9108 10.863 27.8322 10.7046 27.7253 10.5658C27.6184 10.427 27.4852 10.3106 27.3333 10.2233L26.1786 9.55668C25.8724 9.37988 25.5084 9.33197 25.1669 9.42348C24.8253 9.515 24.5341 9.73845 24.3573 10.0447L23.7993 11.0113L27.2666 13.0107ZM16.4493 23.9547C16.3929 24.1787 16.366 24.4091 16.3693 24.64L16.4039 26.6767C16.4058 26.7918 16.4375 26.9045 16.4959 27.0037C16.5542 27.1029 16.6373 27.1854 16.737 27.243C16.8367 27.3006 16.9496 27.3314 17.0647 27.3324C17.1799 27.3334 17.2933 27.3045 17.3939 27.2487L19.1753 26.26C19.377 26.1472 19.5632 26.0087 19.7293 25.848L16.4493 23.9547Z"
                              fill="currentColor"
                           />
                        </svg>,
                        },
                     ].map((item: any, index: any) => (
                        <div key={item.id}>
                           <FlipCardWithHover svg={item.svg} title={item.title} data={item.data} />
                        </div>
                     ))}
                  </div>
               </div>
               {/* education section 
               <div className="mt-12 md:mt-12 lg:mt-14 xl:mt-16">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Education"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
                     />
                  </div>
                  <Education />
               </div>
               experience section  */}
               <div id="experience" className="mt-12 md:mt-12 lg:mt-14 xl:mt-16 pt-5">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Zkušenosti"
                        description="Postupem let v oboru jsem získal zkušenosti s vývojem webových aplikací, UI/UX designem, řízením marketingu i programováním průmyslových automatizací, a to jak individuální tvorbou, tak jako součást týmu."
                     />
                  </div>
                  <Experience />
               </div>
               {/* portfolio section  */}
               <div className="mt-12 md:mt-12 lg:mt-14 xl:mt-16 pt-5" id="portfolio">
                  <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] text-base-content font-bold text-center">
                     Portfolio
                  </h2>
                  <p className="md:max-w-[438px] text-center text-base text-base-content/60 mx-auto mt-4">
                  Moje portfolio je rozmanité a obsahuje řadu webových stránek a aplikací, z nichž většinu jsem kódoval od samotného základu, a k tomu šablony nakódované pomocí designových nástrojů, jako například Figma.
                  </p>
                  <PortfolioCards />
               </div>
               {/* testimonial section   
               <div className="mt-12 md:mt-12 lg:mt-14 xl:mt-16">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Testimonials"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
                     />
                  </div>
                  <TestimonialSlider />
               </div>
                Blog section section   
               <div className="mt-12 md:mt-12 lg:mt-14 xl:mt-16 pt-5" id="blog">
                  <div className="mb-10 xl:mb-12">
                     <SmallSubtitle
                        title="Latest Blog"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
                     />
                  </div>
                  <BlogSlider />
               </div>
             contact us section   */}
               <div id="contact">
                  <ContactUs />
               </div>
            </div>
         </div>
      </Fragment>
   )
}
