import React from "react";
import { getDogImagesByBreed, getBreedList } from "../utils/api";
import DogImageList from "./DogImageList";

class Search extends React.Component { 

  state = {
    results: [],
    value: "",
    breedList: [],
    showError: false
  };

  async componentDidMount() {
    const breedList = await getBreedList();

    this.setState({breedList});
  }

  handleInputChange = (event) => {
    this.setState({value: event.target.value});
  }

  showDogImages = async () => {
    const dogImageUrls = await getDogImagesByBreed(this.state.value);
    
    if (dogImageUrls) {
      this.setState({results: dogImageUrls, showError: false});
    } else {
      this.setState({showError: true});
    }
  }

  getBreedSelectOptions(breedList) {
    return breedList.map((breed) => <option value={breed} key={breed}/>);
  }

  getSearchResult(showError) {
    if (showError) {
      return <div>No results found</div>;

    } else {
      return (
        <DogImageList
          results={this.state.results}
          dogBreedName={this.state.value}
        />
      );
    }
  }

  render() {
  
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="breed"
        />
        <datalist id="breeds">
          {this.getBreedSelectOptions(this.state.breedList)}
        </datalist>
        <button onClick={this.showDogImages}>Search</button>
        {this.getSearchResult(this.state.showError)}
      </div>    
    );
  }
}

export default Search;
