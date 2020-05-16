import React, { Component } from "react";
import ItemInfo from '../../client/src/components/ItemInfo.js';
import ItemInfoFrequentlyBoughtTogether from "../../client/src/components/ItemInfoFrequentlyBoughtTogether.js";
import ItemInfoGuestsAlsoBought from "./components/ItemInfoGuestsAlsoBought.js";
import ItemInfoRecommended from "./components/ItemInfoRecommended.js";
import ItemInfoUltimatelyBought from "./components/ItemInfoUltimatelyBought.js";
const axios = require('axios');


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      headerOne: "Frequently bought together",
      productName: "productName",
      cost: "costGoesHere",
      tab: "consider-tab",
      allItems: [],
      current: [],
      random: [],
      subtotal: 0
    };
    this.tab = this.tab.bind(this);
    this.getAllDbItems = this.getAllDbItems.bind(this);
  }

 componentDidMount() {
    this.getAllDbItems();
    const search = document.getElementById('searchInputForm');
    if (search) {
      search.addEventListener('submit', () => {
        let currentItem = this.state.allItems.filter(item => item.id === Number(search.name));
        
        let randomItems = [];
        for (let i = 0; i < 22; i++) {
          randomItems.push(this.state.allItems[Math.floor(Math.random() * 107)])
        }
        let subtotalMath = Math.floor(Math.random() * 450) + 100;

        this.setState({
          current: currentItem[0],
          random: randomItems,
          subtotal: subtotalMath
        });
      })
    }
  }
  
  getAllDbItems() {
    axios.get('http://georgefecc-env.eba-qnkp2iqd.us-west-2.elasticbeanstalk.com/api/items')
    .then((response) => {
      // handle success
      let randomItems = [];
      for (let i = 0; i < 22; i++) {
        randomItems.push(response.data[Math.floor(Math.random() * 107)])
      }

      this.setState({
        allItems: response.data,
        current: response.data[0],
        random: randomItems
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  tab(e){
    this.setState({tab: e.currentTarget.id});
  } 
  render() {


     //Loading...
  if( this.state.allItems[0] === undefined ) {
    return <div>Loading this...</div>
}

//Loaded successfully...
   // console.log("coming from blah blah blah", this.state.allItems);
    return (
      
      <div>
        <center>
        <div id="mainContainer">
           <div className="thisItem">

          <div className="thisItemTitle">
           <h3>This item:</h3>
          </div>

            <ItemInfo firstItem={this.state.current}/>
          </div>
          <div className="frequentlyBoughtTogether">
            <div className="frequentlyBoughtTogetherTitle">
              <h3>Frequently bought together</h3>
            </div>
            <ItemInfoFrequentlyBoughtTogether items={this.state.random}/>
            {/* <div className="itemInfoFrequentlyBoughtTogether2"><ItemInfoFrequentlyBoughtTogether secondItem={this.state.allItems[2]}/></div>
            <div className="itemInfoFrequentlyBoughtTogether3"><ItemInfoFrequentlyBoughtTogether secondItem={this.state.allItems[3]}/></div> */}
          </div>
          <div className="subtotal">
            <div className="subtotalDollarAmt">Subtotal: <b>${this.state.subtotal}.00</b> (4 items)</div>
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
              {this.state.tab === 'consider-tab' ? <ItemInfoRecommended itemsRec={this.state.random}/> : null}
            </div>
            <div className="inner" id="guestsUltimatelyBought">
              {this.state.tab === 'ultimatelyBought-tab' ? <ItemInfoUltimatelyBought itemsUlt={this.state.random}/> : null}
            </div>
            <div className="inner" id="guestsAlsoBought">
              {this.state.tab === 'alsoBought-tab' ? <ItemInfoGuestsAlsoBought itemsAlsoBought={this.state.random}/> : null}
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
