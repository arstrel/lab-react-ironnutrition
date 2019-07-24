import React, { Component } from 'react';
import './foodbox.css';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state ={
      amount: 1,

    }
  }

  updateInput = (e) => {
    this.setState({amount: e.target.value})
  }
  

  render() {
    return (
     <div className="wrapper">
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value={this.state.amount}
            onChange={this.updateInput}
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={()=>{this.props.add(this.props.index, this.state.amount)}}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
</div>
    );
  }
}

export default FoodBox;