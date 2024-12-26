import React from 'react';
import Image from 'next/image';

type Props = {
    imagePath: string;
    title: string;
    description: string;
};

export default function Comp({ imagePath, title, description }: Props) {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <Image
                    src={imagePath}
                    alt={title}
                    width={310}
                    height={310}
                    className="items-center mb-[-100]"
                />
            </div>
            <div className="p-1 md:p-4">
                <h2 className="font-montserrat h-auto text-center font-bold mb-[2%] text-[18px] md:text-[22px]">
                    {title}
                </h2>
                <p className="font-montserrat text-primaryText font-regular leading-tight font-[14px] md:font-[16px] text-center">
                    {description}
                </p>
            </div>
        </div>
    );
}
