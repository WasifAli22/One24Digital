import React from 'react';


const ContactUs = () => {

  // Initialize ScrollTrigger

  return (
    <div>
      <div className="header-blank"></div>
      <div className="modal" id="reqst">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="m-0"> Become an One24 </h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <div className="banner-form">
                <div className="form-group">
                  <label> Contact Person Name* </label>
                  <input type="text" name="" className="form-control" />
                </div>
                <div className="form-group">
                  <label> Mobile Number* </label>
                  <input type="text" name="" className="form-control" />
                </div>
                <div className="form-group">
                  <label> City* </label>
                  <input type="text" name="" className="form-control" />
                </div>
                <div className="form-group checkboxs-btns">
                  <label htmlFor="manufacture" className="">
                    <input id="manufacture" type="radio" name="checktype" />
                    <img className="building" src="images/building.png" /> Manufacture, Wholesaler, Distributor
                    <img className="check_img" src="images/check.png" />
                  </label>
                  <label htmlFor="individual" className="active">
                    <img className="building" src="images/home.png" />
                    <input id="individual" type="radio" name="checktype" /> Retailer, Reseller, <br /> An individual
                    <img className="check_img" src="images/check.png" />
                  </label>
                </div>
                <div className="form-group row">
                  <div className="col-md-6">
                    <button className="btn btn-success req-btn text-uppercase btn-sm"> Request a Call </button>
                  </div>
                  <div className="col-md-6">
                    <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section className="contact-sec mt-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 content">
                <h1>Got Questions ?</h1>
                <p>Drop Us A Line, Or Give Us A Phone Call At : <a target="_blank" href="tel:+917352020228"> 7352020228 </a> </p>
                <span>The Indian retails industry is facing significant challengers. 92% of the $950 billion market is unorganized and deprived of technology & Standardization. In the past few years, the ecosystem has witnessed new solutions, such as B2B supply, POS, and SME financing. However, there is no single comprehensive solution to solve 360 real-life pain points of retailers.Retailer still waste hours comparing prices on B2B apps and following up with traditional distributors. On top of this, they have to manage day to day operations and handle customers.
                  <br />
                  <br />
                  <center>We are here to solve this.</center>
                </span>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-4 details">
                <h3>Reach Us At</h3>
                <hr />
                <p><i className="fa fa-map-marker"></i> <a href="#"> C/O:- PRABHUNATH MISHRA B-49, NEHRU CO-OPERATIVE, TETULIA, BOKARO STEEL CITY, JHARKHAND, PINCODE-827012</a></p>
                <p><i className="fa fa-phone"></i>  Seller Support: <a target="_blank" href="tel:+917352020228"> 7352020228</a></p>
                <p><i className="fa fa-envelope"></i> Email Support: <a href="mailto:app.help.one24@gmail.com"> team@one24store.com</a> </p>
              </div>
            </div>
          </div>
        </section>

        <section className="brands-sec bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 brand-title">
                <h3> <b> Sell anywhere, through </b> <span> One24 </span>  </h3>
                <p> Our trusted logistics partners are always there for you. </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="owl-carousel owl-theme brands" id="brands">
                  {/* Your owl carousel items here */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="container">
        <img src="images/reach.png" className="img-fluid" alt="One24 Partner Stores" />
      </div>


    </div>
  );
}

export default ContactUs;
