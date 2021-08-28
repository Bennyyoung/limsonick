import React from 'react'

export default function About() {
 return (
  <>
   <section id="about-section" className="page bg-style1">
   {/* <!-- Begin page header--> */}
   <div className="page-header-wrapper">
    <div className="container">
     <div className="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
      <h2>About</h2>
      <div className="devider"></div>
      <p className="subtitle">little information</p>
     </div>
    </div>
   </div>
   {/* <!-- End page header--> */}

   {/* <!-- Begin rotate box-1 --> */}
   <div className="rotate-box-1-wrapper">
    <div className="container">
     <div className="row">
      <div className="col-md-3 col-sm-6">
       <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0">
        <span className="rotate-box-icon"><i className="fa fa-users"></i></span>
        <div className="rotate-box-info">
         <h4>Who We Are?</h4>
         <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
        </div>
       </a>
      </div>

      <div className="col-md-3 col-sm-6">
       <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.2s">
        <span className="rotate-box-icon"><i className="fa fa-diamond"></i></span>
        <div className="rotate-box-info">
         <h4>What We Do?</h4>
         <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
        </div>
       </a>
      </div>

      <div className="col-md-3 col-sm-6">
       <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.4s">
        <span className="rotate-box-icon"><i className="fa fa-heart"></i></span>
        <div className="rotate-box-info">
         <h4>Why We Do It?</h4>
         <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
        </div>
       </a>
      </div>

      <div className="col-md-3 col-sm-6">
       <a href="#" className="rotate-box-1 square-icon wow zoomIn" data-wow-delay="0.6s">
        <span className="rotate-box-icon"><i className="fa fa-clock-o"></i></span>
        <div className="rotate-box-info">
         <h4>Since When?</h4>
         <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
        </div>
       </a>
      </div>

     </div> 
     {/* <!-- /.row --> */}
    </div> 
    {/* <!-- /.container --> */}
   </div>
   {/* <!-- End rotate box-1 --> */}

   <div className="extra-space-l"></div>

   {/* <!-- Begin page header--> */}
   <div className="page-header-wrapper">
    <div className="container">
     <div className="page-header text-center wow fadeInUp" data-wow-delay="0.3s">
      <h4>Our Skills</h4>
     </div>
    </div>
   </div>
   {/* <!-- End page header--> */}

   {/* <!-- Begin Our Skills --> */}
   <div className="our-skills">
    <div className="container">
     <div className="row">

      <div className="col-sm-6">
       <div className="skill-bar wow slideInLeft" data-wow-delay="0.2s">
        <div className="progress-lebel">
         <h6>Photoshop & Illustrator</h6>
        </div>
        <div className="progress">
         <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
          style={{width: '75%'}}>
         </div>
        </div>
       </div>
      </div>

      <div className="col-sm-6">
       <div className="skill-bar wow slideInRight" data-wow-delay="0.2s">
        <div className="progress-lebel">
         <h6>WordPress</h6>
        </div>
        <div className="progress">
         <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"
          style={{width: '85%'}}>
         </div>
        </div>
       </div>
      </div>

      <div className="col-sm-6">
       <div className="skill-bar wow slideInLeft" data-wow-delay="0.4s">
        <div className="progress-lebel">
         <h6>Html & Css</h6>
        </div>
        <div className="progress">
         <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
          style={{width: '95%'}}>
         </div>
        </div>
       </div>
      </div>

      <div className="col-sm-6">
       <div className="skill-bar wow slideInRight" data-wow-delay="0.4s">
        <div className="progress-lebel">
         <h6>Javascript</h6>
        </div>
        <div className="progress">
         <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
          style={{width: '70%'}}>
         </div>
        </div>
       </div>
      </div>

     </div> 
     {/* <!-- /.row --> */}
    </div> 
    {/* <!-- /.container --> */}
   </div>
   {/* <!-- End Our Skill --> */}
  </section>

  <section id="cta-section">
   <div className="cta">
    <div className="container">
     <div className="row">

      <div className="col-md-9">
       <h1>Download Our Pdf</h1>
       <p>Inspired by nature, follow technology, appreciate the classics. You can build modern & professional websites
        with Unika. The possibilities are just endless.</p>
      </div>

      <div className="col-md-3">
       <div className="cta-btn wow bounceInRight" data-wow-delay="0.4s">
        <a className="btn btn-default btn-lg" href="http://www.imransdesign.com/" target="_blank" role="button">Download</a>
       </div>
      </div>

     </div>
    </div>
   </div>
  </section>
  </>
 )
}
