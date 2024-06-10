import './Navbar.css'

function Navbar() {
  return (
    <div id="navbar">
         <div id="logo">
            <img src="https://flowbite.com/docs/images/logo.svg"></img>
            <h2>GeekFoods</h2>
         </div>
         <div>
            <ul>
              <li>Home</li>
              <li>Quote</li>
              <li>Resturants</li>
              <li>Foods</li>
              <li>Contact</li>
            </ul>
         </div>
          <button>Get started</button>
          <div id="hamburger">
          <i class="fa-solid fa-bars"></i>
         </div>
    </div>
  )
}

export default Navbar;
