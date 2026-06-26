import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5" id="supportWrapper">
        <h1>Support Portal</h1>
        <a href="" className='fs-5'>Track Tickets</a>
      </div>
      <div className="row px-5 py-4 mx-3">
        <div className="col-12 col-lg-6 p-3">
          <h1 className="fs-3 pb-2">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className='py-3 my-3' />
          <br />
          <a href="" className='m-2'>Track account opening</a>
          <a href="" className='m-2'>Track segment activation</a><br/>
          <a href="" className='m-2'>Intraday margins</a>
          <a href="" className='m-2'>Kite user manual</a>
        </div>
        <div className='col-1'></div>
        <div className="col-12 col-lg-5 p-3">
          <h1 className="fs-3 pb-2">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;