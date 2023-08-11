import { lazy } from 'react'

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Для теста загрузки компонента
      setTimeout(() => resolve(import('./AboutPage')), 1000)
    })
)
