import React, { Component } from "react";


export default function ItemInfoGuestsAlsoBought({itemsAlsoBought}) {
    return (
      <div>
        <div className="itemInfoGuestsAlsoBoughtDiv1">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsAlsoBought[15].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsAlsoBought[15].price} stirling</b></div>
          <div className="productName">{itemsAlsoBought[15].itemName}</div>
        </div>
        </div>
        <div className="itemInfoGuestsAlsoBoughtDiv2">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsAlsoBought[16].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsAlsoBought[16].price} stirling</b></div>
          <div className="productName">{itemsAlsoBought[16].itemName}</div>
        </div>
        </div>
        <div className="itemInfoGuestsAlsoBoughtDiv3">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsAlsoBought[17].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsAlsoBought[17].price} stirling</b></div>
          <div className="productName">{itemsAlsoBought[17].itemName}</div>
        </div>
        </div>
        <div className="itemInfoGuestsAlsoBoughtDiv4">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsAlsoBought[18].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsAlsoBought[18].price} stirling</b></div>
          <div className="productName">{itemsAlsoBought[18].itemName}</div>
        </div>
        </div>
        <div className="itemInfoGuestsAlsoBoughtDiv5">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsAlsoBought[19].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsAlsoBought[19].price} stirling</b></div>
          <div className="productName">{itemsAlsoBought[19].itemName}</div>
        </div>
        </div>
        <div className="itemInfoGuestsAlsoBoughtDiv6">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsAlsoBought[20].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsAlsoBought[20].price} stirling</b></div>
          <div className="productName">{itemsAlsoBought[20].itemName}</div>
        </div>
        </div>
      </div>
    );
  }