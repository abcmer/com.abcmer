import React, { Component } from 'react';
import PhotoSlide from './PhotoSlide'
import './PhotoCanvas.css'


class PhotoCanvas extends Component {
  render() {
    const photos = [
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/c25daca72d7f6fa308faded9c24caac8/5B2D74CA/t51.2885-15/e35/28158054_212000086204092_7024380942017888256_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/5b7e4c26bc885d4b558b59a2fcf86060/5B31ECAF/t51.2885-15/e35/18723599_2033550863539124_6714151129195741184_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/0bff4dc8e018dfddeb689f6334932b89/5B30746F/t51.2885-15/e35/20634131_850131571819088_7664068453346574336_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/3af29f601bee8d478e657bdab2f4b274/5B4B4695/t51.2885-15/e35/20479168_233470523841939_765981333905211392_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/09e14b0bd7e6d5e2cc818582ff50386a/5B2D9239/t51.2885-15/e35/19985444_280915535709063_2479917909166522368_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-mia3-2.cdninstagram.com/vp/6fa21ba94e5db903d2f301367a353a60/5B2FFC7C/t51.2885-15/e35/14733758_673559556144791_3007173205434564608_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/855ef4bdcc130abb78fe88b71a86c2c4/5B324D86/t51.2885-15/e35/15877114_1373593289326454_2441574266508935168_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/e53dea110f6b1695b23af1b062f99ee4/5B40D2D3/t51.2885-15/e35/15538457_352901091740430_8061611386473545728_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/245223ae1b67357c12de59299f4a98c6/5B441508/t51.2885-15/e35/14099598_1238308186209074_299569638_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/746d288db87d842dd7ac7641258749c7/5B441FC9/t51.2885-15/e35/14607130_1299037040147640_2598483599518859264_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/e08e6098a0a0a33ffd32b4ce82d5ec65/5B402CCF/t51.2885-15/e35/14550162_1180188975385246_398732089312149504_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/4883821b7970387de20664436305a033/5B3E0ACC/t51.2885-15/e35/14278982_335587990117562_1577613786_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-iad3-1.cdninstagram.com/vp/cfeba4cffcb30769312698b3758a96c1/5B5945F3/t51.2885-15/e35/14099462_1795121710705473_1290462259_n.jpg",
          "alt": "",
        },
        {
          "src": "https://scontent-iad3-1.cdninstagram.com/vp/b240c54b9b5f67274a22cf22a2084f3a/5B6C57CF/t51.2885-15/e35/14099891_269934890059660_1089700383_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-iad3-1.cdninstagram.com/vp/d42cab88320ae04800e9a5298fa34b6c/5B564E0A/t51.2885-15/e35/13702993_968202109959445_1913125753_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-iad3-1.cdninstagram.com/vp/d9b7014757c9f136dc022b4879e48d0c/5B6A1A16/t51.2885-15/e35/924724_368705063339321_2012108850_n.jpg",
          "alt": ""
        }
      ],
    [
      {
        "src": "https://scontent-atl3-1.cdninstagram.com/vp/245223ae1b67357c12de59299f4a98c6/5B441508/t51.2885-15/e35/14099598_1238308186209074_299569638_n.jpg",
        "alt": ""
      },
      {
        "src": "https://scontent-atl3-1.cdninstagram.com/vp/746d288db87d842dd7ac7641258749c7/5B441FC9/t51.2885-15/e35/14607130_1299037040147640_2598483599518859264_n.jpg",
        "alt": ""
      }
    ],
    [
      {
        "src": "https://scontent-atl3-1.cdninstagram.com/vp/e08e6098a0a0a33ffd32b4ce82d5ec65/5B402CCF/t51.2885-15/e35/14550162_1180188975385246_398732089312149504_n.jpg",
        "alt": ""
      },
      {
        "src": "https://scontent-atl3-1.cdninstagram.com/vp/4883821b7970387de20664436305a033/5B3E0ACC/t51.2885-15/e35/14278982_335587990117562_1577613786_n.jpg",
        "alt": ""
      }
    ],
    [
      {
        "src": "https://scontent-iad3-1.cdninstagram.com/vp/cfeba4cffcb30769312698b3758a96c1/5B5945F3/t51.2885-15/e35/14099462_1795121710705473_1290462259_n.jpg",
        "alt": "",
      },
      {
        "src": "https://scontent-iad3-1.cdninstagram.com/vp/b240c54b9b5f67274a22cf22a2084f3a/5B6C57CF/t51.2885-15/e35/14099891_269934890059660_1089700383_n.jpg",
        "alt": ""
      }
    ],
    [
      {
        "src": "https://scontent-iad3-1.cdninstagram.com/vp/d42cab88320ae04800e9a5298fa34b6c/5B564E0A/t51.2885-15/e35/13702993_968202109959445_1913125753_n.jpg",
        "alt": ""
      },
      {
        "src": "https://scontent-iad3-1.cdninstagram.com/vp/d9b7014757c9f136dc022b4879e48d0c/5B6A1A16/t51.2885-15/e35/924724_368705063339321_2012108850_n.jpg",
        "alt": ""
      }
    ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/c25daca72d7f6fa308faded9c24caac8/5B2D74CA/t51.2885-15/e35/28158054_212000086204092_7024380942017888256_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/5b7e4c26bc885d4b558b59a2fcf86060/5B31ECAF/t51.2885-15/e35/18723599_2033550863539124_6714151129195741184_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/0bff4dc8e018dfddeb689f6334932b89/5B30746F/t51.2885-15/e35/20634131_850131571819088_7664068453346574336_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/3af29f601bee8d478e657bdab2f4b274/5B4B4695/t51.2885-15/e35/20479168_233470523841939_765981333905211392_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/09e14b0bd7e6d5e2cc818582ff50386a/5B2D9239/t51.2885-15/e35/19985444_280915535709063_2479917909166522368_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-mia3-2.cdninstagram.com/vp/6fa21ba94e5db903d2f301367a353a60/5B2FFC7C/t51.2885-15/e35/14733758_673559556144791_3007173205434564608_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/855ef4bdcc130abb78fe88b71a86c2c4/5B324D86/t51.2885-15/e35/15877114_1373593289326454_2441574266508935168_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/e53dea110f6b1695b23af1b062f99ee4/5B40D2D3/t51.2885-15/e35/15538457_352901091740430_8061611386473545728_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/245223ae1b67357c12de59299f4a98c6/5B441508/t51.2885-15/e35/14099598_1238308186209074_299569638_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/746d288db87d842dd7ac7641258749c7/5B441FC9/t51.2885-15/e35/14607130_1299037040147640_2598483599518859264_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/e08e6098a0a0a33ffd32b4ce82d5ec65/5B402CCF/t51.2885-15/e35/14550162_1180188975385246_398732089312149504_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/4883821b7970387de20664436305a033/5B3E0ACC/t51.2885-15/e35/14278982_335587990117562_1577613786_n.jpg",
          "alt": ""
        }
      ],
  ]
    return (
      <div id='photography' className='photo-canvas'>
        {photos.map(items =>
          <PhotoSlide photos={items}/>
          )
        }

      </div>            
    );
  }
}

export default PhotoCanvas