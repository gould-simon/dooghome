"use client"

import Comp from '@/app/Components/comp'
import React from 'react'

const Features = () => {

    const features = [
        {
            imagePath: "/static/images/First.svg",
            title: "AI-Assisted Workflow Generation",
            description: "Quickly create workflows tailored to specific tasks with AI recommendations."
        },
        {
            imagePath: "/static/images/Second.svg",
            title: "Hybrid Visual-Code Interface",
            description: "Combine the ease of visual workflow design with the flexibility of code customization."
        },
        {
            imagePath: "/static/images/Third.svg",
            title: "Collaboration and Version Control",
            description: "Work seamlessly with team members, track changes, and maintain workflow integrity."
        },
        {
            imagePath: "/static/images/Fourth.svg",
            title: "Approval Processes & Audit Trails",
            description: "Implement multi-level approvals and generate audit trails for every workflow."
        },
        {
            imagePath: "/static/images/Fifth.svg",
            title: "Integration Capabilities",
            description: "Connect with existing accounting software, databases, and cloud services for streamlined operations."
        },
        {
            imagePath: "/static/images/Sixth.svg",
            title: "Templates and Pre-built Workflows",
            description: "Access templates for common tasks to accelerate implementation."
        }
    ]

    return (
        <div id="features" className='flex flex-col gap-[60px] items-stretch justify-center'>
            <div className='flex justify-center items-center'>
                <p className="w-full md:w-[35%] text-center mt-[20px] font-bold font-montserrat text-black text-[25px] sm:text-[20px] md:text-[24px] lg:text-[34px] xl:text-[44px]">
                    What sets Doog AI apart?
                </p>
            </div>
            <div className="bg-white w-[93%]  flex justify-center items-center rounded-[16px] h-auto ml-[4.16%] mr-[4.16%] pb-[100px] md:px-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="p-2">
                            <Comp
                                imagePath={feature.imagePath}
                                title={feature.title}
                                description={feature.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features