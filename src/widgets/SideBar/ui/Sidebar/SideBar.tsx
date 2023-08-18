import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface SideBarProps {
  className?: string
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* LangSwitcher */}
      </div>
      <div className={cls.collapsedSwitcher}>
        <button onClick={onToggle}>Toggle</button>
      </div>
    </div>
  )
}
