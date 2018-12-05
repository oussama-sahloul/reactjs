import React, { Component } from 'react';


const topBarre = (props) => {
  return (<nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">{props.lentstate}</a>
      </div>
    </div>
  </nav>);
}
 
export default topBarre;