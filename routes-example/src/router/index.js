import Welcome from 'pages'
import Home from 'pages/home'
import About from 'pages/about'
import Profile from 'pages/profile'
import Users from 'pages/users'
import User from 'pages/users/_id'

export default [
  {
    path: '/',
    component: Welcome,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/users',
    component: Users,
    exact: true,
  },
  {
    path: '/users/:id',
    component: User,
    exact: true,
  }
]