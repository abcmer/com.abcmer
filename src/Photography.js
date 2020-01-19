import React from 'react';

import './Photography.css'

const Photography = () => {
  const photos = [
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

  return (
    <div class="grid-container">
      {photos.map(p => {
        return (
          <div className="grid-item">
            <img src={p} alt="alt text" />
          </div>)
      })}
    </div>
  );
}

export default Photography