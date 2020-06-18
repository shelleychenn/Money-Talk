import React from "react";
import { hot } from "react-hot-loader/root";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
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
        <h1>Money Talk</h1>
        <Summary entries={this.state.entries} />
        <Form />
      </div>
    );
  }
}

export default App;
