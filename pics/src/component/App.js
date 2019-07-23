import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 17556482ff0020535f278f94af188bd49240691e19ef482a3c8e0c2f9d2931ec"
      }
    });
    console.log(response.data.results);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
