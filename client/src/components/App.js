import React from "react";
import Favicon from "react-favicon";
import { hot } from "react-hot-loader/root";
import axios from "axios";
import Summary from "./Summary.js";
import Form from "./Form.js";
import sampleData from "../sample_data.js";
import Overview from "./Overview.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      entryByCategories: [],
      view: "summary",
    };
    this.getSavedEntries = this.getSavedEntries.bind(this);
    this.submitNewEntry = this.submitNewEntry.bind(this);
    this.update = this.update.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.getEntryByCategories = this.getEntryByCategories.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.switchToOriginalView = this.switchToOriginalView.bind(this);
  }

  componentDidMount() {
    this.getSavedEntries();
  }

  getSavedEntries() {
    axios
      .get("/budget")
      .then(({ data }) => {
        console.log("data", data);
        this.setState({
          entries: data,
        });
      })
      .catch((err) => {
        console.log("getSavedEntries: ", err);
      });
  }

  submitNewEntry(entry) {
    axios
      .post("/budget", {
        date: entry.date,
        description: entry.description,
        amount: entry.amount,
        transactionType: entry.transactionType,
        category: entry.category,
        accountName: entry.accountName,
      })
      .then(() => {
        console.log("new entry posted successfully!");
        this.getSavedEntries();
      })
      .catch((err) => {
        console.log("submitNewEntry: ", err);
      });
  }

  update(entry, type) {
    console.log(entry);
    let entryPrompt;
    if (type === "description") {
      entryPrompt = entry.description;
    } else if (type === "amount") {
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
          console.log("update successfully");
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
        console.log("entry deleted!");
        this.getSavedEntries();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getEntryByCategories(category) {
    axios
      .get(`./budget/${category}`)
      .then(({ data }) => {
        this.setState({ entryByCategories: data });
      })
      .catch((err) => {
        console.log("get entries error: ", err);
      });
  }

  handleViewChange() {
    this.setState({
      view: "selectedEntries",
    });
  }

  switchToOriginalView() {
    this.setState({
      view: "summary",
    });
  }

  render() {
    let view = this.state.view;
    let data =
      view === "summary" ? this.state.entries : this.state.entryByCategories;

    return (
      <div>
        <Favicon url="https://money.pro/favicon.ico" />
        <div className="header">
          <div className="logo"></div>
        </div>
        <div className="container">
          <Summary
            entries={data}
            update={this.update}
            deleteEntry={this.deleteEntry}
            getEntryByCategories={this.getEntryByCategories}
            handleViewChange={this.handleViewChange}
            switchToOriginalView={this.switchToOriginalView}
          />
          <Form submitNewEntry={this.submitNewEntry} />
          <Overview entries={this.state.entries} />
        </div>
      </div>
    );
  }
}
export default App;
