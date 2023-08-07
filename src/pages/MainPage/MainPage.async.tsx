import { lazy } from 'react'

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Для теста загрузки компонента
      setTimeout(() => resolve(import('./MainPage')), 1000)
    })
)
