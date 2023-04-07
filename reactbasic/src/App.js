import React, { Fragment } from 'react'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import SinglePages from "./components/singlePages/Singlepages"

import { publicRoutes } from './components/routes/route'
import DefaultLayout from './components/DefaultLayout/DefaultLayout'



const App = () => {
  return (

    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          }
          )}
        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App