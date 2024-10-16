import imgOne from '../src/assets/ProjectsImages/project-1.svg'
import imgTwo from '../src/assets/ProjectsImages/project-2.svg'
import imgThree from '../src/assets/ProjectsImages/project-3.svg'

export const works = [
  {
    id: 0,
    img: imgOne,
    title: 'Jobs Tracker (2023)',
    description:
      ' A simple job tracking software that allows you to perform CRUD operations with proper authentication and serve side pagination.',
    stack: 'MERN',
    documentation:
      'https://www.notion.so/JOB-TRACKER-MERN-STACK-7bbda1d00a1849fbbbe6deaf860262f0?pvs=4',
    url: 'https://mern-jobs-track.onrender.com',
  },
  {
    id: 1,
    img: imgThree,
    title: 'E-commerce (2021)',
    description:
      'Fully functional e-commerce site with checkout and payment functionality using stripe.',
    stack: 'React, Stripe, Netlify',
    documentation:
      'https://www.notion.so/E-COMMERCE-42aa4cb0edd34176a6e8ba6154f7d20d?pvs=4',
    url: 'https://e-commerce-auth0-stripe-2021.netlify.app/',
  },
  {
    id: 2,
    img: imgTwo,
    title: 'Github Users (2021)',
    description:
      'An application where you can search for github users and see their followers, repositories, etc. Used AuthO for authentication, fusion charts for graphs and charts and Github api for displaying data. ',
    stack: 'React, Fusion charts, AuthO, Github Api',
    documentation: '',
    url: 'https://search-github-users-react-2021.netlify.app/',
  },
  // {
  //   id: 3,
  //   img: imgThree,
  //   title: 'Covid 19 (2021)',
  //   description:
  //     'Track corona virus cases worldwide , with real time updates every 10 mins , used disease.sh service (third party api) for fetching data . Implemented fusion charts and leaflet map for displaying data. ',
  //   stack: 'React, Fusion charts, Leaflet, Disease.sh Api',
  //   documentation: '',
  //   url: 'https://covid-19-a596b.web.app/',
  // },
]
