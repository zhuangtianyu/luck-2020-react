import React from 'react'
import { Redirect } from 'react-router-dom'
import RouterView from '../components/router-view'
import IntroView from "../views/intro"
import HomeView from '../views/home'
import ArticleListView from '../views/article-list'
import ArticleDetailView from '../views/article-detail'
import ArticleEditView from '../views/article-edit'
import ResumeView from '../views/resume'
import UploadView from '../views/upload'
import ComponentsView from '../views/components'

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
            component: ArticleListView
          },
          {
            path: '/home/article/detail/:id',
            component: ArticleDetailView
          },
          {
            path: '/home/article/edit',
            exact: true,
            component: ArticleEditView
          },
          {
            path: '/home/article/edit/:id',
            component: ArticleEditView
          }
        ]
      },
      {
        path: '/home/resume',
        component: ResumeView
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
    render: () => <Redirect to={ '/home/article/detail/1000' } />
  },
  {
    path: '/components',
    component: ComponentsView,
  }
]


