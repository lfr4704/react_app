import React from 'react';
import './Packages.css';

class Packages extends React.Component{
  render(){
    return(
      <div>
        <div className="packages-container-1">
          <div className="box-1">
            <h1>Class Packages</h1>
          </div>
        </div>
        <div className="packages-container-2">
          <div className="box-2">
            <h1>Basic Package</h1>
              <ul>
                <li>10 Classes</li>
                <li>Nutritional Plan</li>
                <li>$275</li>
              </ul>
          </div>
          <div className="box-3">
            <h1>Gold Package</h1>
              <ul>
                <li>5 Classes</li>
                <li>Nutritional Plan</li>
                <li>$275</li>
              </ul>
          </div>
          <div className="box-4">
            <h1>Premium Package</h1>
              <ul>
                <li>10 Classes</li>
                <li>Nutritional Plan</li>
                <li>$275</li>
              </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Packages
