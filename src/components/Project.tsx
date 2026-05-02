import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/FrancescoAA1/AESBenchmark" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/FrancescoAA1/AESBenchmark" target="_blank" rel="noreferrer"><h2>AESBenchmark</h2></a>
                <p>High-performance AES encryption benchmarking tool built with C++17 and CMake. Comprehensive cryptographic performance analysis and comparison.</p>
            </div>
            <div className="project">
                <a href="https://github.com/FrancescoAA1/Klotski" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/FrancescoAA1/Klotski" target="_blank" rel="noreferrer"><h2>Klotski Puzzle Game</h2></a>
                <p>Interactive sliding puzzle game implementation using Java and Maven. Features intelligent algorithm optimization and user-friendly GUI.</p>
            </div>
            <div className="project">
                <a href="https://github.com/FrancescoAA1/Wine3Locks-DApp" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/FrancescoAA1/Wine3Locks-DApp" target="_blank" rel="noreferrer"><h2>Wine3Locks Ethereum DApp</h2></a>
                <p>Decentralized blockchain application built with Solidity smart contracts, Web3.js, and MetaMask integration. Secure wine trading platform on Ethereum.</p>
            </div>
            <div className="project">
                <a href="https://github.com/FrancescoAA1/e-vibe" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/FrancescoAA1/e-vibe" target="_blank" rel="noreferrer"><h2>E-Vibe Event Platform</h2></a>
                <p>Full-stack event management platform with Java backend, REST APIs, and responsive frontend using HTML/CSS/Bootstrap. Real-time event coordination features.</p>
            </div>
            <div className="project">
                <a href="https://github.com/FrancescoAA1/BattleShip" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/FrancescoAA1/BattleShip" target="_blank" rel="noreferrer"><h2>BattleShip Game</h2></a>
                <p>Classic naval warfare game implemented in C++ with intelligent AI opponent. 12x12 grid gameplay with advanced strategy algorithms.</p>
            </div>
            <div className="project">
                <a href="https://github.com/FrancescoAA1/Registro-Elettronico" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/FrancescoAA1/Registro-Elettronico" target="_blank" rel="noreferrer"><h2>Registro Elettronico</h2></a>
                <p>Enterprise school management system built with ASP.NET and SQL Server. Secure student records with SHA-256 encryption and role-based access control.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;