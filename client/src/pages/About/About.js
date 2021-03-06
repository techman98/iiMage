import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Cards"
import card from "../../components/Card/card"
import "../../pages/About/About.css"
import Anime from 'react-anime'
import { counter } from "@fortawesome/fontawesome-svg-core";
import Footer from '../../components/Footer'



class About extends Component {
  state = {
    card,
    array: ['X', 'PageTwo', 'Array'],
    string: 'XPageTwoString',
  };



  render() {
    return (
      <Anime translateY={50} direction="alternate" easing='easeInOutSine' >
        <div className="IMGOutput">

          {this.state.card.map(card => (
            <Card
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
              name={card.name}
              about={card.about}
              icon={card.icon}
              linkedin={card.linkedin}
              github={card.github}
            />
          ))}

        </div>
        <Footer />
      </Anime>);
  }
}

export default About;