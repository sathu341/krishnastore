import { Container,Row,Col,Navbar } from "react-bootstrap";
import lg from'../logo.svg'
import Adminnavs from "./adminnavs";
import { FaBeer,FaBehance,FaAffiliatetheme } from "react-icons/fa";
import { FiLogOut} from "react-icons/fi";
import Progressb from "./progressbar";

function Adminpage(){
    return(
        <>
         <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={lg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Krishna <i><FaAffiliatetheme/></i>Store
          </Navbar.Brand>
        </Container>
      </Navbar>

  <Container fluid>
    <Row>
        <Col lg={2} className="bg-success" style={{height:'100vh'}}>
       Dashboard
       <Adminnavs/>
 <i> <FaBeer/></i>
  <h1> <FaBehance/></h1>
  <h2 style={{textAlign:'center'}}>
    <a href="" style={{color:'white', fontSize:'50px' ,}}>
    <FiLogOut/>
    </a>
    
  </h2>
        </Col>
        <Col lg={10}>
            <Row className="mt-4">
                <Col>
                <h1> Progress of year</h1>
                <Progressb/>
                </Col>
            </Row>
        </Col>
    </Row>

  </Container>

        
        </>
    )
}

export default Adminpage;