import React, { Component } from "react";
import ItemInfo from '../../client/src/components/ItemInfo.js';
import ItemInfoFrequentlyBoughtTogether from "../../client/src/components/ItemInfoFrequentlyBoughtTogether.js";
import Consider from "./components/Consider";
import UltimatelyBought from "./components/UltimatelyBought";
import GuestsAlsoBought from "./components/GuestsAlsoBought";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      headerOne: "Frequently bought together",
      productName: "productName",
      cost: "costGoesHere",
      tab: "consider-tab"
    };
    this.tab = this.tab.bind(this);
  }
  tab(e){
    this.setState({tab: e.currentTarget.id});
  } 
  render() {
    return (
      
      <div>
        <center>
        <div className="mainContainer">
           <div className="thisItem">

          <div className="thisItemTitle">
           <h3>This item:</h3>
          </div>

            <ItemInfo />
          </div>
          <div className="frequentlyBoughtTogether">
            <div className="frequentlyBoughtTogetherTitle">
              <h3>Frequently bought together</h3>
            </div>
            <div className="itemInfoFrequentlyBoughtTogether1"><ItemInfoFrequentlyBoughtTogether /></div>
            <div className="itemInfoFrequentlyBoughtTogether2"><ItemInfoFrequentlyBoughtTogether /></div>
            <div className="itemInfoFrequentlyBoughtTogether3"><ItemInfoFrequentlyBoughtTogether /></div>
          </div>
          <div className="subtotal">
            <div className="subtotalDollarAmt">Subtotal: <b>$458.00</b> (4 items)</div>
            <button className="button addAllToCart">Add all 4 to cart</button>
          </div>
 
        </div>
        
<br></br>
<br></br>
<br></br>
<br></br>

        <div className="recommendedContainer">
          <div className="recommendedTitle">
            <center>
              <h2>Recommended</h2>
            </center>
          </div>
          <div className="threeOptionsBar">
            <div className="threeOptionsBarText">
              <ul id="tabBar">
                <center>
                  <li className={`moreToConsiderTitle ${this.state.tab === 'consider-tab' ? 'selectedTab' : ''}`} id='consider-tab' onClick={this.tab}>More to consider</li>
                  <li className={`guestsUltimatelyBoughtTitle ${this.state.tab === 'ultimatelyBought-tab' ? 'selectedTab' : ''}`} id='ultimatelyBought-tab' onClick={this.tab}>Guests ultimately bought</li>
                  <li className={`guestsAlsoBoughtTitle ${this.state.tab === 'alsoBought-tab' ? 'selectedTab' : ''}`} id='alsoBought-tab' onClick={this.tab}>Guests also bought</li>
                </center>
              </ul>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="itemContainerHolder">
            <div className="inner" id="moreToConsider">
              {this.state.tab === 'consider-tab' ? <Consider /> : null}
            </div>
            <div className="inner" id="guestsUltimatelyBought">
              {this.state.tab === 'ultimatelyBought-tab' ? <UltimatelyBought /> : null}
            </div>
            <div className="inner" id="guestsAlsoBought">
              {this.state.tab === 'alsoBought-tab' ? <GuestsAlsoBought /> : null}
            </div>
          </div>

          <div className="showMoreBtnContainer">
            <center>
              <button className="showMoreBtn">Show more (6)</button>
            </center>
          </div>
           <div className="bottomOfBtnSpacer">
           </div>
        </div>
        </center>
      </div>
    );
  }
}
