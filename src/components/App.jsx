import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import { Layout, Main, Content } from 'cozy-ui/react/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGlobe,
  faAddressCard,
  faEnvelope,
  faDollarSign,
  faDesktop,
  faMobileAlt,
  faFolder,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

import Sidebar from './Sidebar/Sidebar'
import Home from './Home'
import Category from './Categories/Category'
import Password from './Password/Password'

library.add(
  faGlobe,
  faAddressCard,
  faEnvelope,
  faDollarSign,
  faDesktop,
  faMobileAlt,
  faFolder,
  faPlus
)

const App = () => (
  <HashRouter>
    <Layout>
      <Sidebar />
      <Main>
        <Content className="app-content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/category/:id" component={Category} />
            <Route path="/password/:id" component={Password} />
            <Redirect from="/" to="/home" />
            <Redirect from="*" to="/home" />
          </Switch>
        </Content>
      </Main>
    </Layout>
  </HashRouter>
)

/*
  Enable Hot Module Reload using `react-hot-loader` here
  We enable it here since App is the main root component
  No need to use it anywhere else, it sould work for all
  child components
*/
export default hot(module)(App)
