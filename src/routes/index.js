import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import RouterView from '../components/router-view'
import IntroView from "../views/intro"
import HomeView from '../views/home'
import UploadView from '../views/upload'

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={ null }>
      <Component { ...props } />
    </Suspense>
  )
}

const ArticleListView = lazy(() => import('../views/article-list'))
const ArticleDetailView = lazy(() => import('../views/article-detail'))
const ArticleEditView = lazy(() => import('../views/article-edit'))
const ResumeView = lazy(() => import('../views/resume'))

export default [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to={ '/intro' } />
  },
  {
    path: '/intro',
    component: IntroView,
  },
  {
    path: '/home',
    component: HomeView,
    routes: [
      {
        path: '/home',
        exact: true,
        render: () => <Redirect to={ '/home/article' } />
      },
      {
        path: '/home/article',
        component: RouterView,
        routes: [
          {
            path: '/home/article',
            exact: true,
            render: () => <Redirect to={ '/home/article/list' } />
          },
          {
            path: '/home/article/list',
            component: SuspenseComponent(ArticleListView)
          },
          {
            path: '/home/article/detail/:id',
            component: SuspenseComponent(ArticleDetailView)
          },
          {
            path: '/home/article/edit',
            component: SuspenseComponent(ArticleEditView)
          }
        ]
      },
      {
        path: '/home/resume',
        component: SuspenseComponent(ResumeView)
      }
    ]
  },
  {
    path: '/upload',
    component: UploadView,
  },
  // 兼容 web2019 分享到朋友圈后的地址 (无法修改), 进行重定向
  {
    path: '/article/38',
    render: () => <Redirect to={ '/home/article/detail/38' } />
  }
]

