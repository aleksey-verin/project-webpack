import { FC } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'}>Main</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
    </div>
  )
}
