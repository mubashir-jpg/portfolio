import { useEffect } from "react";
import { useState } from "react"

export const LoadingScreen = ({ oncomplete }) => {
    const [text, settext] = useState(" ");
    const fulltext = "< hello world />";

    useEffect(() => {
        let index = 0;
        const intervel = setInterval(() => {
            settext(fulltext.substring(0, index));
            index++;

            if (index > fulltext.length) {
                clearInterval(intervel)
                setTimeout(() => {
                    oncomplete();
                }, 1000);
            }

        }, 100)

        return () => clearInterval(intervel)
    }, [oncomplete])
    return <>
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">

            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"></span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-100 ronded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                    {" "}
                </div>
            </div>
        </div>
    </>
}