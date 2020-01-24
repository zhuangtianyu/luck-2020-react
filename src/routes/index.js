import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import RouterView from '../components/router-view'
import IntroView from "../views/intro"
import HomeView from '../views/home'

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={ null }>
      <Component { ...props } />
    </Suspense>
  )
}

const ArticleListView = lazy(() => import('../views/article-list'))
const ArticleDetailView = lazy(() => import('../views/article-detail'))

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
            path: '/home/article/detail',
            component: SuspenseComponent(ArticleDetailView)
          }
        ]
      }
    ]
  }
]

