import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/KoinXLogo.png';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div>
      <header className='bg-white w-full relative h-16 md:h-20 shadow-md flex items-center'>
        <nav className='container mx-auto p-2 flex justify-between items-center'>
          <Link to={'/bitcoin'}>
            <img src={Logo} alt='Logo' />
          </Link>

          <div className='hidden md:flex items-center gap-8'>
            <NavLink to={'/bitcoin'} className='font-semibold'>
              Crypto Taxes
            </NavLink>
            <NavLink to={'/bitcoin'} className='font-semibold'>
              Free Tools
            </NavLink>
            <NavLink to={'/bitcoin'} className='font-semibold'>
              Resource Center
            </NavLink>

            <button className='gradient-bg w-[136px] h-10 rounded-lg text-white font-semibold'>
              Get Started
            </button>
          </div>

          {/* ----Mobile-Toggles-Open---- */}
          <button
            onClick={() => handleToggle()}
            className='font-semibold md:hidden p-1 hover:bg-gray-light-bg rounded-sm transition'
          >
            <AlignJustify />
          </button>

          {/* ---------------Mobile-Menu--------------- */}
          <div
            className={`w-[100%] h-[100vh] bg-[#0004] ${
              menuToggle ? 'flex translate-x-[50]' : 'hidden translate-x-0'
            } justify-end shadow-lg md:hidden right-0 absolute top-0 transition-transform duration-300`}
          >
            <div className='w-[80%] h-full p-4 bg-white flex flex-col items-center gap-10'>
              {/* ----Mobile-Toggles-Close---- */}
              <button
                onClick={() => handleToggle()}
                className='font-semibold self-start md:hidden p-1 hover:bg-gray-light-bg rounded-sm transition'
              >
                <X />
              </button>

              <NavLink to={'/bitcoin'} className='font-semibold'>
                Crypto Taxes
              </NavLink>
              <NavLink to={'/bitcoin'} className='font-semibold'>
                Free Tools
              </NavLink>
              <NavLink to={'/bitcoin'} className='font-semibold'>
                Resource Center
              </NavLink>

              <button className='gradient-bg w-[136px] h-10 rounded-lg text-white font-semibold'>
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
