import './index.css';

function Nav() {
  return (
    <div className="Nav">
     <nav>
      <div className="logo">
        <p>Samuel Yeboah-Asi</p>
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
        <a href="#" class="link">
  <span class="mask">
    <div class="link-container">
      <span class="link-title1 title">Work</span>
      <span class="link-title2 title">Work</span>
    </div>
  </span>
</a>
</li> 
       <li><a href="#" className="btn">Connect</a></li>
      </ul>
     
     </nav>
    </div>
  );
}

export default Nav;
