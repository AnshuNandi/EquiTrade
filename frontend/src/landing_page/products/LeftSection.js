import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row g-3 g-md-4 d-flex align-items-center">
        <div className="col-12 col-lg-6 order-1 order-lg-1 p-2 p-md-3">
          <img src={imageURL} className="img-fluid"/>
        </div>
        <div className="col-12 col-lg-6 p-2 p-md-3 p-lg-5 order-2 order-lg-2">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "5%" }}>
              Learn More
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "2%" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;