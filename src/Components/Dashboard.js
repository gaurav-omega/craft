import React from "react";
import { Homeicon } from "./svg/Homeicon";
import {Ordericon} from './svg/Ordericon'

const dashboard = ()=>{
    return(
        <div className="bg_secondary w-72 h-screen text-white flex flex-col">
            <div className="my-6 text-2xl font-semibold text-center txt_prime">Craftlooms</div>
            <hr className="w-full" />
            <div className="gap-1 flex flex-col text-lg font-semibold mt-6 px-4"> 
                <div className="flex items-center gap-x-2 drop-shadow-lg button_color">
                    <div className="mx-2"><Homeicon/></div>
                    <div>Dashboard</div>
                </div>
                <div  className="flex items-center gap-x-2 drop-shadow-lg button_color">
                    <div className="mx-2"><Ordericon/></div>
                    <div>Manage Orders</div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;