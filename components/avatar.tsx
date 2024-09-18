
"use client"

import Image from "next/image";

import MotionTransition from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="
        md:inline-block md:absolute
        
        bottom-0 right-0 hidden  ">
            <Image src="/perfil-n.png" width={300} height={300} className="w-full h-full " alt="Avatar " />
        </MotionTransition>
    )
}

export default Avatar;