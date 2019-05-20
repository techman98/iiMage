import React, { Component } from 'react';
import API from '../../utils/API';
import "./Home.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Jumbo from '../../components/Jumbotron/Jumbo'
import { Container, Row, Col } from 'reactstrap';

import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Footer from '../../components/Footer'

library.add(faAtom)





class Home extends Component {

  render() {
    return (
      <div >
        <Jumbo />
        <Container fluid>
          <Row>
            {/* this one is missing xs=4 was playing with some stuff */}
            <Col xs="4" md={{ span: 0, offset: 0 }}>
              <FontAwesomeIcon className="icon" icon={['fa', 'book']}  />
              <br />
              <br />

              <h2 className="underTitle">About</h2>
              <p className="paragraph">iiMage is an image hosting platform that allows creators to share their photography work with clients and other creators.
With a membership clients are also able to interact with other clients and creaters based on common interests.
iiMage is the best way to check out new content, contact creators, and meet the up and comers of photography today.</p>

            </Col>


            <Col xs="4" md={{ span: 0, offset: 0 }} >
              <FontAwesomeIcon className="icon" icon={['fa', 'binoculars']} />
              <br />
              <br />

              <h2 className="underTitle">Explore</h2>
              <p className="paragraph">iiMage allows creators and clients to explore the talent of other creators. 
When using Explore in iiMage a user can interact with all creators or can narrow down their search based off of talent level.
Simply click the Explore button and be transported to a world of life through others eye spoken to you by their camera lens. </p>

            </Col>


            <Col xs="4">
              <FontAwesomeIcon className="icon" icon={['fa', 'user-tie']} />
              <br />
              <br />

              <h2 className="underTitle">Creators & Clients</h2>
              <p className="paragraph"> With iiMage creators images can be stored and displayed with ease through one platform. 
Wether it is to share with the world your wonderful trip to India or your univeristies graduation, iiMage will house the photos on your website.
Clients are able to sift through the many creators content and interact with said creators. </p>

            </Col>

          </Row>
        </Container>
      <Footer />
      </div>
    )
  }
}

export default Home;