import { useEffect } from 'react'
import { useState } from 'react'
import { Blurhash } from 'react-blurhash'
import { LazyLoadImage } from 'react-lazy-load-image-component'

/* eslint-disable react/prop-types */
const ImageComponent = ({ src, alt, className, width, height, hash }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageLoaded(true)
    }
    img.src = src
  }, [src])

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {!imageLoaded && screenWidth > 995 && (
        <Blurhash
          hash={hash}
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && screenWidth > 995 && (
        <img src={src} alt={alt} className={className} />
      )}
      {screenWidth < 995 && (
        <LazyLoadImage src={src} effect='blur' className={className} />
      )}
    </>
  )
}
export default ImageComponent
