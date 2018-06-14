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
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/f45c937f404628537a17e4ffb3a0f853/5BB4FE81/t51.2885-15/e35/33473545_578881652498191_1922455120063234048_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/8b4a1dc4a2f20998e664a6ff3fe21cf3/5BACA389/t51.2885-15/e35/29718261_196402027633093_8894330048232816640_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/53cbc096a8ef3c4cdc760fd46ebfd5f3/5BC293B5/t51.2885-15/e35/26430101_157867618332178_1925601991061405696_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/b02781929d758f076f9a4db06e244bda/5BA27C01/t51.2885-15/e35/21480176_1524304914302197_1047215594878795776_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/93f92b366cc45ab522d8ce79c2472089/5BB38D4F/t51.2885-15/e35/13741492_669951383170285_1491762952_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/dade201456d34cf5b729fb38bf3c515f/5BBB8DCF/t51.2885-15/e35/14135013_854291488048847_1979344944_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/23d8f8cb25107a2f55271949705078d2/5BB29042/t51.2885-15/e35/13736938_623883707786426_750909138_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/060fbf7c6f9345b2099cffb51383ea0b/5BB4FA68/t51.2885-15/e35/13725596_1776119419337736_854586656_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/f54332b56f7f4c5863e5174e2326e775/5BC2384C/t51.2885-15/e35/13649322_1036865559694330_1268649779_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/703951ff7e4c9faf407a9e4816cd763c/5BA2D611/t51.2885-15/e35/13398714_256186901425019_1964832802_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/0936fefeced1af3721e540e05d837b50/5BBC60D1/t51.2885-15/e35/12816792_243506539317919_2117526303_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/f00d21accfc8df11cce6ebbe58ea4d35/5BA432CB/t51.2885-15/e35/12725023_1091983027521187_1488106807_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/ca0b4aee880b9692aefa2d3cb36095fb/5BC07A7E/t51.2885-15/e35/12424827_177965579225801_530643528_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/23cebc7074bfbfa26b778b9828d787d3/5BC457AD/t51.2885-15/e35/12107670_1653431874931504_616022027_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/65960a790170cfd991689bddd5925c5f/5BC35706/t51.2885-15/e35/10932423_938749679531209_852400505_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/403b127bfce497adfa1b3bea86b3a603/5BB93416/t51.2885-15/e35/924724_368705063339321_2012108850_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/99918e562d031fb99c90ac0389f4eb53/5BBE2141/t51.2885-15/e35/10518291_576394015833051_370957624_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/351166f82086118f909c263fc7ac05e3/5B9E53A7/t51.2885-15/e15/11265661_455773371265199_1388992160_n.jpg",
          "alt": ""
        }
      ],
      [
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/2c0b633645cdf0d04d030f102e85acf8/5BB816B7/t51.2885-15/e15/11226792_1427889160862595_1587190176_n.jpg",
          "alt": ""
        },
        {
          "src": "https://scontent-atl3-1.cdninstagram.com/vp/ab5cdecfe5db691f4fdb95145c8bd432/5BA7A39B/t51.2885-15/e15/11190106_1611409489105970_1076699683_n.jpg",
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