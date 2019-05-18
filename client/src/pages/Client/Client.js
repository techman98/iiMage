import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from 'axios';


class Client extends Component {
  state = {
    selectedFile: null,
    array: ['X', 'PageTwo', 'Array'],
    string: 'XPageTwoString',
  };
  
  fileSelectedHandler = event => {
    this.setState({
      selectedFile:event.target.files[0]
    })
  }

  fileUploadHandler = event => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.post('',fd, {
      onUploadProgress: ProgressEvent => {
        console.log('Upload Progress:' + Math.round(ProgressEvent.loaded / ProgressEvent.total* 100)+'%' )
      }
    })
    .then(res => {
      console.log(res);
    })
  }

  componentDidMount() {
    API.getDocuments()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  render() {
    return (<div>
        <h1>Client Profile Page</h1>
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
    </div>);
  }
}

export default Client;
