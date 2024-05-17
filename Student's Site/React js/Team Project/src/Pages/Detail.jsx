import React from 'react';
import './Detail.css'
import CardLeftSide from '../Components/CardLeftSide/CardLeftSide';
import Navbar from '../Components/Navbar/Navbar';
import CardRightSide from '../Components/CardRightSide/CardRightSide';
const Detail = () => {
  return (
    <>
    <Navbar />
      <div className="content">
        <CardLeftSide />
        <CardRightSide />
      </div>
    </>
  );
}

export default Detail;
