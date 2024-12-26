
export default function Footer(){
    return(
        <div className="flex flex-col md:flex-row justify-between items-center  pb-[2%] ml-[4.16%] mr-[4.16%] px-[2%] py-[1%]">
                {/* Left Content */}
                <div className="w-auto mb-[1%] md:mb-0">
                    <p className="italic text-gray-700 xl:text-[24px]">Built with ❤️ for accountants everywhere.</p>
                </div>

                {/* Right Content */}
                <div className=" flex flex-row gap-[2vw]">
                    <p className="font-montserrat text-[clamp(0.8vw, 1vw, 1.5vw)] font-semibold xl:text-[22px]">Privacy Policy</p>
                    <p className="font-montserrat text-[clamp(0.8vw, 1vw, 1.5vw)] font-semibold xl:text-[22px]">Terms of Service</p>
                </div>
            </div>
    )
}