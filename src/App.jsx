import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppProvider, useGlobalContext } from './context'
import HomeLayout from './Components/HomeLayout'
import Hero from './Components/Hero'
import UserInfo from './Components/UserInfo'
import RecentWork from './Components/RecentWork'
import Companies from './Components/Companies'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <UserInfo />
            <RecentWork />
            <Companies />
            <Footer />
          </>
        ),
      },

      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

function App() {
  const { isSmallScreen, setIsSmallScreen, setShowMenu } = useGlobalContext()

  // RESET MENU STATE ON BIGGER SCREEN
  useEffect(() => {
    if (isSmallScreen) {
      setShowMenu(false)
    }
  }, [isSmallScreen])

  // RE-SIZE EVENT
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 951)
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
