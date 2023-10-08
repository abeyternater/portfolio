import {Navbar} from './Navbar';
import { Contactform } from './Contactform';
import './contactpagestyles.css';
import 'animate.css';

function Contactpage() {
  return (
    <div className="Contactpage">
      <Navbar></Navbar>
      <div className='form'>
      <Contactform></Contactform>
      </div>
    </div>
  );
}

export default Contactpage;