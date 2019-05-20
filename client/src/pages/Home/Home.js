import React, { Component } from 'react';
import API from '../../utils/API';
import "./Home.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Jumbo from '../../components/Jumbotron/Jumbo'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../../components/Footer'


class Home extends Component {

  render() {
    return (
      <div >
        <Jumbo />
        <Container>
          <Row>
            {/* this one is missing xs=4 was playing with some stuff */}
            <Col xs="4" md={{ span: 3, offset: 0 }}>
              <FontAwesomeIcon className="icon" icon="stroopwafel" />
              <br />
              <br />
              <p className="paragraph">iiMage is a photo sharing and storing website. We understand that each photo you take represents a split-second in time that can never be recaptured. That photo has the potential to shape memories for generations to come. By storing and sharing your photos on our website, you're given the confidence of never losing your photos!</p>
            </Col>


            <Col xs="4" >
              <FontAwesomeIcon className="icon" icon="stroopwafel" />
              <br />
              <br />
              <p className="paragraph">Creators are what sets iiMage apart from other photo storing/sharing websites. Here, creators are able to use their skills to help others. They can provide photoshop and photography services for our clients. Essentially, we want you to get paid for your talent and use iiMage as a motivation to improve your skills. </p>
            </Col>


            <Col xs="4">
              <FontAwesomeIcon className="icon" icon="stroopwafel" />
              <br />
              <br />
              <p className="paragraph">Clients are our service-seekers. Our clients can create a profile where they store their photos in customized folders and can share via links. Additionally, they can contact our creators directly though email to negotiate services. With iiMage, you can contact creators ranging from beginners to experts who can capture your iiMage how you pictured it. </p>
            </Col>

          </Row>
        </Container>
      <Footer />
      </div>
    )
  }
}

export default Home;