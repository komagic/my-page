
import  './layer.less';
import React, { Component } from 'react'

export default class layer extends Component {
  render() {
    return (
   <div className="iframe-container">
  <iframe className="iframe-page" 
  src={process.env.PUBLIC_URL + './code.html'} 

  frameBorder="0" title="iframer"
  ></iframe>
   </div>

  )
  }

  componentDidMount(){
 
  }

  componentWillUnmount(){
  
  }
}


