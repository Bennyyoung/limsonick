import React from 'react'

export default function Testimonials() {
 return (
  <>
   <section id="testimonial-section">
   <div id="testimonial-trigger" className="testimonial text-white parallax" data-stellar-background-ratio="0.5"
    style={{backgroundImage: 'url("img/testimonial-bg.jpg")'}}>
    <div className="cover"></div>
  
    <div className="page-header-wrapper">
     <div className="container">
      <div className="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
       <h2>Reviews</h2>
       <div className="devider"></div>
       <p className="subtitle">What people say about us</p>
      </div>
     </div>
    </div>

    <div className="container">
     <div className="testimonial-inner center-block text-center">
      <div id="owl-testimonial" className="owl-carousel">
       <div className="item">
        <blockquote>
         <p>"This was my first experience with that team and outperformed my expectation! They know
          there stuff and I
          highly recommend them! A+++".</p>
         <footer><cite title="Source Title">Daryl Hodgeman</cite></footer>
        </blockquote>
       </div>
       <div className="item">
        <blockquote>
         <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua."</p>
         <footer><cite title="Source Title">John Doe</cite></footer>
        </blockquote>
       </div>
       <div className="item">
        <blockquote>
         <p>"Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit".</p>
         <footer><cite title="Source Title">John Doe</cite></footer>
        </blockquote>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
  </>
 )
}
