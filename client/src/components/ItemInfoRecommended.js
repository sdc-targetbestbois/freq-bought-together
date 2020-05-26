import React, { Component } from "react";



export default function ItemInfoRecommended({itemsRec}) {
  // console.log({itemsRec});
    return (
      <div>
      <div className="itemInfoDiv1">
      <div id="itemInfoContainer">
          <div className="productImageDiv"><img id="productImage" src={itemsRec[3].imageLink} className="productImagePic" /></div>
        <div className="productCost"><b>{itemsRec[3].price} stirling</b></div>
        <div className="productName">{itemsRec[3].itemName}</div>
        </div>
        </div>
        <div className="itemInfoDiv2">
      <div id="itemInfoContainer">
        <div className="productImageDiv"><img id="productImage" src={itemsRec[4].imageLink} className="productImagePic" /></div>
        <div className="productCost"><b>{itemsRec[4].price} stirling</b></div>
        <div className="productName">{itemsRec[4].itemName}</div>
        </div>
        </div>
        <div className="itemInfoDiv3">
      <div id="itemInfoContainer">
        <div className="productImageDiv"><img id="productImage" src={itemsRec[5].imageLink} className="productImagePic" /></div>
        <div className="productCost"><b>{itemsRec[5].price} stirling</b></div>
        <div className="productName">{itemsRec[5].itemName}</div>
        </div>
        </div>
        <div className="itemInfoDiv4">
      <div id="itemInfoContainer">
        <div className="productImageDiv"><img id="productImage" src={itemsRec[6].imageLink} className="productImagePic" /></div>
        <div className="productCost"><b>{itemsRec[6].price} stirling</b></div>
        <div className="productName">{itemsRec[6].itemName}</div>
        </div>
        </div>
        <div className="itemInfoDiv5">
      <div id="itemInfoContainer">
        <div className="productImageDiv"><img id="productImage" src={itemsRec[7].imageLink} className="productImagePic" /></div>
        <div className="productCost"><b>{itemsRec[7].price} stirling</b></div>
        <div className="productName">{itemsRec[7].itemName}</div>
        </div>
        </div>
        <div className="itemInfoDiv6">
      <div id="itemInfoContainer">
        <div className="productImageDiv"><img id="productImage" src={itemsRec[8].imageLink} className="productImagePic" /></div>
        <div className="productCost"><b>{itemsRec[8].price} stirling</b></div>
        <div className="productName">{itemsRec[8].itemName}</div>
        </div>
        </div>
        <br></br>
        {/* <div className="checkboxDiv"><input type="checkbox" className="itemCheckbox"></input></div> */}
      </div>
    );
  }