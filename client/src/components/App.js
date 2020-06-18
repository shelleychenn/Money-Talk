import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import Summary from './Summary.js';
import Form from './Form.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
    this.getSavedEntries = this.getSavedEntries.bind(this);
    this.submitNewEntry = this.submitNewEntry.bind(this);
  }

  componentDidMount() {
    this.getSavedEntries();
  }

  getSavedEntries() {
    axios
      .get('/budget')
      .then(({ data }) => {
        this.setState({
          entries: data,
        });
      })
      .catch((err) => {
        console.log('getSavedEntries: ', err);
      });
  }

  submitNewEntry(entry) {
    axios
      .post('/budget', {
        date: entry.date,
        description: entry.description,
        amount: entry.amount,
        transactionType: entry.transactionType,
        category: entry.category,
        accountName: entry.accountName,
      })
      .then(() => {
        console.log('new entry posted successfully!');
        this.getSavedEntries();
      })
      .catch((err) => {
        console.log('submitNewEntry: ', err);
      });
  }

  render() {
    return (
      <div>
        <h1>Money Talk</h1>
        <Summary entries={this.state.entries} />
        <Form submitNewEntry={this.submitNewEntry} />
      </div>
    );
  }
}

export default App;
