import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

import ImageUpload from '../../components/ImageUpload/ImageUpload'

import { Image } from '../../components/Image/Image';
import Email from '../../components/Email'

import categories from './categories';
import './Creator.css';
// import '../../components/Email/Email'


class Creator extends Component {


  fileSelectedHandler = event => {
    console.log(event.target);
  }

  render() {
    return (
    <div>
      <div className = "grid">
        <div className="Bio">
          <p>Hi my name is Tyler, I like taking pictures and editing them to create unique moments captured in history for those who have hired me. </p>
          <Email />
        </div>
        {categories.map((category, i) => (
          <Image className="Image" {...category} key = {i} url = {categories[i].image} text = {categories[i].category} />
          ))}
          <ImageUpload className="Upload"/>
      </div> 
    </div>
    );
  }
}

export default Creator;
