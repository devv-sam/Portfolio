import './index.css';

function Nav() {
  return (
    <div className="Nav">
     <nav>
      <div className="logo">
        <p>Samuel Yeboah-Asi</p>
      </div>
      <ul>
        <li><a href="#">About</a></li>
       <li><a href="#">Work</a></li> 
       <li><a href="#" class="btn">Connect</a></li>
      </ul>
     
     </nav>
    </div>
  );
}

export default Nav;
