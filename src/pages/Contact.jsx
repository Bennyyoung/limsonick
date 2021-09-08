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
          <li><i className="fa fa-map-marker fa-lg"></i><h4>HEAD OFFICE</h4>&nbsp; Central Zone C, Block 2 Shop 14 & 19
           ,<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aspamda plaza Tradefair Complex
           ,<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Badagry Express Way Ojo, Lagos</li>

           <li><i className="fa fa-map-marker fa-lg"></i><h4>BRANCH OFFICE</h4>&nbsp; Nnewi Plaza Shop 9, Aspamda Lagos.</li>
          <li><i className="fa fa-phone"></i><a href="tel: 0803 550 2065">0803 550 2065</a>&nbsp; </li>
          <li><i className="fa fa-print"></i><a href="tel: 0803 381 5702">0803 381 5702</a>&nbsp; </li>
          <li><i className="fa fa-envelope"></i><a href="mailto: limsonickenterprises@gmail.com">limsonickenterprises@gmail.com</a> </li>
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
