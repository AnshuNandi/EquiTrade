import React from "react";

function Pricing() {
  return (
    <div className="container p-3 p-md-5">
      <div className="row g-3 g-md-4 align-items-center">
        <div className="col-12 col-lg-4 p-2 p-md-3">
          <h1 className="mb-3 fs-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-12 col-lg-8 mb-5 p-2 p-md-3">
          <div className="row text-center g-2 g-md-3">
            <div className="col-12 col-lg-6 p-2 p-md-3 border">
              <h1 className="mb-2 mb-md-3 fs-2">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-12 col-lg-6 p-2 p-md-3 border">
              <h1 className="mb-2 mb-md-3 fs-2">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;