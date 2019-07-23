import React, { Component } from 'react';

class TodayLunch extends Component {
  render() {
    return (
     
      <li>{this.props.key} {this.props.name} = {this.props.calories} cal</li>
                
             
    );
  }
}

export default TodayLunch;