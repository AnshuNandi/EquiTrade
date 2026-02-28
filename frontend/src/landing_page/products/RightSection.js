import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row g-3 g-md-4 align-items-center">
        <div className="col-12 col-lg-6 p-2 p-md-3 p-lg-5 order-2 order-lg-1">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2 p-2 p-md-3">
          <img src={imageURL} className="img-fluid"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;