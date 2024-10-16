import Wrapper from '../Wrapper/Contact'
import { FaHandsHelping } from 'react-icons/fa'
import contactAvatar from '../assets/contact.svg'
import ImageComponent from './ImageComponent'

const Contact = () => {
  return (
    <Wrapper>
      <ImageComponent
        src={contactAvatar}
        alt='avatar-img'
        className='avatar'
        width={722}
        height={364}
        hash='L9Q]ykDm00_H_NxpM{V}9D?Y%44r'
      />
      <h4>
        Thank you for taking the time to reach out.
        <FaHandsHelping className='hand-shake' />
      </h4>
      <form
        action='https://formsubmit.co/18ea6f73da8aa212de1871c813755b2b'
        method='POST'
        className='form'
      >
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name :
          </label>
          <input
            type='text'
            className='form-input'
            required
            name='name'
            id='name'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email :
          </label>
          <input
            type='email'
            className='form-input'
            required
            name='email'
            id='email'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='message' className='form-label'>
            Message :
          </label>
          <textarea
            placeholder='Leave a message here please'
            name='message'
            id='message'
            className='form-textarea'
          ></textarea>
        </div>

        <button type='submit' className='btn submit'>
          submit
        </button>
      </form>
    </Wrapper>
  )
}
export default Contact
