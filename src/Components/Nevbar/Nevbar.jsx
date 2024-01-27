import { Link } from 'react-router-dom';
import logo from '../../assets/assets/logo.png';

const Nevbar = () => {
    return (

        <div className='pt-10 bg-[#FFF]'>
            <div className="navbar bg-[#FFF]  max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a href='/' className=" text-xl"><img src={logo} className='w-32 h-12'  alt="logo" /> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    
  </div>
  <div className="navbar-end hidden lg:flex gap-4">
  <ul className="menu menu-horizontal px-1 gap-2">
      <li><a>Home</a></li>
      <li>
        <details>
        <summary>Team</summary>
        <ul className="">
          <li><a href='/ourTeam'>Our Team</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </details>
    </li>
      <li><a>Our Portfolio</a></li>
      {/* <Link to='/ourTeam'> <li><a>Our Team</a></li></Link>  */}
      <li><a>Contact Us</a></li>
    
    </ul>
    <Link  to='/login' ><a className="btn w-32 h-11 bg-[#F63E7B] rounded-md text-white">Login</a></Link>
  </div>
</div>
        </div>
    );
};

export default Nevbar;