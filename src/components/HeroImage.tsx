"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const HeroImage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            window.requestAnimationFrame(() => {
                setScrollPosition(position);
            });
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial width
        setWindowWidth(window.innerWidth);

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate scale and perspective based on scroll position
    const scale = Math.max(1, 1.3 - (scrollPosition * 0.001));
    const rotateX = Math.max(0, 40 - (scrollPosition * 0.07)); // Start at 20deg and decrease to 0deg

    // Add a maximum translation limit of -200px
    const maxTranslate = -80;
    const translateY = windowWidth >= 768 ? Math.max(maxTranslate, Math.min(0, -scrollPosition * 0.3)) : 0;

    return (
        <div className="flex justify-center items-center rounded-[16px]  h-[40vw] md:h-[30vw] "
            style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
            }}>
            <Image
                src="/images/hero_image.png"
                alt="Hero Image"
                width={1000}
                height={1000}
                className="h-full w-[80%] md:w-[75%] object-cover rounded-[16px]"
                style={{
                    transform: `scale(${scale}) rotateX(${rotateX}deg) translateY(${translateY}px)`,
                    willChange: 'transform',
                    transition: 'transform 0.1s linear',
                    boxShadow: '0 6px 8px -1px rgba(66, 133, 244, 0.3), 0 -6px 8px -1px rgba(66, 133, 244, 0.3)' // Equal shadow top and bottom using borderColor
                }}
            />
        </div>
    )
}

export default HeroImage