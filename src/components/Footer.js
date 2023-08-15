import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub'; 
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/muthu-kesavan-s-95425821b/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/Muthu-kesavan" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon /> 
                </a>
                <a href="mailto:muthukesavan6044@gmail.com">
                    <EmailIcon />
                </a>
            </div>
            <p>&copy; 2023  All rights reserved</p>
        </div>
    );
}

export default Footer;