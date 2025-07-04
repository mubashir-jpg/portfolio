import { useEffect, useRef } from "react"

export const Revealonscroll = ({childern})=>{
    const ref = useRef(null);
    useEffect(()=>{

        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    ref.current.classList.add("visible");
                }
            },
            {threshold: 0.2, rootMargin: "0px 0px -50px 0px"}
        )
        if(ref.current) observer.observe.disconnect();
    })
    return<div ref={ref} className="reveal">{childern}</div>
} 