import { useState } from "react";
import Modal from "../components/Modal";
import MilkPicture from "../assets/Milk.png"
import RecentWorkThumbnails from "../components/recent_work_thumbnails";

export default function Milk() {
  const [modalState, setModalState] = useState({
    modalImage: '',
    modalOpen: false
  })
  const { modalImage, modalOpen } = modalState
  const milkScreenshots = [
    {
      label: "",
      fields: [
        {
          image: MilkPicture,
          label: 'Milk 1'
        }
      ]
    }].map((element, index) => <RecentWorkThumbnails
      content={element}
      handleModal={handleModal}
      index={index}
      key={index}
    />)

  function handleModal(modalImage) {
    setModalState(prevState => ({ ...prevState, modalOpen: !modalOpen, modalImage }))
  }

  return (
    <div className="flex flex-column items-center justify-center">

      {/* Modal */}
      {modalOpen ? <Modal image={modalImage} handleModal={handleModal} /> : null}


      {/* Title of Project */}
      <h2 className="mb3 f-subheadline-l f1-m f2 pacifico flex mt2">
        Milk
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
        Milk is a playful project I created to invite friends to hang out with me during my visit to New York City. Instead of sending multiple text messages, I built a website featuring a slow-motion, looping video of milk being poured on my head, complete with customizable subtitles. By using query parameters like `?name=Dan`, the subtitles would dynamically update to personalize the invitation for each friend. It was a fun and creative way to connect!
      </div>

      {/* Main Image section */}
      <div className="w-50 text-center">
        {milkScreenshots}
      </div>
    </div>
  )
}