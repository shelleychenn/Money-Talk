import React from "react";
import Favicon from "react-favicon";
import { hot } from "react-hot-loader/root";
import axios from "axios";
import Summary from "./Summary.js";
import Form from "./Form.js";
import sampleData from "../sample_data.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: sampleData,
    };
  }

  // componentDidMount() {
  //   this.getBudgetEntries();
  // }

  // getBudgetEntries() {
  //   return axios
  //     .get("/entries")
  //     .then(({ data }) => {
  //       this.setState({
  //         entries: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("error getting entries from the database on the request from client", err);
  //     });
  // }

  render() {
    return (
      <div>
        <Favicon url="https://money.pro/favicon.ico" />
        <div className="header">
          <div className="logo"></div>
        </div>
        <div className="container">
          <Summary entries={this.state.entries} />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
