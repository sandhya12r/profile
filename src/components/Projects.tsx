'use client';

import projectsData from '@/data/projects.json';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    tech: string[];
    image: string;
    url: string;
}

function Projects() {
    const myProjects = projectsData.projects.filter((project: Project) => project.title !== 'test')
    return (
        <div className='py-20 bg-gray-900' id='projects'>
            <div>
                <div className="text-center">
                    <h2 className='tex-base text-teal-600 font-semibold tracking-wide uppercase'>My Projects</h2>
                    <p className='mt-2 text-3xl leading-8 font-extralight tracking-tight text-white sm:text-4xl'>Some of the Projects that I worked on</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center'>
                    {myProjects.map((project: Project) => (
                        <div key={project.id} className="flex justify-center">
                            <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                    <p className='text-lg sm:text-2xl text-black mt-4 mb-2 dark:text-neutral-200'>{project.title}</p>
                                    <img src={project.image} alt='not found' onError={(e) => (e.target as HTMLImageElement).src = 'loading.gif'} className='rounded flex-grow w-full h-full' />
                                    <p className='mt-5 text-base text-neutral-600 dark:text-neutral-200'>
                                        {project.tech.join(' | ')}
                                    </p>
                                    <p className='mt-4 text-base text-neutral-600 dark:text-neutral-400 flex-grow'>{project.description}</p>
                                    <Link href={project.url} className='uppercase mt-4 px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>View Project</Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link
                    href="https://github.com/sandhya12r/"
                    className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    View All Projects
                </Link>
            </div>
        </div>
    )
}

export default Projects
