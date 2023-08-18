import { FC } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { SideBar } from 'widgets/SideBar'

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <SideBar />
        <AppRouter />
        {/* <div>Main Page</div> */}
      </div>
    </div>
  )
}

export default App
