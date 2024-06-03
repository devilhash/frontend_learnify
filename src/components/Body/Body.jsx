import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import './Body.css';
import IntroVideo from './introVideo/IntroVideo';
import Intro from './intro/Intro';
import Couresels from './courosels/Couresels';
import PopularSkill from './pupularskills/PopularSkill';
import FullStack from './fullstack/FullStack';

const Body=()=>{
    return(
        <div className = "body"> 
        <div className="introduction"> 
         
        <Row>
            <Col  xs={4}><Intro/></Col>
            <Col className='introduction_video'  > <IntroVideo/></Col>
        </Row>
        </div>
        <div className = "caurosels"> <Row className='caurosels'> <Couresels/></Row></div>
        <div className = "popularskills" id = "coursecontent"><PopularSkill/></div>
        <div className = "fullstack" id = "coursecontent"><FullStack/></div>
        </div>
        
       


    )
}
export default Body;