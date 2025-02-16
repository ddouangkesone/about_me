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
          label: 'First Image'
        },
        {
          image: LX2,
          label: 'Second Image'
        },
        {
          image: LX3,
          label: 'Third Image'
        },
        {
          image: LX4,
          label: 'Four Image'
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
      <div className="w-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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