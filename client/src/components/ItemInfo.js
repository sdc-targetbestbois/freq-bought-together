import React, { Component } from "react";
const axios = require('axios');


export default function ItemInfo({firstItem}) {
   // console.log({firstItem});
    return (
      
      <div id="itemInfoContainer">
          <div className="productImageDiv"><img id="productImage" src={firstItem.imageLink} className="productImagePic" /></div>
        <div className="productCost"><b>{firstItem.price} stirling</b></div>
        <div className="productName">{firstItem.itemName}</div>
        <br></br>
        <div className="checkboxDiv"><input type="checkbox" className="itemCheckbox"></input></div>
      </div>
    );
  }
