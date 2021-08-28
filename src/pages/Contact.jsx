import React from 'react'

export default function Contact() {
 return (
  <>
   <section id="contact-section" className="page text-white parallax" data-stellar-background-ratio="0.5"
    style={{ backgroundImage: "url(img/map-bg.jpg)" }}>
    <div className="cover"></div>


    <div className="page-header-wrapper">
     <div className="container">
      <div className="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
       <h2>Contacts</h2>
       <div className="devider"></div>
       <p className="subtitle">All to contact us</p>
      </div>
     </div>
    </div>


    <div className="contact wow bounceInRight" data-wow-delay="0.4s">
     <div className="container">
      <div className="row">

       <div className="col-sm-6">
        <div className="contact-info">
         <h4>Our Address</h4>
         <ul className="contact-address">
          <li><i className="fa fa-map-marker fa-lg"></i>&nbsp; 100 Limpbiscayne Blvd. (North) 17st Floor
           ,<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New World Tower New York
           ,<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New York, USA, 33148</li>
          <li><i className="fa fa-phone"></i>&nbsp; 1 -234 -456 -7890</li>
          <li><i className="fa fa-print"></i>&nbsp; 1 -234 -456 -7890</li>
          <li><i className="fa fa-envelope"></i> info@yourdomain.com</li>
          <li><i className="fa fa-skype"></i> Unika-Design</li>
         </ul>
        </div>
       </div>

       <div className="col-sm-6">
        <div className="contact-form">
         <h4>Write to us</h4>
         <form role="form">
          <div className="form-group">
           <input type="text" className="form-control input-lg" placeholder="Your Name" required />
          </div>
          <div className="form-group">
           <input type="email" className="form-control input-lg" placeholder="E-mail" required />
          </div>
          <div className="form-group">
           <input type="text" className="form-control input-lg" placeholder="Subject" required />
          </div>
          <div className="form-group">
           <textarea className="form-control input-lg" rows="5" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="btn wow bounceInRight" data-wow-delay="0.8s">Send</button>
         </form>
        </div>
       </div>

      </div>
     </div>
    </div>
   </section>
  </>
 )
}
