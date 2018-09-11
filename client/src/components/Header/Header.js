import React from 'react';
import './Header.css';

class Header extends React.Component{
  render(){
    return(
      <div className="header-container">
        <div className="box-1">
          <img src="https://farm4.static.flickr.com/3935/32798278683_57c4dc0a72_b.jpg" />
        </div>
        <div className="box-2">
          <img src="https://i.gifer.com/5kf3.gif" />
        </div>
        <div className="box-3">
          <img src="https://media.istockphoto.com/photos/punching-bag-boxer-picture-id638813420?k=6&m=638813420&s=612x612&w=0&h=_zf_UkxEu3OLHBMO2enUsyGq4rO9LCsROVRwROIWkVs=" />
        </div>
      </div>
    );
  }

}

export default Header
