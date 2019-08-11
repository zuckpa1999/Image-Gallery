import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    console.log("fee");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* call back fnw/o () method */}
            <input
              text="push"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
