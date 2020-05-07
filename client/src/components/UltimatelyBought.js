import React, { Component } from "react";
import ItemInfoUltimatelyBought from '../components/ItemInfoUltimatelyBought';


export default class UltimatelyBought extends Component {
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
        <div>
              <div className="itemInfoUltimatelyBoughtDiv1"><ItemInfoUltimatelyBought /></div>
              <div className="itemInfoUltimatelyBoughtDiv2"><ItemInfoUltimatelyBought /></div>
              <div className="itemInfoUltimatelyBoughtDiv3"><ItemInfoUltimatelyBought /></div>
              <div className="itemInfoUltimatelyBoughtDiv4"><ItemInfoUltimatelyBought /></div>
              <div className="itemInfoUltimatelyBoughtDiv5"><ItemInfoUltimatelyBought /></div>
              <div className="itemInfoUltimatelyBoughtDiv6"><ItemInfoUltimatelyBought /></div>
        </div>
    );
  }
}
