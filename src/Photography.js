import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import PhotoSlide from './PhotoSlide'
import './Photography.css'

class Photography extends Component {
  render() {
    const photosRow1 = [
      [        
        {
          "src": require("./static/instagram/westpalm_street_art.jpg"),
          "alt": "westpalm_street_art"
        },
        {
          "src": require("./static/instagram/red_rocks.jpg"),
          "alt": "red_rocks"
        }    
      ],
      [
        {
          "src": require("./static/instagram/giant_peach.jpg"),
          "alt": "giant_peach"
        },
        {
          "src": require("./static/instagram/lake_powell_tent.jpg"),
          "alt": "lake_powell_tent"
        }
      ],
      [
        {
          "src": require("./static/instagram/phish_northerly_island_2017.jpg"),
          "alt": "phish_northerly_island_2017"
        },
        {
          "src": require("./static/instagram/sears_tower_trees.jpg"),
          "alt": "sears_tower_trees"
        }
      ],
      [
        {
          "src": require("./static/instagram/buddy_guy_red_suit.jpg"),
          "alt": "buddy_guy_red_suit"
        },
        {
          "src": require("./static/instagram/pequods_slice.jpg"),
          "alt": "pequods_slice"
        }
      ],
      [
        {
          "src": require("./static/instagram/linguine_and_lobster.jpg"),
          "alt": "linguine_and_lobster"
        },
        {
          "src": require("./static/instagram/discover_occean.jpg"),
          "alt": "discover_occean"
        }
      ],
      [
        {
          "src": require("./static/instagram/cubs_win.jpg"),
          "alt": "cubs_win"
        },
        {
          "src": require("./static/instagram/california_honeydrops.jpg"),
          "alt": "california_honeydrops"
        }
      ]
    ];
    const photosRow2 = [
      [
        {
          "src": require("./static/instagram/grand_lake_camping.jpg"),
          "alt": "grand_lake_camping",
        },
        {
          "src": require("./static/instagram/spiders_web.jpg"),
          "alt": "spiders_web"
        }
      ],
      [
        {
          "src": require("./static/instagram/pikes_place_market_july_2016.jpg"),
          "alt": "pikes_place_market_july_2016"
        },
        {
          "src": require("./static/instagram/evening_at_wrigley.jpg"),
          "alt": "evening_at_wrigley"
        }
      ],

      [
        {
          "src": require("./static/instagram/rainbow_wickerpark_summer_2018.jpg"),
          "alt": "rainbow_wickerpark_summer_2018"
        },
        {
          "src": require("./static/instagram/memphis_at_dusk_apr_2018.jpg"),
          "alt": "memphis_at_dusk_apr_2018"
        }
      ],
      [
        {
          "src": require("./static/instagram/muddy_waters_building_art.jpg"),
          "alt": "muddy_waters_building_art"
        },
        {
          "src": require("./static/instagram/cloudsrest_sunrise_yosemity_sept_2017.jpg"),
          "alt": "cloudsrest_sunrise_yosemity_sept_2017"
        }
      ],
      [
        {
          "src": require("./static/instagram/orlando_conference_center.jpg"),
          "alt": "orlando_conference_center"
        },
        {
          "src": require("./static/instagram/tribune_towner.jpg"),
          "alt": "tribune_towner"
        }
      ],
      [
        {
          "src": require("./static/instagram/docs_motto_kingston_mines.jpg"),
          "alt": "docs_motto_kingston_mines"
        },
        {
          "src": require("./static/instagram/mount_ranier.jpg"),
          "alt": "mount_ranier"
        }
      ]
    ];

    const photosRow3 = [
      [
        {
          "src": require("./static/instagram/low_country_aftermath.jpg"),
          "alt": "low_country_aftermath"
        },
        {
          "src": require("./static/instagram/wrigley_phish.jpg"),
          "alt": "wrigley_phish"
        }
      ],
      [
        {
          "src": require("./static/instagram/leon_bridges.jpg"),
          "alt": "leon_bridges"
        },
        {
          "src": require("./static/instagram/bulls_hat.jpg"),
          "alt": "bulls_hat"
        }
      ],
      [
        {
          "src": require("./static/instagram/record_store_display.jpg"),
          "alt": "record_store_display"
        },
        {
          "src": require("./static/instagram/philadelphia.jpg"),
          "alt": "philadelphia"
        }
      ],
      [
        {
          "src": require("./static/instagram/lakeview_sunset.jpg"),
          "alt": "lakeview_sunset"
        },
        {
          "src": require("./static/instagram/rooftop_view_clark_st.jpg"),
          "alt": "rooftop_view_clark_st"
        }
      ],
      [
        {
          "src": require("./static/instagram/diversey_driving_range_tree.jpg"),
          "alt": "diversey_driving_range_tree"
        },
        {
          "src": require("./static/instagram/north_ave_beach_trail.jpg"),
          "alt": "north_ave_beach_trail"
        }
      ],
      [
        {
          "src": require("./static/instagram/houston_garage_pingpong.jpg"),
          "alt": "houston_garage_pingpong"
        },
        {
          "src": require("./static/instagram/whiskey_joes_cool_sunset.jpg"),
          "alt": "whiskey_joes_cool_sunset"
        }
      ]
    ];

  return (
    <div id='photography'>
      <Row className='no-gutters'>
        {photosRow1.map(items =>
          <Col><PhotoSlide photos={items}/></Col>
        )
        }
      </Row>
      <Row className='no-gutters'>
        {photosRow2.map(items =>
          <Col><PhotoSlide photos={items}/></Col>
        )
        }
      </Row>
      <Row className='no-gutters'>
        {photosRow3.map(items =>
          <Col><PhotoSlide photos={items}/></Col>
        )
        }
      </Row>
    </div>
    );
  }
}

export default Photography