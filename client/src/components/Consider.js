import React, { Component } from "react";
import ItemInfo from '../components/ItemInfo';
import ItemInfoRecommended from '../components/ItemInfoRecommended';


export default class Consider extends Component {
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
              <div className="itemInfoDiv1"><ItemInfoRecommended /></div>
              <div className="itemInfoDiv2"><ItemInfoRecommended /></div>
              <div className="itemInfoDiv3"><ItemInfoRecommended /></div>
              <div className="itemInfoDiv4"><ItemInfoRecommended /></div>
              <div className="itemInfoDiv5"><ItemInfoRecommended /></div>
              <div className="itemInfoDiv6"><ItemInfoRecommended /></div>
        </div>
    );
  }
}






