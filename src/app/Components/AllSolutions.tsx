"use client"

import SolutionCard from "./SolutionCard"
import { useState } from "react"
export default function AllSolutions() {
    const [activeTab, setActiveTab] = useState(0)

    const handleNext = () => {
        if (activeTab === 0) setActiveTab(1)
        else if (activeTab === 1) setActiveTab(2)
    }

    const handlePrev = () => {
        if (activeTab === 2) setActiveTab(1)
        else if (activeTab === 1) setActiveTab(0)
    }

    const tabsData = [
        {
            title: "Expand Your Advisory Services",
            heading: "Unlock New Revenue Streams with Advanced Analytics",
            description: "Upskill your accounting firm’s team with Doog AI to offer cutting-edge data analytics services. Deliver high-value insights to your clients and open up new avenues for revenue growth.",
            features: ["Build custom financial analytics solutions without coding", "Offer data-driven consulting services with AI-powered tools", "Create bespoke reporting dashboards to meet client needs"],
            imagePath: "/static/images/solutions-1.png"

        },
        {
            title: "Optimize Financial Operations",
            heading: "Transform Your Finance Team's Productivity",
            description: "Leverage Doog AI to empower your in-house finance team. Automate repetitive tasks and focus on strategic initiatives by enhancing efficiency and gaining real-time financial insights.",
            features: ["Automate monthly close reporting to reduce cycle time", "Generate dynamic financial dashboards for informed decision-making", "Streamline cash flow forecasting with AI-driven analytics"],
            imagePath: "/static/images/solutions-2.png"
        },
        {
            title: "Streamline Audit Processes",
            heading: "Enhance Audit Efficiency and Quality",
            description: "Use Doog AI to automate your audit workflows, reducing manual effort and increasing precision. Accelerate audit procedures with AI-powered tools designed to optimize your auditing tasks.",
            features: ["Automate journal entry testing for quicker validations", "Perform seamless three-way matches between invoices, purchase orders, and receipts", "Clean and standardize client data for reliable analysis Note (need to wait for Doog Figma for screenshots)"],
            imagePath: "/static/images/solutions-3.png"
        }
    ]


    return (
        <div className="w-[93%]  h-auto rounded-[20px] bg-white shadow-lg p-4 md:p-8 mb-[5%]">
            <div className="flex flex-col">
                <div className="lg:flex hidden justify-around pb-4">
                    {tabsData.map((tab, index) => (
                        <button
                            key={index}
                            className={`font-montserrat text-[20px] font-semibold  ${activeTab === index ? 'text-[#4285F4]' : 'text-primaryText'}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.title}
                        </button>
                    ))}

                </div>
                <div className="lg:flex hidden relative h-[4px] rounded-full bg-[#CEE1FF] mb-8">
                    <div
                        className="absolute h-full rounded-full bg-[#4285F4] transition-all duration-300"
                        style={{
                            left: activeTab === 0 ? '0%' : activeTab === 1 ? '33.33%' : '66.66%',
                            width: '33.33%'
                        }}
                    ></div>
                </div>
                <div className="lg:hidden flex items-center justify-between ">
                    <button onClick={handlePrev} className={`text-[24px] text-[#4285F4] ${activeTab === 0 ? 'invisible' : ''}`}>←</button>
                    <div className="flex flex-col items-center">
                        <p className={`font-montserrat text-[16px] font-semibold text-[#4285F4] text-center`}>
                            {tabsData[activeTab].title}
                        </p>

                    </div>
                    <button onClick={handleNext} className={`text-[24px] text-[#4285F4] ${activeTab === 2 ? 'invisible' : ''}`}>→</button>
                </div>
                <div className="lg:hidden h-[4px] w-[100%] min-w-[200px] bg-[#CEE1FF] mt-2 relative">
                    <div className={`absolute h-[4px] w-[90%] min-w-[200px] bg-[#4285F4] rounded-full transition-all duration-200 ${activeTab === 0 ? 'left-[0%]' : activeTab === 1 ? 'left-[5%]' : 'left-[10%]'}`}></div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col h-auto">
                <SolutionCard
                    title={tabsData[activeTab].heading}
                    description={tabsData[activeTab].description}
                    features={tabsData[activeTab].features}

                    imagePath={tabsData[activeTab].imagePath}
                />

            </div>
        </div>
    )
}