/* eslint-disable react/prop-types */
import Wrapper from '../Wrapper/Hero'
import hero from '../assets/hero.svg'
import avatar from '../assets/avatar.svg'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import ImageComponent from './ImageComponent'

const Hero = () => {
  const { showMenu, setShowMenu } = useGlobalContext()
  return (
    <Wrapper>
      <div className='container'>
        {showMenu && (
          <div className='show-menu'>
            <a href='https://github.com/sahil9818336328'>Github</a>
            <Link
              to='/contact'
              className='btn'
              onClick={() => setShowMenu(false)}
            >
              say hello
            </Link>
          </div>
        )}
        <h3>Front-end, JavaScript Developer</h3>
        <p className='info'>
          A web developer who is making the Internet a more beautiful and
          positive place!
        </p>

        <ImageComponent
          src={avatar}
          className='avatar-img'
          alt='avatar-img'
          width={172}
          height={172}
          hash='LdM@A=oe_JWC?jj]M-axf;ayRNoe'
        />
        <ImageComponent
          src={hero}
          alt='hero-img'
          className='hero-img'
          width={560}
          height={322}
          hash='LRF5eFRFO;x%Iia9$]X3y0V_NLR:'
        />
      </div>
    </Wrapper>
  )
}
export default Hero
