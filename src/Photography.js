import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';

import PhotoSlide from './PhotoSlide'
import './Photography.css'
import SlickPhotoSlide from "./SlickPhotoSlide";

class Photography extends Component {
  render() {
    const photosRow1 = [
      [        
        {
          "src": require("./static/photography/westpalm_street_art.jpg"),
          "alt": "westpalm_street_art"
        },
        {
          "src": require("./static/photography/halfdome1.jpg"),
          "alt": "halfdome1"
        }    
      ],
      [
        {
          "src": require("./static/photography/giant_peach.jpg"),
          "alt": "giant_peach"
        },
        {
          "src": require("./static/photography/halfdome2.jpg"),
          "alt": "halfdome2"
        }
      ],
      [
        {
          "src": require("./static/photography/phish_northerly_island_2017.jpg"),
          "alt": "phish_northerly_island_2017"
        },
        {
          "src": require("./static/photography/halfdome3.jpg"),
          "alt": "halfdome3"
        }
      ],
      [
        {
          "src": require("./static/photography/buddy_guy_red_suit.jpg"),
          "alt": "buddy_guy_red_suit"
        },
        {
          "src": require("./static/photography/halfdome4.jpg"),
          "alt": "halfdome4"
        }
      ],
      [
        {
          "src": require("./static/photography/linguine_and_lobster.jpg"),
          "alt": "linguine_and_lobster"
        },
        {
          "src": require("./static/photography/halfdome5.jpg"),
          "alt": "halfdome5"
        }
      ],
      [
        {
          "src": require("./static/photography/cubs_win.jpg"),
          "alt": "cubs_win"
        },
        {
          "src": require("./static/photography/halfdome6.jpg"),
          "alt": "halfdome6"
        }
      ]
    ];
    const photosRow2 = [
      [
        {
          "src": require("./static/photography/grand_lake_camping.jpg"),
          "alt": "grand_lake_camping",
        },
        {
          "src": require("./static/photography/halfdome7.jpg"),
          "alt": "halfdome7"
        }
      ],
      [
        {
          "src": require("./static/photography/pikes_place_market_july_2016.jpg"),
          "alt": "pikes_place_market_july_2016"
        },
        {
          "src": require("./static/photography/halfdome8.jpg"),
          "alt": "halfdome8"
        }
      ],

      [
        {
          "src": require("./static/photography/rainbow_wickerpark_summer_2018.jpg"),
          "alt": "rainbow_wickerpark_summer_2018"
        },
        {
          "src": require("./static/photography/halfdome9.jpg"),
          "alt": "halfdome9"
        }
      ],
      [
        {
          "src": require("./static/photography/muddy_waters_building_art.jpg"),
          "alt": "muddy_waters_building_art"
        },
        {
          "src": require("./static/photography/halfdome10.jpg"),
          "alt": "halfdome10"
        }
      ],
      [
        {
          "src": require("./static/photography/orlando_conference_center.jpg"),
          "alt": "orlando_conference_center"
        },
        {
          "src": require("./static/photography/halfdome11.jpg"),
          "alt": "halfdome11"
        }
      ],
      [
        {
          "src": require("./static/photography/docs_motto_kingston_mines.jpg"),
          "alt": "docs_motto_kingston_mines"
        },
        {
          "src": require("./static/photography/halfdome12.jpg"),
          "alt": "halfdome12"
        }
      ]
    ];

    const photosRow3 = [
      [
        {
          "src": require("./static/photography/low_country_aftermath.jpg"),
          "alt": "low_country_aftermath"
        },
        {
          "src": require("./static/photography/halfdome13.jpg"),
          "alt": "halfdome13"
        }
      ],
      [
        {
          "src": require("./static/photography/leon_bridges.jpg"),
          "alt": "leon_bridges"
        },
        {
          "src": require("./static/photography/halfdome14.jpg"),
          "alt": "halfdome14"
        }
      ],
      [
        {
          "src": require("./static/photography/record_store_display.jpg"),
          "alt": "record_store_display"
        },
        {
          "src": require("./static/photography/halfdome15.jpg"),
          "alt": "halfdome15"
        }
      ],
      [
        {
          "src": require("./static/photography/lakeview_sunset.jpg"),
          "alt": "lakeview_sunset"
        },
        {
          "src": require("./static/photography/halfdome16.jpg"),
          "alt": "halfdome16"
        }
      ],
      [
        {
          "src": require("./static/photography/diversey_driving_range_tree.jpg"),
          "alt": "diversey_driving_range_tree"
        },
        {
          "src": require("./static/photography/halfdome17.jpg"),
          "alt": "halfdome17"
        }
      ],
      [
        {
          "src": require("./static/photography/houston_garage_pingpong.jpg"),
          "alt": "houston_garage_pingpong"
        },
        {
          "src": require("./static/photography/halfdome18.jpg"),
          "alt": "halfdome18"
        }
      ]
    ];

  return (
    <div id='photography'>
    <MediaQuery maxWidth={2224}>
        {(matches) => {
          if (matches) {
            return (
              <div className="photo-canvas">
                <Row className='no-gutters'>
                  {photosRow1.map(items =>
                    <Col><SlickPhotoSlide photos={items}/></Col>
                  )
                  }
                </Row>
                <Row className='no-gutters'>
                  {photosRow2.map(items =>
                    <Col><SlickPhotoSlide photos={items}/></Col>
                  )
                  }
                </Row>
                <Row className='no-gutters'>
                  {photosRow3.map(items =>
                    <Col><SlickPhotoSlide photos={items}/></Col>
                  )
                  }
                </Row>
              </div>
            );
          } else {
            return <div></div>;
          }
        }}
      </MediaQuery>
    </div>
    );
  }
}

export default Photography