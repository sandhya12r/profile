"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import projectsData from '@/data/projects.json';
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    tech: string[];
    image: string;
    url: string;
}
function Navbar({ className }: { className?: string }) {
    const myProjects = projectsData.projects.filter((project: Project) => project.title !== 'test')
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home">

                    </MenuItem>
                </Link>
                <Link href="#about">
                    <MenuItem setActive={setActive} active={active} item="About">

                    </MenuItem>
                </Link>
                <Link href="#skills">
                    <MenuItem setActive={setActive} active={active} item="Skills">

                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="flex flex-col text-sm space-y-4">

                        {myProjects.map((project: Project) => (
                            <div key={project.id}>
                                <HoveredLink href="#projects">{project.title}</HoveredLink>
                            </div>
                        ))}

                    </div>
                </MenuItem>
                <Link href="#contact">
                    <MenuItem setActive={setActive} active={active} item="contact">

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
