import "./assets/css/main.css"

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import { PageError } from "./screens/404"
import { Layout } from "./components/Layout"

import { Home } from './screens/Home'
import { Logement } from "./screens/Logement"
import { About } from "./screens/About"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'logement/:id',
        element: <Logement />
      },
      {
        path: '*',
        element: <PageError/>
      }
    ]
  }
]);

//TODO METTRE SLIDER EN COMPONENT

function App() {
  return <RouterProvider router={router}/>;
}

export default App
