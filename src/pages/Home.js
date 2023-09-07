import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub' 
import EmailIcon from '@material-ui/icons/Email'
import ResumeIcon from '@material-ui/icons/FileCopyOutlined'
import hand from '../assets/giphy.webp'
import '../styles/Home.css'
function Home(){
    return (
        <div className="home">
            <div className="about">
                <h2>Hello,<img src={hand} width="85px"></img> I'm Muthu Kesavan</h2>
                <div className="prompt">
                    <p>A Final year computer science student with strong passion of learning and building new things. </p>
                <a href="https://www.linkedin.com/in/muthu-kesavan-s-95425821b/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon/>
                    </a>
                    <a href="https://github.com/Muthu-kesavan" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon/>
                    </a>
                    <a href="mailto:muthukesavan6044@gmail.com">
                        <EmailIcon/>
                    </a>
                    <a href="https://drive.google.com/file/d/1NwHMrvF1PUmTS447t99KPSXlygtFHNkd/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                        <ResumeIcon/>
                    </a>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            HTML, CSS, React, MaterialUI.   </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            MongoDB.
                        </span>
                    </li>
                    <li className="item">
                        <h2>Programming languages</h2>
                        <span> Python, Javascript.</span>
                    </li>
                    <li className="item">
                        <h2>Cyber-security Tools</h2>
                        <span>Nmap, Wireshark, Metasploit, lazyscript, Autospy.</span>
                    </li>
                    <li className="item">
                        <h2>Operating systems</h2>
                        <span>Windows, Kali Linux.</span>
                    </li>
                    </ol>
            </div>
        </div>
    )
}
export default Home