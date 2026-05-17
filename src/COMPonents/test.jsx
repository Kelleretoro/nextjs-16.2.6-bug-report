"use client";

import { use, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function TestButton() {
    // const pathname = usePathname();
    // const router = useRouter();
    // const [isMounted, setIsMounted] = useState(false);

    // useEffect(() => {
    //     setIsMounted(false);
        
    // }, [pathname]);
        
    // const handlenav = () => {
        
    //     router.push("/turlar");
    //     setIsMounted(true);
    // }

    return (
        <div className="fixed top-32 left-4 z-[99999] bg-white p-4 border-2 border-green-500 rounded shadow-2xl">
            <button 
                onClick={() => alert("Layout Canlılık Testi!")}
                className="bg-green-600 text-white px-4 py-2 rounded font-bold"
            >
                Layout Test, Click me
            </button>
        </div>
    );
}