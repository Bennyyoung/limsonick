import React from 'react'
import slider_bg from './slider-bg.jpg'

export default function Home() {
 return (
  <>
   {/* <!-- Begin text carousel intro section --> */}
   <section id="text-carousel-intro-section" className="parallax" data-stellar-background-ratio="0.5" style={{
    backgroundImage: `url(${slider_bg})`
   }}>

    <div className="container">
     <div className="caption text-center text-white" data-stellar-ratio="0.7">

      <div id="owl-intro-text" className="owl-carousel">
       <div className="item">
        <h1>We have Awesome things</h1>
        <p>Let's make the web beautiful together</p>
        <div className="extra-space-l"></div>
        <a className="btn btn-blank" href="https://creativemarket.com/Themetorium" target="_blank" role="button">View More!</a>
       </div>
       <div className="item">
        <h1>Join with us</h1>
        <p>To the greatest Journey</p>
        <div className="extra-space-l"></div>
        <a className="btn btn-blank" href="https://creativemarket.com/Themetorium" target="_blank" role="button">View More!</a>
       </div>
       <div className="item">
        <h1>I'm Unika</h1>
        <p>One Page Responsive Theme</p>
        <div className="extra-space-l"></div>
        <a className="btn btn-blank" href="https://creativemarket.com/Themetorium" target="_blank" role="button">View More!</a>
       </div>
      </div>

     </div>
     {/* <!-- /.caption --> */}
    </div>
    {/* <!-- /.container --> */}

   </section>
   {/* <!-- End text carousel intro section -->    */}

  </>
 )
}
