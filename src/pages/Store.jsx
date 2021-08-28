import React from 'react'

export default function Store() {
 return (
  <>
    <section id="portfolio-section" className="page bg-style1">
   <div className="container">
    <div className="row">
     <div className="col-md-12">
      <div className="portfolio">
       
       <div className="page-header-wrapper">
        <div className="container">
         <div className="page-header text-center wow fadeInDown" data-wow-delay="0.4s">
          <h2>Our Store</h2>
          <div className="devider"></div>
          <p className="subtitle">What we are proud of</p>
         </div>
        </div>
       </div>
     
       <div className="portfolio_content_area">
        <div className="portfolio_menu" id="filters">
         <ul>
          <li className="active_prot_menu"><a href="#porfolio_menu" data-filter="*">all</a></li>
          <li><a href="#porfolio_menu" data-filter=".websites">battery 1</a></li>
          <li><a href="#porfolio_menu" data-filter=".webDesign">battery 2</a></li>
          <li><a href="#porfolio_menu" data-filter=".appsDevelopment">battery 3</a></li>
          <li><a href="#porfolio_menu" data-filter=".GraphicDesign">battery 4</a></li>
          <li><a href="#porfolio_menu" data-filter=".responsive">battery 5</a></li>
         </ul>
        </div>
        <div className="portfolio_content">
         <div className="row" id="portfolio">
          <div className="col-xs-12 col-sm-4 appsDevelopment">
           <div className="portfolio_single_content">
            <img src="img/portfolio/b1.jpg" alt="title" />
            <div>
             <a href="#">Everstart</a>
             <span>12V / 75AH</span>
            </div>
           </div>
          </div>
          <div className="col-xs-12 col-sm-4 GraphicDesign">
           <div className="portfolio_single_content">
            <img src="img/portfolio/b2.jpg" alt="title" />
            <div>
             <a href="#">Solite</a>
             <span>12V / 75AH</span>
            </div>
           </div>
          </div>
          <div className="col-xs-12 col-sm-4 responsive">
           <div className="portfolio_single_content">
            <img src="img/portfolio/b3.jpg" alt="title" />
            <div>
             <a href="#">Everstart</a>
             <span>12V / 75AH</span>
            </div>
           </div>
          </div>
          <div className="col-xs-12 col-sm-4 webDesign websites">
           <div className="portfolio_single_content">
            <img src="img/portfolio/b4.jpg" alt="title" />
            <div>
             <a href="#">GDK Gold</a>
             <span>12V / 75AH</span>
            </div>
           </div>
          </div>
          <div className="col-xs-12 col-sm-4 appsDevelopment websites">
           <div className="portfolio_single_content">
            <img src="img//portfolio/b5.jpg" alt="title" />
            <div>
             <a href="#">Forte Power Solution</a>
             <span>12V / 75AH</span>
            </div>
           </div>
          </div>
          <div className="col-xs-12 col-sm-4 GraphicDesign">
           <div className="portfolio_single_content">
            <img src="img/portfolio/b6.jpg" alt="title" />
            <div>
             <a href="#">Alphalite</a>
             <span>12V / 75AH</span>
            </div>
           </div>
          </div>
          <div className="col-xs-12 col-sm-4 responsive">
           <div className="portfolio_single_content">
            <img src="img/portfolio/b7.jpg" alt="title" />
            <div>
             <a href="#">Forte Power Solution</a>
             <span>12V / 75AH</span>
            </div>
           </div>
          </div>
          <div className="col-xs-12 col-sm-4 GraphicDesign">
           <div className="portfolio_single_content">
            <img src="img/portfolio/b8.jpg" alt="title" />
            <div>
             <a href="#">TEKA</a>
             <span>12V / 75AH</span>
            </div>
           </div>
          </div>
          
         </div>
        </div>
       </div>

      </div>
     </div>
    </div>
   </div>
  </section>
  </>
 )
}
