import React, { Component } from "react";
const axios = require('axios');


export default class ItemInfo extends Component {
  constructor() {
    super();
    this.state = {
      headerOne: "Frequently bought together",
      productName: "productName",
      cost: "costGoesHere"
    };
  }


  componentDidMount() {
    axios.get('/api/firstItem')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }


  render() {
    return (
      
      <div id="itemInfoContainer">
          <div className="productImageDiv"><img id="productImage" src='/images/catspawmain.jpg' className="productImagePic" /></div>
        <div className="productCost"><b>$14.00</b></div>
        <div className="productName">One silver dagger</div>
        <br></br>
        <div className="checkboxDiv"><input type="checkbox" className="itemCheckbox"></input></div>
      </div>
    );
  }
}