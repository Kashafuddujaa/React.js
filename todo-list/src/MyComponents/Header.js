import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> {props.title} </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>

      </ul>
       {props.searchBar? <form className="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> : ""}
    </div>
    </div>
    </nav>
    </div>
  )
}

Header.defaultProps = {
  title: "your Title Here",

}


Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}