import React from 'react'
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-custom shadow-lg">
 
  <button class="navbar-toggler btn-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  
    <i class="fa fa-bars text-white" aria-hidden="true"></i>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2  mt-lg-0">
      <li class="nav-item text-center">
      
          <Link class="nav-link-custom text-center" to="/">New Lyrics</Link>
          
      </li>
     
    </ul>
    
  </div>
</nav>
    )
}
