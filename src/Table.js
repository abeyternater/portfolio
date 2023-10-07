import './Tablestyles.css';
import crewchiefiphone from './images/crewchiefiphonelanding.png';
import crewchiefiphone2 from './images/crewchiefiphonecontact.png';

function Table () {

    return (

        <table>
        <tr>
        <div className="crewchief">
        <div className="left"><td><h1>Crew Chief</h1><h3>Responsive React Web Application</h3><h3>Multiple Pages linked with React-Router package</h3><h3>Contact Form built with EmailJS</h3><ul>
        <li>Able to convert HTML, CSS, JS site to a React Application</li>
        <li>Learned how to use git add. , git commit -m "Message", and git push to publish to Github</li>
        <li>Deployed to Netlify through GitHub repository</li><li><a href="https://crewchief.netlify.app">Crew Chief React App</a></li></ul></td>
        </div>
        <td></td>
        <div className="right">
            
        <td><img className='landing' src={crewchiefiphone} alt="Logo" /></td><td><img className='contact' src={crewchiefiphone2} alt="Logo" /></td>
        </div>
        </div>


        </tr>
        
        </table>
    )
}
export default Table;