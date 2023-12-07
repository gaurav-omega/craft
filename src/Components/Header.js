import React from 'react'
import Setting from './svg/Setting'
import Profile from './svg/Profile'

export default function Header() {
  return (
    <header className='flex justify-between w-[80%] mt-[1.4rem] px-[2rem]'>
            <div>
                <div>
                    Dashboard / Home
                </div>
                <div>
                    Home
                </div>
            </div>
            <div className='flex gap-x-[1rem]'>
                <div><Setting/></div>
                <div><Profile/></div>
            </div>
    </header>
  //   <Routes>
  //   <Route
  //     path="createOrder"
  //     element={<CreateOrder />}
  //   />
  // </Routes>
  )
}
