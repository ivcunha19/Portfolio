import React from 'react';
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
            { name: "Figma", icon: FaFigma },
        ],
    },
];

export default function TechStack() {
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-6xl mt-6 sm:mt-10 flex flex-col gap-6 sm:gap-8 pointer-events-auto">
            <h2 className="font-title font-bold text-2xl sm:text-3xl md:text-4xl text-white text-center">
                {t('projetos.techLabel')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
                {techList.map((section) => (
                    <div
                        key={section.title}
                        className="relative bg-slate-900/40 backdrop-blur-xl backdrop-saturate-150 p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 flex flex-col gap-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/20 group/card overflow-hidden"
                    >
                        {/* Linha reflexiva superior de especularidade do vidro */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

                        <h3 className="text-lg sm:text-xl font-bold text-white border-b border-white/10 pb-3 text-left font-title">
                            {section.title}
                        </h3>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {section.items.map((tech) => {
                                const IconComponent = tech.icon;
                                return (
                                    <div
                                        key={tech.name}
                                        className="group bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-blue-500/60 backdrop-blur-sm p-3 sm:p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                                    >
                                        <IconComponent className="text-2xl sm:text-3xl text-gray-300 group-hover:text-blue-400 transition-colors drop-shadow-sm" />
                                        <span className="text-gray-200 group-hover:text-white font-medium text-xs text-center line-clamp-1 transition-colors">
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