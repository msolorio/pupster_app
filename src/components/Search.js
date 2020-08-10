import React from "react";
import { getDogImagesByBreed, getBreedList } from "../utils/api";

class Search extends React.Component { 

  state = {
    results: [],
    value: "",
    breedList: []
  };

  async componentDidMount() {
    const breedList = await getBreedList();

    console.log('breedList:', breedList);
    

    this.setState({breedList: breedList});
  }

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

  getBreedSelectOptions(breedList) {
    return breedList.map((breed) => <option value={breed} key={breed}/>);
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

        <ul className="dogImageList">
          {this.getDogImageList(this.state.results)}
        </ul>
      </div>    
    );
  }
}

export default Search;
