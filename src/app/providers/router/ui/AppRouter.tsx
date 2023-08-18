import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { FC, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = ({}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route path={path} key={path} element={<div className='page-wrapper'>{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
