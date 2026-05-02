import React, { useState } from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

const projects = [
    {
        id: 1,
        title: "AESBenchmark",
        description: "High-performance AES encryption benchmarking tool built with C++17 and CMake. Comprehensive cryptographic performance analysis and comparison.",
        image: mock01,
        link: "https://github.com/FrancescoAA1/AESBenchmark"
    },
    {
        id: 2,
        title: "Klotski Puzzle Game",
        description: "Interactive sliding puzzle game implementation using Java and Maven. Features intelligent algorithm optimization and user-friendly GUI.",
        image: mock02,
        link: "https://github.com/FrancescoAA1/Klotski"
    },
    {
        id: 3,
        title: "Wine3Locks Ethereum DApp",
        description: "Decentralized blockchain application built with Solidity smart contracts, Web3.js, and MetaMask integration. Secure wine trading platform on Ethereum.",
        image: mock03,
        link: "https://github.com/FrancescoAA1/Wine3Locks-DApp"
    },
    {
        id: 4,
        title: "E-Vibe Event Platform",
        description: "Full-stack event management platform with Java backend, REST APIs, and responsive frontend using HTML/CSS/Bootstrap. Real-time event coordination features.",
        image: mock04,
        link: "https://github.com/FrancescoAA1/e-vibe"
    },
    {
        id: 5,
        title: "BattleShip Game",
        description: "Classic naval warfare game implemented in C++ with intelligent AI opponent. 12x12 grid gameplay with advanced strategy algorithms.",
        image: mock05,
        link: "https://github.com/FrancescoAA1/BattleShip"
    },
    {
        id: 6,
        title: "Registro Elettronico",
        description: "Enterprise school management system built with ASP.NET and SQL Server. Secure student records with SHA-256 encryption and role-based access control.",
        image: mock06,
        link: "https://github.com/FrancescoAA1/Registro-Elettronico"
    }
];

function Project() {
    const [activeId, setActiveId] = useState(1);

    return(
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <a 
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`project-card ${activeId === project.id ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${project.image})` }}
                        onMouseEnter={() => setActiveId(project.id)}
                    >
                        <div className="project-overlay"></div>
                        <div className="project-desc">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Project;
