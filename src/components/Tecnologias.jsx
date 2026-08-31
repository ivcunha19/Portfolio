import React from 'react'
import { useTranslation } from 'react-i18next';

import {
    SiSpringboot,
    SiCplusplus,
    SiC,
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiLinux,
    SiGit,
    SiPostgresql,
    SiHtml5,
    SiNodedotjs,
    SiPython
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaFigma } from "react-icons/fa";

const techList = [
{
    title: "Back-end",
    items: [
    { name: "Java", icon: FaJava },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "NodeJS", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "C++", icon: SiCplusplus },
    { name: "C", icon: SiC },
    { name: "Python", icon: SiPython }
    ],
},
{
    title: "Front-end",
    items: [
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    ],
},
{
    title: "Ferramentas & DevOps",
    items: [
    { name: "Linux", icon: SiLinux },
    { name: "Git", icon: SiGit },
    { name: "Figma", icon: FaFigma},
    ],
},
];

export default function TechStack() {
    const { t } = useTranslation();
return (
    <div className="w-full max-w-6xl mt-12 flex flex-col gap-10 pointer-events-auto col-span-3">
    <h2 className="font-title font-bold text-4xl text-white text-center">
        {t('projetos.techLabel')}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {techList.map((section) => (
        <div
            key={section.title}
            className="bg-gray-950 p-6 rounded-2xl border border-gray-900 flex flex-col gap-6"
        >
            <h3 className="text-xl font-bold text-white border-b border-gray-800 pb-3 text-left">
            {section.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
            {section.items.map((tech) => {
                const IconComponent = tech.icon;
                return (
                <div
                    key={tech.name}
                    className="group bg-gray-900/60 border border-gray-800/80 hover:border-cyan-500/50 p-4 rounded-xl flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                    <IconComponent className="text-3xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-gray-200 font-medium text-xs text-center">
                    {tech.name}
                    </span>
                </div>
                );
            })}
            </div>
        </div>
        ))}
    </div>
    </div>
);
}