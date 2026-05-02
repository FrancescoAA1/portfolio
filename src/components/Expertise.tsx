import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faLink, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const niche = [
    {
        icon: faServer,
        title: "Enterprise Web Systems & Backend Engineering",
        description: "I build and maintain production-grade backend systems and web applications in large-scale enterprise environments and independent projects.",
        tags: ["Java", "Python", "C#", "REST APIs", "SQL", "PostgreSQL", "X++", "Docker", "Kubernetes", "Git", "Azure DevOps"]
    },
    {
        icon: faLink,
        title: "Web3 & Blockchain Applications",
        description: "I design and develop decentralized applications, combining smart contracts with modern web interfaces. I explore blockchain use cases in supply chains and digital ownership.",
        tags: ["Solidity", "Web3.js", "MetaMask", "JavaScript", "TypeScript", "Ethereum"]
    },
    {
        icon: faRobot,
        title: "AI-Assisted Systems & Testing Automation",
        description: "I use AI tools and automation to improve software reliability and development workflows, with a focus on testing, validation, and backend integration.",
        tags: ["Python", "OpenAI APIs", "Playwright", "SQL"]
    }
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>My Niche</h1>
            <div className="skills-grid">
                {niche.map((item, index) => (
                    <div key={index} className="skill">
                        <FontAwesomeIcon icon={item.icon} size="3x" className="skill-icon"/>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {item.tags.map((tag, idx) => (
                                <Chip key={idx} className='chip' label={tag} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;