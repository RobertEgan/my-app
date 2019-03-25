
import React, { Component } from 'react';
import { leftMenuAction } from '../actions/leftMenuAction'
import { connect } from 'react-redux';
import './Map.css';

const mapStateToProps = state => ({
   leftMenuReducer: state.leftMenuReducer
})

const mapDispatchToProps = dispatch => ({
  leftMenuAction: (value) => dispatch(leftMenuAction(value))
})

class Map extends Component {

  onScroll = () => {
    console.log("this is a test");
  }

  render() {
    let map = "Map";

    if(this.props.leftMenuReducer.expanded){
      map += " expanded";
    }

    return (
      <div className={map} onScroll={this.onScroll}>
        <img className="Map-Img"
            src="fortnite-map.jpg"
            alt="Rob All Night"
            onScroll={this.onScroll}
            onWheel={this.onScroll}
            onClick={this.onScroll}
            onScrollCapture={this.onScroll}
            />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
