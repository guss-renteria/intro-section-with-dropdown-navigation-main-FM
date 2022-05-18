import { useEffect, useRef } from 'react'

import './init.style.scss'

import bg_mobile from '../../images/image-hero-mobile.png'
import bg_desktop from '../../images/image-hero-desktop.png'

import icon_databiz from '../../images/client-databiz.svg'
import icon_audiophile from '../../images/client-audiophile.svg'
import icon_meet from '../../images/client-meet.svg'
import icon_maker from '../../images/client-maker.svg'

import Header from '../../components/Header/Header.component'

const Init = () => {
  const bg_ref = useRef()

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.addEventListener('resize', null)
    }
  }, [])

  const handleResize = () => {
    const size = window.innerWidth    
    if(size >= 992) {
      bg_ref.current.src = bg_desktop
    }else {
      bg_ref.current.src = bg_mobile
    }
  }

  // * return
  return (
    <>
      <Header />
      <section className='init view'>
        <div className='init-container'>
          <div className='init-section'>
            <h2>Make<br></br> remote work</h2>
            <p>
              Get your team in sync, no matter your location. Streamline processes, 
              create team rituals, and watch productivity soar.
            </p>
            <div className='space'></div>
            <button>Learn more</button>
            <div className='advertising'>
              <img src={ icon_databiz } alt='icon databiz'/>
              <img src={ icon_audiophile } alt='icon audiophile'/>
              <img src={ icon_meet } alt='icon meet'/>
              <img src={ icon_maker } alt='icon maker'/>
            </div>
          </div>

          <div className='init-section'>
            <img ref={ bg_ref } src='' alt='image'/>
          </div>
        </div>
        {/**
        <div className='attribution'>
          Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>. 
          Coded by <a href='#'>Your Name Here</a>.
        </div>
        **/}
      </section>
    </>
  )
}

export default Init
