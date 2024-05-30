'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const skills1 = [
    {
        quote: '90%',
        name: 'HTML5 & CSS3',
        title: ''
    },
    {
        quote: '80%',
        name: 'Javascript (ES6+)',
        title: ''
    },
    {
        quote: '60%',
        name: 'React.js & Next.js',
        title: ''
    },
    {
        quote: '70%',
        name: 'Tailwind CSS',
        title: ''
    }
]

const skills2 = [
    {
        quote: '70%',
        name: 'JAVA & J2EE',
        title: ''
    },
    {
        quote: '60%',
        name: 'Springboot & Microservices',
        title: ''
    },
    {
        quote: '70%',
        name: 'Node.js & Express.js',
        title: ''
    },
    {
        quote: '80%',
        name: 'MYSQL & MongoDB',
        title: ''
    }

]

function Skills() {
    return (
        <div id="skills" className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className='tex-base text-teal-600 font-semibold tracking-wide uppercase mb-6'>My Skills</h2>
            <h2 className="text-3xl font-bold mb-8 text-center z-10">Mastering Skills & Refining My Core Competencies</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <h1 className="text-xl font-bold mt-3 text-center z-10">Client-Side</h1>
                    <InfiniteMovingCards
                        items={skills1}
                        direction="left"
                        speed="fast"
                    />
                    <h1 className="text-xl font-bold mt-3 text-center z-10">Server-Side</h1>
                    <InfiniteMovingCards
                        items={skills2}
                        direction="right"
                        speed="fast"
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills
