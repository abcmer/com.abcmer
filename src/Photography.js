import React from 'react';

import './Photography.css'

const filterPhotos = (photos) => {
  console.log(photos)
  const width = window.innerWidth;
  console.log('width:', width)
  if (width > 1275) {
    const num = Math.floor((photos.length / 6)) * 6;
    console.log('num', num)
    return photos.slice(0, num);
  } else if (width > 1020) {
    const num = Math.floor((photos.length / 5)) * 5;
    return photos.slice(0, num)
  } else if (width > 765) {
    const num = Math.floor((photos.length / 4)) * 4;
    return photos.slice(0, num)
  } else if (width > 510) {
    const num = Math.floor((photos.length / 3)) * 3;
    return photos.slice(0, num)
  } else if (width > 255) {
    const num = Math.floor((photos.length / 2)) * 2;
    return photos.slice(0, num)
  } else {
    return photos
  }
}

const Photography = () => {
  let photos = [
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
  ]
  photos = filterPhotos(photos);
  console.log(photos)
  return (
    <div class="grid-container">
      {filterPhotos(photos).map(p => {
        return (
          <div className="grid-item">
            <img src={p} alt="alt text" />
          </div>)
      })}
    </div>
  );
}

export default Photography