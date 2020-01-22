import React, { useState, useEffect } from 'react';

import './PhotoGrid.css'

const PhotoGrid = () => {

  const [innerWidth, setInnerWidth ] = useState(window.innerWidth);
  const [photosToShow, setPhotosToShow] = useState([]);
  const [photoBacklog, setPhotoBacklog] = useState([
    require("./static/photography/westpalm_street_art.jpg"),
    require("./static/photography/giant_peach.jpg"),
    require("./static/photography/phish_northerly_island_2017.jpg"),
    require("./static/photography/buddy_guy_red_suit.jpg"),
    require("./static/photography/linguine_and_lobster.jpg"),
    require("./static/photography/cubs_win.jpg"),
    require("./static/photography/grand_lake_camping.jpg"),
    require("./static/photography/pikes_place_market_july_2016.jpg"),
    require("./static/photography/rainbow_wickerpark_summer_2018.jpg"),
    require("./static/photography/muddy_waters_building_art.jpg"),
    require("./static/photography/orlando_conference_center.jpg"),
    require("./static/photography/docs_motto_kingston_mines.jpg"),
    require("./static/photography/low_country_aftermath.jpg"),
    require("./static/photography/leon_bridges.jpg"),
    require("./static/photography/record_store_display.jpg"),
    require("./static/photography/lakeview_sunset.jpg"),
    require("./static/photography/diversey_driving_range_tree.jpg"),
    require("./static/photography/houston_garage_pingpong.jpg"),
  ]);

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
    console.log('oldPhotoIndex:', oldPhotoIndex)
    const newPhoto = photoBacklog[photoBacklog.length - 1]
    const oldPhoto = photosToShow[oldPhotoIndex]
    console.log("oldPhoto:", oldPhoto)
    console.log("newPhoto:", newPhoto)
    const photosToSet = [...photosToShow]
    photosToSet[oldPhotoIndex] = newPhoto;
    console.log('photosToSet:', photosToSet)
    setPhotosToShow(photosToSet)
    setPhotoBacklog([...photoBacklog, oldPhoto]);

    // const newPhoto = photoBacklog[]
    // setPhotosToShow(photosToShow.filter(photo => photo !== oldPhoto))
    // setPhotoBacklog([...photoBacklog, oldPhoto]);
  }
  const calcNumPhotosToShow = (width) => {
    if (width > 1275) {
      return 18;
    } else if (width > 1020) {
      return 15;
    } else if (width > 765) {
      return 12;
    } else if (width > 510) {
      return 9;
    } else {
      return 6;
    }
  }

  const handlePhotosToShow = () => {
    console.log()
    const width = window.innerWidth;
    const numToShow = calcNumPhotosToShow(width);
    const photos = photoBacklog.slice(0, numToShow)
    setPhotosToShow(photos)
  }

  // const getNextPhoto = (index) => {
  //   console.log("clicked")
  //   const nextPhoto = photosAll.pop()
  //   console.log(nextPhoto)
  //   const photoClicked = photosToShow[index]

  //   photosAll.push(photoClicked)
  //   photosToShow[index] = nextPhoto
  // }

  return (
    <div class="grid-container">
      {photosToShow.map((p,i) => {
        return (
          <div key={i} onMouseOver={() => handlePhotoChange(i)} className="grid-item">
            <img src={p} alt="alt text" />
          </div>)
      })}
    </div>
  );
}

export default PhotoGrid