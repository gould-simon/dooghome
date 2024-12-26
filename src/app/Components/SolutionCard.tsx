import Image from "next/image"

interface CardProps {
    title: string
    description: string
    features: string[]
    imagePath: string
}

const SolutionCard = ({ title, description, features, imagePath }: CardProps) => {


    return (

        <div className="flex flex-col lg:flex-row w-full ">
            <div className="lg:hidden w-full flex items-center justify-center p-4 md:p-6 mb-4 md:mb-0">
                <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <Image width={500} height={500} src={imagePath} alt="Solution Image" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="lg:w-1/2 w-full p-4 md:p-8 ">
                <h2 className="font-montserrat lg:text-center:none  font-bold mb-6 text-primaryText text-[clamp(1.5rem, 2vw, 2.5rem)] text-[16px] md:text-[24px]">
                    {title}
                </h2>
                <p className="font-montserrat text-justify h-auto mb-6 text-primaryText font-regular text-[14px] md:text-[16px]">
                    {description}
                </p>

                <ul className="list-disc pl-3 custom-bullets flex flex-col gap-2">
                    {features.map((feature, index) => (
                        <li key={index} className="font-montserrat text-[clamp(0.8rem, 2.5vw, 1.2rem)] text-primaryText text-[14px] md:text-[16px] font-semibold">{feature}</li>
                    ))}
                </ul>
            </div>
            <div className="hidden lg:flex lg:w-1/2 w-full items-center justify-center p-6">
                <div className="w-full h-[70%]  rounded-[16px] shadow-lg transform  flex items-center justify-center">
                    <Image width={500} height={500} src={imagePath} alt="Solution Image" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}
export default SolutionCard