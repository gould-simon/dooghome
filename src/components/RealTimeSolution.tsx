import AllSolutions from '@/app/Components/AllSolutions'
import React from 'react'

const RealTimeSolution = () => {
    return (
        <div className="flex flex-col  items-center justify-center">


            <p id="real-solutions" className="mb-[5%] w-[65%] text-center font-bold font-montserrat text-[25px] sm:text-[20px] md:text-[24px] lg:text-[34px] xl:text-[44px] text-black">Real Solutions for Real Accounting Challenges</p>

            <AllSolutions />

        </div>
    )
}

export default RealTimeSolution