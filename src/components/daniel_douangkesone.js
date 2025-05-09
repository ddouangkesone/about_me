import back from '../assets/back.png'
import bodega from '../assets/bodega.jpg'
import burn_alleycat from '../assets/burn_alleycat.png'
import fast_fridays from '../assets/fast_fridays.png'
import homecity from '../assets/homecity.jpg'
import lost_pines from '../assets/lost_pines.jpg'
import the_farm from '../assets/the_farm.jpg'
import vince from '../assets/vince.jpg'
import LX1 from "../assets/lx1.png"
import Milk2 from "../assets/Milk2.webp"

const DanielDouangkesone = {
  "name": "Daniel Douangkesone",
  "profile_image": back,
  "skills": [
    {
      "label": "HTML",
      "percent": 90
    },
    {
      "label": "Css/Scss",
      "percent": "90"
    },
    {
      "label": "Javascript",
      "percent": 85
    },
    {
      "label": "React",
      "percent": "85"
    }
  ],
  "sections": [
    {
      "label": "Recent Web Work",
      "fields": [
        {
          image: LX1,
          label: 'LocatorX',
          link: '/projects/locatorx',
          target: '_self'
        },
        {
          image: Milk2,
          label: 'Milk',
          link: '/projects/milk',
          target: '_self'
        },
        {
          image: homecity,
          label: 'Homecity',
          link: 'https://www.homecity.com/'
        },
        {
          image: vince,
          label: 'Vince',
          link: 'https://vinceyoungrealty.com'
        }
      ]
    },
    {
      "label": "Older Design Work",
      "fields": [
        {
          "image": bodega,
          "label": "Bodega"
        },
        {
          "image": burn_alleycat,
          "label": "Burn"
        },
        {
          "image": fast_fridays,
          "label": "Fast Fridays"
        },
        {
          "image": lost_pines,
          "label": "Lost Pines"
        },
        {
          "image": the_farm,
          "label": "Farm"
        }
      ]
    }
  ],
  "social_media": [
    {
      "label": "fab fa-linkedin-in",
      "link": "https://www.linkedin.com/in/ddouangkesone/"
    },
    {
      "label": "fab fa-github",
      "link": "https://github.com/ddouangkesone"
    },
    {
      "label": "far fa-envelope",
      "link": "mailto:ddouangkesone@gmail.com"
    },
    {
      "label": "fab fa-instagram",
      "link": "https://www.instagram.com/dosebotsomebot/"
    }
  ]
}

export default DanielDouangkesone