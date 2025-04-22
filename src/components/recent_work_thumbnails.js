import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

export default function RecentWorkThumbnails(props) {
  const [state, setState] = useState({
    inFocus: false
  })
  const { handleModal, content = {} } = props
  const { label = '', fields = [] } = content
  const { inFocus } = state
  const thumbnails = fields.map((element, index) => {
    const { image, label: image_label, link = '' } = element
    const fieldsContent = link
      ? <div key={index} className="danfoo1 w-third-l w-50-m w-100 pa3 mv2 h5">
        <a
          className="link dt hide-child br2 cover bg-center h-100 shadow-2 fade-in center w-100"
          href={link}
          rel='noreferrer noopener'
          style={{ backgroundImage: `url(${image})` }}
          target="_blank"
        >
          <span className="washed-green dtc v-mid child bg-black-40">
            {image_label}
          </span>
        </a>
      </div>
      : <div key={index} className="danfoo2 w-third-l w-50-m w-100 pa3 mv2 h5" onClick={() => { handleModal(image) }}>
        <div
          className={`link dt hide-child br2 cover bg-center h-100 shadow-2 fade-in center w-100`}
          style={{ background: `url(${image})` }}
        >
          <span className="washed-green dtc v-mid child bg-black-40">
            {image_label}
          </span>
        </div>
      </div>

    return fieldsContent
  })

  return (
    <div className="recent-work pv5 mt3 flex flex-column mb4">
      <div className="w-100 josefin">
        <h1>{label}</h1>
      </div>
      <ScrollTrigger className="mt2" onEnter={() => {
        setState(prevState => ({ ...prevState, inFocus: true }))
      }}>
        <div className="examples flex flex-wrap items-center flex-column-m flex-row-l f4">
          {inFocus ? thumbnails : null}
        </div>
      </ScrollTrigger>
    </div>
  )
}