import { useEffect, useState } from 'react';
import DanielDouangkesone from './components/daniel_douangkesone';
import Modal from './components/Modal';
import Percentage from './components/Percentage';
import RecentWorkThumbnails from './components/recent_work_thumbnails';
import ScrollTrigger from 'react-scroll-trigger';
import SocialMedia from './components/social_media'

export default function App() {
  const [state, setState] = useState({
    showNavBar: false,
    introVisible: true,
    modalImage: '',
    modalOpen: false,
    navShadow: true,
    removeIntro: false,
  })
  const {
    showNavBar,
    introVisible,
    modalImage,
    modalOpen,
    navShadow,
    removeIntro, } = state
  const {
    name = '',
    sections = [],
    skills = [],
    social_media = []
  } = DanielDouangkesone

  function handleModal(modalImage) {
    setState(prevState => ({ ...prevState, modalOpen: !modalOpen, modalImage }))
  }

  const recentWork = sections.map((element, index) => {
    return <RecentWorkThumbnails
      content={element}
      handleModal={handleModal}
      index={index}
      key={index}
    />
  })
  const skillslist = skills.map((element, index) => {
    const { label = '', percent } = element
    return (
      <Percentage
        key={index}
        label={label}
        percent={percent}
      />
    )
  })

  useEffect(() => {
    // Added: Used to fade out intro text and top nav bar
    window.addEventListener('scroll', () => {
      const { introVisible, removeIntro } = state
      const { pageYOffset } = window

      // This handles the show state of the welcome message initially. And if the user scrolls back up to the top 
      if (pageYOffset < 350 && introVisible) {
        setState(prevState => ({ ...prevState, introVisible: true, removeIntro: false }))
      }

      // This handles the fade out of the welcome message
      else if (pageYOffset > 350 && introVisible) {
        setState(prevState => ({ ...prevState, introVisible: false }))
      }
    })

    // This timeout allows for CSS to load before the intro text fades in
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, showNavBar: true }))
    }, 1000)
  }, [])

  return (
    <div id="app">

      {/* Modal */}
      {modalOpen ? <Modal image={modalImage} handleModal={handleModal} /> : null}

      {/* Background */}
      <div className="background-landscape" />

      {/* Welcome Message */}
      {!removeIntro ? <div className={`fixed top-0 h-100 w-100 flex items-center ph5 white ${introVisible ? 'fade-in' : 'fade-out'}`}>
        <div className="dtc v-mid tc white ph3 ph4-l w-100 pacifico">
          <h1>
            Welcome to my portfolio site
          </h1>
          <p className="josefin">
            Scroll down for more content
          </p>
        </div>
      </div> : null}

      {/* Top Nav Bar */}
      {
        showNavBar ?
          <div
            className={`pacifico ph5-l ph3 z-1 fixed top-0 w-100 tc name pt3 ${navShadow ? 'shadow-3' : ''} black bg-washed-green ${(introVisible) ? 'fade-out' : 'nav-fade-in'}`}
          >
            <h2 className="mb3 mt0 f-subheadline-l f1-m f2">
              {name}
            </h2>
            <SocialMedia content={social_media} />
          </div> : null
      }

      {/* Spacer */}
      <div className="w-100 w-50-l vh-100 spacer"></div>

      {/* Main Content */}
      <div className="w-100 w-50-l fr tc ph4 washed-green-o2">

        {/* About Me */}
        <div className="hello vh-75 flex flex-column justify-center f4">
          <h1 className="josefin mb4">About Me</h1>
          <span>
            I'm a Front-End Developer based in New York City with 6 years of experience building responsive, user-friendly web applications. I specialize in JavaScript, React, Redux, HTML, and CSS, and I genuinely love writing code—it's something I'm truly passionate about. I get excited about crafting clean, intuitive interfaces and bringing ideas to life through code. Whether it's fine-tuning a component or solving a tricky layout issue, I'm always up for the challenge.
          </span>
        </div>

        {/* Recent Work */}

        {/* This ScrollTrigger removes the the intro text */}
        <ScrollTrigger
          onEnter={() => {
            setState(prevState => ({ ...prevState, removeIntro: true })
            )
          }
          }
        />
        {recentWork}

        {/* Skills */}
        {/* <div className="skills flex flex-column vh-75 flex flex-column justify-center f4">
          <div className="w-100 josefin mb4">
            <h1>Related Skills</h1>
          </div>
          {skillslist}
        </div> */}
      </div>

      {/* Footer */}
      <footer className="w-100 pv4 tc fr bg-washed-green vh-100 relative">
        <div className="footer-top w-100 relative">
          <div className="absolute bottom-0 flex w-100 h-75 pt4">
            <div className="w-50 h-100 flex items-center justify-center pv5 pacifico ph3">
              <h2> Thanks for your time and interest!! </h2>
            </div>
            <div className="w-50 h-100 flex flex-column justify-center bl pv5 pl4 tl">
              <div>
                <h3 className="mb0">Get in touch</h3>
                <br />
                <a href="mailto:ddouangkesone@gmail.com">Send me an email</a>
                <br />
                <a href="https://docs.google.com/document/d/1K3PVDp56NUnAAbeOxBvs3NfLMDc8aZNaMvqoTF3zq1M/edit">Check out my resume</a>
              </div>
              <div className="mt5">
                <h3>Find me</h3>
                <SocialMedia content={social_media} />
              </div>
            </div>
          </div>
          <div className="footer-bottom w-100">
            <ScrollTrigger
              onEnter={() => { setState(prevState => ({ ...prevState, navShadow: false })) }}
              onExit={() => { setState(prevState => ({ ...prevState, navShadow: true })) }}
            />
          </div>
        </div>
      </footer>
    </div>
  )
}