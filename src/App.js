import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoading: true,
      family: [],
      activeDisplay: "starter-box",
      starterBoxesCount: 0,
      starterBrushesCount: 0,
      starterReplacementHeadsCount: 0,
      refillBoxesCount: 0,
      refillReplacementHeadsCount: 0,
      dataFetched: true
    }
  }

  fetchData = () => {
    axios.get("https://beamtech.github.io/boxing-kata-js/perks.json")
      .then((response) => {
        this.setState({ family: response.data, dataLoading: false });
        this.renderSummary();
      })
      .catch((error) => {
        this.setState({ dataFetched: false })
      });
  }

  componentDidMount() {
    this.fetchData()
  }


}

export default App;
