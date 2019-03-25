import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FaExpand, FaCompress  } from 'react-icons/fa'
import { leftMenuAction } from '../actions/leftMenuAction'
import { connect } from 'react-redux';
import './LeftBar.css';

const mapStateToProps = state => ({
   leftMenuReducer: state.leftMenuReducer
})

const mapDispatchToProps = dispatch => ({
  leftMenuAction: (value) => dispatch(leftMenuAction(value))
})

class LeftBar extends Component {
  constructor(props) {
    super(props);
    this.expandClick = this.expandClick.bind(this);
  }

  expandClick(){
    this.props.leftMenuAction(!this.props.leftMenuReducer.expanded);
  }

  render() {
    let leftBar = "LeftBar";
    let expand = (<FaExpand style={{verticalAlign: 'top', alignItems:'center'}} fontSize="1.4em" />);
    if(this.props.leftMenuReducer.expanded){
      leftBar += " expanded";
      expand = (<FaCompress style={{verticalAlign: 'top', alignItems:'center'}} fontSize="1.4em" />);
    }

    let buttonStyle = {
      padding: '0.0em',
      margin: '0.2em',
      width: 'calc(100% - 0.4em)',
      height: '1.55em',
      verticalAlign: 'top',
      alignItems: 'center'
    }

    let spanStyle = {
      display: 'inline-block',
      verticalAlign: 'top',
      lineHeight: 'normal'
    }

    return (
      <div className={leftBar}>
        <Button onClick={this.expandClick} style={buttonStyle}>
          <span style = {spanStyle}>
            {expand}
          </span>
        </Button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);
