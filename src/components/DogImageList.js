import React from 'react';

function getDogImageList(results, dogBreedName) {
  return results.map((url) => {
    return (
      <li key={url}>
        <img src={url} alt={dogBreedName} />
      </li>
    );
  })
}

function DogImageList(props) {
  return (
    <ul className="dogImageList">
      {getDogImageList(props.results, props.dogBreedName)}
    </ul>
  );
}

export default DogImageList;
