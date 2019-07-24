import React, { Component } from "react";

class TodayLunch extends Component {
 
  showTodayLunch = () => {
    return this.props.today.map((eachFood, i) => {
      
      return (
        <li key={i}>
          {i+1}) {eachFood.quantity} x {eachFood.name} = {eachFood.calories * eachFood.quantity} cal
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h2 className="subtitle">Today's foods</h2>
        <ul className="no-dot">{this.showTodayLunch()}</ul>
        <strong>Total: {this.props.total} cal</strong>
      </div>
    );
  }
}

export default TodayLunch;
