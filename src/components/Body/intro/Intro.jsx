import Row from "react-bootstrap/esm/Row";
import './intro.css'

const Intro = () => {
    return(
        <div className="intro">
            <Row>
                <h1>Learnit!!!</h1>
                <h3>Get the best courses offerd by Learnit</h3>
                <button>Join Here</button>
                <h6>or check</h6>
                <button>courseList</button>
            </Row>
        </div>
    );

};

export default Intro;