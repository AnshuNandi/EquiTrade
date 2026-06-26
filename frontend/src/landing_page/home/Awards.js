import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row g-3 g-md-4">
        <div className="col-12 col-lg-6 p-2 p-md-3 p-lg-4">
          <img src="media/images/largestBroker.svg" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 p-2 p-md-3 p-lg-4 d-flex flex-column justify-content-center">
          <h1 className="fs-3 mb-4">Largest stock broker in India</h1>
          <p className="text-muted mb-4">
            2+ million EquiTrade clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row g-3">
            <div className="col-12 col-lg-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;