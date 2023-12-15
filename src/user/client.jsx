import { Col, Container, Row } from "react-bootstrap";
import b1 from'../images/logo/coca_cola.jpg';
import b2 from '../images/logo/ujala.jpg';
import b3 from '../images/logo/aashirvaad.png';
import Imagecard from "./cards";
function Client(){
    return(
        <>
        <Container>
          <Row className="mt-4">
            <Col lg={4}>
                <Imagecard  title="Coca Cola" imgpath={b1} content="coca cola A quality products "/>
            </Col>
            <Col lg={4}>
                <Imagecard  title="Ujala" imgpath={b2} content="Ujala A quality products "/>
            </Col>
            <Col lg={4}>
                <Imagecard  title="Aashirvaad" imgpath={b3} content="Aashirvaad A quality products "/>
            </Col>
          </Row>
        </Container>
        </>
    )
}
export default Client;