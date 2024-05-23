import { createBrowserRouter } from 'react-router-dom'
import IssueWritePage from './pages/IssueWritePage'
import ROUTE_PATH from './shared/constants/path'
import React from 'react'
import Layout from './shared/components/Layout/Layout'
import NewsSearchPage from './pages/NewsSearchPage'

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <Layout />,
    children: [
      {
        path: ROUTE_PATH.ISSUE_WRITE,
        element: <IssueWritePage />,
      },
      {
        path: ROUTE_PATH.ISSUE_SEARCH,
        element: <NewsSearchPage />,
      },
    ],
  },
])

export default router
