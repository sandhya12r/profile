"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";


const content = [
    {
        title: "Hi! Let me introduce myself. I am Sandhya Rani.",
        description:
            "Dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. Currently employed in a dynamic role as a web developer, with a solid background built through two successful internships as a web and full-stack developer, I have honed my skills and always ready to learn new tech stack..",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/cert1.jpeg"
                    width={200}
                    height={200}
                    className="h-full w-full p-4"
                    alt="web developer"
                />
            </div>
        ),
    },
    {
        title: "Highest Qualification",
        description:
            "Completed Bachelor's of Vocation, Software Development from Guru Gobind Singh Indraprastha University, Delhi, India int the year 2022",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/cert2.jpg"
                    width={200}
                    height={200}
                    className="h-full w-full p-4"
                    alt="my pic"
                />
            </div>
        ),
    },
    {
        title: "Full-Stack Web Development",
        description:
            "Engaged in comprehensive Full-Stack web development training, gaining hands-on experience with a diverse range of technologies, actively working on exiting projects.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <Image
                    src="/cert3.jpg"
                    width={200}
                    height={200}
                    className="h-full w-full p-4"
                    alt="my pic"
                />
            </div>
        ),
    },
    {
        title: "Collaborative Approach",
        description:
            "I am accustomed to working in collaborative environments, valuing effective communication and teamwork. I thrive on challenges and am eager to contribute my technical skills and innovative mindset to the dynamic team.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/cert4.jpeg"
                    width={200}
                    height={200}
                    className="h-full w-full p-4"
                    alt="my pic"
                />
            </div>
        ),
    },
    {
        title: "Continuous Learning",
        description:
            "Given the rapidly evolving nature of technology, I am committed to continuous learning and staying abreast of the latest industry trends. My adaptability and eagerness to embrace new technologies make me well-equipped to navigate the ever-changing landscape of web development.",
    },
    {
        title: "",
        description:
            "",
    },
];

function About() {
    return (
        <div id="about" className="h-[40rem] w-full flex flex-col items-center justify-center bg-gray-900">
            <h2 className="tex-base text-teal-600 uppercase mb-10 text-3xl leading-8 font-extralight tracking-tight sm:text-4xl">About Me</h2>
            <BackgroundGradient className='rounded-[22px] bg-white dark:bg-gray-900 overflow-hidden h-full max-w-full'>
                <StickyScroll content={content} />
            </BackgroundGradient>
        </div>
    )
}

export default About
