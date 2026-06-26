import React from "react";

function OpenAccount() {
  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mt-5 p-2 fs-1">Open a EquiTrade account</h1>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="p-3 px-4 btn btn-primary fs-5 mt-2 mb-5"
            style={{ maxWidth: "300px", width: "100%" }}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;