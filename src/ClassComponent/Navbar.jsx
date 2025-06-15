import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  
  render() {
    
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsAPP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/All">All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Politics">Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Crime">Crime</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Education">Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Politics">Politics</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Other</Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Science">Science</Link></li>
            <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
            <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/Cricket">Cricket</Link></li>
            <li><Link className="dropdown-item" to="/IPL">IPL</Link></li>
            <li><Link className="dropdown-item" to="/Jokes">Jokes</Link></li>
            <li><Link className="dropdown-item" to="/Covid-19">Covid-19</Link></li>
            <li><Link className="dropdown-item" to="/India">India</Link></li>
            <li><Link className="dropdown-item" to="/World">World</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Language</Link>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage("hi")}>Hindi</button></li>
            <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage("en")}>English</button></li>
            
          </ul>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/image24/p1.jpg" height={500} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/image24/p2.jpg" height={500} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.vexels.com/content/144598/preview/breaking-news-banner-header-dc416c.png" height={500} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://thumbs.dreamstime.com/b/female-news-anchor-studio-asian-american-screens-background-101584998.jpg" height={500} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev slider-btn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next slider-btn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </>
    )
  }
}
