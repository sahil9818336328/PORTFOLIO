/* eslint-disable react/prop-types */
import Wrapper from '../Wrapper/Navbar'
import { Sling as Hamburger } from 'hamburger-react'
import { useGlobalContext } from '../context'
import { GrClose } from 'react-icons/gr'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const isContactPage = location.pathname === '/contact'
  const { setShowMenu, showMenu } = useGlobalContext()
  return (
    <Wrapper>
      <div className='container'>
        <div className='navbar'>
          <h4 className='logo'>sahil khatri</h4>
          {!isContactPage && (
            <>
              <Hamburger
                toggled={showMenu}
                toggle={() => setShowMenu(!showMenu)}
                color='#7510f7'
                size={17}
              />
              <div className='nav-section-right'>
                <a
                  href='https://github.com/sahil9818336328'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </a>
                <Link to='/contact' className='btn'>
                  say hello
                </Link>
              </div>
            </>
          )}

          {isContactPage && (
            <Link to='/'>
              <GrClose className='close-icon' />
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
