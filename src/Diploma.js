import React, { Component } from 'react';

import './Diploma.css'

class Diploma extends Component {
  render() {
    const diploma_src = this.props.src
    const diploma_alt = this.props.alt

    return (
      <div className='diploma'>
        <div className='outer-frame'>
            <div className='inner-red-background'>
              <div className='thin-white-inner-border'>
                <img className='diploma-paper' src={diploma_src} alt={diploma_alt} />                            
              </div>
            </div>
        </div>      
      </div>            
    );
  }
}

export default Diploma