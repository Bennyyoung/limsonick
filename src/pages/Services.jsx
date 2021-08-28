import React from 'react'
import Testimonials from '../components/Testimonials'

export default function Services() {
 return (
  <div>
   <section id="services-section" className="page text-center">
    {/* <!-- Begin page header--> */}
    <div className="page-header-wrapper">
     <div className="container">
      <div className="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
       <h2>Services</h2>
       <div className="devider"></div>
       <p className="subtitle">what we really know how</p>
      </div>
     </div>
    </div>
    {/* <!-- End page header--> */}

    {/* <!-- Begin roatet box-2 --> */}
    <div className="rotate-box-2-wrapper">
     <div className="container">
      <div className="row">
       <div className="col-md-3 col-sm-6">
        <a href="#" className="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0">
         <span className="rotate-box-icon"><i className="fa fa-mobile"></i></span>
         <div className="rotate-box-info">
          <h4>App Development</h4>
          <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
         </div>
        </a>
       </div>

       <div className="col-md-3 col-sm-6">
        <a href="#" className="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.2s">
         <span className="rotate-box-icon"><i className="fa fa-pie-chart"></i></span>
         <div className="rotate-box-info">
          <h4>Ui Design</h4>
          <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
         </div>
        </a>
       </div>

       <div className="col-md-3 col-sm-6">
        <a href="#" className="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.4s">
         <span className="rotate-box-icon"><i className="fa fa-cloud"></i></span>
         <div className="rotate-box-info">
          <h4>Cloud Hosting</h4>
          <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
         </div>
        </a>
       </div>

       <div className="col-md-3 col-sm-6">
        <a href="#" className="rotate-box-2 square-icon text-center wow zoomIn" data-wow-delay="0.6s">
         <span className="rotate-box-icon"><i className="fa fa-pencil"></i></span>
         <div className="rotate-box-info">
          <h4>Coding Pen</h4>
          <p>Lorem ipsum dolor sit amet set, consectetur utes anet adipisicing elit, sed do eiusmod tempor incidist.</p>
         </div>
        </a>
       </div>

      </div> 
      {/* <!-- /.row --> */}
     </div> 
     {/* <!-- /.container --> */}

     <div className="container">
      {/* <!-- Cta Button --> */}
      <div className="extra-space-l"></div>
      <div className="text-center">
       <a className="btn btn-default btn-lg-xl" href="http://www.imransdesign.com/" target="_blank" role="button">Large
        Button</a>
      </div>
     </div> 
     {/* <!-- /.container --> */}
    </div>
    {/* <!-- End rotate-box-2 --> */}
   </section>
  
   <Testimonials />
  </div>
 )
}
