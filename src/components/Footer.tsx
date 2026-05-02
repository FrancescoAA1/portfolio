import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/FrancescoAA1" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/francesco-fantin-2819801a2/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>2026</p>
    </footer>
  );
}

export default Footer;