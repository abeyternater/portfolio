import './App.css';
import 'animate.css';
/*import {Link} from 'react-router-dom';*/
import {Navbar} from './Navbar';

import Table from './Table';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Table></Table>
  </div>
  );
}

export default App;
