import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-4 p-md-5 mt-2 mt-md-3 border-top">
        <h1 className="text-center fs-2">Developer</h1>
      </div>

      <div
        className="row g-3 g-md-4 p-2 p-md-3 text-muted"
        style={{ lineHeight: "1.8" }}
      >
        <div className="col-12 col-lg-6 p-2 p-md-3 text-center d-flex flex-column justify-content-center">
          <img
            src="media/images/myphoto.png"
            className="rounded-circle mx-auto"
            style={{ maxWidth: "250px", width: "100%" }}
          />
          <h4 className="mt-3 mt-md-5 fs-5">Anshu Nandi</h4>
          <h6 className="fs-6">Founder, Full-Stack Engineer</h6>
        </div>
        <div className="col-12 col-lg-6 p-2 p-md-3">
          <p>
            Anshu Nandi is a builder at heart who turns ambitious ideas into
            polished products. With a full-stack toolkit spanning React,
            Next.js, Node.js, and MongoDB, he engineers systems that feel
            seamless to users and resilient under the hood.
          </p>
          <p>
            From crafting a Git-inspired version control platform to shipping
            real-time video conferencing and AI chat apps, he blends solid CS
            fundamentals with modern cloud and DevOps practices.
          </p>
          <p>
            Curious, competitive, and community-driven, he codes, learns, and
            ships - always pushing for clarity, speed, and delight.
          </p>
          <p>
            Connect on <a href="https://github.com/AnshuNandi">GitHub</a> /{" "}
            <a href="https://linkedin.com/in/anshu-nandi">LinkedIn</a> /{" "}
            <a href="mailto:nandi.anshu712@gmail.com">Email</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;