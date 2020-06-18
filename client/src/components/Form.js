import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    date: "",
    description: "",
    amount: 0
    transactionType: ""
    category: ""
    accountName: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value,
      };
    });
  }

  render() {
    return (
      <div className="create">
        <h2>Add a transaction</h2>
      <form onSubmit={this.handleSubmit}>
            <input
              className="create-input"
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              placeholder="Date"
            ></input>
            <textarea
              className="create-body-textarea"
              placeholder="Add description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
            <input
              className="create-input"
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              placeholder="amount"
            ></input>
            <input
              className="create-input"
              type="text"
              name="transactionType"
              value={this.state.transactionType}
              onChange={this.handleChange}
              placeholder="type of transaction"
            ></input>
            <input
              className="create-input"
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              placeholder="category"
            ></input>
            <input
              className="create-input"
              type="text"
              name="accountName"
              value={this.state.accountName}
              onChange={this.handleChange}
              placeholder="account"
            ></input>
            <button
              className="create-submit-button"
              type="submit"
            >
              Add
            </button>
          </form>
      </div>
    );
  }
}

export default Form;


//TODO figure out the placeholder for the date and transaction type and account name?