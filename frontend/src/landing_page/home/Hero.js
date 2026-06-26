import React from "react";

function Hero() {
  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-3 mb-md-5"
        />
        <h1 className="mt-2 p-2 mt-md-3 fs-2">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 mt-2 btn btn-primary fs-5 mb-2"
          style={{ maxWidth: "300px", width: "100%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Hero;