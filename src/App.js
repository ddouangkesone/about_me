import React, { Component } from 'react';
// import styled from 'styled-components'
import ScrollTrigger from 'react-scroll-trigger';
import Percentage from './components/Percentage';
import Modal from './components/Modal';
import SocialMedia from './components/social_media'
import DanielDouangkesone from './components/daniel_douangkesone';
import RecentWorkThumbnails from './components/recent_work_thumbnails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalImage: '',
      introVisible: true,
      removeIntro: false,
      navShadow: true,
      initialLoad: false
    }
    this.handleModal = this.handleModal.bind(this)
    this.escFunction = this.escFunction.bind(this)
  }

  componentDidMount(){
    // Added: Gives users ability to ESC out of modal
    document.addEventListener("keydown", this.escFunction, false);
    // Added: Used to fade out intro text
    window.addEventListener('scroll', () => {
      
      
      const { introVisible, removeIntro } = this.state
      const { pageYOffset } = window
      if(pageYOffset > 350 && introVisible) {
        this.setState({introVisible: false})
      }
      else if(pageYOffset < 350 && !introVisible) {
        this.setState({introVisible: true, removeIntro: false})
      }
      else if(pageYOffset > 400 && !removeIntro) {
        this.setState({removeIntro: true})
      }
    })
    this.setState({initialLoad: true})
  }

  handleModal(modalImage) {
    const { modalOpen } = this.state
    this.setState({modalOpen: modalOpen ? false : true, modalImage})
  }

  escFunction(event){
    if(event.keyCode === 27) {
      this.setState({modalOpen: false})
    }
  }

  render() {
    const { modalOpen, modalImage, introVisible, removeIntro, navShadow, initialLoad = false } = this.state
    const { 
      name = '',
      sections = [],
      skills = [],
      social_media = []
      } = DanielDouangkesone

    const recentWork = sections.map((element, index) => {
      return <RecentWorkThumbnails key={index} content={element} handleModal={this.handleModal} index={index} />
      })
    const skillslist = skills.map((element, index) => { 
      const {label = '', percent} = element
      return (
        <Percentage percent={percent} key={index} label={label} />
      )
     })
     
    return (
      <div className="App">
        { modalOpen ? <Modal image={modalImage} handleModal={this.handleModal} /> : null }
        <div className="background-landscape"></div>
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
          {
            !initialLoad ?
             null : <div className={`pacifico ph5-l ph3 z-1 fixed top-0 w-100 tc name pt3 ${navShadow ? 'shadow-3' : ''} black bg-washed-green ${introVisible ? 'fade-out' : 'nav-fade-in'}`}>
             <h2 className="mb3 mt0 f-subheadline-l f1-m f2">
               {name}
             </h2>
             <SocialMedia content={social_media} />  
           </div>
          }
        
        <div className="w-100 w-50-l vh-100 spacer"></div>
        <div className="w-100 w-50-l fr tc ph4 washed-green-o2">
          <div className="hello vh-75 flex flex-column justify-center f4">
            <h1 className="pacifico mb4">About Me</h1>
            <span>
              I'm a web designer / developer based out of Austin, Tx. I started taking freelance design jobs and
              naturally progressed into web development. Making beautiful smart websites is my pride and passion.
            </span>
          </div>
          <ScrollTrigger onEnter={() => {this.setState({removeIntro: true})}} />
          {recentWork}
          <div className="skills flex flex-column vh-75 flex flex-column justify-center f4">
            <div className="w-100 pacifico mb4">
              <h1>Related Skills</h1>
            </div>
            {skillslist}
          </div>
        </div>
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
              onEnter={() => {this.setState({navShadow: false})}}
              onExit={() => {this.setState({navShadow: true})}}
            />
          </div>
        </div>
        </footer>
      </div>
    );
  }
}

export default App;
