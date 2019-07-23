import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/foodbox/FoodBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showForm: false,
      newName: "",
      newCalories: "",
      newImage: "",
      search: "",
    };
  }

  showFood() {
    
    return this.state.foods
    .filter((foodObj)=> {
      return (foodObj.name).toLowerCase().includes(this.state.search)
    })
    .map((eachFood, i) => {
      return (
        <FoodBox
          key={i}
          name={eachFood.name}
          calories={eachFood.calories}
          image={eachFood.image}
        />
      );
    });
  }

  showNewFoodForm() {
    return (
      <form className="add-form" onSubmit={this.handleInput}>
        <div>
          <label>Name:</label>
          <input
            className="input"
            value={this.state.newName}
            onChange={this.updateInput}
            name="newName"
            type="text"
          />
        </div>
        <div>
          <label>Calories:</label>
          <input
            className="input"
            value={this.state.newCalories}
            onChange={this.updateInput}
            name="newCalories"
            type="text"
          />
        </div>
        <div>
          <label>Image Url:</label>
          <input
            className="input"
            value={this.state.newImage}
            onChange={this.updateInput}
            name="newImage"
            type="text"
          />
        </div>
        <button className="button">Add this item</button>
      </form>
    );
  }

  handleInput = e => {
    e.preventDefault();
    let clone = [...this.state.foods];
    let newFood = {
      name: this.state.newName,
      calories: this.state.newCalories,
      image: this.state.newImage
    };
    clone.unshift(newFood);
    this.setState({ foods: clone });

    this.handleFormShow();
  };

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormShow() {
    this.setState({ showForm: !this.state.showForm });
  }

  handleSearch = (e) => {
    this.setState({search: e.target.value});
  } 

  render() {
    return (
      <div className="container">
        <div className="App">
          <h1 className="App-title">IronNutrition</h1>
          <div>
            <input
              className="input"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleSearch}
              name="search"
              type="text"
            />
          </div>
          <div className="d-flex">
            <div>{this.showFood()}</div>
            <div className="column content">
              <button
                onClick={() => {
                  this.handleFormShow();
                }}
                className="button"
              >
                New food form
              </button>
              {this.state.showForm && this.showNewFoodForm()}
              <h2 className="subtitle">Today's foods</h2>
              <ul className="no-dot">
                <li>1 Pizza = 400 cal</li>
                <li>2 Salad = 300 cal</li>
              </ul>
              <strong>Total: 700 cal</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
