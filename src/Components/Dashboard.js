import React from 'react'
import DashLeft from './DashLeft'
import Header from './Header'
import DashboardBody from './DashboardBody';

;

export default function Dashboard() {
  return (
    <div className='relative'>
        <div className="flex">
        <DashLeft/>
        <Header/>
        </div>
        <div className='absolute right-0 top-0'>
        <DashboardBody></DashboardBody>

        </div>
    </div>
  )
}
