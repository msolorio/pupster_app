import React from "react";
import { getDogImagesByBreed } from "../utils/api";

class Search extends React.Component { 

  state = {
    results: [],
    value: ""
  };

  handleInputChange = (event) => {
    this.setState({value: event.target.value});
  }

  showDogImages = async () => {
    const dogImageUrls = await getDogImagesByBreed(this.state.value);

    this.setState({results: dogImageUrls});
  }

  getDogImageList(results) {
    return results.map((url) => {
      return (
        <li key={url}>
          <img src={url} alt={this.state.value} />
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="breed-input">Search Dog by Breed: </label>
          <input name="breed-input" value={this.state.value} onChange={this.handleInputChange} />
          <button onClick={this.showDogImages}>Search</button>
        </div>

        <ul className="dogImageList">
          {this.getDogImageList(this.state.results)}
        </ul>
      </div>    
    );
  }
}

export default Search;
