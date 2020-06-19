import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      description: '',
      amount: '',
      transactionType: '',
      category: '',
      accountName: '',
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleTransactionTypeChange = this.handleTransactionTypeChange.bind(
      this
    );
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleAccountNameChange = this.handleAccountNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({
      date: event.target.value,
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  handleAmountChange(event) {
    this.setState({
      amount: event.target.value,
    });
  }

  handleTransactionTypeChange(event) {
    this.setState({
      transactionType: event.target.value,
    });
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value,
    });
  }

  handleAccountNameChange(event) {
    this.setState({
      accountName: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.submitNewEntry(this.state);
    this.setState({
      date: '',
      description: '',
      amount: '',
      transactionType: '',
      category: '',
      accountName: '',
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
              onChange={this.handleDateChange}
              placeholder="01/01/2020"
            ></input>
          </div>
          <textarea
            className="form-textarea"
            type="text"
            placeholder="Add a description"
            name="description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          ></textarea>
          <input
            className="form-input"
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
            placeholder="$ amount"
          ></input>
          <input
            className="form-input"
            type="text"
            name="transactionType"
            value={this.state.transactionType}
            onChange={this.handleTransactionTypeChange}
            placeholder="Debit/Credit"
          ></input>
          <input
            className="form-input"
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleCategoryChange}
            placeholder="Category"
          ></input>
          <input
            className="form-input"
            type="text"
            name="accountName"
            value={this.state.accountName}
            onChange={this.handleAccountNameChange}
            placeholder="Account"
          ></input>
          <button className="button" type="submit">
            Add Entry
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
