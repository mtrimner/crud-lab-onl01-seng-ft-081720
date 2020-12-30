import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
         <input type="text" onChange={this.handleOnChange} value={this.state.text}/>
         <input type="submit"/>
       </form>
      </div>
    );
  }
};

export default ReviewInput;
