import React from "react";

function Stats() {
  return (
    <div className="container p-3 p-md-5">
      <div className="row g-3 g-md-4">
        <div className="col-12 col-lg-6 p-2 p-md-3 p-lg-5">
          <h1 className="fs-3 mb-4 mb-md-5">Trust with confidence</h1>
          <h2 className="fs-5 mb-3">Customer-first always</h2>
          <p className="text-muted mb-3">
            That's why 1.3+ crore customers trust EquiTrade with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-5 mb-3">No spam or gimmicks</h2>
          <p className="text-muted mb-3">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-5 mb-3">The EquiTrade universe</h2>
          <p className="text-muted mb-3">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-5 mb-3">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-lg-6 p-2 p-md-3 p-lg-5">
          <img src="media/images/ecosystem.png" className="img-fluid" />
          <div className="text-center mt-3 mt-md-4">
            <a href="" className="mx-2 mx-md-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;