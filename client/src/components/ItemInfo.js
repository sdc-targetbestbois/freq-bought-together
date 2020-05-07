import React, { Component } from "react";
const axios = require('axios');


export default class ItemInfo extends Component {
  constructor() {
    super();
    this.state = {
      headerOne: "Frequently bought together",
      productName: "productName",
      cost: "costGoesHere",
      imageLink: ""
    };
    this.getFirstItem = this.getFirstItem.bind(this);
  }


  componentDidMount() {
    this.getFirstItem();
  }



   getFirstItem(){
    axios.get('/api/firstItem')
    .then((response) => {
      // handle success
      this.setState({
        productName: response.data[0].itemName,
        imageLink: response.data[0].imageLink,
        cost: response.data[0].price
      })
      console.log(response.data[0].imageLink);
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
          <div className="productImageDiv"><img id="productImage" src={this.state.imageLink} className="productImagePic" /></div>
        <div className="productCost"><b>{this.state.cost} stirling</b></div>
        <div className="productName">{this.state.productName}</div>
        <br></br>
        <div className="checkboxDiv"><input type="checkbox" className="itemCheckbox"></input></div>
      </div>
    );
  }
}