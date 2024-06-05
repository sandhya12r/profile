"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const social = [
    {
        id: 1,
        name: "Github",
        url: "https://github.com/sandhya12r",
        image: "/git.webp",
    },
    {
        id: 2,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sandhya12r",
        image: "/lin.png",
    },
    {
        id: 3,
        name: "LeetCode",
        url: "https://leetcode.com/u/sandhya12r/",
        image: "/leet.png",
    },
    {
        id: 4,
        name: "Twitter",
        url: "https://x.com/prajapati_1201",
        image: "/x.png",
    }
]
function Footer() {
    return (
        <div className="relative h-[12rem] overflow-hidden flex items-center justify-center m-0 border-t border-gray-900">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                {/* <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white text-center mb-4">Connect with Me here</h1> */}
                <p className="text-base md:text-lg text-white text-center mb-4">Stay updated with my latest work and insights across various platforms.</p>
                <div className="flex flex-row items-center justify-center w-full mb-6">
                    <AnimatedTooltip items={social} />
                </div>
                <p className="text-sm md:text-base text-white text-center">All Rights Reserved | Made with ❤️ by Sandhya</p>
            </WavyBackground>
        </div>
    )
}

export default Footer;
