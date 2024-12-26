import MainHeading from '@/app/Components/MainHeading'
import WaitlistJoin from '@/app/Components/WaitlistJoin'
import React from 'react'

const HeroSection = () => {
    return (
        <div className="flex flex-col gap-[40px] items-center justify-center" >
            <MainHeading />
            <WaitlistJoin />
        </div>
    )
}

export default HeroSection