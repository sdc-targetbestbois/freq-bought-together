import React, { Component } from "react";



export default class ItemInfoRecommended extends Component {
  constructor() {
    super();
    this.state = {
      headerOne: "Frequently bought together",
      productName: "productName",
      cost: "costGoesHere"
    };
  }
  render() {
    return (
      
      <div id="itemInfoContainer">
          <div className="productImageDiv"><img id="productImage" src='/images/catspawmain.jpg' className="productImagePic" /></div>
        <div className="productCost"><b>$14.00</b></div>
        <div className="productName">One silver dagger</div>
        <br></br>
        {/* <div className="checkboxDiv"><input type="checkbox" className="itemCheckbox"></input></div> */}
      </div>
    );
  }
}