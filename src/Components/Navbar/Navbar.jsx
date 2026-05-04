import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // Navbar main div
    <div className="" id="Navbar" >
      {/* For Logo */}
      <div id="Logo">
        <img
          className=""
          src="https://imgs.search.brave.com/3WWZWWRTWFondc76zR-JjO_vqYlgMQmL6SUEJ42OhGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGVwcy5jb20vbG9n/by1kb3dubG9hZC9C/L0JyYXZvLUNhbmFk/YS1sb2dvLXZlY3Rv/ci0wMS5zdmc"
          alt=""
        />
        <h1>BRAVO TECH</h1>
      </div>
      {/* For Menu */}
      <div id="Dropedown">
        <button><i class="ri-list-check-2"></i></button>
      <div id="Menu">
       <Link to='/' >Home</Link>
       <Link to='/About'>About Us</Link>
       <Link to='/Services'>Services</Link>
       <Link to='/Projects'>Projects</Link>
       <Link to='/Contact'>Contact Us</Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
