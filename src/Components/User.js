import React, { useState } from 'react';
import logo from '../img/logo.png';
import Button from './Button';
import { Eye } from './svg/Eye';
import {  Eyeclose } from './svg/Eyeclose';

const User = () => {
  const [showpassword, setShowpassword] = useState(true);
  
  return (
    <div className="bg_primary h-screen flex justify-center items-center">
      <div className="bg_secondary pb-16 md:pb-0 h-screen w-screen md:w-2/5 md:h-3/4 flex justify-center md:rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <img src={logo} alt="logo" className="w-24 h-fit" />
          <div className="txt_prime text-3xl font-semibold mb-4">Craftlooms</div>
          <div className="txt_prime font-medium mb-4">Enter Login Details</div>
          <form action="POST" className="flex flex-col items-center gap-6">
            <input
              className="text-center w-72 txt_sec placeholder-cl-text2 bg_primary outline-none rounded-3xl py-2"
              type="email"
              name="email"
              id="email"
              required
              placeholder="id@mail.com"
            />

            <div className="bg_primary flex rounded-3xl items-center w-72 relative">
              <input
                required
                type={showpassword ? 'password' : 'text'}
                className="text-center w-72 placeholder-cl-text2 bg_primary outline-none rounded-3xl py-2 pr-8 pl-8"
                name="password"
                id="password"
                placeholder="******"
              />

              <div className="hover:cursor-pointer mr-2 absolute right-0 bg_primary" onClick={() => setShowpassword(!showpassword)}>
                {showpassword ? (
                  <Eye/>
                ) : (
                  <Eyeclose/>
                )}
              </div>
            </div>
            <Button />
          </form>
        </div>{' '}
        -
      </div>
    </div>
  );
};
export default User;
