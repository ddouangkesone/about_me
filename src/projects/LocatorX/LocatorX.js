import { useState } from 'react';
import RecentWorkThumbnails from "../../components/recent_work_thumbnails"
import Modal from "../../components/Modal";
import LX1 from '../../assets/lx1.png';
import LX2 from '../../assets/lx2.png';
import LX3 from '../../assets/lx3.png';
import LX4 from '../../assets/lx4.png';

export default function LocatorX() {
  const [modalState, setModalState] = useState({
    modalImage: '',
    modalOpen: false
  })
  const { modalImage, modalOpen } = modalState
  const consoleScreenshots = [
    {
      label: "",
      fields: [
        {
          image: LX1,
          label: 'Console 1'
        },
        {
          image: LX2,
          label: 'Console 2'
        },
        {
          image: LX3,
          label: 'Console 3'
        },
        {
          image: LX4,
          label: 'Console 4'
        },
      ]
    }].map((element, index) => <RecentWorkThumbnails
      content={element}
      handleModal={handleModal}
      index={index}
      key={index}
    />)
  // In this app ill want a description of the console with some screenshots.
  // I can show off the work i did with google maps / tables / MUI

  function handleModal(modalImage) {
    setModalState(prevState => ({ ...prevState, modalOpen: !modalOpen, modalImage }))
  }

  return (
    <div className="flex flex-column items-center justify-center">

      {/* Modal */}
      {modalOpen ? <Modal image={modalImage} handleModal={handleModal} /> : null}


      {/* Title of Project */}
      <h2 className="mb3 f-subheadline-l f1-m f2 pacifico flex mt2">
        LocatorX
      </h2>

      {/* Description */}
      <div
        className="w-70 mt3"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with 90% opacity
          padding: '3rem 1rem',
          borderRadius: '8px'
        }}
      >
        A GPS-based asset tracking platform that empowers users to locate and manage tagged items in real time. I led the front-end development using React, Google Maps, Redux, and Material UI to create a responsive and intuitive user interface. The system communicates with back-end APIs to display live asset locations and status. Recently, I integrated Ollama AI to allow users to convert natural language queries into Elasticsearch-compatible searches, enhancing the platform’s usability and search functionality.
      </div>

      {/* Main Image section */}
      <div className="w-50 text-center">

        {/* Insert a main image here */}
        {consoleScreenshots}
      </div>
    </div>
  )
}


// Man its been SO long since ive had to write css using this old tachyons library.
// At the time of writting the app, i LOVED declarative class css names. Im curious what this will be like