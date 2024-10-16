import Wrapper from '../Wrapper/Footer'
import { GrEmoji } from 'react-icons/gr'
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineSend,
} from 'react-icons/ai'
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa'
import { SiStyledcomponents } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Wrapper>
      <div className='contact'>
        <span>Let&apos;s build together</span>
        <p>
          Want to hire me? Let&apos;s discuss the project idea. Teamwork makes
          the dream work.
        </p>
        <Link className='btn' to='/contact'>
          <AiOutlineSend /> <div>Drop a message</div>
        </Link>
      </div>
      <div className='container'>
        <h4 className='footer-logo'>
          SAHIL <GrEmoji /> KHATRI
        </h4>
        <p className='footer-title'>
          &apos; Testing leads to failure, and failure leads to understanding.
          &apos;
        </p>
        <div className='social-links'>
          <a
            href='https://twitter.com/SAHIL82495623'
            className='social-icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineTwitter />
          </a>
          <a
            href='https://www.linkedin.com/in/sahil-khatri-867952205/'
            className='social-icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedinIn />
          </a>
          <a
            href='https://github.com/sahil9818336328'
            className='social-icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillGithub />
          </a>
          <a
            href='mailto:sahilkeshav1997@gmail.com'
            className='social-icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineMail />
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100057408580388'
            className='social-icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>
        </div>
        <div className='footer-end'>
          <p>Portfolio designed by me &copy; {new Date().getFullYear()}</p>
          <p className='made-with'>
            Made with <SiStyledcomponents /> styled-components{' '}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Footer
