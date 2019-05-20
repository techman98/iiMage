import React from "react";
// import "./Card.css";
import "../Card/Post.css"
import { MDBBtn } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = props => (
    <article className="Post">
    <header>
        <div className="Post-user">
            <div className="Post-user-avatar">
            <img alt={props.name} src={props.icon} />
            </div>
            <div className="Post-user-nickname">
                <span>{props.name}</span>
            </div>
        </div>
    </header>
    <div className="Post-image">
        <div className="Post-image-bg">
        <img alt={props.name} src={props.image} />
        </div>
    </div>
    <div className="Post-caption">
        <strong><h3>{props.name}</h3></strong>
        <hr/>
        <h5>About Me:</h5>
        <p>{props.about}</p>
    </div>
    <div>
    <MDBBtn href={props.github}><span className="aboutButton"><FontAwesomeIcon icon={['fab', 'github']}/></span></MDBBtn>
    <MDBBtn href={props.linkedin}><span className="aboutButton"><FontAwesomeIcon icon={['fab', 'linkedin']}/></span></MDBBtn>
    </div>
</article>
);
export default Card;