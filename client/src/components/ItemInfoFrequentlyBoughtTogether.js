import React, { Component } from "react";


export default class ItemInfoFrequentlyBoughtTogether extends Component {
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
      
      <div id="itemInfoFrequentlyBoughtTogetherContainer">
          <div className="productImageDivFrequentlyBoughtTogether"><img id="productImageFrequentlyBoughtTogether" src='/images/bronzeShield.jpg' className="productImagePic" /></div>
        <div className="productCostFrequentlyBoughtTogether"><b>$148.00</b></div>
        <div className="productNameFrequentlyBoughtTogether">One bronze shield</div>
        <br></br>
        <div className="checkboxDivFrequentlyBoughtTogether"><input type="checkbox" className="itemCheckbox"></input></div>
      </div>
    );
  }
}