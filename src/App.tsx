import { FC, Suspense } from 'react'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage'
import MainPage from './pages/MainPage/MainPage'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <BrowserRouter>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
