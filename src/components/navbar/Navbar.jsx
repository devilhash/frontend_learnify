import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Navbar = () => {
    return(
        <div className="navbar">
            <Row  >
                <div className='navRow'> 
                <Col xs="auto"><span class="material-symbols-outlined">menu</span>
                 </Col> 
                 <Col xs="auto" className="name"><h4 >Learnit</h4></Col>
                 <Col xs="auto" className="name"><h6 >courseList</h6></Col>
                 <Col xs="auto" className="name"><h6 >purchase</h6></Col>
                 <Col xs="auto" className="name"><h6 >Demovides</h6></Col>
                 
                <Col xs = "auto"  > <input type="text" className="search" placeholder="what are you learning today?"></input>
 </Col>
                <Col xs="auto" className="name"><h6 >login</h6></Col>       
                <Col xs="auto" className="name"><button className='getPrime'>GetPrime</button></Col> 
                </div>    
            </Row>
 
 
        </div>
    );
}

export default Navbar;