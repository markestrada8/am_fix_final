import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                <div className="top-about">
                    Hi! I'm Alexis, a biology graduate turned software developer. 
                    I earned my Bachelor’s degree in Biology from Brigham Young University–Hawaii, 
                    where I developed a passion for problem-solving and adaptability. 
                    My curiosity led me to pursue software development, and I honed my skills through the Bottega coding bootcamp, 
                    gaining hands-on experience in full-stack development.
                </div>
                    <ul>Skills:
                        <li>Languages: JavaScript, Python, HTML/CSS</li>
                        <li>Frameworks: React.js, Node.js, Express.js</li>
                        <li> Databases: MongoDB, PostgreSQL</li>
                        <li>Tools: Git/GitHub, RESTful APIs, Agile Development</li>
                        <li>Soft Skills: Critical Thinking, Problem-Solving, Team Collaboration</li>
                    Experiences:
                        <li>Education: Bachelor of Science in Biology, Brigham Young University–Hawaii
                        Bootcamp: Bottega Tech (Full-Stack Development)</li>
                    Professional Roles:
                        <li>Safety Diver and Hostess, Hawaii—Teamwork and communication</li>
                        <li>Internship in Cyprus—Research and organization</li>
                        <li>Volunteer Work, Utila, Honduras—Environmental conservation</li>
                    Projects:
                        <li>Portfolio Website: Responsive site showcasing my skills and projects (React.js, CSS)</li>
                        <li>Task Manager App: Full-stack application for task organization (Node.js, Express.js, MongoDB)</li>
                    </ul>
                <div className="bottom-about">
                    Interests
                    Outside of coding, I enjoy exploring nature, 
                    tackling fitness challenges like CrossFit, 
                    and traveling to experience new cultures. These activities inspire creativity and adaptability in my work.
                </div>
                
            </div>
        </div>
    );
}