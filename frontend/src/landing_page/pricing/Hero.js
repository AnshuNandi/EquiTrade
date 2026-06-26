import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-3 mt-md-5 border-bottom text-center">
        <h1 className="fs-2 fs-lg-1">Pricing</h1>
        <h3 className="text-muted mt-3 fs-4 fs-lg-6">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row p-3 p-md-5 mt-3 mt-md-5 text-center g-3">
        <div className="col-12 col-lg-4 p-2 p-md-4">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3 fs-lg-4 mt-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-lg-4 p-2 p-md-4">
          <img src="media/images/intradayTrades.svg" />
          <h1 className="fs-3 fs-lg-4 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-12 col-lg-4 p-2 p-md-4">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3 fs-lg-4 mt-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;