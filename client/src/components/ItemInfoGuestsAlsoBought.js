import React, { Component } from "react";


export default function ItemInfo() {
    return (
      
      <div id="itemInfoContainer">
          <div className="productImageDiv"><img id="productImage" src="/images/crossbow.jpg" className="productImagePic" /></div>
        <div className="productCost"><b>$249.00</b></div>
        <div className="productName">One crossbow</div>
        {/* <br></br>
        <div className="checkboxDiv"><input type="checkbox" className="itemCheckbox"></input></div> */}
      </div>
    );
  }