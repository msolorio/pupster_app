import React from 'react';
import { getRandomDogImage } from "../utils/api";

class Discover extends React.Component {

  state = {
    dogImageList: [],
    currentImageIndex: 0
  }

  componentDidMount() {
    this.addRandomDogImage();
  }

  async addRandomDogImage() {
    const randomDogImage = await getRandomDogImage();
    const dogImageListCopy = this.state.dogImageList.slice();
    dogImageListCopy.push(randomDogImage);

    this.setState({dogImageList: dogImageListCopy});
  }

  // if ahead of the first image, decrement currentImageIndex by 1
  showPreviousImage = () => {
    if (this.state.currentImageIndex > 0) {
      this.setState((prevState) => {
        return {currentImageIndex: prevState.currentImageIndex - 1};
      });
    }
  }

  // adds dog image to dogImage List and updates state to show next image
  showNextImage = async () => {
    await this.addRandomDogImage();

    this.setState((prevState) => {
      return {currentImageIndex: prevState.currentImageIndex + 1};
    });
  }

  showBackButton() {
    const backButton = (
      <button
        className="button-back"
        onClick={this.showPreviousImage}>
        back
      </button>
    );

    return this.state.currentImageIndex > 0 && backButton;
  }

  render() {
    return (
      <div>
        {this.showBackButton()}
        <img
          src={this.state.dogImageList[this.state.currentImageIndex]}
          alt="random dog"
        />
        <button className="button-forward" onClick={this.showNextImage}>forward</button>
      </div>
    );
  }
}

export default Discover;
