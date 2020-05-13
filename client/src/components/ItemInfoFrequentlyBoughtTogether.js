import React, { Component } from "react";


export default function ItemInfoFrequentlyBoughtTogetherList({items}) {
  // console.log({items})
    return (
      <div>
         <div className="itemInfoFrequentlyBoughtTogether1">
      <div id="itemInfoFrequentlyBoughtTogetherContainer">
          <div className="productImageDivFrequentlyBoughtTogether"><img id="productImageFrequentlyBoughtTogether" src={items[1].imageLink} className="productImagePic" /></div>
        <div className="productCostFrequentlyBoughtTogether"><b>{items[1].price} stirling</b></div>
        <div className="productNameFrequentlyBoughtTogether">{items[1].itemName}</div>
        <br></br>
        <div className="checkboxDivFrequentlyBoughtTogether"><input type="checkbox" className="itemCheckbox"></input></div>
      </div>
      </div>

      <div className="itemInfoFrequentlyBoughtTogether2">
      <div id="itemInfoFrequentlyBoughtTogetherContainer">
      <div className="productImageDivFrequentlyBoughtTogether"><img id="productImageFrequentlyBoughtTogether" src={items[2].imageLink} className="productImagePic" /></div>
      <div className="productCostFrequentlyBoughtTogether"><b>{items[2].price} stirling</b></div>
      <div className="productNameFrequentlyBoughtTogether">{items[2].itemName}</div>
      <br></br>
      <div className="checkboxDivFrequentlyBoughtTogether"><input type="checkbox" className="itemCheckbox"></input></div>
      </div>
      </div>

        <div className="itemInfoFrequentlyBoughtTogether3">
        <div id="itemInfoFrequentlyBoughtTogetherContainer">
          <div className="productImageDivFrequentlyBoughtTogether"><img id="productImageFrequentlyBoughtTogether" src={items[3].imageLink} className="productImagePic" /></div>
        <div className="productCostFrequentlyBoughtTogether"><b>{items[3].price} stirling</b></div>
        <div className="productNameFrequentlyBoughtTogether">{items[3].itemName}</div>
        <br></br>
        <div className="checkboxDivFrequentlyBoughtTogether"><input type="checkbox" className="itemCheckbox"></input></div>
        </div>
        </div>
        </div>
    );
}