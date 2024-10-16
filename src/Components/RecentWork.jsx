import Wrapper from '../Wrapper/RecentWork'
// import projectOne from '../assets/ProjectsImages/project-1.svg'
import { FaFilePdf } from 'react-icons/fa6'
import { works } from '../constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const RecentWork = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h4 className='title'>my recent work</h4>
        <p className='info'>
          These are my latest projects that I&apos;ve worked on. More coming
          soon.
        </p>
        <div className='projects'>
          {works?.map((project) => {
            const { id, img, title, description, documentation, url, stack } =
              project

            return (
              <div key={id} className='project'>
                <div className='project-section-left'>
                  {/* <img src={img} alt='project-image' /> */}
                  <LazyLoadImage src={img} effect='blur' />
                </div>
                <div className='project-section-right'>
                  <h4 className='project-title'>{title}</h4>
                  <p className='info'>{description}</p>
                  <p className='stack'>
                    Built using <span> {stack} </span>
                  </p>
                  <div className='btn-container'>
                    <a
                      href={documentation}
                      className={`btn btn-1 ${!documentation && 'disabled'}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {documentation ? 'Documentation' : 'Coming soon...'}
                    </a>
                    <a
                      href={url}
                      className='btn'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Visit site
                    </a>
                  </div>
                </div>
              </div>
            )
          })}

          <a
            href='https://drive.google.com/file/d/12NphbNXiXXmbCf8VGS0gVI3wHcMcK2G4/view?usp=sharing'
            className='btn linkedin'
            download
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>
              <FaFilePdf />
            </span>
            <span>Experience letter</span>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}
export default RecentWork
