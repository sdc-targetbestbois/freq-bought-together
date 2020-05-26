import React, { Component } from "react";


export default function ItemInfoUltimatelyBought({itemsUlt}) {
    return (
      <div>
        <div className="itemInfoUltimatelyBoughtDiv1">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsUlt[9].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsUlt[9].price} stirling</b></div>
          <div className="productName">{itemsUlt[9].itemName}</div>
        </div>
        </div>
        <div className="itemInfoUltimatelyBoughtDiv2">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsUlt[10].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsUlt[10].price} stirling</b></div>
          <div className="productName">{itemsUlt[10].itemName}</div>
        </div>
        </div>
        <div className="itemInfoUltimatelyBoughtDiv3">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsUlt[11].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsUlt[11].price} stirling</b></div>
          <div className="productName">{itemsUlt[11].itemName}</div>
        </div>
        </div>
        <div className="itemInfoUltimatelyBoughtDiv4">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsUlt[14].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsUlt[14].price} stirling</b></div>
          <div className="productName">{itemsUlt[14].itemName}</div>
        </div>
        </div>
        <div className="itemInfoUltimatelyBoughtDiv5">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsUlt[15].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsUlt[15].price} stirling</b></div>
          <div className="productName">{itemsUlt[15].itemName}</div>
        </div>
        </div>
        <div className="itemInfoUltimatelyBoughtDiv6">
        <div id="itemInfoContainer">
            <div className="productImageDiv"><img id="productImage" src={itemsUlt[16].imageLink} className="productImagePic" /></div>
          <div className="productCost"><b>{itemsUlt[16].price} stirling</b></div>
          <div className="productName">{itemsUlt[16].itemName}</div>
        </div>
        </div>
      </div>
    );
  }