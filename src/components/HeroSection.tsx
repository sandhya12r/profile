import Link from 'next/link';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Button } from "./ui/moving-border";

function HeroSection() {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="lightblue" />
            <div className='p-4 relative w-full z-10 text-center'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
                    SANDHYA RANI</h1>

                <div className='mt-4 overflow-hidden max-h-7'>
                    <div className='animate-move-animation uppercase text-2xl font-bold text-neutral-400'>
                        <div className='mt-4 max-h-6'>full stack developer</div>
                        <div className='mt-4 max-h-6'>software engineer</div>
                        <div className='mt-4 max-h-6'>tech-entusiast</div>
                        <div className='mt-4 max-h-6'>problem solver</div>
                        <div className='mt-4 max-h-6'>educator</div>
                    </div>
                </div>
                <p
                    className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
                >A Software developer who loves to solve prevailing real-world problems with the help of technology.</p>
                <div className="mt-7">
                    <Link
                        href={"/resume.pdf"}
                        download="SandhyaResume"
                        target="_blank"
                    >
                        <Button
                            borderRadius='1.75rem'
                            className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'
                        >DOWNLOAD RESUME</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
