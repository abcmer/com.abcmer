import React, { useState, useEffect } from 'react';

import './PhotoGrid.css'

function importAll(r) {
  return r.keys().map(r);
}

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let images = importAll(require.context('./static/photography', false, /\.(png|jpe?g|svg)$/));
shuffle(images)

//Disable scrolling on PhotoGrid
document.body.style.overflow = "hidden"

const PhotoGrid = () => {

  const [innerWidth, setInnerWidth ] = useState(window.innerWidth);
  const [photosToShow, setPhotosToShow] = useState([]);
  const [photoBacklog, setPhotoBacklog] = useState(images);

  useEffect(() => {
    handlePhotosToShow();
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);
  }, [])

  const handleResize = () => {
    console.log(window.innerWidth)
    setInnerWidth(window.innerWidth)
    handlePhotosToShow()
  }

  const handlePhotoChange = (oldPhotoIndex) => {
    console.log('handlePhotoChange')
    // Make copy of PhotosToShow and PhotosBacklog
    let nextPhotosToShow = photosToShow;
    let nextPhotoBacklog = photoBacklog;

    // Identify old and photo
    const oldPhoto = photosToShow[oldPhotoIndex]
    const newPhoto = nextPhotoBacklog.pop()
    console.log("oldPhoto:", oldPhoto)
    console.log("newPhoto:", newPhoto)

    // Insert new photo into old photo index
    nextPhotosToShow[oldPhotoIndex] = newPhoto;

    // Push old photo into photoBacklog
    nextPhotoBacklog = [oldPhoto, ...nextPhotoBacklog]

    // Set new states
    setPhotosToShow(nextPhotosToShow)
    setPhotoBacklog(nextPhotoBacklog)
  }

  const calcNumPhotosToShow = (width) => {
    if (width > 1275) {
      return 24;
    } else if (width > 1020) {
      return 20;
    } else if (width > 765) {
      return 16;
    } else if (width > 510) {
      return 12;
    } else {
      return 8;
    }
  }

  const handlePhotosToShow = () => {
    console.log('handlePhotosToShow')
    const width = window.innerWidth;
    const numToShow = calcNumPhotosToShow(width);
    const photos = photoBacklog.slice(0, numToShow)
    setPhotosToShow(photos)
  }
  return (
    <div className="grid-container">
      {photosToShow.map((p,i) => {
        return (
          <div key={i} onMouseOut={() => handlePhotoChange(i)} className="grid-item">
            <img src={p} alt="alt text" />
          </div>)
      })}
    </div>
  );
}

export default PhotoGrid