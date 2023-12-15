import Carousel from 'react-bootstrap/Carousel';
import sl1 from '../images/slide1.jpg';
import sl2 from '../images/slide2.jpg';
import sl3 from '../images/slide3.jpg';

function Slidepage() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={sl1} style={{width:'100%',height:'457px'}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={800}>
      <img src={sl2} style={{width:'100%',height:'457px'}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sl3} style={{width:'100%',height:'457px'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidepage;