export default function WaitlistJoin() {
    return (
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-[40%] md:bg-white bg-transparent md:border border-borderColor rounded-full">
            <div className="flex md:flex-row flex-col items-center px-[8px]">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="flex-1  py-[16px] md:py-[24px] mb-[16px] md:mb-0 rounded-full border-borderColor border-[1px] md:border-none text-[16px] pl-[16px] focus:outline-none text-primaryText w-full md:w-auto md:bg-white font-normal"
                />
                {/* bg-gradient-to-r from-[#70D0F9] to-[#0055E1] */}
                <button className="rounded-full py-[16px] px-[24px] flex justify-center items-center font-montserrat text-[16px] font-semibold bg-button-gradient text-white ml-auto w-full md:w-auto">

                    Join the waitlist
                </button>

            </div>
        </div>

    )
}