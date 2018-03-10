import React from 'react';
import { Progress } from 'reactstrap';
import './SkillRating.css'

const SkillRating = (props) => {
  const skillName = props.skillName
  const skillRating = props.skillRating

  if (skillRating === "1") {
    return (
      <div>
        <div className="text-left">{skillName}</div>
        <Progress multi>
          <Progress bar color= "warning" value="33.33333333"></Progress>
        </Progress>      
      </div>
    );
  } else if (skillRating === "2") {
      return (
        <div>
          <div className="text-left">{skillName}</div>
          <Progress multi>
            <Progress bar value="66.666666"></Progress>
          </Progress>      
        </div>
      );    
  } else if (skillRating === "3") {
      return (
        <div>
          <div className="text-left">{skillName}</div>
          <Progress multi>
            <Progress bar color="success" value="100"></Progress>
          </Progress>      
        </div>
      );    
  }
  
};

export default SkillRating;
