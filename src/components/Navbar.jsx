import React from 'react'

const SearchBar =({showSidebar})=>
{
    return (
        <div className={`px-4 py-[9px] bg-[#F2F2F2] space-x-2 flex grow items-center rounded-md max-sm:px-2 max-sm:py-1.5 max-sm:grow-0 max-sm:space-x-1.5 ${showSidebar?"max-sm:bg-gray-500/70":""}`}>
            <svg className="max-sm:w-2.5 max-sm:h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5730_2526)">
                <path d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z" fill="#808080"/>
                </g>
                <defs>
                <clipPath id="clip0_5730_2526">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <input className='grow text-[15px] outline-none bg-transparent leading-[22px] placeholder:text-[#808080] max-sm:text-xs' placeholder='Search features, tutorials, etc.'/>

        </div>
    )
}

const Navbar = ({showSidebar,setShowSidebar}) => {
  return (
    <nav className={`bg-white flex w-full items-center px-8 py-3 space-x-4 sticky top-0 z-30 ${showSidebar?"max-sm:bg-gray-500/70 max-sm:pt-6 max-sm:pb-4":""} max-sm:px-0 max-sm:space-x-2 max-sm:justify-between`}>
       {showSidebar
       ?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-white rounded-full ml-5 p-1 bg-red-500 w-7 h-7 shrink-0 sm:hidden" onClick={()=>setShowSidebar(false)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
         </svg>
      
       :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0 sm:hidden" onClick={()=>setShowSidebar(true)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        
        }

        <p className=' text-xl font-medium max-sm:text-sm'>Payouts</p>
        <aside className='flex items-center space-x-2.5 grow max-sm:space-x-1 max-sm:grow-0'>
            <svg className="max-sm:w-2 max-sm:h-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5730_2522)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.77783 10.1808C7.77783 10.6103 7.42968 10.9584 7.00022 10.9584C6.57076 10.9584 6.22261 10.6103 6.22261 10.1808C6.22261 9.75137 6.57076 9.40322 7.00022 9.40322C7.42968 9.40322 7.77783 9.75137 7.77783 10.1808Z" fill="#4D4D4D"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.12724 3.40771C6.54406 3.23506 7.00271 3.18988 7.4452 3.2779C7.88769 3.36592 8.29414 3.58317 8.61315 3.90219C8.93217 4.2212 9.14942 4.62765 9.23744 5.07014C9.32546 5.51263 9.28028 5.97128 9.10763 6.3881C8.93498 6.80491 8.64261 7.16117 8.26749 7.41182C8.02339 7.57492 7.75139 7.68854 7.46685 7.74801V7.84799C7.46685 8.10573 7.25791 8.31466 7.00018 8.31466C6.74245 8.31466 6.53351 8.10573 6.53351 7.84799V7.32959C6.53351 7.20582 6.58268 7.08712 6.6702 6.9996C6.75771 6.91209 6.87641 6.86292 7.00018 6.86292C7.26674 6.86292 7.52732 6.78388 7.74895 6.63578C7.97059 6.48769 8.14334 6.2772 8.24535 6.03093C8.34735 5.78466 8.37404 5.51367 8.32204 5.25223C8.27004 4.99079 8.14168 4.75064 7.95319 4.56215C7.7647 4.37366 7.52455 4.2453 7.26311 4.1933C7.00167 4.14129 6.73068 4.16799 6.48441 4.26999C6.23814 4.372 6.02765 4.54475 5.87956 4.76639C5.73146 4.98802 5.65242 5.2486 5.65242 5.51516C5.65242 5.77289 5.44349 5.98183 5.18575 5.98183C4.92802 5.98183 4.71909 5.77289 4.71909 5.51516C4.71909 5.064 4.85287 4.62298 5.10352 4.24785C5.35417 3.87273 5.71043 3.58036 6.12724 3.40771Z" fill="#4D4D4D"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z" fill="#4D4D4D"/>
                </g>
                <defs>
                <clipPath id="clip0_5730_2522">
                <rect width="14" height="14" fill="white"/>
                </clipPath>
                </defs>
            </svg>

            <small className=' text-xs text-text hover:underline hover:cursor-help max-sm:text-[8px] max-sm:hidden'>How it works</small>
        </aside>
        <SearchBar showSidebar={showSidebar}/>
        <section className='flex space-x-3 grow justify-end max-sm:grow-0 max-sm:space-x-1 max-sm:items-center'>
            <aside className=' p-2.5 bg-background-light rounded-full hover:cursor-pointer max-sm:p-1.5'>
                <svg className="max-sm:w-3 max-sm:h-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z" fill="#4D4D4D"/>
                </svg>
            </aside>
            <svg className="max-sm:w-6 max-sm:h-6 hover:cursor-pointer" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5730_2537)">
                <circle cx="20" cy="20" r="20" fill="#E6E6E6"/>
                <path d="M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z" fill="#4D4D4D"/>
                </g>
                <defs>
                <clipPath id="clip0_5730_2537">
                <rect width="40" height="40" fill="white"/>
                </clipPath>
                </defs>
            </svg>

        </section>
    </nav>
  )
}

export default Navbar