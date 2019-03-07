import React from 'react';


const SocialMedia = (element) => {
  const icons = element.content.map((element, index) => {
    const { link = '', label = '' } = element

    return (
      <a
        href={link}
        key={index}
        target="_blank"
        rel='noreferrer noopener'
      >
        <i className={`${label} black f3 ph3 social-media`}></i>
      </a>
    )
  })

  return (
    <ul className="social-media mt0 mb3 ph0">
      {icons}
    </ul>
  )
}

export default SocialMedia