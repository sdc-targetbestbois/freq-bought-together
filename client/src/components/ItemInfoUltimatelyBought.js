import React, { Component } from "react";


export default class ItemInfoUltimatelyBought extends Component {
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
          <div className="productImageDiv"><img id="productImage" src="/images/bronzeShield.jpg" className="productImagePic" /></div>
        <div className="productCost"><b>$140.00</b></div>
        <div className="productName">One bronze shield</div>
        {/* <br></br>
        <div className="checkboxDiv"><input type="checkbox" className="itemCheckbox"></input></div> */}
      </div>
    );
  }
}