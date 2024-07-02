import '../index.css';
import { Outlet, Link } from "react-router-dom";


function Nav() {
  return (
    <>
     <div className="Nav">
     <nav>
      <div className="logo">
        <ul>
          <li>
       <Link to="/landing">Samuel Yeboah-Asi</Link>
        </li>
        </ul>
      
      </div>
      <ul>
        <li>
        <a href="#" class="link">
  <span class="mask">
    <div class="link-container">
      <span class="link-title1 title">About</span>
      <span class="link-title2 title">About</span>
    </div>
  </span>
</a>
        </li>
        <li>
      <Link to="/portfolio">
      <a href="#" class="link">
  <span class="mask">
    <div class="link-container">
      <span class="link-title1 title">Work</span>
      <span class="link-title2 title">Work</span>
    </div>
  </span>
</a>
      </Link>
</li> 
       <li><a href="#" className="btn">Connect</a></li>
      </ul>
     
     </nav>
    </div>
    
    <Outlet />
    </>
   
  );
}

export default Nav;
