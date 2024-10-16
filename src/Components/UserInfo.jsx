import Wrapper from '../Wrapper/UserInfo'
import UseAnimations from 'react-useanimations'
import activity from 'react-useanimations/lib/activity'
import airplay from 'react-useanimations/lib/airplay'
import infinity from 'react-useanimations/lib/infinity'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const UserInfo = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
  }
  return (
    <Wrapper>
      <div className='user-info '>
        <h4>Hi, I&apos;m Sahil. Nice to meet you.</h4>
        <div className='carousel'>
          <Slider {...settings}>
            <div>
              <h3>
                With four years of dedicated experience in web development,
                including two years of professional practice, I excel in
                crafting captivating user interfaces and interactive experiences
                using React.
              </h3>
            </div>
            <div>
              <h3>
                My expertise extends to HTML, CSS, and JavaScript, forming the
                foundation for seamless and visually appealing designs.
              </h3>
            </div>
            <div>
              <h3>
                I am equally adept at writing comprehensive documentation and
                take pride in assisting users and fellow developers in
                problem-solving.
              </h3>
            </div>
            <div>
              <h3>
                Additionally, I have honed my skills in building robust APIs
                using NodeJs, ExpressJs, MongoDB, and Mongoose in my personal
                projects, providing a holistic approach to web development.
              </h3>
            </div>
            <div>
              <h3>
                I am committed to continuous learning, always seeking to
                optimize web performance for an unparalleled user experience.
              </h3>
            </div>
          </Slider>
        </div>
      </div>
      <div className='services'>
        <div className='service service-one'>
          <UseAnimations
            animation={airplay}
            size={70}
            strokeColor='#7510F7'
            className='animate-icon'
          />

          <div className='title'>frontend developer</div>
          <p className='description '>
            I thrive on coding from scratch, bringing ideas to life in the
            browser.
          </p>
          <div className='languages'>
            <h4>Languages I speak:</h4>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Redux</p>
            <p>Material-UI</p>
            <p>Styled-components</p>
            <p>Framer-motion</p>
          </div>
        </div>
        <div className='service service-two'>
          <UseAnimations
            animation={infinity}
            size={70}
            strokeColor='#7510F7'
            fillColor='#7510F7'
            className='animate-icon'
          />
          <div className='title'>additional skills</div>
          <p className='description '>
            Additionally, competent in the following languages/technologies.
          </p>

          <div className='languages'>
            <h4>Some of them are:</h4>
            <p>NodeJS</p>
            <p>ExpressJS</p>
            <p>MongoDB</p>
            <p>React-query</p>
            <p>RTL & Jest</p>
            <p>Storybook</p>
            <p>React router (6.4)</p>
          </div>
        </div>
        <div className='service service-three'>
          <UseAnimations
            animation={activity}
            size={70}
            strokeColor='#7510F7'
            className='animate-icon'
          />
          <div className='title'>Currently Learning</div>
          <p className='description '>
            Full-stack with Node and Express, building the web one line of code
            at a time.
          </p>
          <div className='languages'>
            <h4>Projects build so far:</h4>
            <p>Jobs Tracker</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default UserInfo
