import Row from 'react-bootstrap/esm/Row';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Body from './components/Body/Body';

function App() {
  return (
     <div >
      <Row><Navbar/></Row>
      <Row><Body/></Row>
       
     </div>
  );
}

export default App;
