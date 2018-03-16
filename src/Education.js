import React, { Component } from 'react';
import Diploma from './Diploma'

import bachelorsDiplomaImg from './static/SiemerAdam_bachelors_diploma.png';
import mastersDiplomaImg from './static/SiemerAdam_masters_diploma.png';

class Education extends Component {
  render() {
    return (
      <div className="eduction-content">
      	<Diploma src={bachelorsDiplomaImg} alt='Bachelors_Degree' />
      	<Diploma src={mastersDiplomaImg} alt='Masters_Degree' />
    	</div>	               
    );
  }
}

export default Education;
