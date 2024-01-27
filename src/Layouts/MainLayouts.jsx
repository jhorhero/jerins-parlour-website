import { Outlet } from "react-router-dom";
import Nevbar from "../Components/Nevbar/Nevbar";
import { useEffect, useState } from "react";


const MainLayouts = () => {

    const [isloadding,setLoading] =useState(true)

    useEffect(()=>{
        const fakeDataFetch=()=>{
            setTimeout(()=>{
                setLoading(false)
            },8000)
        }
        fakeDataFetch()
    },[])



    return isloadding ? <div className="w-full h-screen flex  flex-col items-center justify-center">
        
        <img src="https://i.ibb.co/Bf2P2HV/output-onlinegiftools-1.gif" alt="" />
        
        <h1 className="text-4xl font-serif font-bold"> Jerin Parlour <span className="text-pink-500">  Loading....</span></h1>
        {/* <span className="loading loading-spinner loading-lg"></span> */}
        </div> : <div>
    <Nevbar/>
<Outlet></Outlet>
</div>
};

export default MainLayouts;