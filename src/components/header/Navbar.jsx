import React from 'react';
import { Link } from 'react-router-dom'; 
// import Gold22k from '../gold/Gold22k';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top" style={{height:"60px"}}>
      <div className="container-fluid">

        {/* ✅ Logo (optional) */}
        {/* <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Link> */}

        {/* ✅ Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Nav Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                Gold
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/gold/22k">22k</Link></li>
                <li><Link className="dropdown-item" to="/gold/24k">18k</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                Silver
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/silver/pure">Silver</Link></li>
                <li><Link className="dropdown-item" to="/silver/sterling">Sterling Silver 92.5sec</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            
            {/* <li className="nav-item">
              <Link className="nav-link" to="/offer">Offer</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
