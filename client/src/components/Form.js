import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      description: "",
      amount: 0,
      transactionType: "",
      category: "",
      accountName: "",
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
      <div className="form">
        <h2 className="form-heading">Add a transaction</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className="form-input"
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              placeholder="Please follow this format 01/01/2020"
            ></input>
          </div>
          <textarea
            className="form-textarea"
            type="text"
            placeholder="Add a description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
          <input
            className="form-input"
            type="text"
            name="number"
            value={this.state.amount}
            onChange={this.handleChange}
            placeholder="Amount"
          ></input>
          <input
            className="form-input"
            type="text"
            name="transactionType"
            value={this.state.transactionType}
            onChange={this.handleChange}
            placeholder="Debit/Credit"
          ></input>
          <input
            className="form-input"
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            placeholder="Category"
          ></input>
          <input
            className="form-input"
            type="text"
            name="accountName"
            value={this.state.accountName}
            onChange={this.handleChange}
            placeholder="Account"
          ></input>
          <button className="button" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
