import './Tablestyles.css';
import React from 'react';
import crewchiefiphone from './crewchiefiphonelanding.png';
import crewchiefiphone2 from './crewchiefiphonecontact.png';
import studybuddyoniphone from './studybuddyiphone.png';
import studybuddyoniphone2 from './studybuddyiphone2.png';


function Table () {

    return (
        <div className="Table1">
            <table>
                <tbody>
                    <tr className="row">

                        <td className='left'>
                            <h1>
                                <a className='links' href="https://crewchief.netlify.app" rel="noreferrer" target="_blank">Crew Chief</a>
                            </h1>
                            <h3>Responsive React Web Application</h3>
                            <h3>Multiple Pages linked with React-Router package</h3>
                            <h3>Contact Form built with EmailJS</h3>
                            <ul>
                                <li>Able to convert HTML, CSS, JS site to a React Application</li>
                                <li>Learned how to use git add. , git commit -m &rsquoMessage&rsquo, and git push to publish to Github</li>
                                <li>Deployed to Netlify through GitHub repository</li>
                            </ul>
                        </td>
            
                        <td className="right">
                            <a className='links' href="https://crewchief.netlify.app" rel="noreferrer" target="_blank">
                                <img className='landing' src={crewchiefiphone} alt="CrewChiefOnIphone" />
                            </a>
                            <a className='links' href="https://crewchief.netlify.app/" rel="noreferrer" target="_blank"><img className='contact' src={crewchiefiphone2} alt="Logo" />
                            </a>
                        </td>
                    </tr>
                    <tr className="row">

                        <td className='left'>
                            <h1>
                                <a className='links' href="https://studybuddysd.netlify.app" rel="noreferrer" target="_blank">Study Buddy</a>
                            </h1>
                            <h3>Responsive React Web Application</h3>
                            <h3>Single Page Application</h3>
                            <ul>
                                <li>Built Application efficiently and effectively</li>
                                <li>Practiced setting up react app with git published to Github Repo</li>
                                <li>Deployed to Netlify through GitHub repository</li>
                            </ul>
                        </td>
            
                        <td className="right">
                            <a className='links' href="https://studybuddysd.netlify.app" rel="noreferrer" target="_blank">
                                <img className='landing' src={studybuddyoniphone} alt="StudyBuddyOnIphone" />
                            </a>
                            <a className='links' href="https://studybuddy.netlify.app/" rel="noreferrer" target="_blank">
                                <img className='contact' src={studybuddyoniphone2} alt="StudyBuddyOnIphone2" />
                            </a>
                        </td>
                    </tr>
        
        
                </tbody>
            </table>
        </div>
    )
}
export default Table;