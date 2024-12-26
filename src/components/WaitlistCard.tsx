import WaitlistJoin from '@/app/Components/WaitlistJoin'
import Image from 'next/image'
import React from 'react'

const WaitlistCard = () => {
    return (
        <div className="mb-[4%] rounded-[16px] flex justify-center items-center flex-col pt-[10%]  h-auto ml-[4.16%] mr-[4.16%] bg-white">
            <p className="text-[20px] md:text-[32px] font-bold mb-[3px]">Empower your team,</p>
            <p className="text-[20px] md:text-[32px] font-bold mb-[32px]">Elevate your firm</p>

            <p className=" text-center mb-[3%] md:max-w-[70%]   font-montserrat font-regular  text-[14px] md:text-[16px]">AI-Powered Data Workflows Tailored for Accounting and Finance Professionals</p>
            <WaitlistJoin />


            <Image src="/images/Vector.png" alt="Vector" width={732} height={333} className="md:w-[37%] w-[90%] h-auto mt-[32px] md:mt-[10%]" />


        </div>
    )
}

export default WaitlistCard