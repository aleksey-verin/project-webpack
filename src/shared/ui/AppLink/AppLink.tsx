import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { NavLinkProps } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends NavLinkProps {
  className?: string
  children: ReactNode
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, {}, [className, isActive ? cls.active : null, cls[theme]])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  )
}
