// import { useEffect } from "react";

export const Mobilmenu = ({menuopen, setmenuopen})=>{
 
    return(<>
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.8)] z-40 flex flex-col item-center justify-center
    transition-all duration-300 ease-in-out
    ${menuopen ? "h-screen opacity-100 pointer-events-auto": "h-0 opacity-0 pointer-events-none"}
    `}>
 <button onClick={()=>setmenuopen(false) } className="absolute top-6 right-6 text-white  text-3xl focus:outline-none curser-pointer" aria-label="Close Menu">&times;</button>


 <a href="#home"
  onClick={()=> setmenuopen(false)} className={`text-2xl font-semibold text-white my-4 transform transiton-transform duration-300
    ${menuopen ? 'opacity-100 translate-y-0 ' : "opacity-0 translate-y-5"}
    `}
    >Home</a>

<a href="#About" 
onClick={()=> setmenuopen(false)} className={`text-2xl font-semibold text-white my-4 transform transiton-transform duration-300
    ${menuopen ? 'opacity-100 translate-y-0 ' : "opacity-0 translate-y-5"}
    `}
>About</a>

<a href="#Project" 
onClick={()=> setmenuopen(false)} className={`text-2xl font-semibold text-white my-4 transform transiton-transform duration-300
    ${menuopen ? 'opacity-100 translate-y-0 ' : "opacity-0 translate-y-5"}
    `}

>Project</a>
<a href="#Contact"
onClick={()=> setmenuopen(false)} className={`text-2xl font-semibold text-white my-4 transform transiton-transform duration-300
    ${menuopen ? 'opacity-100 translate-y-0 ' : "opacity-0 translate-y-5"}
    `}
 
 >Contact_us</a>

    </div>
    
    </>)
}