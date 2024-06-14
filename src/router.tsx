import { createBrowserRouter } from 'react-router-dom'
import IssueWritePage from './pages/IssueWritePage'
import ROUTE_PATH from './shared/constants/path'
import React from 'react'
import Layout from './shared/components/Layout/Layout'
import NewsSearchPage from './pages/NewsSearchPage'
import IssuePostingPage from './pages/IssuePostingPage'
import IssueKeywordsPage from './pages/IssueKeywordPage'

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
      {
        path: ROUTE_PATH.ISSUE_POSTING,
        element: <IssuePostingPage />,
      },
      {
        path: ROUTE_PATH.ISSUE_KEYWORD,
        element: <IssueKeywordsPage />,
      },
    ],
  },
])

export default router
