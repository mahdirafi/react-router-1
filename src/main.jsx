import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Mobile from './Components/Mobile/Mobile.jsx'
import Users from './Components/Users/Users.jsx'
import Users2 from './Components/Users/Users2.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetails from './Components/PostsDetails/PostDetails.jsx'

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json());
  

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index:true, Component: Home},
      {path:"Mobile", Component: Mobile},
      {
        path: "Users", 
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "Users2",
        element: <Suspense fallback= { <span> loading...</span>}>
            <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      }, 
      {
        path:'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts/'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
        Component: PostDetails
      },
      // {
      //   path: '*',
      //   element: <h2 className='text-center text-4xl font-bold'>Not Found: 404 Status</h2>
      // }
    ],
  },
  {
    path: 'about',
    element: <div><h3>Welcome to my About section</h3></div>
  }
  ,
  {
    path: 'Service',
    element: <div><h3>Welcome to my Service section</h3></div>
  },
  {
    path: 'app',
    Component: App
  },
   {
        path: '*',
        element: <h2 className='text-center text-4xl font-bold mt-66'>Not Found Page:  404 Status</h2>
      }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
