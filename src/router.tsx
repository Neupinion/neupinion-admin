import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import IssueWritePage from './pages/IssueWritePage'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainPage />, // MainPage 를 루트로 설정
    children: [
      // MainPage의 자식 라우트
      { path: 'home', element: <MainPage /> },
      { path: 'issue', element: <IssueWritePage /> },
      { path: 'issue-list', element: <MainPage /> },
    ],
  },
])

export default router
