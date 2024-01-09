import React from 'react'
import Navbar from './Navbar'
import Table from './Table'
import OverviewCards from './OverviewCards'

const MainContainer = ({showSidebar,setShowSidebar}) => {
  return (
    <div className="grow relative">
      {showSidebar && <div className='fixed w-full h-full z-10 bg-black/80 md:hidden'></div>}
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
          <main className=' p-8 space-y-6 max-sm:p-0 max-sm:mt-2 max-sm:space-y-4'>
            <section className='flex justify-between items-center max-sm:mx-2'>
              <h1 className='text-text-dark text-xl font-medium max-sm:text-lg '>Overview</h1>
              <aside className='relative bg-white'>
                <select className=' py-1.5 pl-3.5 pr-9 appearance-none hover:cursor-pointer bg-white border border-border rounded-md text-text max-sm:text-sm'>
                  <option>This Month</option>
                  <option>Last Month</option>
                </select>
                <svg className='absolute right-3.5 top-3 hover:cursor-pointer pointer-events-none max-sm:w-3 max-sm:h-3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z" fill="#4D4D4D"/>
                </svg>
              </aside>
            </section>
            <OverviewCards />
            <h1 className='text-text-dark text-xl font-medium max-sm:text-lg max-sm:ml-2'>Transactions | This Month</h1>
            <aside className=' space-x-3 max-sm:ml-3'>
              <span className='py-1.5 px-4 bg-background-light rounded-full text-sm font-medium text-[#808080] max-sm:text-xs'>Payouts {"(22)"}</span>
              <span className='py-1.5 px-4 bg-secondary rounded-full text-sm font-medium text-white max-sm:text-xs'>Refunds {"(6)"}</span>   
            </aside>
            <Table />
          </main>
    </div>
  )
}

export default MainContainer