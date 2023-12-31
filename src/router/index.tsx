import React from 'react'
import { Outlet } from 'react-router-dom'
import { PageHome, PageError404, PageProduct } from 'screens/index'
import { Header, Footer } from 'organisms'

function ViewWithHeaderAndFooter() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default function routes() {
  return [
    {
      path: '/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '/',
          element: <PageHome />,
        },
        {
          path: '/product',
          element: <PageProduct />,
        },
        {
          path: '*',
          element: <PageError404 />,
        },
      ],
    },
  ]
}
