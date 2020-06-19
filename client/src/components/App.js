import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import Summary from './Summary.js';
import Form from './Form.js';
import Overview from './Overview.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
    this.getSavedEntries = this.getSavedEntries.bind(this);
    this.submitNewEntry = this.submitNewEntry.bind(this);
    this.update = this.update.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
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

  update(entry, type) {
    console.log(entry);
    let entryPrompt;
    if (type === 'description') {
      entryPrompt = entry.description;
    } else if (type === 'amount') {
      entryPrompt = entry.amount;
    }
    let newValue = prompt(
      `Please update your entry's ${type}`,
      `${entryPrompt}`
    );

    if (newValue) {
      entry[type] = newValue;
      axios
        .put(`/budget/${entry._id}`, entry)
        .then(() => {
          console.log('update successfully');
          this.getSavedEntries();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  deleteEntry(entry) {
    axios
      .delete(`/budget/${entry._id}`)
      .then(() => {
        console.log('entry deleted!');
        this.getSavedEntries();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Money Talk</h1>
        <Summary
          entries={this.state.entries}
          update={this.update}
          deleteEntry={this.deleteEntry}
        />
        <Form submitNewEntry={this.submitNewEntry} />
        <Overview entries={this.state.entries} />
      </div>
    );
  }
}

export default App;
