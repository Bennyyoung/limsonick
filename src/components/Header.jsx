import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
 return (
  <>
   <header id="header" className="header-main">

    {/* <!-- Begin Navbar --> */}
    <nav id="main-navbar" className="navbar navbar-default navbar-fixed-top" role="navigation">
     {/* Classes: navbar-default, navbar-inverse, navbar-fixed-top, navbar-fixed-bottom, navbar-transparent. Note: If you use non-transparent navbar, set "height: 98px;" to #header */}

     <div className="container">

      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
      <div className="navbar-header">
       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
       </button>
       <a class="navbar-brand page-scroll" href="index.html">Unika</a>
      </div>

      {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
       <ul className="nav navbar-nav navbar-right">
       <li style={{marginRight: '300px'}}><Link to="/" style={{float: 'left', fontSize: '20px', fontWeight: 'bold'}}><strong>Limsonick</strong></Link></li>

        <li><Link to="/">Home</Link></li>
        <li><Link className="page-scroll" to="/about">About</Link></li>
        <li><Link className="page-scroll" to="/services">Services</Link></li>
        <li><Link className="page-scroll" to="/store">Store</Link></li>
        {/* <li><a className="page-scroll" href="#team-section">Team</a></li>
        <li><a className="page-scroll" href="#prices-section">Prices</a></li> */}
        <li><Link className="page-scroll" to="/contact">Contact</Link></li>
       </ul>
      </div>
      {/* <!-- /.navbar-collapse --> */}
     </div>
     {/* <!-- /.container --> */}
    </nav>
    {/* <!-- End Navbar --> */}

   </header>

  </>
 )
}
