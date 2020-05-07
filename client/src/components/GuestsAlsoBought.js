import React, { Component } from "react";
import ItemInfoGuestsAlsoBought from '../components/ItemInfoGuestsAlsoBought';


export default class GuestsAlsoBought extends Component {
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
              <div className="itemInfoGuestsAlsoBoughtDiv1"><ItemInfoGuestsAlsoBought /></div>
              <div className="itemInfoGuestsAlsoBoughtDiv2"><ItemInfoGuestsAlsoBought /></div>
              <div className="itemInfoGuestsAlsoBoughtDiv3"><ItemInfoGuestsAlsoBought /></div>
              <div className="itemInfoGuestsAlsoBoughtDiv4"><ItemInfoGuestsAlsoBought /></div>
              <div className="itemInfoGuestsAlsoBoughtDiv5"><ItemInfoGuestsAlsoBought /></div>
              <div className="itemInfoGuestsAlsoBoughtDiv6"><ItemInfoGuestsAlsoBought /></div>
        </div>
    );
  }
}
