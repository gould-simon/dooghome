import Image from 'next/image'
import React from 'react'

const NavBar = () => {

    const navItems = [
        {
            name: "Use Cases",
            href: "#real-solutions"
        },
        {
            name: "Features",
            href: "#features"
        }
    ]

    return (
        <nav>
            <div className="flex flex-row pt-[35.6px] justify-between mb-[4%]">
                <div className="flex flex-row">
                    <Image src="/assets/logo.svg" alt="logo" width={100} height={100} className="md:w-[100px] w-[64px]" />
                </div>
                <div className="flex flex-row gap-[30px] md:gap-[80px] ">
                    {navItems.map((item, index) => (
                        <a
                            key={`nav-item-${index}`}
                            href={item.href}
                            className="font-montserrat text-[16px] text-primaryText font-semibold"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default NavBar