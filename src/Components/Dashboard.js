import React, { useState } from 'react'
import DashLeft from './DashLeft'
import Header from './Header'
import DashboardBody from './DashboardBody';
import CreateOrder from './CreateOrder';

;

export default function Dashboard() {
  const [createOrder, setCreateOrder] = useState(false);
  return (
    <div className='relative'>
        <div className="flex">
        <DashLeft setCreateOrder={setCreateOrder}/>
        <Header/>
        </div>
        <div className='absolute right-0 top-0'>
        <DashboardBody>
          {createOrder && <CreateOrder/>}
        </DashboardBody>

        </div>
    </div>
  )
}
